var mongoose = require( 'mongoose' );
var User = require('../models/user');
const Artist = require('../models/artist');
const Song = require('../models/song');
const Album = require('../models/album');
const Transaction = require('../models/transaction');
const Songpurchase = require('../models/songpurchase');
var Activitylog = require('../models/activitylog');
var jwt = require('jsonwebtoken'); 
var config = require('../config');
var crypto = require('crypto');
var rediscli = require('../redisconn');
const fetch = require('node-fetch');
//var amqpConn = require('../rabbitmqconn');
var amqpConn = null;
var amqp = require('amqplib/callback_api');
var FormData = require('form-data');

startRMQ();

//Start RabbitMQ Connection for Consumers
function startRMQ() {
    amqp.connect(config.amqpURL, function(err, conn) {
      if (err) {
        console.error("[AMQP]", err.message);
        return setTimeout(startRMQ, 1000);
      }
      conn.on("error", function(err) {
        if (err.message !== "Connection closing") {
          console.error("[AMQP] conn error", err.message);
        }
      });
      conn.on("close", function() {
        console.error("[AMQP] reconnecting");
        return setTimeout(startRMQ, 1000);
      });
      console.log("[AMQP] connected");
      amqpConn = conn;
      registerLabelConsumerChannel('registerlabelQueue');
      resetpasswdConsumerChannel('resetpasswdQueue');
      addArtistConsumerChannel('addArtistQueue');
      editArtistphotoConsumerChannel('editArtistphotoQueue');
      deleteArtistConsumerChannel('deleteArtistQueue');

      addSongConsumerChannel('addSongQueue');
      editSongConsumerChannel('editSongQueue');
      editSongprvwConsumerChannel('editSongprvwQueue');  
      editSongfileConsumerChannel('editSongfileQueue');
      deleteSongConsumerChannel('deleteSongQueue');    

      addAlbumConsumerChannel('addAlbumQueue');
      editAlbumphotoConsumerChannel('editAlbumphotoQueue');
      deleteAlbumConsumerChannel('deleteAlbumQueue');

      actionPaymentConsumerChannel('purchaseQueue');
      updatelabelstatusConsumerChannel('updatelabelstatusQueue');
      emailverificationConsumerChannel('emailverificationQueue');
      actionPaymentCodaConsumerChannel('purchaseQueueCoda');
    });
}

//Consumers activities
function registerLabelConsumerChannel(q){

    amqpConn.createConfirmChannel(function(err, ch) {
        if (closeOnErr(err)) return ;
        ch.on("error", function(err) {
          console.error("[AMQP] channel error", err.message);
        });
        ch.on("close", function() {
          console.log("[AMQP] channel closed");
        });
        ch.prefetch(10);
        ch.assertQueue(q, { durable: false }, function(err, _ok) {
          if (closeOnErr(err)) return;
          ch.consume(q, registerLabelConsumer, { noAck: true });
          console.log("register Label consumer is started");
        });

        function registerLabelConsumer(msg){

            let obj = JSON.parse(msg.content.toString());
            // Check for registration errors
            let name = obj.name;
            let email = obj.email;
            let contactno = obj.contactno;
            let bankaccno = obj.bankaccno;
            let bankcode = obj.bankcode;
            let bankname = obj.bankname;
            let username = obj.username;
            let password = obj.password;
            let link = obj.link;
            let randhash = obj.randhash;
            let usertype = 'LBL';
            //User.findOne({ $or:[{username:username},{email:email.toLowerCase()}], usertype: usertype }, function(err, existingUser) {
            User.findOne({ username: username }, function(err, existingUser) {
                if(err){
                    console.error('[REGLABELCONS] Error processing request finding user ', err); 
                    let savelog= saveactivitylog('', 'ACTREGS', '[REGLABELCONS] Error processing request finding user '+ username +'. '+err.message, 'STSERR');
                    return;  
                }
                // If user is not unique, return error
                if (existingUser && existingUser.status != 'STSRJCT') {
                    console.error('[REGLABELCONS] Username already exists. ['+ username +']'); 
                    let savelog= saveactivitylog('', 'ACTREGS', '[REGLABELCONS] Username already exists. ['+ username +']', 'STSERR');
                    return;
                }
                User.findOne({ $and:[{email:email.toLowerCase()}, {usertype: usertype}] }, function(err, eUser) {
                    if(err){
                        console.error('[REGLABELCONS] Error processing request finding user ', err); 
                        let savelog= saveactivitylog('', 'ACTREGS', '[REGLABELCONS] Error processing request finding user '+ username +'. '+err.message, 'STSERR');
                        return;  
                    }
                    // If user is not unique, return error
                    if (eUser && eUser.status != 'STSRJCT') {
                        console.error('[REGLABELCONS] Email address is already linked to another label user. ['+ email +']'); 
                        let savelog= saveactivitylog('', 'ACTREGS', '[REGLABELCONS] Email address is already linked to another label user. ['+ email +']', 'STSERR');
                        return;
                    }
                    try {
                        //console.log("Got msg", obj.name); 
                        // If no error, create account
                        let oUser = new User({
                                name: name,
                                email: email.toLowerCase(),
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
                        
                        oUser.save(function(err, ouser) {
                            if(err){ 
                                console.error('[REGLABELCONS] Error processing request when saving user details. ', err); 
                                let savelog= saveactivitylog('', 'ACTREGS', '[REGLABELCONS] Error processing request when saving user '+ username +' details. '+err.message, 'STSERR');
                                return;
                            }
                            
                            //const token = req.headers['authorization'];
                            const headers = { 'Content-Type': 'application/json' } 
                            const body = { emailto: email,
                                        vlink: link };
                            var sentsts = false;             
                            // Call notification API to send verification email
                            fetch(config.notifurl+'/sendverification', { 
                                method: 'POST',
                                body:    JSON.stringify(body),
                                headers: headers
                            })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data);
                                if (data.success === true) {
                                    sentsts = true
                                    console.log("[REGLABELCONS] Label User " + name + " created successfully with status:PENDING APPROVAL. Email sent?: "+ sentsts);
                                    let savelog= saveactivitylog('', 'ACTREGS', "[REGLABELCONS] Label User " + name + " created successfully with status:PENDING APPROVAL. Email sent?: "+ sentsts, 'STSSCS');
                                } else {
                                    console.log("[REGLABELCONS] Label User " + name + " created successfully with status:PENDING APPROVAL. Email sent?: "+ sentsts);
                                    let savelog= saveactivitylog('', 'ACTREGS', "[REGLABELCONS] Label User " + name + " created successfully with status:PENDING APPROVAL. Email sent?: "+ sentsts, 'STSERR');
                                }
                                return;
                            })
                            .catch(err => {
                                console.log("[REGLABELCONS] Label User " + name + " created successfully with status:PENDING APPROVAL. Email sent?: "+ sentsts);
                                //add to activity log
                                let savelog= saveactivitylog('', 'ACTREGS', "[REGLABELCONS] Label User " + name + " created successfully with status:PENDING APPROVAL. Email sent?: "+ sentsts, 'STSERR');
                                return;
                            });
    
                        });
                    } catch (e) {
                        closeOnErr(e);
                    }  
                });              
            });
        }
    });
}

function resetpasswdConsumerChannel(q){
    
    amqpConn.createConfirmChannel(function(err, ch) {
        if (closeOnErr(err)) return ;
        ch.on("error", function(err) {
          console.error("[AMQP] channel error", err.message);
        });
        ch.on("close", function() {
          console.log("[AMQP] channel closed");
        });
        ch.prefetch(10);
        ch.assertQueue(q, { durable: false }, function(err, _ok) {
          if (closeOnErr(err)) return;
          ch.consume(q, resetpasswdConsumer, { noAck: true });
          console.log("reset Passwd consumer is started");
        });
        function resetpasswdConsumer(msg){
            let obj = JSON.parse(msg.content.toString());
            // Check for input errors
            let email = obj.email;
            let link = obj.link;
            let randhash = obj.randhash;
            //const usertype = 'LBL';
            let usertype = obj.usertype;
            User.findOne({ email: email.toLowerCase(), status:'STSACT', usertype: usertype }, function(err, existingUser) {
                if(err){ 
                    console.error('[RESETPASSWDCONS] Error processing request finding user ', err); 
                    return;  
                }
        
                if (existingUser) {
                   if (existingUser.status === 'STSACT') {
                       if (existingUser.vhash) {
                            console.log('[RESETPASSWDCONS] vhash has been provided. ');
                            //send email reset passwd
                            const headers = { 'Content-Type': 'application/json' } 
                            const body = { emailto: email,
                                        vlink: link };
                            var sentsts = false;             
                            // Call notification API to send verification email
                            fetch(config.notifurl+'/sendresetpassword', { 
                                method: 'POST',
                                body:    JSON.stringify(body),
                                headers: headers
                            })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data);
                                if (data.success === true) {
                                    sentsts = true
                                    console.log("[RESETPASSWDCONS] Email reset passwd has been sent to " + email +". Email sent?: "+ sentsts);
                                    let savelog= saveactivitylog('', 'ACTRESP', "[RESETPASSWDCONS] Email reset passwd has been sent to " + email +". Email sent?: "+ sentsts, 'STSSCS');
                                } else {
                                    console.log("[RESETPASSWDCONS] Email reset passwd failed to be sent to " + email +". Email sent?: "+ sentsts);
                                    let savelog= saveactivitylog('', 'ACTRESP', "[RESETPASSWDCONS] Email reset passwd failed to be sent to " + email +". Email sent?: "+ sentsts, 'STSERR');
                                }
                                return;
                            })
                            .catch(err => {
                                console.log("[RESETPASSWDCONS] Email reset passwd failed to be sent to " + email +". Email sent?: "+ sentsts);
                                //add to activity log
                                let savelog= saveactivitylog('', 'ACTRESP', "[RESETPASSWDCONS] Email reset passwd failed to be sent to " + email +". Email sent?: "+ sentsts, 'STSERR');
                                return;
                            });
                       } else {           
                           existingUser.vhash = randhash;
                           existingUser.save(function(err) {
                               if(err){
                                    console.error('[RESETPASSWDCONS] Error processing request when saving user hash value. ', err); 
                                    let savelog= saveactivitylog('', 'ACTRESP', '[RESETPASSWDCONS] Error processing request when saving user hash value. '+ err.message, 'STSERR');
                                    return; 
                                }
                                //send email reset passwd
                                const headers = { 'Content-Type': 'application/json' } 
                                const body = { emailto: email,
                                            vlink: link };
                                var sentsts = false;             
                                // Call notification API to send verification email
                                fetch(config.notifurl+'/sendresetpassword', { 
                                    method: 'POST',
                                    body:    JSON.stringify(body),
                                    headers: headers
                                })
                                .then(res => res.json())
                                .then(data => {
                                    console.log(data);
                                    if (data.success === true) {
                                        sentsts = true
                                        console.log("[RESETPASSWDCONS] Email reset passwd has been sent to " + email +". Email sent?: "+ sentsts);
                                        let savelog= saveactivitylog('', 'ACTRESP', "[RESETPASSWDCONS] Email reset passwd has been sent to " + email +". Email sent?: "+ sentsts, 'STSSCS');
                                    } else {
                                        console.log("[RESETPASSWDCONS] Email reset passwd failed to be sent to " + email +". Email sent?: "+ sentsts);
                                        let savelog= saveactivitylog('', 'ACTRESP', "[RESETPASSWDCONS] Email reset passwd failed to be sent to " + email +". Email sent?: "+ sentsts, 'STSERR');
                                    }
                                    return;
                                })
                                .catch(err => {
                                    console.log("[RESETPASSWDCONS] Email reset passwd failed to be sent to " + email +". Email sent?: "+ sentsts);
                                    //add to activity log
                                    let savelog= saveactivitylog('', 'ACTRESP', "[RESETPASSWDCONS] Email reset passwd failed to be sent to " + email +". Email sent?: "+ sentsts, 'STSERR');
                                    return;
                                });
                           });               
                       }
                   } else {
                        console.log('[RESETPASSWDCONS] Process Error. The account linked to the email is NOT ACTIVE account.');
                   }
       
               } else {
                    console.log('[RESETPASSWDCONS] Error in Finding user data. There is no active user account linked to the email input.');
               }
           });
        }
    });
}

