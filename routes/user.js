var mongoose = require( 'mongoose' );
var User = require('../models/user');
var jwt = require('jsonwebtoken'); 
var config = require('../config');
var crypto = require('crypto');
var rediscli = require('../redisconn');
const fetch = require('node-fetch');
//var amqpConn = require('../rabbitmqconn');
var amqpConn = null;
var amqp = require('amqplib/callback_api');

startpubRMQuser();

exports.signup = function(req, res, next){
    // Check for registration errors
    const name = req.body.name;
    const email = req.body.email;
    const contactno = req.body.contactno;
    const bankaccno = req.body.bankaccno;
    const bankaccname = req.body.bankaccname;
    const bankcode = req.body.bankcode;
    const bankname = req.body.bankname;
    const username = req.body.username;
    const password = req.body.password;
    const usertype = 'LBL';
    var rand,randhash,link;

     if (!name || !email || !contactno || !bankaccno || !bankaccname || !bankname || !username || !password|| !usertype) {
         return res.status(422).json({ success: false, message: 'Posted data is not correct or incomplete.'});
     }
 
     User.findOne({ $or:[{username:username},{email:email}], usertype: usertype }, function(err, existingUser) {
         if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err}); }
 
         // If user is not unique, return error
         if (existingUser && existingUser.status != 'STSRJCT') {
             return res.status(201).json({
                 success: false,
                 message: 'Username OR Email address already exists.'
             });
         }
        // If no error, create account
        rand=Math.floor((Math.random() * 5455588811110019777546) + (Math.random() * 5455588822220019777546));
        randhash = crypto.createHmac('sha256', config.secret).update('randomNo:'+rand.toString()).digest('hex');
        link= getProtocol(req)+"://"+req.get('host')+"/verify?id="+randhash;

        let oUser = new User({
                name: name,
                email: email,
                contactno: contactno,
                bankaccno: bankaccno,
                bankaccname: bankaccname,
                bankcode: bankcode,
                bankname: bankname,
                username: username,
                password: password,
                usertype: usertype,
                status: 'STSPEND',
                balance: 0,
                balance_idx:0,
                verified_no:'N',
                verified_email:'N',
                pmtmethod: null,
                ccno: null,
                ccholdername: null,
                ccissuerbank: null,
                expmth: null,
                expyr: null,
                ccvno: null,
                vhash: randhash
            });
        
        oUser.save(function(err, oUser) {
            if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err}); }
        
            res.status(201).json({
                success: true,
                name: name + ' (' + username + ')',
                vlink: link,
                message: 'Label User created successfully with status:PENDING APPROVAL'
            });
        });
    });
}

exports.login = function(req, res, next){
    // find the user
    User.findOne({ username: req.body.username }, function(err, user) {
		if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err}); }

		if (!user) {
			res.status(201).json({ success: false, message: 'Incorrect login credentials. USER does not exist !' });
		}else if (user) {
            if (user.status == 'STSACT') {
                user.comparePassword(req.body.password, function (err, isMatch) {
                    if (isMatch && !err) {
                        var token = jwt.sign({data:user}, config.secret, {
                            expiresIn: config.tokenexp});
                        
                        let last_login = user.lastlogin;
                        
                        // login success update last login
                        user.lastlogin = new Date();
                    
                        
                        user.save(function(err) {
                            if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err}); }
    
                            res.status(201).json({
                                success: true,
                                message: {'userid': user._id, 'username': user.username, 'name': user.name, 'usertype': user.usertype, 'balance': user.balance, 'email': user.email, 'verified_email': user.verified_email, 'lastlogin': last_login},
                                token: token
                            });
                        });
                    } else {
                        res.status(201).json({ success: false, message: 'Incorrect login credentials. Invalid password !' });
                    }
                });	
    
            } else if (user.status == 'STSPEND') {
                //console.log('This not active condition.');
                if (user.verified_email === 'Y') {
                    res.status(201).json({ success: false, message: 'User is NOT active yet. Waiting for activation by system admin.' });
                } else {
                    res.status(201).json({ success: false, message: 'User is NOT active yet. Waiting for YOUR email confirmation and then system admin activation.' });                 
                }
            } else if (user.status == 'STSINACT') {
                res.status(201).json({ success: false, message: 'User is in SUSPEND / NOT ACTIVE status. Please contact our System Admin.' });
            } else {
                res.status(201).json({ success: false, message: 'Incorrect login credentials. USER does not exist OR rejected !' });
            }
        }
	});
}

