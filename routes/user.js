var mongoose = require( 'mongoose' );
var User = require('../models/user');
var jwt = require('jsonwebtoken'); 
var config = require('../config');

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
     const usertype = req.body.usertype;

     if (!name || !email || !contactno || !bankaccno || !bankname || !username || !password|| !usertype) {
         return res.status(422).json({ success: false, message: 'Posted data is not correct or incomplete.'});
     }
 
     User.findOne({ username: username }, function(err, existingUser) {
         if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err}); }
 
         // If user is not unique, return error
         if (existingUser) {
             return res.status(201).json({
                 success: false,
                 message: 'Username already exists.'
             });
         }
        // If no error, create account

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
                ccvno: null
            });
        
        oUser.save(function(err, oUser) {
            if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err}); }
        
            res.status(201).json({
                success: true,
                name: name + ' (' + username + ')',
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
	var token = req.body.token || req.query.token || req.headers['authorization'];
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
    User.find({_id:req.params.id}).exec(function(err, user){
        if(err){ res.status(400).json({ success: false, message: 'Error processing request '+ err}); }
        res.status(201).json({
		success: true, 
		data: user });
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

    if (!newemail || !userid) {
        return res.status(422).json({ success: false, message: 'Posted data is not correct or incompleted.'});
    } else {
        
	User.findOne({ _id: userid }, function(err, user) {
            if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err}); }
            if (user) {                        
                user.email = newemail;
                user.verified_email = 'N';
                user.save(function(err) {
                    if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err}); }

                    res.status(201).json({
                        success: true,
                        message: 'Email updated successfully. Please verify your email.'
                    });
                });               
            }
        });
    }

}