function addArtistConsumerChannel(q){
    
    amqpConn.createConfirmChannel(function(err, ch) {
        if (closeOnErr(err)) return ;
        ch.on("error", function(err) {
            console.error("[AMQP] channel error", err.message);
        });
        ch.on("close", function() {
            console.log("[AMQP] channel closed");
        });
        ch.prefetch(10);
        ch.assertQueue(q, { durable: false }, function(err, _ok) {
            if (closeOnErr(err)) return;
            ch.consume(q, addArtistConsumer, { noAck: true });
            console.log("add Artist consumer is started");
        });

        function addArtistConsumer(msg){

            let obj = JSON.parse(msg.content.toString());
            // Check for registration errors
            let artistname = obj.artistname;
            let status = obj.status;
            let artistphotopath = obj.artistphotopath;
            let artistphotoname = obj.artistphotoname;
            let labelid = obj.labelid;
            let artistid = obj.artistid;
            let about = obj.about;
            let searchval = obj.artistname.replace(/\s/g, "");

            if (artistid) {
                checkArtistName(labelid, artistname, function(err, result) {
                    if (err) { 
                        console.log("[EDITARTISTCONS] edit artist " + artistname + " error with message: "+ err);
                        let savelog= saveactivitylog(labelid, 'ACTUPAR', "[EDITARTISTCONS] edit artist " + artistname + " error with message: "+ err, 'STSERR');    
                        return; 
                    }
                    //console.log('hasil: '+result);
                    if (result === 'NF') {
                        //Edit artist if there is no artist name exist
                        Artist.findById(artistid).exec(function(err, artist){
                            if(err){ 
                                console.log("[EDITARTISTCONS] edit artist " + artistname + " error with message: "+ err.message);
                                let savelog= saveactivitylog(labelid, 'ACTUPAR', "[EDITARTISTCONS] edit artist " + artistname + " error with message: "+ err.message, 'STSERR');    
                                return; 
                            }
                                
                            if(artist) {
                                artist.artistname = artistname;
                                artist.status = status;
                                artist.about = about;
                                artist.searchstr = searchval.toUpperCase();
                                artist.modifydt = new Date();
                            }
                            artist.save(function(err) {
                                if(err){ 
                                    console.log("[EDITARTISTCONS] edit artist " + artistname + " error with message: "+ err.message);
                                    let savelog= saveactivitylog(labelid, 'ACTUPAR', "[EDITARTISTCONS] edit artist " + artistname + " error with message: "+ err.message, 'STSERR');    
                                    return; 
                                }
                                //Delete redis respective keys
                                rediscli.del('redis-user-artist-'+labelid, 'redis-user-artistcnt-'+labelid, 'redis-user-artistlist-'+labelid); 
                                console.log("[EDITARTISTCONS] artist " + artistname + " saved successfuly.");
                                let savelog= saveactivitylog(labelid, 'ACTUPAR', "[EDITARTISTCONS] artist " + artistname + " saved successfully.", 'STSSCS');    
                                return; 
                            });
                        });
                    } else {
                        if (result == artistid) {
                            //Edit artist if it's still the same record
                            Artist.findById(artistid).exec(function(err, artist){
                                if(err){ 
                                    console.log("[EDITARTISTCONS] edit artist " + artistname + " error with message: "+ err.message);
                                    let savelog= saveactivitylog(labelid, 'ACTUPAR', "[EDITARTISTCONS] edit artist " + artistname + " error with message: "+ err.message, 'STSERR');    
                                    return; 
                                }
                                    
                                if(artist) {
                                    artist.artistname = artistname;
                                    artist.status = status;
                                    artist.about = about;
                                    artist.searchstr = searchval.toUpperCase();
                                    artist.modifydt = new Date();
                                }
                                artist.save(function(err) {
                                    if(err){ 
                                        console.log("[EDITARTISTCONS] edit artist " + artistname + " error with message: "+ err.message);
                                        let savelog= saveactivitylog(labelid, 'ACTUPAR', "[EDITARTISTCONS] edit artist " + artistname + " error with message: "+ err.message, 'STSERR');    
                                        return; 
                                    }
                                    //Delete redis respective keys
                                    rediscli.del('redis-user-artist-'+labelid, 'redis-user-artistcnt-'+labelid, 'redis-user-artistlist-'+labelid); 
                                    console.log("[EDITARTISTCONS] artist " + artistname + " saved successfuly.");
                                    let savelog= saveactivitylog(labelid, 'ACTUPAR', "[EDITARTISTCONS] artist " + artistname + " saved successfully.", 'STSSCS');    
                                    return; 
                                });
                            });
                        } else {
                            console.log("[EDITARTISTCONS] Error edit artist " + artistname + ". Artist name already exist.");
                            let savelog= saveactivitylog(labelid, 'ACTUPAR', "[EDITARTISTCONS] Error edit artist " + artistname + ". Artist name already exist.", 'STSERR');    
                            return; 
                        }
                    }
                });
    
            }else {
                checkArtistName(labelid, artistname, function(err, result) {
                    if(err){ 
                        console.log("[ADDARTISTCONS] add artist " + artistname + " error with message: "+ err);
                        let savelog= saveactivitylog(labelid, 'ACTADAR', "[ADDARTISTCONS] add artist " + artistname + " error with message: "+ err, 'STSERR');    
                        return; 
                    }

                    if (result === 'NF') {
                        //Add new artits
                        let oArtist = new Artist({
                            labelid: labelid,
                            artistname: artistname,
                            artistphotopath: artistphotopath,
                            artistphotoname: artistphotoname,
                            status: status,
                            about: about,
                            searchstr: searchval.toUpperCase(),
                            objlabelid: labelid,
                            createddt: new Date(),
                            modifydt: new Date()
                        });
                
                        oArtist.save(function(err) {
                            if(err){ 
                                console.log("[ADDARTISTCONS] add artist " + artistname + " error with message: "+ err.message);
                                let savelog= saveactivitylog(labelid, 'ACTADAR', "[ADDARTISTCONS] add artist " + artistname + " error with message: "+ err.message, 'STSERR');    
                                return; 
                            }
                                
                            //Delete redis respective keys
                            rediscli.del('redis-user-artist-'+labelid, 'redis-user-artistcnt-'+labelid, 'redis-user-artistlist-'+labelid); 
                            console.log("[ADDARTISTCONS] artist " + artistname + " saved successfuly.");
                            let savelog= saveactivitylog(labelid, 'ACTADAR', "[ADDARTISTCONS] artist " + artistname + " saved successfully.", 'STSSCS');    
                            return; 
                        });
                    } else {
                        console.log("[ADDARTISTCONS] Error add artist " + artistname + ". Artist name already exist.");
                        let savelog= saveactivitylog(labelid, 'ACTADAR', "[ADDARTISTCONS] Error add artist " + artistname + ". Artist name already exist.", 'STSERR');    
                        return; 
                    }
                });
            }
        }
    });
}

/* function addArtistConsumerChannel(q){

    amqpConn.createConfirmChannel(function(err, ch) {
        if (closeOnErr(err)) return ;
        ch.on("error", function(err) {
          console.error("[AMQP] channel error", err.message);
        });
        ch.on("close", function() {
          console.log("[AMQP] channel closed");
        });
        ch.prefetch(10);
        ch.assertQueue(q, { durable: false }, function(err, _ok) {
          if (closeOnErr(err)) return;
          ch.consume(q, addArtistConsumer, { noAck: true });
          console.log("add Artist consumer is started");
        });

        function addArtistConsumer(msg){

            let obj = JSON.parse(msg.content.toString());
            // Check for registration errors
            let uploadpath = obj.uploadpath;
            let artistname = obj.artistname;
            let status = obj.status;
            let labelid = obj.labelid;
            let token = obj.token;
            //console.log(token);
            const headers = { 'Authorization': token }; 
            const formData = new FormData();
            formData.append('fileinputsrc',new Buffer (obj.fileinputsrc.data.data),obj.fileinputsrc.name);
            formData.append('uploadpath', uploadpath);                
            // Call notification API to send verification email
            fetch(config.filetransferurl+'/api/inputfileupload', { 
                method: 'POST',
                body:    formData,
                headers: headers
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.success === true) {
                    let artistphotopath = data.filedata.filepath;
                    let artistphotoname = data.filedata.filename;
                    let oArtist = new Artist({
                        labelid: labelid,
                        artistname: artistname,
                        artistphotopath: artistphotopath,
                        artistphotoname: artistphotoname,
                        status: status,
                        objlabelid: labelid,
                        createddt: new Date(),
                        modifydt: new Date()
                    });
            
                    oArtist.save(function(err) {
                        if(err){ 
                            console.log("[ADDARTISTCONS] add artist " + artistname + " error with message: "+ err.message);
                            let savelog= saveactivitylog(labelid, 'ACTADAR', "[ADDARTISTCONS] add artist " + artistname + " error with message: "+ err.message, 'STSERR');    
                            return; 
                        }
                            
                        //Delete redis respective keys
                        rediscli.del('redis-user-artist-'+labelid, 'redis-user-artistcnt-'+labelid, 'redis-user-artistlist-'+labelid); 
                        console.log("[ADDARTISTCONS] artist " + artistname + " saved successfuly.");
                        let savelog= saveactivitylog(labelid, 'ACTADAR', "[ADDARTISTCONS] artist " + artistname + " saved successfully.", 'STSSCS');    
                        return; 
                    });
                } else {
                    console.log("[ADDARTISTCONS] add artist " + artistname + " error with message: "+ data.message);
                    let savelog= saveactivitylog(labelid, 'ACTADAR', "[ADDARTISTCONS] add artist " + artistname + " error with message: "+ data.message, 'STSERR');    
                    return;
                }                
            })
            .catch(err => {
                console.log("[ADDARTISTCONS] add artist " + artistname + " error with message: "+ err.message);
                //add to activity log
                let savelog= saveactivitylog(labelid, 'ACTADAR', "[ADDARTISTCONS] add artist " + artistname + " error with message: "+ err.message, 'STSERR');
                return;
            });
        }
    });
} */