exports.authenticate = function(req, res, next){
    // check header or url parameters or post parameters for token
    //var token = req.body.token || req.query.token || req.headers['authorization'];
    var token = req.headers['authorization'];
    //console.log(token);
	if (token) {
		jwt.verify(token, config.secret, function(err, decoded) {			
			if (err) {
				return res.status(201).json({ success: false, message: 'Authenticate token expired, please login again.', errcode: 'exp-token' });
			} else {
				req.decoded = decoded;	
				next();
			}
		});
	} else {
		return res.status(201).json({ 
			success: false, 
			message: 'Fatal error, Authenticate token not available.',
            		errcode: 'no-token'
		});
	}
}

exports.getuserDetails = function(req, res, next){
    const userid = req.params.id;
    let keyredis = 'redis-user-'+userid;
    rediscli.get(keyredis, function(error,obj) { 
        if (obj) {
            //console.log('key on redis...');
            res.status(201).json({
                success: true, 
                data: JSON.parse(obj)
            });         
        } else {
            User.find({_id:userid}).exec(function(err, user){
                if(err){ res.status(400).json({ success: false, message: 'Error processing request '+ err}); }
                res.status(201).json({
                    success: true, 
                    data: user 
                });
                //set in redis
                rediscli.set(keyredis,JSON.stringify(user), function(error) {
                    if (error) { throw error; }
                });                    
            });
        }
    });
}

exports.updateUser = function(req, res, next){
    const name = req.body.name;
    const contactno = req.body.contactno;
    const bankaccno = req.body.bankaccno;
    const bankaccname = req.body.bankaccname;
    const bankcode = req.body.bankcode;
    const bankname = req.body.bankname;
    const userid = req.params.id;

    if (!name || !contactno || !bankaccno || !bankaccname || !bankname || !userid) {
        return res.status(422).json({ success: false, message: 'Posted data is not correct or incompleted.'});
    } else {
	User.findById(userid).exec(function(err, user){
		if(err){ res.status(400).json({ success: false, message: 'Error processing request '+ err }); }
			
		if(user){
			user.name = name;
            user.contactno = contactno;
            user.bankaccno = bankaccno;
            user.bankaccname = bankaccname;
            user.bankcode = bankcode;
            user.bankname = bankname;
		}
		user.save(function(err){
			if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err }); }
			res.status(201).json({
				success: true,
				message: 'User details updated successfully'
            });
            //Delete redis respective keys
            rediscli.del('redis-user-'+userid);                
		});
	});
   }
}

exports.updatePassword = function(req, res, next){
    const userid = req.params.id;
    const oldpassword = req.body.oldpassword;
    const password = req.body.password;

    if (!oldpassword || !password || !userid) {
        return res.status(422).json({ success: false, message: 'Posted data is not correct or incompleted.'});
    } else {
        
	User.findOne({ _id: userid }, function(err, user) {
            if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err}); }
            if (user) {
                user.comparePassword(oldpassword, function (err, isMatch) {
                    if (isMatch && !err) {
                        
                        user.password = password;

                        user.save(function(err) {
                            if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err}); }

                            res.status(201).json({
                                success: true,
                                message: 'Password updated successfully'
                            });
                        });
                    } else {
                        res.status(201).json({ success: false, message: 'Incorrect old password.' });
                    }
                });	
            }
        });
    }
}

