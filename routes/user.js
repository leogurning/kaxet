var mongoose = require( 'mongoose' );
var User = require('../models/user');
var jwt = require('jsonwebtoken'); 
var config = require('../config');

/* 
exports.flupload = function(req, res, next){
    var stats;
    const d = new Date();
    const ts = ("0" + d.getDate()).slice(-2) + ("0"+(d.getMonth()+1)).slice(-2) + 
                d.getFullYear() + ("0" + d.getHours()).slice(-2) + 
                ("0" + d.getMinutes()).slice(-2) + ("0" + d.getSeconds()).slice(-2);

    console.log(req.files);
    if(req.files.usrimage){
      var file = req.files.usrimage,
        oriname = file.name,
        name = ts+oriname.substr(oriname.length - 4),
        type = file.mimetype;
      //var uploadpath = __dirname + '/uploads/' + name;
      var uploadfile = uploadpath + name;
      var imgpath = 'assets/images/'+ name;
      file.mv(uploadfile,function(err){
        if(err){
          console.log("File Upload Failed",name,err);
          return res.status(401).json({ success: false, 
            message:'File Upload Failed.'
          });
        }
        else {
          console.log("File Uploaded",name);
          res.status(201).json({
            success: true,
            message: 'User image preview is uploaded.',
            filedata : {imgpath: imgpath,imgoriname: name}});
        }
      });
    }
    else {
      return res.status(402).json({ success: false, 
          message:'No File uploaded.',
          filedata : {imgpath: "",imgoriname: ""}
        });
      //res.end();
    };
}

exports.fldelete = function(req, res, next) {
    name = req.body.imgoriname;
    var deletepathfile = uploadpath + name;
    fs.unlink(deletepathfile, function(err){
        if(err){
            console.log("Delete File Failed",name,err);
            res.status(401).json({ success: false, 
              message:'File Upload Failed.'
            });
        }
        else {
        console.log("Delete File Success",name);
        res.status(201).json({
            success: true,
            message: 'Delete file successful.'});
        }
    });
}
*/

exports.signup = function(req, res, next){
    // Check for registration errors
     const name = req.body.name;
     const email = req.body.email;
     const contactno = req.body.contactno;
     const bankaccno = req.body.bankaccno;
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
                bankname: bankname,
                username: username,
                password: password,
                usertype: usertype,
                status: 'active',
                balance: 0
            });
        
        oUser.save(function(err, oUser) {
            if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err}); }
        
            res.status(201).json({
                success: true,
                message: 'User created successfully, please login to access your account.'
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
                            message: {'userid': user._id, 'username': user.username, 'name': user.name, 'usertype': user.usertype, 'balance': user.balance, 'lastlogin': last_login},
                            token: token
                        });
                    });
                } else {
                    res.status(201).json({ success: false, message: 'Incorrect login credentials.' });
                }
            });	
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
    const email = req.body.email;
    const contactno = req.body.contactno;
    const bankaccno = req.body.bankaccno;
    const bankname = req.body.bankname;
    const userid = req.params.id;

    if (!name || !email || !contactno || !bankaccno || !bankname || !userid) {
        return res.status(422).json({ success: false, message: 'Posted data is not correct or incompleted.'});
    } else {
	User.findById(userid).exec(function(err, user){
		if(err){ res.status(400).json({ success: false, message: 'Error processing request '+ err }); }
			
		if(user){
			user.name = name;
			user.email = email;
            user.contactno = contactno;
            user.bankaccno = bankaccno;
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

/*
exports.updatePhoto = function(req, res, next){
    const userid = req.params.id;
    const imgpath = req.body.imgpath;
    const imgoriname = req.body.imgoriname;

    if (!imgpath || !imgoriname) {
        return res.status(422).json({ success: false, message: 'Posted data is not correct or incompleted.'});
    } else {
	User.findById(userid).exec(function(err, user){
		if(err){ res.status(400).json({ success: false, message: 'Error processing request '+ err }); }
			
		if(user){
            user.imgpath = imgpath;
            user.imgoriname = imgoriname;
		}
		user.save(function(err){
			if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err }); }
			res.status(201).json({
				success: true,
				message: 'Photo details updated successfully'
			});
		});
	});
   }
}
*/

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