function editArtistphotoConsumerChannel(q){

    amqpConn.createConfirmChannel(function(err, ch) {
        if (closeOnErr(err)) return ;
        ch.on("error", function(err) {
          console.error("[AMQP] channel error", err.message);
        });
        ch.on("close", function() {
          console.log("[AMQP] channel closed");
        });
        ch.prefetch(10);
        ch.assertQueue(q, { durable: false }, function(err, _ok) {
          if (closeOnErr(err)) return;
          ch.consume(q, editArtistphotoConsumer, { noAck: true });
          console.log("edit Artist photo consumer is started");
        });

        function editArtistphotoConsumer(msg){

            let obj = JSON.parse(msg.content.toString());
            // Assign the parametrs
            let artistphotoname = obj.artistphotoname;
            let artistphotopath = obj.artistphotopath;
            let oldartistphotoname = obj.oldartistphotoname;
            let uploadpath = obj.uploadpath;
            let artistid = obj.artistid;
            let labelid = obj.labelid;
            let token = obj.token;

            Artist.findById(artistid).exec(function(err, artist){
                if(err){
                    console.log("[EDITARTISTPHCONS] edit artist photo error with message: "+ err);
                    let savelog= saveactivitylog(labelid, 'ACTPHAR', "[EDITARTISTPHCONS] edit artist photo error with message: "+ err, 'STSERR');    
                    return;  
                }
                    
                if(artist){
                    artist.artistphotopath = artistphotopath;
                    artist.artistphotoname = artistphotoname;
                    artist.modifydt = new Date();
                }
                artist.save(function(err){
                    if(err){ 
                        console.log("[EDITARTISTPHCONS] edit artist photo error with message: "+ err);
                        let savelog= saveactivitylog(labelid, 'ACTPHAR', "[EDITARTISTPHCONS] edit artist photo error with message: "+ err, 'STSERR');    
                        return; 
                    }
                    console.log("[EDITARTISTPHCONS] artist photo saved successfuly.");
                    let savelog= saveactivitylog(labelid, 'ACTPHAR', "[EDITARTISTPHCONS] artist photo saved successfuly.", 'STSSCS');    
                    //delete old artist photo filename
                    const xheaders = { 'Authorization': token,
                                'Content-Type': 'application/json' }; 
                    const xbody = { filename: oldartistphotoname,
                                    uploadpath: uploadpath };
                    // Call notification API to delete file
                    fetch(config.filetransferurl+'/api/inputfiledelete', { 
                        method: 'POST',
                        body:    JSON.stringify(xbody),
                        headers: xheaders
                    })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.success === true) {
                            console.log("[EDITARTISTPHCONS] delete old file successfully.");
                        } else {
                            console.log("[EDITARTISTPHCONS] error delete old file with message: "+data.message);
                        }
                    }).catch(err => {
                        console.log("[EDITARTISTPHCONS] error delete old file with message: "+err.message);
                    });
                    return; 
                });
            });

            /* let uploadpath = obj.uploadpath; 
            const headers = { 'Authorization': token }; 
            const formData = new FormData();
            formData.append('fileinputsrc',new Buffer (obj.fileinputsrc.data.data),obj.fileinputsrc.name);
            formData.append('uploadpath', uploadpath);                
            // Call notification API to upload file
            fetch(config.filetransferurl+'/api/inputfileupload', { 
                method: 'POST',
                body:    formData,
                headers: headers
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.success === true) {
                    let artistphotopath = data.filedata.filepath;
                    let newartistphotoname = data.filedata.filename;
                    Artist.findById(artistid).exec(function(err, artist){
                        if(err){
                            console.log("[EDITARTISTPHCONS] edit artist photo error with message: "+ err);
                            let savelog= saveactivitylog(labelid, 'ACTPHAR', "[EDITARTISTPHCONS] edit artist photo error with message: "+ err, 'STSERR');    
                            return;  
                        }
                            
                        if(artist){
                            artist.artistphotopath = artistphotopath;
                            artist.artistphotoname = newartistphotoname;
                            artist.modifydt = new Date();
                        }
                        artist.save(function(err){
                            if(err){ 
                                console.log("[EDITARTISTPHCONS] edit artist photo error with message: "+ err);
                                let savelog= saveactivitylog(labelid, 'ACTPHAR', "[EDITARTISTPHCONS] edit artist photo error with message: "+ err, 'STSERR');    
                                return; 
                            }
                            console.log("[EDITARTISTPHCONS] artist photo saved successfuly.");
                            let savelog= saveactivitylog(labelid, 'ACTPHAR', "[EDITARTISTPHCONS] artist photo saved successfuly.", 'STSSCS');    
                            return; 
                        });
                    });

                } else {
                    console.log("[EDITARTISTPHCONS] edit artist photo error with message: "+ data.message);
                    let savelog= saveactivitylog(labelid, 'ACTPHAR', "[EDITARTISTPHCONS] edit artist photo error with message: "+ data.message, 'STSERR');    
                    return;
                }                
            })
            .catch(err => {
                console.log("[EDITARTISTPHCONS] edit artist photo error with message: "+ err.message);
                //add to activity log
                let savelog= saveactivitylog(labelid, 'ACTPHAR', "[EDITARTISTPHCONS] edit artist photo error with message: "+ err.message, 'STSERR');
                return;
            }); */
        }
    });
}

function deleteArtistConsumerChannel(q){
    
    amqpConn.createConfirmChannel(function(err, ch) {
        if (closeOnErr(err)) return ;
        ch.on("error", function(err) {
            console.error("[AMQP] channel error", err.message);
        });
        ch.on("close", function() {
            console.log("[AMQP] channel closed");
        });
        ch.prefetch(10);
        ch.assertQueue(q, { durable: false }, function(err, _ok) {
            if (closeOnErr(err)) return;
            ch.consume(q, deleteArtistConsumer, { noAck: true });
            console.log("delete Artist consumer is started");
        });

        function deleteArtistConsumer(msg){

            let obj = JSON.parse(msg.content.toString());
            // Assign the parametrs
            let artistphotoname = obj.artistphotoname;
            let uploadpath = obj.uploadpath;
            let artistid = obj.artistid;
            let labelid = obj.labelid;
            let token = obj.token;
            
            Artist.findById(artistid).exec(function(err, artist){ 
                if(err){ 
                    console.log("[DELARTISTCONS] delete artist error with message: "+ err);
                    let savelog= saveactivitylog(labelid, 'ACTRMAR', "[DELARTISTCONS] delete artist error with message: "+ err, 'STSERR');    
                    return;  
                }
                if(artist) {
                    let labelid = artist.labelid;
                    //Delete redis respective keys
                    rediscli.del('redis-user-artist-'+labelid, 'redis-user-artistcnt-'+labelid, 'redis-user-artistlist-'+labelid); 
                }
                Artist.remove({_id: artistid}, function(err){
                    if(err){ 
                        console.log("[DELARTISTCONS] delete artist error with message: "+ err);
                        let savelog= saveactivitylog(labelid, 'ACTRMAR', "[DELARTISTCONS] delete artist error with message: "+ err, 'STSERR');    
                        return; 
                    }
                    console.log("[DELARTISTCONS] artist removed successfuly.");
                    let savelog= saveactivitylog(labelid, 'ACTRMAR', "[DELARTISTCONS] artist removed successfuly.", 'STSSCS');    
                    //delete old artist photo filename
                    const xheaders = { 'Authorization': token,
                                    'Content-Type': 'application/json' }; 
                    const xbody = { filename: artistphotoname,
                                    uploadpath: uploadpath };
                    // Call notification API to delete file
                    fetch(config.filetransferurl+'/api/inputfiledelete', { 
                        method: 'POST',
                        body:    JSON.stringify(xbody),
                        headers: xheaders
                    })
                    .then(res => res.json())
                    .then(data => {
                        //console.log(data);
                        if (data.success === true) {
                            console.log("[DELARTISTCONS] delete old file successfully.");
                        } else {
                            console.log("[DELARTISTCONS] error delete old file with message: "+data.message);
                        }
                    }).catch(err => {
                        console.log("[DELARTISTCONS] error delete old file with message: "+err.message);
                    });
                    return; 
                });
            });
        }
    });
}

function addSongConsumerChannel(q){
    
    amqpConn.createConfirmChannel(function(err, ch) {
        if (closeOnErr(err)) return ;
        ch.on("error", function(err) {
            console.error("[AMQP] channel error", err.message);
        });
        ch.on("close", function() {
            console.log("[AMQP] channel closed");
        });
        ch.prefetch(10);
        ch.assertQueue(q, { durable: false }, function(err, _ok) {
            if (closeOnErr(err)) return;
            ch.consume(q, addSongConsumer, { noAck: true });
            console.log("add Song consumer is started");
        });

        function addSongConsumer(msg){
            
            let obj = JSON.parse(msg.content.toString());
            // Check for parameters
            let labelid = obj.labelid;
            let artistid = obj.artistid;
            let albumid = obj.albumid;
            let songname = obj.songname;
            let songlyric = obj.songlyric;
            let songgenre = obj.songgenre;
            let songprice = obj.songprice;
            let songprvwpath = obj.songprvwpath;
            let songprvwname = obj.songprvwname;
            let songfilepath = obj.songfilepath;
            let songfilename = obj.songfilename;
            //let uploadpath = obj.uploadpath;
            let status = obj.status;
            let searchval = obj.songname.replace(/\s/g, "");

            checkSongName(labelid, artistid, albumid, songname, function(err, result) {
                if(err){ 
                    console.log("[ADDSONGCONS] add song " + songname + " error with message: "+ err);
                    let savelog= saveactivitylog(labelid, 'ACTADSG', "[ADDSONGCONS] add song " + songname + " error with message: "+ err, 'STSERR');    
                    return; 
                }
                //console.log('hasil: '+result);
                if (result === 'NF') {
                    let oSong = new Song({
                        labelid: labelid,
                        artistid: artistid,
                        albumid: albumid,
                        songname: songname,
                        songlyric: songlyric,
                        songgenre: songgenre,
                        songcntrate:1,
                        songrate: 5,
                        songprice: songprice,
                        songprvwpath: songprvwpath,
                        songprvwname: songprvwname,
                        songfilepath: songfilepath,
                        songfilename: songfilename,
                        songpublish: 'N',
                        songbuy: 0,
                        songshared:0,
                        status: status,
                        objartistid: artistid,
                        objalbumid: albumid,
                        objlabelid: labelid,
                        createddt: new Date(),
                        modifydt: new Date(),
                        searchstr: searchval.toUpperCase()
                    });
        
                    oSong.save(function(err) {
                        if(err){ 
                            console.log("[ADDSONGCONS] add song " + songname + " error with message: "+ err.message);
                            let savelog= saveactivitylog(labelid, 'ACTADSG', "[ADDSONGCONS] add song " + songname + " error with message: "+ err.message, 'STSERR');    
                            return; 
                        }

                        //Delete redis respective keys
                        rediscli.del('redis-recentsongs','redis-user-song-'+labelid, 'redis-user-songcnt-'+labelid, 'redis-user-songlist-'+albumid+labelid);                                                
                        updateAlbumprice(labelid, albumid, function(err, result1) {
                            if (err) { console.log('Update album: '+albumid+' price error with message: '+err) }
                            if (result1) {
                                console.log('Update album: '+albumid+' price is successful.');
                            } else {
                                console.log('Update album: '+albumid+' price error. No result !')
                            }   
                        });    
                        console.log("[ADDSONGCONS] song " + songname + " saved successfuly.");
                        let savelog= saveactivitylog(labelid, 'ACTADSG', "[ADDSONGCONS] song " + songname + " saved successfuly.", 'STSSCS');    
                        return; 
                    });
        
                } else {
                    console.log("[ADDSONGCONS] add song " + result.songname + " ERROR. Songname already exists.");
                    let savelog= saveactivitylog(labelid, 'ACTADSG', "[ADDSONGCONS] add song " + result.songname + " ERROR. Songname already exists.", 'STSERR');    
                    return; 
                }
            });
/*             let token = obj.token;
            //console.log(token);
            const headers = { 'Authorization': token }; 
            const formData = new FormData();
            formData.append('fileinputsrc',new Buffer (obj.fileinputsrc.data.data),obj.fileinputsrc.name);
            formData.append('uploadpath', uploadpath);                
            // Call notification API to send verification email
            fetch(config.filetransferurl+'/api/inputfileupload', { 
                method: 'POST',
                body:    formData,
                headers: headers
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.success === true) {
                    let songfilepath = data.filedata.filepath;
                    let songfilename = data.filedata.filename;
                    let oSong = new Song({
                        labelid: labelid,
                        artistid: artistid,
                        albumid: albumid,
                        songname: songname,
                        songlyric: songlyric,
                        songgenre: songgenre,
                        songcntrate:1,
                        songrate: 5,
                        songprice: songprice,
                        songprvwpath: songprvwpath,
                        songprvwname: songprvwname,
                        songfilepath: songfilepath,
                        songfilename: songfilename,
                        songpublish: 'N',
                        songbuy: 0,
                        songshared:0,
                        status: status,
                        objartistid: artistid,
                        objalbumid: albumid,
                        objlabelid: labelid,
                        createddt: new Date(),
                        modifydt: new Date()
                    });

                    oSong.save(function(err) {
                        if(err){ 
                            console.log("[ADDSONGCONS] add song " + songname + " error with message: "+ err.message);
                            let savelog= saveactivitylog(labelid, 'ACTADSG', "[ADDSONGCONS] add song " + songname + " error with message: "+ err.message, 'STSERR');    
                            return; 
                        }
                            
                        //Delete redis respective keys
                        rediscli.del('redis-recentsongs','redis-user-song-'+labelid, 'redis-user-songcnt-'+labelid, 'redis-user-songlist-'+albumid+labelid);
                        console.log("[ADDSONGCONS] song " + songname + " saved successfuly.");
                        let savelog= saveactivitylog(labelid, 'ACTADSG', "[ADDSONGCONS] song " + songname + " saved successfuly.", 'STSSCS');    
                        return; 
                    });
                } else {
                    console.log("[ADDSONGCONS] add song " + songname + " error with message: "+ data.message);
                    let savelog= saveactivitylog(labelid, 'ACTADSG', "[ADDSONGCONS] add song " + songname + " error with message: "+ data.message, 'STSERR');    
                    return;
                }                
            })
            .catch(err => {
                console.log("[ADDSONGCONS] add song " + songname + " error with message: "+ err.message);
                //add to activity log
                let savelog= saveactivitylog(labelid, 'ACTADSG', "[ADDSONGCONS] add song " + songname + " error with message: "+ err.message, 'STSERR');
                return;
            }); */
        }
    });
}
function editSongprvwConsumerChannel(q){
    
    amqpConn.createConfirmChannel(function(err, ch) {
        if (closeOnErr(err)) return ;
        ch.on("error", function(err) {
            console.error("[AMQP] channel error", err.message);
        });
        ch.on("close", function() {
            console.log("[AMQP] channel closed");
        });
        ch.prefetch(10);
        ch.assertQueue(q, { durable: false }, function(err, _ok) {
            if (closeOnErr(err)) return;
            ch.consume(q, editSongprvwConsumer, { noAck: true });
            console.log("edit Song preview consumer is started");
        });

        function editSongprvwConsumer(msg){ 

            let obj = JSON.parse(msg.content.toString());
            // Assign the parametrs
            let songprvwpath = obj.songprvwpath;
            let songprvwname = obj.songprvwname;
            let oldsongprvwname = obj.oldsongprvwname;
            let uploadpath = obj.uploadpath; 
            let songid = obj.songid;
            let labelid = obj.labelid;
            let token = obj.token;

            Song.findById(songid).exec(function(err, song){
                if(err){
                    console.log("[EDITSONGPRVWCONS] edit song preview error with message: "+ err);
                    let savelog= saveactivitylog(labelid, 'ACTPVSG', "[EDITSONGPRVWCONS] edit song preview error with message: "+ err, 'STSERR');    
                    return;  
                }
                    
                if(song){
                  if (song.songbuy > 0) {
                    console.log("[EDITSONGPRVWCONS] edit song preview error with message: Unable to change song preview. It has been purchased.");
                    let savelog= saveactivitylog(labelid, 'ACTPVSG', "[EDITSONGPRVWCONS] edit song preview error with message: Unable to change song preview. It has been purchased.", 'STSERR');    
                    return;  
                  } else {
                    let labelid = song.labelid;
                    let albumid = song.albumid;
                    song.songprvwpath = songprvwpath;
                    song.songprvwname = songprvwname;
                    song.songpublish = 'N';
                    song.modifydt = new Date();

                    song.save(function(err){
                        if(err){ 
                            console.log("[EDITSONGPRVWCONS] edit song preview error with message: "+ err);
                            let savelog= saveactivitylog(labelid, 'ACTPVSG', "[EDITSONGPRVWCONS] edit song preview error with message: "+ err, 'STSERR');    
                            return; 
                        }
                        console.log("[EDITSONGPRVWCONS] song preview saved successfuly.");
                        let savelog= saveactivitylog(labelid, 'ACTPVSG', "[EDITSONGPRVWCONS] song preview saved successfuly.", 'STSSCS');    
                        //Delete redis respective keys
                        rediscli.del('redis-user-song-'+labelid, 'redis-user-songcnt-'+labelid, 'redis-user-songlist-'+albumid+labelid);                
                        //delete old song preview filename
                        const xheaders = { 'Authorization': token,
                                        'Content-Type': 'application/json' }; 
                        const xbody = { filename: oldsongprvwname,
                                        uploadpath: uploadpath  };
                        // Call notification API to delete file
                        fetch(config.filetransferurl+'/api/inputfiledelete', { 
                            method: 'POST',
                            body:    JSON.stringify(xbody),
                            headers: xheaders
                        })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.success === true) {
                                console.log("[EDITSONGPRVWCONS] delete old song preview successfully.");
                            } else {
                                console.log("[EDITSONGPRVWCONS] error delete old file with message: "+data.message);
                            }
                        }).catch(err => {
                            console.log("[EDITSONGPRVWCONS] error delete old file with message: "+err.message);
                        });
                        return; 
                    });
                  }
      
                } else {
                    console.log("[EDITSONGPRVWCONS] edit song preview error with message: Unable to find song preview file.");
                    let savelog= saveactivitylog(labelid, 'ACTPVSG', "[EDITSONGPRVWCONS] edit song preview error with message: Unable to find song preview file.", 'STSERR');    
                    return; 
                }
            });
        }
    });
}