exports.updateEmail = function(req, res, next){
    const userid = req.params.id;
    const newemail = req.body.email;
    const usertype = req.body.usertype;
    var rand,randhash;
    if (!newemail || !userid) {
        return res.status(422).json({ success: false, message: 'Posted data is not correct or incompleted.'});
    } else {
        User.findOne({ email: newemail, status:{ $ne: 'STSRJCT' }, usertype: usertype}, function(err, existingUser) {
            if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err}); }
            if (existingUser) {
                res.status(201).json({ success: false, message:'Error in Updating user email. The new email address has been used/linked to another user account.'});
            } else {
                User.findOne({ _id: userid }, function(err, user) {
                    if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err}); }
                    if (user) {
                        rand=Math.floor((Math.random() * 5455588811110019777546) + (Math.random() * 5455588822220019777546));
                        randhash = crypto.createHmac('sha256', config.secret).update('randomNo:'+rand.toString()).digest('hex');
        
                        user.email = newemail;
                        user.verified_email = 'N';
                        user.vhash = randhash;
                        user.save(function(err) {
                            if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err}); }
        
                            res.status(200).json({
                                success: true,
                                message: 'Email updated successfully. Please verify your email.'
                            });
                            //Delete redis respective keys
                            rediscli.del('redis-user-'+userid);                
                        });               
                    }
                });
            }
        });    
    }
}

exports.emailverification = function(req, res, next){
    // Check for registration errors
    const name = req.body.name;
    const email = req.body.email;
    const username = req.body.username;
    var rand,randhash,link;

     if (!name || !email || !username ) {
         return res.status(422).json({ success: false, message: 'Posted data is not correct or incomplete.'});
     }
 
     User.findOne({ username: username, status:'STSACT' }, function(err, existingUser) {
         if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err}); }
 
         if (existingUser) {
            
            if (existingUser.vhash) {
                randhash = existingUser.vhash;
                link= getProtocol(req)+"://"+req.get('host')+"/verify?id="+randhash+"&post=Y";
                
                return res.status(200).json({
                    success: true,
                    name: name + ' (' + username + ')',
                    vlink: link,
                    message: 'Email Verification has been sent to ' + email
                });
            } else {
                rand=Math.floor((Math.random() * 5455588811110019777546) + (Math.random() * 5455588822220019777546));
                randhash = crypto.createHmac('sha256', config.secret).update('randomNo:'+rand.toString()).digest('hex');

                existingUser.vhash = randhash;
                existingUser.save(function(err) {
                    if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err}); }

                    link= getProtocol(req)+"://"+req.get('host')+"/verify?id="+randhash+"&post=Y";
                    res.status(200).json({
                        success: true,
                        name: name + ' (' + username + ')',
                        vlink: link,
                        message: 'Email Verification has been sent to ' + email
                    });
                });               
            }
        } else {
            res.status(201).json({ success: false, message:'Error in Finding user data.'});
        }
    });
}

exports.resetpassword = function(req, res, next){
    // Check for registration errors
    const email = req.body.email;
    var rand,randhash,link;
    //const usertype = 'LBL';
    const usertype = req.body.usertype;
     if (!email ) {
         return res.status(422).json({ success: false, message: 'Posted data is not correct or incomplete.'});
     }
 
     User.findOne({ email: email, status:'STSACT', usertype: usertype }, function(err, existingUser) {
         if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err}); }
 
         if (existingUser) {
            if (existingUser.status === 'STSACT') {
                if (existingUser.vhash) {
                    randhash = existingUser.vhash;
                    link= getProtocol(req)+"://"+req.get('host')+"/resetpassword?id="+randhash;
                    
                    return res.status(200).json({
                        success: true,
                        vlink: link,
                        message: 'Email has been sent to ' + email + '. Please access your email to reset the password.'
                    });
                } else {
                    rand=Math.floor((Math.random() * 5455588811110019777546) + (Math.random() * 5455588822220019777546));
                    randhash = crypto.createHmac('sha256', config.secret).update('randomNo:'+rand.toString()).digest('hex');
    
                    existingUser.vhash = randhash;
                    existingUser.save(function(err) {
                        if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err}); }
    
                        link= getProtocol(req)+"://"+req.get('host')+"/resetpassword?id="+randhash;
                        res.status(200).json({
                            success: true,
                            vlink: link,
                            message: 'Email has been sent to ' + email + '. Please access your email to reset the password.'
                        });
                    });               
                }
            } else {
                res.status(201).json({ success: false, message:'Process Error. The account linked to the email is NOT ACTIVE account.'});
            }

        } else {
            res.status(201).json({ success: false, message:'Error in Finding user data. There is no active user account linked to the email input.'});
        }
    });
}

