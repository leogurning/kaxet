var mongoose = require( 'mongoose' );
var User = require('../models/user');
var jwt = require('jsonwebtoken'); 
var config = require('../config');
var crypto = require('crypto');
var rediscli = require('../redisconn');

exports.signup = function(req, res, next){
    // Check for registration errors
    const name = req.body.name;
    const email = req.body.email;
    const contactno = req.body.contactno;
    const bankaccno = req.body.bankaccno;
    const bankcode = req.body.bankcode;
    const bankname = req.body.bankname;
    const username = req.body.username;
    const password = req.body.password;
    const usertype = 'LBL';
    var rand,randhash,link;

     if (!name || !email || !contactno || !bankaccno || !bankname || !username || !password|| !usertype) {
         return res.status(422).json({ success: false, message: 'Posted data is not correct or incomplete.'});
     }
 
     User.findOne({ $or:[{username:username},{email:email}] }, function(err, existingUser) {
         if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err}); }
 
         // If user is not unique, return error
         if (existingUser) {
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
			res.status(201).json({ success: false, message: 'Incorrect login credentials.' });
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
                        res.status(201).json({ success: false, message: 'Incorrect login credentials.' });
                    }
                });	
    
            } else {
                //console.log('This not active condition.');
                res.status(201).json({ success: false, message: 'Incorrect user account. User is not active yet.' });
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
    const bankcode = req.body.bankcode;
    const bankname = req.body.bankname;
    const userid = req.params.id;

    if (!name || !contactno || !bankaccno || !bankname || !userid) {
        return res.status(422).json({ success: false, message: 'Posted data is not correct or incompleted.'});
    } else {
	User.findById(userid).exec(function(err, user){
		if(err){ res.status(400).json({ success: false, message: 'Error processing request '+ err }); }
			
		if(user){
			user.name = name;
            user.contactno = contactno;
            user.bankaccno = bankaccno;
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
    var rand,randhash;
    if (!newemail || !userid) {
        return res.status(422).json({ success: false, message: 'Posted data is not correct or incompleted.'});
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

                    res.status(201).json({
                        success: true,
                        message: 'Email updated successfully. Please verify your email.'
                    });
                    //Delete redis respective keys
                    rediscli.del('redis-user-'+userid);                
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
 
     User.findOne({ username: username }, function(err, existingUser) {
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

     if (!email ) {
         return res.status(422).json({ success: false, message: 'Posted data is not correct or incomplete.'});
     }
 
     User.findOne({ email: email }, function(err, existingUser) {
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
            res.status(201).json({ success: false, message:'Error in Finding user data. There is no user account linked to the email input.'});
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
                user.vhash = '';
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

function getProtocol (req) {
    var proto = req.connection.encrypted ? 'https' : 'http';
    // only do this if you trust the proxy
    proto = req.headers['x-forwarded-proto'] || proto;
    return proto.split(/\s*,\s*/)[0];
}