function editSongfileConsumerChannel(q){
    
    amqpConn.createConfirmChannel(function(err, ch) {
        if (closeOnErr(err)) return ;
        ch.on("error", function(err) {
            console.error("[AMQP] channel error", err.message);
        });
        ch.on("close", function() {
            console.log("[AMQP] channel closed");
        });
        ch.prefetch(10);
        ch.assertQueue(q, { durable: false }, function(err, _ok) {
            if (closeOnErr(err)) return;
            ch.consume(q, editSongfileConsumer, { noAck: true });
            console.log("edit Song file consumer is started");
        });

        function editSongfileConsumer(msg){ 

            let obj = JSON.parse(msg.content.toString());
            // Assign the parametrs
            let songfilepath = obj.songfilepath;
            let songfilename = obj.songfilename;
            let oldsongfilename = obj.oldsongfilename;
            let uploadpath = obj.uploadpath; 
            let songid = obj.songid;
            let labelid = obj.labelid;
            let token = obj.token;

            Song.findById(songid).exec(function(err, song){
                if(err){
                    console.log("[EDITSONGFILECONS] edit song file error with message: "+ err);
                    let savelog= saveactivitylog(labelid, 'ACTFISG', "[EDITSONGFILECONS] edit song file error with message: "+ err, 'STSERR');    
                    return;  
                }
                    
                if(song){
                  if (song.songbuy > 0) {
                    console.log("[EDITSONGFILECONS] edit song file error with message: Unable to change song file. It has been purchased.");
                    let savelog= saveactivitylog(labelid, 'ACTFISG', "[EDITSONGFILECONS] edit song file error with message: Unable to change song file. It has been purchased.", 'STSERR');    
                    return;  
                  } else {
                    let labelid = song.labelid;
                    let albumid = song.albumid;
                    song.songfilepath = songfilepath;
                    song.songfilename = songfilename;
                    song.songpublish = 'N';
                    song.modifydt = new Date();
                    
                    song.save(function(err){
                        if(err){ 
                            console.log("[EDITSONGFILECONS] edit song file error with message: "+ err);
                            let savelog= saveactivitylog(labelid, 'ACTFISG', "[EDITSONGFILECONS] edit song file error with message: "+ err, 'STSERR');    
                            return; 
                        }
                        console.log("[EDITSONGFILECONS] song file saved successfuly.");
                        let savelog= saveactivitylog(labelid, 'ACTFISG', "[EDITSONGFILECONS] song file saved successfuly.", 'STSSCS');    
                        //Delete redis respective keys
                        rediscli.del('redis-user-song-'+labelid, 'redis-user-songcnt-'+labelid, 'redis-user-songlist-'+albumid+labelid);                
                        //delete old song preview filename
                        const xheaders = { 'Authorization': token,
                                        'Content-Type': 'application/json' }; 
                        const xbody = { filename: oldsongfilename,
                                        uploadpath: uploadpath  };
                        // Call notification API to delete file
                        fetch(config.filetransferurl+'/api/inputfiledelete', { 
                            method: 'POST',
                            body:    JSON.stringify(xbody),
                            headers: xheaders
                        })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.success === true) {
                                console.log("[EDITSONGFILECONS] delete old song file successfully.");
                            } else {
                                console.log("[EDITSONGFILECONS] error delete old file with message: "+data.message);
                            }
                        }).catch(err => {
                            console.log("[EDITSONGFILECONS] error delete old file with message: "+err.message);
                        });
                        return; 
                    });
                  }
      
                } else {
                    console.log("[EDITSONGFILECONS] edit song file error with message: Unable to find song file.");
                    let savelog= saveactivitylog(labelid, 'ACTFISG', "[EDITSONGFILECONS] edit song file error with message: Unable to find song file.", 'STSERR');    
                    return; 
                }
            });
        }
    });
}

function deleteSongConsumerChannel(q){
    
    amqpConn.createConfirmChannel(function(err, ch) {
        if (closeOnErr(err)) return ;
        ch.on("error", function(err) {
            console.error("[AMQP] channel error", err.message);
        });
        ch.on("close", function() {
            console.log("[AMQP] channel closed");
        });
        ch.prefetch(10);
        ch.assertQueue(q, { durable: false }, function(err, _ok) {
            if (closeOnErr(err)) return;
            ch.consume(q, deleteSongConsumer, { noAck: true });
            console.log("delete Song consumer is started");
        });

        function deleteSongConsumer(msg){

            let obj = JSON.parse(msg.content.toString());
            // Assign the parametrs
            let songprvwname = obj.songprvwname;
            let songfilename = obj.songfilename;
            let prvwuploadpath = obj.prvwuploadpath;
            let songuploadpath = obj.songuploadpath;
            let songid = obj.songid;
            let labelid = obj.labelid;
            let token = obj.token;
            Song.findById(songid).exec(function(err, song){ 
                if(err){ 
                    console.log("[DELSONGCONS] delete song error with message: "+ err);
                    let savelog= saveactivitylog(labelid, 'ACTRMSG', "[DELSONGCONS] delete song error with message: "+ err, 'STSERR');    
                    return;  
                }
                if (song) {
                  let labelid = song.labelid;
                  let artistid = song.artistid;
                  let albumid = song.albumid;
                  //Delete redis respective keys
                  rediscli.del('redis-user-song-'+labelid, 'redis-user-songcnt-'+labelid, 'redis-user-songlist-'+albumid+labelid);                
                  updateAlbumprice(labelid, albumid, function(err, result1) {
                    if (err) { console.log('Update album: '+albumid+' price error with message: '+err) }
                    if (result1) {
                        console.log('Update album: '+albumid+' price is successful.');
                    } else {
                        console.log('Update album: '+albumid+' price error. No result !')
                    }   
                  });    
                }
                Song.remove({_id: songid}, function(err){
                    if(err){ 
                        console.log("[DELSONGCONS] delete song error with message: "+ err);
                        let savelog= saveactivitylog(labelid, 'ACTRMSG', "[DELSONGCONS] delete song error with message: "+ err, 'STSERR');    
                        return; 
                    }
                    console.log("[DELSONGCONS] song is removed successfuly.");
                    let savelog= saveactivitylog(labelid, 'ACTRMSG', "[DELSONGCONS] song is removed successfuly.", 'STSSCS');  
                    //delete old song filename
                    const xheaders = { 'Authorization': token,
                                    'Content-Type': 'application/json' }; 
                    const xbody = { filename: songfilename,
                                    uploadpath: songuploadpath };
                    // Call notification API to delete file
                    fetch(config.filetransferurl+'/api/inputfiledelete', { 
                        method: 'POST',
                        body:    JSON.stringify(xbody),
                        headers: xheaders
                    })
                    .then(res => res.json())
                    .then(data => {
                        //console.log(data);
                        if (data.success === true) {
                            console.log("[DELSONGCONS] delete old song file successfully.");
                        } else {
                            console.log("[DELSONGCONS] error delete old song file with message: "+data.message);
                        }
                    }).catch(err => {
                        console.log("[DELSONGCONS] error delete old song file with message: "+err.message);
                    });
                    //delete old song preview
                    const body = { filename: songprvwname,
                                    uploadpath: prvwuploadpath };
                    // Call notification API to delete file
                    fetch(config.filetransferurl+'/api/inputfiledelete', { 
                        method: 'POST',
                        body:    JSON.stringify(body),
                        headers: xheaders
                    })
                    .then(res => res.json())
                    .then(data => {
                        //console.log(data);
                        if (data.success === true) {
                            console.log("[DELSONGCONS] delete old song prvw successfully.");
                        } else {
                            console.log("[DELSONGCONS] error delete old song prvw with message: "+data.message);
                        }
                    }).catch(err => {
                        console.log("[DELSONGCONS] error delete old song prvw with message: "+err.message);
                    });
                    return
                });
            }); 
        }
    });
}