exports.doresetpassword = function(req, res, next){
    const hash = req.body.hash;
    const password = req.body.password;
    
    // find the user
    User.findOne({ vhash: hash }, function(err, user) {
        if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err}); }

        if (!user) {
            res.status(201).json({ success: false, message: 'UNAuthorised ! Incorrect hash value provided.' });
        }else if (user) {
            if (user.status == 'STSACT') {
                // login success update last login
                user.password = password;
                //user.vhash = '';
                user.save(function(err) {
                    if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err}); }

                    res.status(200).json({
                        success: true,
                        message: 'Password reset successfully'
                    });
                });
            } else {
                //console.log('This not active condition.');
                res.status(201).json({ success: false, message: 'Process STOP. User account is NOT ACTIVE.' });
            }
        }
    });

}

exports.doupdatehash = function(req, res, next){
    const hash = req.params.id;
    
    // find the user
    User.findOne({ vhash: hash }, function(err, user) {
        if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err}); }

        if (!user) {
            res.status(201).json({ success: false, message: 'UNAuthorised ! Incorrect hash value provided.' });
        }else if (user) {
            if (user.status == 'STSACT') {
                // login success update last login
                user.vhash = '';
                user.save(function(err) {
                    if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err}); }

                    res.status(200).json({
                        success: true,
                        message: 'Reset password completed successfully'
                    });
                });
            } else {
                //console.log('This not active condition.');
                res.status(201).json({ success: false, message: 'Process STOP. User account is NOT ACTIVE.' });
            }
        }
    });

}

function getProtocol (req) {
    var proto = req.connection.encrypted ? 'https' : 'http';
    // only do this if you trust the proxy
    proto = req.headers['x-forwarded-proto'] || proto;
    return proto.split(/\s*,\s*/)[0];
}

exports.pubregisterlabel = function(req, res, next){
    // Check for registration errors
    const name = req.body.name;
    const email = req.body.email;
    const contactno = req.body.contactno;
    const bankaccno = req.body.bankaccno;
    const bankaccname = req.body.bankaccname;
    const bankcode = req.body.bankcode;
    const bankname = req.body.bankname;
    const username = req.body.username;
    const password = req.body.password;
    const usertype = 'LBL';
    var rand,randhash,link;

    const q = 'registerlabelQueue';

    if (!name || !email || !contactno || !bankaccno || !bankaccname || !bankname || !username || !password|| !usertype) {
        return res.status(422).json({ success: false, message: 'Posted data is not correct or incomplete.'});
    }
    console.log(username);
    //User.findOne({ $or:[{username:username},{email:email.toLowerCase()}], usertype: usertype }, function(err, existingUser) {
    User.findOne({ username: username }, function(err, existingUser) {
        if(err){ return res.status(400).json({ success: false, message:'Error processing request '+ err}); }

        // If user is not unique, return error
        if (existingUser && existingUser.status != 'STSRJCT') {
            console.log(username);
            return res.status(201).json({
                success: false,
                message: 'Username already exists.'
            });
        }
        User.findOne({ $and:[{email:email.toLowerCase()}, {usertype: usertype}] }, function(err, eUser) {
            if(err){ return res.status(400).json({ success: false, message:'Error processing request '+ err}); }
                    // If user is not unique, return error
            if (eUser && eUser.status != 'STSRJCT') {
                return res.status(201).json({
                    success: false,
                    message: 'Email address is already linked to another label user.'
                });
            }
            rand=Math.floor((Math.random() * 5455588811110019777546) + (Math.random() * 5455588822220019777546));
            randhash = crypto.createHmac('sha256', config.secret).update('randomNo:'+rand.toString()).digest('hex');
            link= getProtocol(req)+"://"+req.get('host')+"/verify?id="+randhash;
    
            var objbody = req.body;
            var objlink = {link: link};
            var objhash = { randhash: randhash }
            var objmsg = Object.assign(objbody,objlink,objhash);
            var msg = JSON.stringify(objmsg);
            //ch.assertExchange(exchange, 'direct', {durable: false})
            //ch.sendToQueue(q, new Buffer(msg), {persistent: false})
            try {
                registerLabelpublish('', q, new Buffer(msg));
                res.status(200).json({
                    success: true,
                    name: name + ' (' + username + ')',
                    message: 'Label User created successfully with status:PENDING APPROVAL'
                });
            } catch (e) {
                console.error("[AMQP USER] register Label publish", e.message);
                res.status(201).json({
                    success: false,
                    message: "[AMQP USER] error register Label publish. " + e.message
                });
            }
            //ch.bindQueue(q, exchange, 'registerlabel');
        });
    });
}