function editSongConsumerChannel(q){
    
    amqpConn.createConfirmChannel(function(err, ch) {
        if (closeOnErr(err)) return ;
        ch.on("error", function(err) {
            console.error("[AMQP] channel error", err.message);
        });
        ch.on("close", function() {
            console.log("[AMQP] channel closed");
        });
        ch.prefetch(10);
        ch.assertQueue(q, { durable: false }, function(err, _ok) {
            if (closeOnErr(err)) return;
            ch.consume(q, editSongConsumer, { noAck: true });
            console.log("edit Song consumer is started");
        });

        function editSongConsumer(msg){

            let obj = JSON.parse(msg.content.toString());
            // Check for parameters
            let labelid = obj.labelid;
            let songid = obj.songid;
            let artistid = obj.artistid;
            let albumid = obj.albumid;
            let songname = obj.songname;
            let songlyric = obj.songlyric;
            let songgenre = obj.songgenre;
            let songprice = obj.songprice;
            let status = obj.status;
            let searchval = obj.songname.replace(/\s/g, "");
            var pvalbumid;
            if (songid) {
                checkSongName(labelid, artistid, albumid, songname, function(err, result) {
                    if(err){ 
                        console.log("[EDITSONGCONS] edit song " + songname + " error with message: "+ err);
                        let savelog= saveactivitylog(labelid, 'ACTUPSG', "[EDITSONGCONS] edit song " + songname + " error with message: "+ err, 'STSERR');    
                        return; 
                    }
                    //console.log('hasil: '+result);
                    if (result === 'NF') {
                        //Edit song
                        Song.findById(songid).exec(function(err, song){
                            if(err){ 
                                console.log("[EDITSONGCONS] edit song " + songname + " error with message: "+ err.message);
                                let savelog= saveactivitylog(labelid, 'ACTUPSG', "[EDITSONGCONS] edit song " + songname + " error with message: "+ err.message, 'STSERR');    
                                return; 
                            }
                                
                            if(song) {
                                pvalbumid = song.albumid;
                                song.artistid = artistid;
                                song.albumid = albumid;
                                song.songname = songname;
                                song.songlyric = songlyric;
                                song.songgenre = songgenre;
                                song.songprice = songprice;
                                song.status = status;
                                song.objartistid = artistid;
                                song.objalbumid = albumid;
                                song.modifydt = new Date();
                                song.searchstr = searchval.toUpperCase();
                                if (pvalbumid != albumid) { 
                                    rediscli.del('redis-user-songlist-'+pvalbumid+labelid); 
                                }
                            }
                            song.save(function(err) {
                                if(err){ 
                                    console.log("[EDITSONGCONS] edit song " + songname + " error with message: "+ err.message);
                                    let savelog= saveactivitylog(labelid, 'ACTUPSG', "[EDITSONGCONS] edit song " + songname + " error with message: "+ err.message, 'STSERR');    
                                    return; 
                                }
                                console.log('update previous album: '+pvalbumid);
                                updateAlbumprice(labelid, pvalbumid, function(err, result1) {
                                    if (err) { console.log('Update album: '+pvalbumid+' price error with message: '+err) }
                                    if (result1) {
                                        console.log('Update album: '+pvalbumid+' price is successful.');
                                    } else {
                                        console.log('Update album: '+pvalbumid+' price error. No result !')
                                    }   
                                }); 
                                console.log('update current album: '+albumid);
                                updateAlbumprice(labelid, albumid, function(err, result1) {
                                    if (err) { console.log('Update album: '+albumid+' price error with message: '+err) }
                                    if (result1) {
                                        console.log('Update album: '+albumid+' price is successful.');
                                    } else {
                                        console.log('Update album: '+albumid+' price error. No result !')
                                    }   
                                }); 
                                console.log("[EDITSONGCONS] song " + songname + " saved successfuly.");
                                let savelog= saveactivitylog(labelid, 'ACTUPSG', "[EDITSONGCONS] song " + songname + " saved successfuly.", 'STSSCS');    
                                //Delete redis respective keys
                                rediscli.del('redis-recentsongs','redis-user-song-'+labelid, 'redis-user-songcnt-'+labelid, 'redis-user-songlist-'+albumid+labelid);  
                                return;
                            });
                        });
                    } else {
                        if (result.id == songid) {
                            //Edit song
                            Song.findById(songid).exec(function(err, song){
                                if(err){ 
                                    console.log("[EDITSONGCONS] edit song " + songname + " error with message: "+ err.message);
                                    let savelog= saveactivitylog(labelid, 'ACTUPSG', "[EDITSONGCONS] edit song " + songname + " error with message: "+ err.message, 'STSERR');    
                                    return; 
                                }
                                    
                                if(song) {
                                    pvalbumid = song.albumid;
                                    song.artistid = artistid;
                                    song.albumid = albumid;
                                    song.songname = songname;
                                    song.songlyric = songlyric;
                                    song.songgenre = songgenre;
                                    song.songprice = songprice;
                                    song.status = status;
                                    song.objartistid = artistid;
                                    song.objalbumid = albumid;
                                    song.modifydt = new Date();
                                    song.searchstr = searchval.toUpperCase();
                                    if (pvalbumid != albumid) { 
                                        rediscli.del('redis-user-songlist-'+pvalbumid+labelid); 
                                    }
                                }
                                song.save(function(err) {
                                    if(err){ 
                                        console.log("[EDITSONGCONS] edit song " + songname + " error with message: "+ err.message);
                                        let savelog= saveactivitylog(labelid, 'ACTUPSG', "[EDITSONGCONS] edit song " + songname + " error with message: "+ err.message, 'STSERR');    
                                        return; 
                                    }
                                    console.log('update previous album: '+pvalbumid);
                                    updateAlbumprice(labelid, pvalbumid, function(err, result1) {
                                        if (err) { console.log('Update album: '+pvalbumid+' price error with message: '+err) }
                                        if (result1) {
                                            console.log('Update album: '+pvalbumid+' price is successful.');
                                        } else {
                                            console.log('Update album: '+pvalbumid+' price error. No result !')
                                        }   
                                    }); 
                                    console.log('update current album: '+albumid);
                                    updateAlbumprice(labelid, albumid, function(err, result1) {
                                        if (err) { console.log('Update album: '+albumid+' price error with message: '+err) }
                                        if (result1) {
                                            console.log('Update album: '+albumid+' price is successful.');
                                        } else {
                                            console.log('Update album: '+albumid+' price error. No result !')
                                        }   
                                    }); 
                                    console.log("[EDITSONGCONS] song " + songname + " saved successfuly.");
                                    let savelog= saveactivitylog(labelid, 'ACTUPSG', "[EDITSONGCONS] song " + songname + " saved successfuly.", 'STSSCS');    
                                    //Delete redis respective keys
                                    rediscli.del('redis-recentsongs','redis-user-song-'+labelid, 'redis-user-songcnt-'+labelid, 'redis-user-songlist-'+albumid+labelid);  
                                    return;
                                });
                            });                            
                        } else {
                            console.log("[EDITSONGCONS] edit song " + result.songname + " error. Songname already exists.");
                            let savelog= saveactivitylog(labelid, 'ACTUPSG', "[EDITSONGCONS] edit song " + result.songname + " error. Songname already exists.", 'STSERR');
                            return;
                        }
                    }
                });     
            }else {
                console.log("[EDITSONGCONS] edit song " + songname + " error with message: No song selected !");
                let savelog= saveactivitylog(labelid, 'ACTUPSG', "[EDITSONGCONS] edit song " + songname + " error with message: No song selected !", 'STSERR');    
                return; 
            }
        }
    });
}

function addAlbumConsumerChannel(q){
    
    amqpConn.createConfirmChannel(function(err, ch) {
        if (closeOnErr(err)) return ;
        ch.on("error", function(err) {
            console.error("[AMQP] channel error", err.message);
        });
        ch.on("close", function() {
            console.log("[AMQP] channel closed");
        });
        ch.prefetch(10);
        ch.assertQueue(q, { durable: false }, function(err, _ok) {
            if (closeOnErr(err)) return;
            ch.consume(q, addAlbumConsumer, { noAck: true });
            console.log("add Album consumer is started");
        });

        function addAlbumConsumer(msg){

            let obj = JSON.parse(msg.content.toString());
            // Check for parameters
            let labelid = obj.labelid;
            let artistid = obj.artistid;
            let albumname = obj.albumname;
            let albumyear = obj.albumyear;
            let albumgenre = obj.albumgenre;
            //let albumprice = obj.albumprice;
            let albumphotopath = obj.albumphotopath;
            let albumphotoname = obj.albumphotoname;
            let status = obj.status;
            let albumid = obj.albumid;
            let searchval = obj.albumname.replace(/\s/g, "");

            if (albumid) {
                checkAlbumName(labelid, artistid, albumname, function(err, result) {
                    if(err){ 
                        console.log("[EDITALBUMCONS] edit album " + albumname + " error with message: "+ err);
                        let savelog= saveactivitylog(labelid, 'ACTUPAL', "[EDITALBUMCONS] edit album " + albumname + " error with message: "+ err, 'STSERR');    
                        return; 
                    }
                    //console.log('hasil: '+result);
                    if (result === 'NF') {
                        //Edit album
                        Album.findById(albumid).exec(function(err, album){
                            if(err){ 
                                console.log("[EDITALBUMCONS] edit album " + albumname + " error with message: "+ err.message);
                                let savelog= saveactivitylog(labelid, 'ACTUPAL', "[EDITALBUMCONS] edit album " + albumname + " error with message: "+ err.message, 'STSERR');    
                                return; 
                            }
                                
                            if(album) {
                                const pvartistid = album.artistid;
                                album.artistid = artistid,
                                album.albumname = albumname;
                                album.albumyear = albumyear;
                                album.albumgenre = albumgenre;
                                //album.albumprice = albumprice;
                                album.status = status;
                                album.searchstr = searchval.toUpperCase();
                                album.objartistid = artistid;
                                album.modifydt = new Date();
                                if (pvartistid != artistid) { rediscli.del('redis-user-artistalbumlist-'+pvartistid+labelid) }
                            }
                            album.save(function(err) {
                                if(err){ 
                                    console.log("[EDITALBUMCONS] edit album " + albumname + " error with message: "+ err.message);
                                    let savelog= saveactivitylog(labelid, 'ACTUPAL', "[EDITALBUMCONS] edit album " + albumname + " error with message: "+ err.message, 'STSERR');    
                                    return; 
                                }
                                //Delete redis respective keys
                                rediscli.del('redis-user-album-'+labelid, 'redis-user-albumcnt-'+labelid, 'redis-user-artistalbumlist-'+artistid+labelid, 'redis-user-albumlist-'+labelid);
                                console.log("[EDITALBUMCONS] album " + albumname + " saved successfuly.");
                                let savelog= saveactivitylog(labelid, 'ACTUPAL', "[EDITALBUMCONS] album " + albumname + " saved successfuly.", 'STSSCS');    
                                return; 
                            });
                        });

                    } else {
                        if (result == albumid) {
                            //Edit album
                            Album.findById(albumid).exec(function(err, album){
                                if(err){ 
                                    console.log("[EDITALBUMCONS] edit album " + albumname + " error with message: "+ err.message);
                                    let savelog= saveactivitylog(labelid, 'ACTUPAL', "[EDITALBUMCONS] edit album " + albumname + " error with message: "+ err.message, 'STSERR');    
                                    return; 
                                }
                                    
                                if(album) {
                                    const pvartistid = album.artistid;
                                    album.artistid = artistid,
                                    album.albumname = albumname;
                                    album.albumyear = albumyear;
                                    album.albumgenre = albumgenre;
                                    //album.albumprice = albumprice;
                                    album.status = status;
                                    album.searchstr = searchval.toUpperCase();
                                    album.objartistid = artistid;
                                    album.modifydt = new Date();
                                    if (pvartistid != artistid) { rediscli.del('redis-user-artistalbumlist-'+pvartistid+labelid) }
                                }
                                album.save(function(err) {
                                    if(err){ 
                                        console.log("[EDITALBUMCONS] edit album " + albumname + " error with message: "+ err.message);
                                        let savelog= saveactivitylog(labelid, 'ACTUPAL', "[EDITALBUMCONS] edit album " + albumname + " error with message: "+ err.message, 'STSERR');    
                                        return; 
                                    }
                                    //Delete redis respective keys
                                    rediscli.del('redis-user-album-'+labelid, 'redis-user-albumcnt-'+labelid, 'redis-user-artistalbumlist-'+artistid+labelid, 'redis-user-albumlist-'+labelid);
                                    console.log("[EDITALBUMCONS] album " + albumname + " saved successfuly.");
                                    let savelog= saveactivitylog(labelid, 'ACTUPAL', "[EDITALBUMCONS] album " + albumname + " saved successfuly.", 'STSSCS');    
                                    return; 
                                });
                            });
                        } else {
                            console.log("[EDITALBUMCONS] error edit album " + albumname + ". Albumname already exists.");
                            let savelog= saveactivitylog(labelid, 'ACTUPAL', "[EDITALBUMCONS] error edit album " + albumname + ". Albumname already exists.", 'STSERR');    
                            return; 
                        }
                    }
                });
                
    
            }else {
                checkAlbumName(labelid, artistid, albumname, function(err, result) {
                    if(err){ 
                        console.log("[ADDALBUMCONS] add album " + albumname + " error with message: "+ err);
                        let savelog= saveactivitylog(labelid, 'ACTADAL', "[ADDALBUMCONS] add album " + albumname + " error with message: "+ err, 'STSERR');    
                        return; 
                    }
                    //console.log('hasil: '+result);
                    if (result === 'NF') {
                        let oAlbum = new Album({
                            labelid: labelid,
                            artistid: artistid,
                            albumname: albumname,
                            albumyear: albumyear,
                            albumgenre: albumgenre,
                            albumcntrate:1,
                            albumrate: 5,
                            albumprice: 0,
                            albumphotopath: albumphotopath,
                            albumphotoname: albumphotoname,
                            status: status,
                            searchstr: searchval.toUpperCase(),
                            objartistid: artistid,
                            objlabelid: labelid,
                            createddt: new Date(),
                            modifydt: new Date()
                        });
                
                        oAlbum.save(function(err) {
                            if(err){ 
                                console.log("[ADDALBUMCONS] add album " + albumname + " error with message: "+ err.message);
                                let savelog= saveactivitylog(labelid, 'ACTADAL', "[ADDALBUMCONS] add album " + albumname + " error with message: "+ err.message, 'STSERR');    
                                return; 
                            }
                            //Delete redis respective keys
                            rediscli.del('redis-user-album-'+labelid, 'redis-user-albumcnt-'+labelid, 'redis-user-artistalbumlist-'+artistid+labelid, 'redis-user-albumlist-'+labelid);    
                            console.log("[ADDALBUMCONS] album " + albumname + " saved successfuly.");
                            let savelog= saveactivitylog(labelid, 'ACTADAL', "[ADDALBUMCONS] album " + albumname + " saved successfuly.", 'STSSCS');    
                            return; 
                        });
                    } else {
                        console.log("[ADDALBUMCONS] error saving album " + albumname + ". Album name already exists.");
                        let savelog= saveactivitylog(labelid, 'ACTADAL', "[ADDALBUMCONS] error saving album " + albumname + ". Album name already exists.", 'STSERR');    
                        return; 
                    }
                });
            }
        }
    });
}