exports.pubresetpassword = function(req, res, next){
    // Check for registration errors
    const email = req.body.email;
    //const usertype = 'LBL';
    const usertype = req.body.usertype;
    var rand,randhash,link;
    const q = 'resetpasswdQueue';

     if (!email ) {
         return res.status(422).json({ success: false, message: 'Posted data is not correct or incomplete.'});
     }
 
     User.findOne({ email: email.toLowerCase(), status:'STSACT', usertype: usertype }, function(err, existingUser) {
         if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err}); }
 
         if (existingUser) {
            if (existingUser.status === 'STSACT') {
                if (existingUser.vhash) {
                    randhash = existingUser.vhash;
                } else {
                    rand=Math.floor((Math.random() * 5455588811110019777546) + (Math.random() * 5455588822220019777546));
                    randhash = crypto.createHmac('sha256', config.secret).update('randomNo:'+rand.toString()).digest('hex');
                }
                link= getProtocol(req)+"://"+req.get('host')+"/resetpassword?id="+randhash;    
                //Add to the queue
                var objbody = req.body;
                var objlink = {link: link};
                var objhash = { randhash: randhash }
                var objmsg = Object.assign(objbody,objlink,objhash);
                var msg = JSON.stringify(objmsg);
                //ch.assertExchange(exchange, 'direct', {durable: false})
                //ch.sendToQueue(q, new Buffer(msg), {persistent: false})
                try {
                    resetPasswdpublish('',q, new Buffer(msg));
                    res.status(200).json({
                        success: true,
                        message: 'System has received your request to reset password. Please access and check your email: ' + email + ' to reset the password.'
                    });            
                } catch (e) {
                    console.error("[AMQP USER] reset Passwd publish", e.message);
                    res.status(201).json({
                        success: false,
                        message: "[AMQP USER] error reset Passwd publish. " + e.message
                    });
                }
                //ch.bindQueue(q, exchange, 'registerlabel');
            } else {
                res.status(201).json({ success: false, message:'Process Error. The account linked to the email is NOT ACTIVE account.'});
            }

        } else {
            res.status(201).json({ success: false, message:'Error in Finding user data. There is no active user account linked to the email input.'});
        }
    });
}

exports.pubchangelabelstatus = function(req, res, next){
    // Check for registration errors
    const adminid = req.params.id;
    const labelid = req.body.labelid;
    const status = req.body.status;
    const emailto = req.body.emailto;
    const vlink = req.body.vlink;
    const username = req.body.username;
    
    const q = 'updatelabelstatusQueue';

     if (!status ) {
         return res.status(422).json({ success: false, message: 'Posted data is not correct or incomplete.'});
     }        
    //Add to the queue
    var objbody = req.body;
    var objadminid = {adminid: adminid};
    var objmsg = Object.assign(objbody,objadminid);
    var msg = JSON.stringify(objmsg);
    //ch.assertExchange(exchange, 'direct', {durable: false})
    //ch.sendToQueue(q, new Buffer(msg), {persistent: false})
    try {
        updatelabelstatuspublish('',q, new Buffer(msg));
        res.status(200).json({
            success: true,
            message: 'System has received your request to update label status.'
        });            
    } catch (e) {
        console.error("[AMQP USER] update label status publish", e.message);
        res.status(201).json({
            success: false,
            message: "[AMQP USER] error update label status publish. " + e.message
        });
    }     
}