function editAlbumphotoConsumerChannel(q){
    
    amqpConn.createConfirmChannel(function(err, ch) {
        if (closeOnErr(err)) return ;
        ch.on("error", function(err) {
            console.error("[AMQP] channel error", err.message);
        });
        ch.on("close", function() {
            console.log("[AMQP] channel closed");
        });
        ch.prefetch(10);
        ch.assertQueue(q, { durable: false }, function(err, _ok) {
            if (closeOnErr(err)) return;
            ch.consume(q, editAlbumphotoConsumer, { noAck: true });
            console.log("edit Album photo consumer is started");
        });

        function editAlbumphotoConsumer(msg){

            let obj = JSON.parse(msg.content.toString());
            // Assign the parametrs
            let albumphotoname = obj.albumphotoname;
            let albumphotopath = obj.albumphotopath;
            let oldalbumphotoname = obj.oldalbumphotoname;
            let uploadpath = obj.uploadpath;
            let albumid = obj.albumid;
            let labelid = obj.labelid;
            let token = obj.token;

            Album.findById(albumid).exec(function(err, album){
                if(err){
                    console.log("[EDITALBUMPHCONS] edit album photo error with message: "+ err);
                    let savelog= saveactivitylog(labelid, 'ACTPHAL', "[EDITALBUMPHCONS] edit album photo error with message: "+ err, 'STSERR');    
                    return;  
                }
                    
                if(album){
                    album.albumphotopath = albumphotopath;
                    album.albumphotoname = albumphotoname;
                    album.modifydt = new Date();
                }
                album.save(function(err){
                    if(err){ 
                        console.log("[EDITALBUMPHCONS] edit album photo error with message: "+ err);
                        let savelog= saveactivitylog(labelid, 'ACTPHAL', "[EDITALBUMPHCONS] edit album photo error with message: "+ err, 'STSERR');    
                        return; 
                    }
                    console.log("[EDITALBUMPHCONS] album photo saved successfuly.");
                    let savelog= saveactivitylog(labelid, 'ACTPHAL', "[EDITALBUMPHCONS] album photo saved successfuly.", 'STSSCS');    
                    //delete old artist photo filename
                    const xheaders = { 'Authorization': token,
                                'Content-Type': 'application/json' }; 
                    const xbody = { filename: oldalbumphotoname,
                                    uploadpath: uploadpath };
                    // Call notification API to delete file
                    fetch(config.filetransferurl+'/api/inputfiledelete', { 
                        method: 'POST',
                        body:    JSON.stringify(xbody),
                        headers: xheaders
                    })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.success === true) {
                            console.log("[EDITALBUMPHCONS] delete old file successfully.");
                        } else {
                            console.log("[EDITALBUMPHCONS] error delete old file with message: "+data.message);
                        }
                    }).catch(err => {
                        console.log("[EDITALBUMPHCONS] error delete old file with message: "+err.message);
                    });
                    return; 
                });
            });
        }
    });
}

function deleteAlbumConsumerChannel(q){
    
    amqpConn.createConfirmChannel(function(err, ch) {
        if (closeOnErr(err)) return ;
        ch.on("error", function(err) {
            console.error("[AMQP] channel error", err.message);
        });
        ch.on("close", function() {
            console.log("[AMQP] channel closed");
        });
        ch.prefetch(10);
        ch.assertQueue(q, { durable: false }, function(err, _ok) {
            if (closeOnErr(err)) return;
            ch.consume(q, deleteAlbumConsumer, { noAck: true });
            console.log("delete Album consumer is started");
        });

        function deleteAlbumConsumer(msg){

            let obj = JSON.parse(msg.content.toString());
            // Assign the parametrs
            let albumphotoname = obj.albumphotoname;
            let uploadpath = obj.uploadpath;
            let albumid = obj.albumid;
            let labelid = obj.labelid;
            let token = obj.token;
            
            Album.findById(albumid).exec(function(err, album){ 
                if(err){ 
                    console.log("[DELALBUMCONS] delete album error with message: "+ err);
                    let savelog= saveactivitylog(labelid, 'ACTRMAL', "[DELALBUMCONS] delete album error with message: "+ err, 'STSERR');    
                    return;  
                }
                if(album) {
                    let labelid = album.labelid;
                    let artistid = album.artistid;
                    //Delete redis respective keys
                    rediscli.del('redis-user-album-'+labelid, 'redis-user-albumcnt-'+labelid, 'redis-user-artistalbumlist-'+artistid+labelid, 'redis-user-albumlist-'+labelid);    
                }
                Album.remove({_id: albumid}, function(err){
                    if(err){ 
                        console.log("[DELALBUMCONS] delete album error with message: "+ err);
                        let savelog= saveactivitylog(labelid, 'ACTRMAL', "[DELALBUMCONS] delete album error with message: "+ err, 'STSERR');    
                        return; 
                    }
                    
                    console.log("[DELALBUMCONS] album is removed successfuly.");
                    let savelog= saveactivitylog(labelid, 'ACTRMAL', "[DELALBUMCONS] album is removed successfuly.", 'STSSCS');    
                    //delete old artist photo filename
                    const xheaders = { 'Authorization': token,
                                    'Content-Type': 'application/json' }; 
                    const xbody = { filename: albumphotoname,
                                    uploadpath: uploadpath };
                    // Call notification API to delete file
                    fetch(config.filetransferurl+'/api/inputfiledelete', { 
                        method: 'POST',
                        body:    JSON.stringify(xbody),
                        headers: xheaders
                    })
                    .then(res => res.json())
                    .then(data => {
                        //console.log(data);
                        if (data.success === true) {
                            console.log("[DELALBUMCONS] delete old file successfully.");
                        } else {
                            console.log("[DELALBUMCONS] error delete old file with message: "+data.message);
                        }
                    }).catch(err => {
                        console.log("[DELALBUMCONS] error delete old file with message: "+err.message);
                    });
                    return; 
                });
            });
        }
    });
}