exports.pubemailverification = function(req, res, next){
    // assign request params
    const userid = req.body.userid;
    const name = req.body.name;
    const email = req.body.email;
    const username = req.body.username;
    var rand,randhash,link;

    const q = 'emailverificationQueue';

    if (!name || !email || !username ) {
        return res.status(422).json({ success: false, message: 'Posted data is not correct or incomplete.'});
    }
    User.findOne({ username: username, status:'STSACT' }, function(err, existingUser) {
        if(err){ return res.status(400).json({ success: false, message:'Error processing request '+ err}); }

        if (existingUser) {
           
           if (existingUser.vhash) {
               randhash = existingUser.vhash;
           } else {
               rand=Math.floor((Math.random() * 5455588811110019777546) + (Math.random() * 5455588822220019777546));
               randhash = crypto.createHmac('sha256', config.secret).update('randomNo:'+rand.toString()).digest('hex');
           }
           link= getProtocol(req)+"://"+req.get('host')+"/verify?id="+randhash+"&post=Y";
            //Add to the queue
            var objbody = req.body;
            var objlink = {link: link};
            var objhash = { randhash: randhash }
            var objmsg = Object.assign(objbody,objlink,objhash);
            var msg = JSON.stringify(objmsg);
            //ch.assertExchange(exchange, 'direct', {durable: false})
            //ch.sendToQueue(q, new Buffer(msg), {persistent: false})
            try {
                emailVerificationpublish('',q, new Buffer(msg));
                res.status(200).json({
                    success: true,
                    message: 'System has received your request to send email verification. Please access and check your email: ' + email + ' to do verification.'
                });            
            } catch (e) {
                console.error("[AMQP USER] email verification publish", e.message);
                res.status(201).json({
                    success: false,
                    message: "[AMQP USER] error email verification publish. " + e.message
                });
            }
       } else {
           return res.status(201).json({ success: false, message:'Error in Finding user data.'});
       }
    });
}
//Start RabbitMQ Connection for Consumers
function startpubRMQuser() {
    amqp.connect(config.amqpURL, function(err, conn) {
      if (err) {
        console.error("[AMQP USER]", err.message);
        return setTimeout(startpubRMQuser, 1000);
      }
      conn.on("error", function(err) {
        if (err.message !== "Connection closing") {
          console.error("[AMQP USER] conn error", err.message);
        }
      });
      conn.on("close", function() {
        console.error("[AMQP USER] reconnecting");
        return setTimeout(startpubRMQuser, 1000);
      });
      console.log("[AMQP USER] connected");
      amqpConn = conn;
      registerLabelPub('registerlabelQueue');
      resetpasswdPub('resetpasswdQueue');
      updatelabelstatusPub('updatelabelstatusQueue');
      emailVerificationPub('emailverificationQueue');
    });
}

var registerLabelpubChannel = null;
var registerLabelofflinePubQueue = [];
function registerLabelPub(q) {
  amqpConn.createConfirmChannel(function(err, ch) {
    if (closeOnErr(err)) return;
    ch.on("error", function(err) {
        console.error("[AMQP USER] register Label channel error", err.message);
    });
    ch.on("close", function() {
        console.log("[AMQP USER] register Label channel closed");
    });
    
    registerLabelpubChannel = ch;
    registerLabelpubChannel.assertQueue(q, {durable: false});
    
    while (true) {
        var m = registerLabelofflinePubQueue.shift();
        if (!m) break;
        registerLabelpublish(m[0], m[1], m[2]);
    }
  });
}

function registerLabelpublish(exchange, routingKey, content) {
    try {
        registerLabelpubChannel.publish(exchange, routingKey, content, { persistent: false },
        function(err, ok) {
          if (err) {
            console.error("[AMQP USER] register Label publish", err);
            registerLabelofflinePubQueue.push([exchange, routingKey, content]);
            registerLabelpubChannel.connection.close();
          }
          console.log("[AMQP USER] register Label publisher completed");
        }
      );
    } catch (e) {
      console.error("[AMQP USER] register Label publish", e.message);
      registerLabelofflinePubQueue.push([exchange, routingKey, content]);
    }
}