function actionPaymentConsumerChannel(q) {
    amqpConn.createConfirmChannel(function(err, ch) {
        if (closeOnErr(err)) return ;
        ch.on("error", function(err) {
            console.error("[AMQP] channel error", err.message);
        });
        ch.on("close", function() {
            console.log("[AMQP] channel closed");
        });
        ch.prefetch(10);
        ch.assertQueue(q, { durable: false }, function(err, _ok) {
            if (closeOnErr(err)) return;
            ch.consume(q, actionPaymentConsumer, { noAck: true });
            console.log("action Payment consumer is started");
        });
        
        function actionPaymentConsumer(msg) {
            let obj = JSON.parse(msg.content.toString());
            // Assign the parametrs

            let labelid = obj.labelid;
            let songpurchaseid = obj.songpurchaseid;
            let status = obj.status;
            let listenerid = obj.listenerid;
            let paymentmtd = obj.paymentmtd;
            let producttype = obj.producttype;
            let songid = obj.songid;
            let dbcr = obj.dbcr;
            let amount = obj.amount;
            var errmsg = '';

            if (status === 'STSAPV') {
                Songpurchase.findById(songpurchaseid).exec(function(err, songpurchase){
                    if(err){ 
                        console.log("[PURCHASECONS] purchasing error with message: "+ err);
                        let savelog= saveactivitylog(labelid, 'ACTBUYS', "[PURCHASECONS] purchasing error with message: "+ err, 'STSERR');    
                        return;  
                    }
                        
                    if(songpurchase){
                        let labelid = songpurchase.labelid;
                        songpurchase.status = status;
                        songpurchase.approvedt = new Date();
                        songpurchase.save(function(err){
                            if(err){ 
                                console.log("[PURCHASECONS] purchasing error with message: "+ err);
                                let savelog= saveactivitylog(labelid, 'ACTBUYS', "[PURCHASECONS] purchasing error with message: "+ err, 'STSERR');    
                                return;  
                            }        
                            //Delete redis respective keys
                            rediscli.del('redis-user-pendingsongpurchase-cnt-'+labelid);
                            console.log("[PURCHASECONS] purchasing approved successfully.");
                            //let savelog= saveactivitylog(labelid, 'ACTBUYS', "[PURCHASECONS] purchasing approved successfully.", 'STSSCS');    
                            // Add new transaction
                            let oTransaction = new Transaction({
                                labelid: labelid,
                                listenerid: listenerid,
                                purchaseid: songpurchaseid,
                                producttype: producttype,
                                productid: songid,
                                paymentmtd: paymentmtd,
                                dbcr: dbcr,
                                amount: amount,
                                transactiondt: new Date(),
                                objlistenerid: listenerid,
                                objlabelid: labelid,
                                objpurchaseid: songpurchaseid,
                                objproductid: songid
                            });

                            oTransaction.save(function(err) {
                                if(err){ 
                                    console.log("[PURCHASECONS] saving transaction error with message: "+ err);
                                    //let savelog= saveactivitylog(labelid, 'ACTBUYS', "[PURCHASECONS] saving transaction error with message: "+ err, 'STSERR');    
                                    //return;
                                    errmsg = errmsg + "saving transaction error with message: "+ err; 
                                } else {
                                    console.log("[PURCHASECONS] purchasing approved successfully. Transaction saved successfully.");
                                    //let savelog= saveactivitylog(labelid, 'ACTBUYS', "[PURCHASECONS] purchasing approved successfully. Transaction saved successfully.", 'STSSCS');    
                                    //Delete redis respective keys
                                    //rediscli.del('redis-user-songpurchase-'+labelid, 'redis-user-songpurchasecnt-'+labelid);
                                }       
                            });

                            Song.findById(songid).exec(function(err, song){
                                if(err){ 
                                    console.log("[PURCHASECONS] songbuy increment error with message: "+ err);
                                    //let savelog= saveactivitylog(labelid, 'ACTBUYS', "[PURCHASECONS] songbuy increment error with message: "+ err, 'STSERR');    
                                    //return;
                                    errmsg = errmsg + "[PURCHASECONS] songbuy increment error with message: "+ err;  
                                }                                        
                                    
                                if(song){
                                    let labelid = song.labelid;
                                    let albumid = song.albumid;
                                    song.songbuy = song.songbuy + 1 ;
                                    song.save(function(err){
                                        if(err){ 
                                            console.log("[PURCHASECONS] songbuy increment error with message: "+ err);
                                            //let savelog= saveactivitylog(labelid, 'ACTBUYS', "[PURCHASECONS] songbuy increment error with message: "+ err, 'STSERR');    
                                            //return;
                                            errmsg = errmsg + "[PURCHASECONS] songbuy increment error with message: "+ err;  
                                        } else {                                       
                                            console.log("[PURCHASECONS] songbuy increment saved successfully.");
                                            //Delete redis respective keys
                                            rediscli.del('redis-topsongs-'+listenerid, 'redis-recentsongs','redis-topsongs','redis-topsongs-chart','redis-user-song-'+labelid, 'redis-user-songlist-'+albumid+labelid);
                                        }
                                    });
                                }
                            });
                            if (errmsg) {
                                console.log("[PURCHASECONS] purchasing approved error with message: "+ errmsg);
                                let savelog= saveactivitylog(labelid, 'ACTBUYS', "[PURCHASECONS] purchasing approved error with message: "+ errmsg, 'STSERR');    
                                return
                            } else {
                                console.log("[PURCHASECONS] purchasing approved successfully.");
                                let savelog= saveactivitylog(labelid, 'ACTBUYS', "[PURCHASECONS] purchasing is approved successfully.", 'STSSCS');    
                                return
                            }
                        });  
                    }
                });
            } else if (status === 'STSRJCT') {
                Songpurchase.findById(songpurchaseid).exec(function(err, songpurchase){
                    if(err){ 
                        console.log("[PURCHASECONS] purchasing error with message: "+ err);
                        let savelog= saveactivitylog(labelid, 'ACTBUNO', "[PURCHASECONS] purchasing error with message: "+ err, 'STSERR');    
                        return;  
                    }
                        
                    if(songpurchase){
                        let labelid = songpurchase.labelid;
                        songpurchase.status = status;
                        songpurchase.approvedt = new Date();
                        songpurchase.save(function(err){
                            if(err){ 
                                console.log("[PURCHASECONS] purchasing error with message: "+ err);
                                let savelog= saveactivitylog(labelid, 'ACTBUNO', "[PURCHASECONS] purchasing error with message: "+ err, 'STSERR');    
                                return;  
                            }
                            //Delete redis respective keys
                            rediscli.del('redis-user-pendingsongpurchase-cnt-'+labelid);                            
                            console.log("[PURCHASECONS] purchasing rejected successfully.");
                            let savelog= saveactivitylog(labelid, 'ACTBUNO', "[PURCHASECONS] purchasing rejected successfully.", 'STSSCS');    
                            return;  
                        });  
                    }
                });
            } else {
                console.log("[PURCHASECONS] there is no purchasing data to be processed.");
                return; 
            }
        }    
    });
}

function actionPaymentCodaConsumerChannel(q) {
    amqpConn.createConfirmChannel(function(err, ch) {
        if (closeOnErr(err)) return ;
        ch.on("error", function(err) {
            console.error("[AMQP] channel error", err.message);
        });
        ch.on("close", function() {
            console.log("[AMQP] channel closed");
        });
        ch.prefetch(10);
        ch.assertQueue(q, { durable: false }, function(err, _ok) {
            if (closeOnErr(err)) return;
            ch.consume(q, actionPaymentCodaConsumer, { noAck: true });
            console.log("action Payment Coda consumer is started");
        });
        
        function actionPaymentCodaConsumer(msg) {
            let obj = JSON.parse(msg.content.toString());
            // Assign the parametrs
            let TxnId = obj.TxnId;
            let OrderId = obj.OrderId;
            let ResultCode = obj.ResultCode;
            let TotalPrice = obj.TotalPrice;
            let PaymentType = obj.PaymentType;
            let Checksum = obj.Checksum;
            let MnoId = obj.MnoId;
            var errmsg = '';
            var paymentmtd = '';
            if (PaymentType == 1) {
                paymentmtd = 'PMTPULSA';
            } else if (PaymentType == 227) {
                paymentmtd = 'PMTGOPAY';
            }
            var oFee = obj.oFee;
            var trxfee = parseInt(oFee) * parseInt(TotalPrice) / 100 ;
            var trxamt = parseInt(TotalPrice) - trxfee;
            console.log(String(trxamt));
            Songpurchase.findById(OrderId).exec(function(err, songpurchase){
                if(err){ 
                    console.log("[PURCHASECONS] purchasing using CODAPAY error with message: "+ err);
                    let savelog= saveactivitylog('', 'ACTBUYS', "[PURCHASECONS] purchasing using CODAPAY error with message: "+ err, 'STSERR');    
                    return;  
                }
                    
                if(songpurchase){

                    let pvstatus = songpurchase.status;
                    if (pvstatus === 'STSPEND') {
                        songpurchase.status = 'STSAPV';
                        songpurchase.approvedt = new Date();
                        let labelid = songpurchase.labelid;
                        let listenerid = songpurchase.listenerid;
                        let songid = songpurchase.songid;

                        songpurchase.save(function(err){
                            if(err){ 
                                console.log("[PURCHASECONS] purchasing using CODAPAY error with message: "+ err);
                                let savelog= saveactivitylog(labelid, 'ACTBUYS', "[PURCHASECONS] purchasing using CODAPAY error with message: "+ err, 'STSERR');    
                                return;  
                            }        
                            //Delete redis respective keys
                            rediscli.del('redis-user-pendingsongpurchase-cnt-'+labelid);
                            console.log("[PURCHASECONS] purchasing using CODAPAY approved successfully.");
                            //let savelog= saveactivitylog(labelid, 'ACTBUYS', "[PURCHASECONS] purchasing approved successfully.", 'STSSCS');    
                            // Add new transaction
                            let oTransaction = new Transaction({
                                labelid: labelid,
                                listenerid: listenerid,
                                purchaseid: OrderId,
                                producttype: 'SONG',
                                productid: songid,
                                paymentmtd: paymentmtd,
                                dbcr: '+',
                                amount: trxamt,
                                transactiondt: new Date(),
                                objlistenerid: listenerid,
                                objlabelid: labelid,
                                objpurchaseid: OrderId,
                                objproductid: songid
                            });
    
                            oTransaction.save(function(err) {
                                if(err){ 
                                    console.log("[PURCHASECONS] saving CODAPAY transaction error with message: "+ err);
                                    //let savelog= saveactivitylog(labelid, 'ACTBUYS', "[PURCHASECONS] saving transaction error with message: "+ err, 'STSERR');    
                                    //return;
                                    errmsg = errmsg + "saving CODAPAY transaction error with message: "+ err; 
                                } else {
                                    console.log("[PURCHASECONS] purchasing using CODAPAY approved successfully. CODAPAY Transaction saved successfully.");
                                    //let savelog= saveactivitylog(labelid, 'ACTBUYS', "[PURCHASECONS] purchasing approved successfully. Transaction saved successfully.", 'STSSCS');    
                                    //Delete redis respective keys
                                    //rediscli.del('redis-user-songpurchase-'+labelid, 'redis-user-songpurchasecnt-'+labelid);
                                }       
                            });
    
                            Song.findById(songid).exec(function(err, song){
                                if(err){ 
                                    console.log("[PURCHASECONS] songbuy increment error with message: "+ err);
                                    //let savelog= saveactivitylog(labelid, 'ACTBUYS', "[PURCHASECONS] songbuy increment error with message: "+ err, 'STSERR');    
                                    //return;
                                    errmsg = errmsg + "[PURCHASECONS] songbuy increment error with message: "+ err;  
                                }                                        
                                    
                                if(song){
                                    let labelid = song.labelid;
                                    let albumid = song.albumid;
                                    song.songbuy = song.songbuy + 1 ;
                                    song.save(function(err){
                                        if(err){ 
                                            console.log("[PURCHASECONS] songbuy increment error with message: "+ err);
                                            //let savelog= saveactivitylog(labelid, 'ACTBUYS', "[PURCHASECONS] songbuy increment error with message: "+ err, 'STSERR');    
                                            //return;
                                            errmsg = errmsg + "[PURCHASECONS] songbuy increment error with message: "+ err;  
                                        } else {                                       
                                            console.log("[PURCHASECONS] songbuy increment saved successfully.");
                                            //Delete redis respective keys
                                            rediscli.del('redis-topsongs-'+listenerid, 'redis-recentsongs','redis-topsongs','redis-topsongs-chart','redis-user-song-'+labelid, 'redis-user-songlist-'+albumid+labelid);
                                        }
                                    });
                                }
                            });
                            if (errmsg) {
                                console.log("[PURCHASECONS] purchasing using CODAPAY error with message: "+ errmsg);
                                let savelog= saveactivitylog(labelid, 'ACTBUYS', "[PURCHASECONS] purchasing using CODAPAY approval error with message: "+ errmsg, 'STSERR');    
                                return
                            } else {
                                console.log("[PURCHASECONS] purchasing using CODAPAY approved successfully.");
                                let savelog= saveactivitylog(labelid, 'ACTBUYS', "[PURCHASECONS] purchasing using CODAPAY is approved successfully.", 'STSSCS');    
                                return
                            }
                        });  
                    }
                }
            });
            
        }    
    });
}