var resetPasswdpubChannel = null;
var resetPasswdofflinePubQueue = [];
function resetpasswdPub(q) {
  amqpConn.createConfirmChannel(function(err, ch) {
    if (closeOnErr(err)) return;
    ch.on("error", function(err) {
        console.error("[AMQP USER] reset Passwd channel error", err.message);
    });
    ch.on("close", function() {
        console.log("[AMQP USER] reset Passwd channel closed");
    });
    
    resetPasswdpubChannel = ch;
    resetPasswdpubChannel.assertQueue(q, {durable: false});
    
    while (true) {
        var m = resetPasswdofflinePubQueue.shift();
        if (!m) break;
        resetPasswdpublish(m[0], m[1], m[2]);
    }
  });
}

function resetPasswdpublish(exchange, routingKey, content) {
    try {
        resetPasswdpubChannel.publish(exchange, routingKey, content, { persistent: false },
        function(err, ok) {
          if (err) {
            console.error("[AMQP USER] reset Passwd publish", err);
            resetPasswdofflinePubQueue.push([exchange, routingKey, content]);
            resetPasswdpubChannel.connection.close();
          }
          console.log("[AMQP USER] reset Passwd publisher completed");
        }
      );
    } catch (e) {
      console.error("[AMQP USER] reset Passwd publish", e.message);
      resetPasswdofflinePubQueue.push([exchange, routingKey, content]);
    }
}

var updatelabelstatuspubChannel = null;
var updatelabelstatusofflinePubQueue = [];
function updatelabelstatusPub(q) {
  amqpConn.createConfirmChannel(function(err, ch) {
    if (closeOnErr(err)) return;
    ch.on("error", function(err) {
        console.error("[AMQP USER] update Label status channel error", err.message);
    });
    ch.on("close", function() {
        console.log("[AMQP USER] update Label status channel closed");
    });
    
    updatelabelstatuspubChannel = ch;
    updatelabelstatuspubChannel.assertQueue(q, {durable: false});
    
    while (true) {
        var m = updatelabelstatusofflinePubQueue.shift();
        if (!m) break;
        updatelabelstatuspublish(m[0], m[1], m[2]);
    }
  });
}

function updatelabelstatuspublish(exchange, routingKey, content) {
    try {
        updatelabelstatuspubChannel.publish(exchange, routingKey, content, { persistent: false },
        function(err, ok) {
          if (err) {
            console.error("[AMQP USER] update Label status publish", err);
            updatelabelstatusofflinePubQueue.push([exchange, routingKey, content]);
            updatelabelstatuspubChannel.connection.close();
          }
          console.log("[AMQP USER] update Label status publisher completed");
        }
      );
    } catch (e) {
      console.error("[AMQP USER] update Label status publish", e.message);
      updatelabelstatusofflinePubQueue.push([exchange, routingKey, content]);
    }
}

var emailVerificationpubChannel = null;
var emailVerificationofflinePubQueue = [];
function emailVerificationPub(q) {
  amqpConn.createConfirmChannel(function(err, ch) {
    if (closeOnErr(err)) return;
    ch.on("error", function(err) {
        console.error("[AMQP USER] email Verification channel error", err.message);
    });
    ch.on("close", function() {
        console.log("[AMQP USER] email Verification channel closed");
    });
    
    emailVerificationpubChannel = ch;
    emailVerificationpubChannel.assertQueue(q, {durable: false});
    
    while (true) {
        var m = emailVerificationofflinePubQueue.shift();
        if (!m) break;
        emailVerificationpublish(m[0], m[1], m[2]);
    }
  });
}

function emailVerificationpublish(exchange, routingKey, content) {
    try {
        emailVerificationpubChannel.publish(exchange, routingKey, content, { persistent: false },
        function(err, ok) {
          if (err) {
            console.error("[AMQP USER] email verification publish", err);
            emailVerificationofflinePubQueue.push([exchange, routingKey, content]);
            emailVerificationpubChannel.connection.close();
          }
          console.log("[AMQP USER] email verification publisher completed");
        }
      );
    } catch (e) {
      console.error("[AMQP USER] email verification publish", e.message);
      emailVerificationofflinePubQueue.push([exchange, routingKey, content]);
    }
}

function closeOnErr(err) {
    if (!err) return false;
    console.error("[AMQP USER] error", err);
    amqpConn.close();
    return true;
}