function updatelabelstatusConsumerChannel(q){
    
    amqpConn.createConfirmChannel(function(err, ch) {
        if (closeOnErr(err)) return ;
        ch.on("error", function(err) {
            console.error("[AMQP] channel error", err.message);
        });
        ch.on("close", function() {
            console.log("[AMQP] channel closed");
        });
        ch.prefetch(10);
        ch.assertQueue(q, { durable: false }, function(err, _ok) {
            if (closeOnErr(err)) return;
            ch.consume(q, updatelabelstatusConsumer, { noAck: true });
            console.log("update Label status consumer is started");
        });

        function updatelabelstatusConsumer(msg){
            // ASSIGN the parameters
            let obj = JSON.parse(msg.content.toString());
            
            let adminid = obj.adminid;
            let labelid = obj.labelid;
            let status = obj.status;
            let emailto = obj.emailto;
            let vlink = obj.vlink;
            let username = obj.username;

            User.findById(labelid).exec(function(err, user){
                if(err){
                    console.error('[UPDLABELSTATSCONS] Error processing request finding user '+ username, err); 
                    let savelog= saveactivitylog(adminid, 'ACTLBST', '[UPDLABELSTATSCONS] Error processing request finding user '+ username +'. '+err.message, 'STSERR');
                    return;  
                }
                    
                if(user){
                    user.status = status;
                    user.save(function(err){
                        if(err){
                            console.error('[UPDLABELSTATSCONS] Error processing request save status user '+ username, err); 
                            let savelog= saveactivitylog(adminid, 'ACTLBST', '[UPDLABELSTATSCONS] Error processing request save status user '+ username +'. '+err.message, 'STSERR');
                            return;  
                        }
                        console.log("[UPDLABELSTATSCONS] Label User " + username + " status updated successfully.");
                        let savelog= saveactivitylog(adminid, 'ACTLBST', "[UPDLABELSTATSCONS] Label User " + username + " status updated successfully.", 'STSSCS');
                    });
                }
            });
            const zheaders = { 'Content-Type': 'application/json' }
            switch (status) {
                case 'STSACT':
                    const body = { emailto: emailto,
                                    vlink: vlink,
                                    username: username };
                    //var sentsts = false;             
                    // Call notification API to send verification email
                    fetch(config.notifurl+'/welcomemail', { 
                        method: 'POST',
                        body:    JSON.stringify(body),
                        headers: zheaders
                    })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.success === true) {
                            console.log("[UPDLABELSTATSCONS] welcome email to Label User " + username + " is sent successfully.");
                            let savelog= saveactivitylog('', 'ACTLBST', "[UPDLABELSTATSCONS] welcome email to Label User " + username + " is sent successfully.", 'STSSCS');
                        } else {
                            console.log("[UPDLABELSTATSCONS] error sending welcome email to Label User " + username + " with message: "+ data.message);
                            let savelog= saveactivitylog('', 'ACTLBST', "[UPDLABELSTATSCONS] error sending welcome email to Label User " + username + " with message: "+ data.message, 'STSERR');
                        }
                    })
                    .catch(err => {
                        console.log("[UPDLABELSTATSCONS] error sending welcome email to Label User " + username + " with message: "+ err.message);
                        let savelog= saveactivitylog('', 'ACTLBST', "[UPDLABELSTATSCONS] error sending welcome email to Label User " + username + " with message: "+ err.message, 'STSERR');
                    });
                    break; 
                case 'STSINACT':
                    const zbody = { emailto: emailto,
                                    username: username };
                    //var sentsts = false;             
                    // Call notification API to send verification email
                    fetch(config.notifurl+'/deactivationemail', { 
                        method: 'POST',
                        body:    JSON.stringify(zbody),
                        headers: zheaders
                    })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.success === true) {
                            console.log("[UPDLABELSTATSCONS] deactivation email to Label User " + username + " is sent successfully.");
                            let savelog= saveactivitylog('', 'ACTLBST', "[UPDLABELSTATSCONS] deactivation email to Label User " + username + " is sent successfully.", 'STSSCS');
                        } else {
                            console.log("[UPDLABELSTATSCONS] error sending deactivation email to Label User " + username + " with message: "+ data.message);
                            let savelog= saveactivitylog('', 'ACTLBST', "[UPDLABELSTATSCONS] error sending deactivation email to Label User " + username + " with message: "+ data.message, 'STSERR');
                        }
                    })
                    .catch(err => {
                        console.log("[UPDLABELSTATSCONS] error sending deactivation email to Label User " + username + " with message: "+ err.message);
                        let savelog= saveactivitylog('', 'ACTLBST', "[UPDLABELSTATSCONS] error sending deactivation email to Label User " + username + " with message: "+ err.message, 'STSERR');
                    });
                    break; 
                case 'STSRJCT':
                    console.log("[UPDLABELSTATSCONS] no sending any email to Label User " + username + " with status rejected.");
                    break;     
                default: 
                    console.log("[UPDLABELSTATSCONS] no sending any email to Label User " + username + ". Status is updated.");
            }
            return;
        }
    });
}

function emailverificationConsumerChannel(q){
    
    amqpConn.createConfirmChannel(function(err, ch) {
        if (closeOnErr(err)) return ;
        ch.on("error", function(err) {
          console.error("[AMQP] channel error", err.message);
        });
        ch.on("close", function() {
          console.log("[AMQP] channel closed");
        });
        ch.prefetch(10);
        ch.assertQueue(q, { durable: false }, function(err, _ok) {
          if (closeOnErr(err)) return;
          ch.consume(q, emailverificationConsumer, { noAck: true });
          console.log("email verification consumer is started");
        });
        function emailverificationConsumer(msg){

            let obj = JSON.parse(msg.content.toString());
            // Check for input errors
            let userid = obj.userid;
            let name = obj.name;
            let email = obj.email;
            let username = obj.username;
            let link = obj.link;
            let randhash = obj.randhash;

            User.findOne({ username: username, status:'STSACT' }, function(err, existingUser) {
                if(err){ 
                    console.error('[EMAILVERCONS] Error processing request finding user ', err); 
                    return;  
                }
        
                if (existingUser) {
                   
                   if (existingUser.vhash) {
                        console.log('[EMAILVERCONS] vhash has been provided. ');
                        //send email reset passwd
                        const headers = { 'Content-Type': 'application/json' } 
                        const body = { emailto: email,
                                    vlink: link };
                        var sentsts = false;             
                        // Call notification API to send verification email
                        fetch(config.notifurl+'/sendverification', { 
                            method: 'POST',
                            body:    JSON.stringify(body),
                            headers: headers
                        })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.success === true) {
                                sentsts = true
                                console.log("[EMAILVERCONS] Email verification has been sent to " + email +". Email sent?: "+ sentsts);
                                let savelog= saveactivitylog(userid, 'ACTEMVR', "[EMAILVERCONS] Email verification has been sent to " + email +". Email sent?: "+ sentsts, 'STSSCS');
                            } else {
                                console.log("[EMAILVERCONS] Email verification failed to be sent to " + email +". Email sent?: "+ sentsts);
                                let savelog= saveactivitylog(userid, 'ACTEMVR', "[EMAILVERCONS] Email verification failed to be sent to " + email +". Email sent?: "+ sentsts, 'STSERR');
                            }
                            return;
                        })
                        .catch(err => {
                            console.log("[EMAILVERCONS] Email verification failed to be sent to " + email +". Email sent?: "+ sentsts);
                            //add to activity log
                            let savelog= saveactivitylog(userid, 'ACTEMVR', "[EMAILVERCONS] Email verification failed to be sent to " + email +". Email sent?: "+ sentsts, 'STSERR');
                            return;
                        });
                   } else {
                        existingUser.vhash = randhash;
                        existingUser.save(function(err) {
                            if(err){
                                console.error('[EMAILVERCONS] Error processing request when saving user hash value. ', err); 
                                let savelog= saveactivitylog(userid, 'ACTEMVR', '[EMAILVERCONS] Error processing request when saving user hash value. '+ err.message, 'STSERR');
                                return; 
                            }
                            //send email reset passwd
                            const headers = { 'Content-Type': 'application/json' } 
                            const body = { emailto: email,
                                        vlink: link };
                            var sentsts = false;             
                            // Call notification API to send verification email
                            fetch(config.notifurl+'/sendverification', { 
                                method: 'POST',
                                body:    JSON.stringify(body),
                                headers: headers
                            })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data);
                                if (data.success === true) {
                                    sentsts = true
                                    console.log("[EMAILVERCONS] Email verification has been sent to " + email +". Email sent?: "+ sentsts);
                                    let savelog= saveactivitylog(userid, 'ACTEMVR', "[EMAILVERCONS] Email verification has been sent to " + email +". Email sent?: "+ sentsts, 'STSSCS');
                                } else {
                                    console.log("[EMAILVERCONS] Email verification failed to be sent to " + email +". Email sent?: "+ sentsts);
                                    let savelog= saveactivitylog(userid, 'ACTEMVR', "[EMAILVERCONS] Email verification failed to be sent to " + email +". Email sent?: "+ sentsts, 'STSERR');
                                }
                                return;
                            })
                            .catch(err => {
                                console.log("[EMAILVERCONS] Email verification failed to be sent to " + email +". Email sent?: "+ sentsts);
                                //add to activity log
                                let savelog= saveactivitylog(userid, 'ACTEMVR', "[EMAILVERCONS] Email verification failed to be sent to " + email +". Email sent?: "+ sentsts, 'STSERR');
                                return;
                            });
                        });   
                   }
               } else {
                    console.log('[EMAILVERCONS] Error in Finding user data. There is no active user account found.');
               }
            });
        }
    });
}

function saveactivitylog(userid, activitytype, remarks, status) {
    //add to activity log
    if (userid) {
        let oActivitylog = new Activitylog({
            logdate: new Date(),
            userid: userid,
            activitytype: activitytype,
            remarks: remarks,
            status: status,
            performedby: userid,
            objuserid: userid,
            objperformedby: userid
        });
        oActivitylog.save(function(err) {
            if (err) {
                console.error('[SAVELOG-'+ activitytype +'] Error processing request when saving activity log.',err)    
                return false;
            }
            console.log('[SAVELOG-'+ activitytype +'] activity log saved successfully.');    
            return true;
        });
    } else {
        let oActivitylog = new Activitylog({
            logdate: new Date(),
            userid: 'system',
            activitytype: activitytype,
            remarks: remarks,
            status: status,
            performedby: 'system'
        });
        oActivitylog.save(function(err) {
            if (err) {
                console.error('[SAVELOG-'+ activitytype +'] Error processing request when saving activity log.',err)    
                return false;
            }
            console.log('[SAVELOG-'+ activitytype +'] activity log saved successfully.');
            return true;
        });
    }
}
function closeOnErr(err) {
    if (!err) return false;
    console.error("[AMQP] error", err);
    amqpConn.close();
    return true;
} 

function checkArtistName(labelid, pname, cb) {
    try {
        var query = {};
        searchval = pname.replace(/\s/g, "");
        query = {labelid: labelid, searchstr: searchval.toUpperCase()};
        //query = {labelid: labelid, artistname: {$regex: pname, $options:"0i"}};
        //console.log(query);
        Artist.findOne(query).exec(function(err, artist){
            if (err) { cb(err, null);}
            if (artist) {
                //console.log(true);
                cb(null, artist._id);
            } else {
                //console.log(false);
                cb(null, 'NF');                
            }
        });        
    } catch (error) {
        //console.error(false, error.message);
        cb(error,null);
    }
}

function checkAlbumName(labelid, artistid, pname, cb) {
    try {
        var query = {};
        searchval = pname.replace(/\s/g, "");
        query = {labelid: labelid, artistid: artistid, searchstr: searchval.toUpperCase()};
        //query = {labelid: labelid, artistname: {$regex: pname, $options:"0i"}};
        //console.log(query);
        Album.findOne(query).exec(function(err, album){
            if (err) { cb(err, null);}
            if (album) {
                //console.log(true);
                cb(null, album._id);
            } else {
                //console.log(false);
                cb(null, 'NF');                
            }
        });        
    } catch (error) {
        //console.error(false, error.message);
        cb(error,null);
    }
}

function checkSongName(labelid, artistid, albumid, pname, cb) {
    try {
        var query = {};
        searchval = pname.replace(/\s/g, "");
        query = {labelid: labelid, artistid: artistid, albumid:albumid, searchstr: searchval.toUpperCase()};
        //query = {labelid: labelid, artistname: {$regex: pname, $options:"0i"}};
        //console.log(query);
        Song.findOne(query).exec(function(err, song){
            if (err) { cb(err, null);}
            if (song) {
                var songres = {
                    "id" : song._id,
                    "songname" : song.songname
                };
                //console.log(true);
                cb(null, songres);
            } else {
                //console.log(false);
                cb(null, 'NF');                
            }
        });        
    } catch (error) {
        //console.error(false, error.message);
        cb(error,null);
    }
}

function updateAlbumprice(labelid, albumid, cb) {
    try {
        var query = {};
        var finalprice;
        query = {labelid:labelid, albumid:albumid};
        //query = {labelid: labelid, artistname: {$regex: pname, $options:"0i"}};
        group = { _id: "$albumid" , 
                  totalprice: { $sum: "$songprice"},
                  count: { $sum: 1}
                };      
        var aggregate = Song.aggregate();  
        aggregate.match(query);
        aggregate.group(group);    
        aggregate.exec(function(err, result) {
            if (err) { cb(err, null);}
            if (result[0]) {
              finalprice = parseInt(result[0].totalprice);
            } else {
              finalprice = 0;
            }
            Album.findByIdAndUpdate(albumid, {$set: { albumprice: finalprice}}, {new: true}, function(err, result1) {
              if (err) { cb(err, null);}
              if (result1) {
                  cb(null, result1);
              } else {
                  cb('Album not found', null);                
              }
            });
        })
    } catch (error) {
        //console.error(false, error.message);
        cb(error,null);
    }
}