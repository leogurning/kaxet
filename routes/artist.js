const mongoose = require( 'mongoose' );
const Artist = require('../models/artist');
const config = require('../config');
const fs = require('fs');
var rediscli = require('../redisconn');
var amqpConn = null;
var amqp = require('amqplib/callback_api');

var merge = function() {
    var obj = {},
        i = 0,
        il = arguments.length,
        key;
    for (; i < il; i++) {
        for (key in arguments[i]) {
            if (arguments[i].hasOwnProperty(key)) {
                obj[key] = arguments[i][key];
            }
        }
    }
    return obj;
};

startpubRMQartist();

exports.saveartist = function(req, res, next){
    const labelid = req.params.id;
    const artistname = req.body.artistname;
    const artistphotopath = req.body.artistphotopath;
    const artistphotoname = req.body.artistphotoname;
    const status = req.body.status;
    const artistid = req.body.artistid;

    if (!labelid || !artistname || !status) {
        return res.status(422).send({ success: false, message: 'Main posted data is not correct or incompleted.' });
    } else {
		
        if (artistid) {
            //Edit artist
            Artist.findById(artistid).exec(function(err, artist){
                if(err){ res.status(400).json({ success: false, message: 'Error processing request '+ err }); }
                    
                if(artist) {
                    artist.artistname = artistname;
                    artist.status = status;
                    artist.modifydt = new Date();
                }
                artist.save(function(err) {
                    if(err){ res.status(400).json({ success: false, message: 'Error processing request '+ err }); }
                    res.status(201).json({
                        success: true,
                        message: 'Artist updated successfully'
                    });
                    //Delete redis respective keys
                    rediscli.del('redis-user-artist-'+labelid, 'redis-user-artistcnt-'+labelid, 'redis-user-artistlist-'+labelid); 
                });
            });

        }else {
            // Add new artist
            if (!artistphotopath || !artistphotoname) {
                return res.status(422).send({ success: false, message: 'Artist photo is not provided.' });
            } else {
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
                    if(err){ res.status(400).json({ success: false, message: 'Error processing request '+ err }); }
                        
                    res.status(201).json({
                        success: true,
                        message: 'Artist saved successfully'
                    });
                    //Delete redis respective keys
                    rediscli.del('redis-user-artist-'+labelid, 'redis-user-artistcnt-'+labelid, 'redis-user-artistlist-'+labelid); 
                });
            }
        }
    }
}

exports.delartist = function(req, res, next) {
    const artistid = req.params.id;
    Artist.findById(artistid).exec(function(err, artist){ 
        if(err){ res.status(400).json({ success: false, message: 'Error processing request '+ err }); }
        if(artist) {
            let labelid = artist.labelid;
            //Delete redis respective keys
            rediscli.del('redis-user-artist-'+labelid, 'redis-user-artistcnt-'+labelid, 'redis-user-artistlist-'+labelid); 
        }
        Artist.remove({_id: artistid}, function(err){
            if(err){ res.status(400).json({ success: false, message: 'Error processing request '+ err }); }
            res.status(201).json({
                success: true,
                message: 'Artist removed successfully'
            });
        });
    });
}

exports.getartist = function(req, res, next){
	Artist.find({_id:req.params.id}).exec(function(err, artist){
        if(err) { 
            res.status(400).json({ success: false, message:'Error processing request '+ err }); 
        }
        res.status(201).json({
		    success: true, 
		    data: artist
	    });
    });
}

exports.updateartistphoto = function(req, res, next){
    const artistid = req.params.id;
    const artistphotopath = req.body.artistphotopath;
    const artistphotoname = req.body.artistphotoname;

    if (!artistphotopath || !artistphotoname) {
        return res.status(422).json({ success: false, message: 'Posted data is not correct or incompleted.'});
    } else {
	Artist.findById(artistid).exec(function(err, artist){
		if(err){ res.status(400).json({ success: false, message: 'Error processing request '+ err }); }
			
		if(artist){
            artist.artistphotopath = artistphotopath;
            artist.artistphotoname = artistphotoname;
            artist.modifydt = new Date();
		}
		artist.save(function(err){
			if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err }); }
			res.status(201).json({
				success: true,
				message: 'Artist Photo details updated successfully'
			});
		});
	});
   }
}

exports.artistreport = function(req, res, next){
    const labelid = req.params.labelid || req.query.labelid;
    const artistname = req.body.artistname || req.query.artistname;
    const status = req.body.status || req.query.status;
    var totalcount;

    let limit = parseInt(req.query.limit);
    let page = parseInt(req.body.page || req.query.page);
    let sortby = req.body.sortby || req.query.sortby;
    let query = {};

    if(!limit || limit < 1) {
	limit = 10;
    }

    if(!page || page < 1) {
	page = 1;
    }

    if(!sortby) {
	sortby = 'artistname';
    }

    var offset = (page - 1) * limit;

    if (!labelid) {
        return res.status(422).send({ error: 'Parameter data is not correct or incompleted.'});
	}else{
        let keyredis = 'redis-user-artist-'+labelid;
        //check on redis
        rediscli.hgetall(keyredis, function(err, obj) { 
            if (obj) {
                //console.log('key on redis...');
                res.status(201).json({
                    success: true,
                    data: JSON.parse(obj.artist), 
                    totalcount: obj.totalcount
                }); 
            } else {
                // returns all artists records for the label
                //query = { labelid:labelid, artistname:artistname };
                if (!status) {
                    query = { labelid:labelid, artistname: new RegExp(artistname,'i')};
                }else{
                    query = { labelid:labelid, artistname: new RegExp(artistname,'i'), status: status};
                }

                Artist.count(query, function(err, count){
                    totalcount = count;
                    //console.log('count: ' + count.toString());                
                    if(count > offset){
                        offset = 0;
                    }
                });
                
                //console.log('offset: ' + offset);                
                var options = {
                    select: 'artistname status artistphotopath artistphotoname',
                    sort: sortby,
                    offset: offset,
                    limit: limit
                }

                Artist.paginate(query, options).then(function(result) {
                    res.status(201).json({
                        success: true, 
                        data: result,
                        totalcount: totalcount
                    });
                    //set in redis
                    rediscli.hmset(keyredis, [ 
                        'artist', JSON.stringify(result),
                        'totalcount', totalcount ], function(err, reply) {
                        if (err) {  console.log(err); }
                        console.log(reply);
                    });                     
                });
            }
        });
    }    
}

exports.totalartistcount = function(req, res, next){
    const labelid = req.params.labelid || req.query.labelid;
    const status = req.body.status || req.query.status;

    let query = {};

    if (!labelid) {
        return res.status(422).send({ error: 'Parameter data is not correct or incompleted.'});
	}else{
        let keyredis = 'redis-user-artistcnt-'+labelid;
        //check on redis
        rediscli.get(keyredis, function(err, obj) { 
            if (obj) {
                //console.log('key on redis...');
                res.status(201).json({
                    success: true,
                    totalcount: obj
                }); 
            } else {
                // returns all artists records for the label
                if (!status) {
                    query = { labelid:labelid };
                }else{
                    query = { labelid:labelid, status: status};
                }

                Artist.count(query, function(err, count){
                    if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err }); }
                    
                    res.status(201).json({
                        success: true,
                        totalcount: count
                    }); 
                    //set in redis
                    rediscli.set(keyredis, count, function(error) {
                        if (error) { throw error; }
                    });                    
                });
            }
        });
    }    
}

exports.artistaggreport = function(req, res, next){
    const labelid = req.params.labelid || req.query.labelid;
    const artistname = req.body.artistname || req.query.artistname;
    const status = req.body.status || req.query.status;
    const msconfiggrp = 'CSTATUS';
    const msconfigsts = 'STSACT';
    var totalcount;
  
    let limit = parseInt(req.query.limit);
    let page = parseInt(req.body.page || req.query.page);
    let sortby = req.body.sortby || req.query.sortby;
    let query = {};
    //let qmatch = {};
  
    if(!limit || limit < 1) {
      limit = 10;
    }
  
    if(!page || page < 1) {
      page = 1;
    }
  
/*     if(!sortby) {
      sortby = 'artistname';
    } */
  
    if (!labelid) {
        return res.status(422).send({ error: 'Parameter data is not correct or incompleted.'});
    }else{
  
      // returns songs records based on query
      query = {labelid:labelid, 
        artistname: new RegExp(artistname,'i'),
        "msconfigdetails.group": msconfiggrp,
        "msconfigdetails.status": msconfigsts
      };
      if (status) {
        query = merge(query, {status:status});
      }

      if(!sortby) {
        var options = {
            page: page,
            limit: limit
        }
      } else {
        var options = {
            page: page,
            limit: limit,
            sortBy: sortby
        }
      }

      var aggregate = Artist.aggregate();        
      var olookup = {
        from: 'msconfig',
        localField: 'status',
        foreignField: 'code',
        as: 'msconfigdetails'
      };
      var ounwind = 'msconfigdetails';
  
      var oproject = { 
          _id:1,
          artistname: 1,
          status:1,
          "stsvalue": "$msconfigdetails.value",
          artistphotopath:1,
          artistphotoname:1,    
        };
          
      
      aggregate.lookup(olookup).unwind(ounwind);
      aggregate.match(query);  
      aggregate.project(oproject);      
      if(!sortby) {
        var osort = { artistname: 1};
        aggregate.sort(osort);
      }
      Artist.aggregatePaginate(aggregate, options, function(err, results, pageCount, count) {
          if(err) 
          {
              res.status(400).json({
                  success: false, 
                  message: err.message
              });
          }
          else
          { 
              res.status(201).json({
                  success: true, 
                  data: results,
                  npage: pageCount,
                  totalcount: count
              });
          }
        })
    }
}

exports.artistaggstats = function(req, res, next){
    const labelid = req.body.labelid || req.query.labelid;
    const artistname = req.body.artistname || req.query.artistname;
    const status = req.body.status || req.query.status;
    const msconfiggrp = 'CSTATUS';
    const msconfigsts = 'STSACT';
    var totalcount;
  
    let limit = parseInt(req.query.limit);
    let page = parseInt(req.body.page || req.query.page);
    let sortby = req.body.sortby || req.query.sortby;
    let query = {};
    //let qmatch = {};
  
    if(!limit || limit < 1) {
      limit = 10;
    }
  
    if(!page || page < 1) {
      page = 1;
    }
  
  
    // returns songs records based on query
    query = { artistname: new RegExp(artistname,'i'),
        "msconfigdetails.group": msconfiggrp,
        "msconfigdetails.status": msconfigsts
    };
    
    if (labelid) {
        query = merge(query, {labelid:labelid});
    }      
    if (status) {
        query = merge(query, {status:status});
    }

    if(!sortby) {
        var options = {
            page: page,
            limit: limit
        }
    } else {
        var options = {
            page: page,
            limit: limit,
            sortBy: sortby
        }
    }

    var aggregate = Artist.aggregate();     
    var olookuplb = {
        from: 'user',
        localField: 'objlabelid',
        foreignField: '_id',
        as: 'labeldetails'
      };   
    var olookup = {
        from: 'msconfig',
        localField: 'status',
        foreignField: 'code',
        as: 'msconfigdetails'
    };
    var ounwind = 'msconfigdetails';
    var ounwindlb = 'labeldetails';

    var oproject = { 
        _id:1,
        labelid:1,
        artistname: 1,
        "label": "$labeldetails.name",
        status:1,
        "stsvalue": "$msconfigdetails.value",
        artistphotopath:1,
        artistphotoname:1,   
        objlabelid:1, 
    };
        
    
    aggregate.lookup(olookup).unwind(ounwind);
    aggregate.match(query);  
    aggregate.lookup(olookuplb).unwind(ounwindlb);
    aggregate.project(oproject);      
    if(!sortby) {
        var osort = { artistname: 1};
        aggregate.sort(osort);
    }
    Artist.aggregatePaginate(aggregate, options, function(err, results, pageCount, count) {
        if(err) 
        {
            res.status(400).json({
                success: false, 
                message: 'Ini Error: ' + err.message
            });
        }
        else
        { 
            res.status(201).json({
                success: true, 
                data: results,
                npage: pageCount,
                totalcount: count
            });
        }
    })
}

exports.getartistlist = function(req, res, next){
    const labelid = req.params.labelid;
    const status = 'STSACT';
    const sortby = 'artistname';
    let query = {};

    if (!labelid) {
        return res.status(422).send({ error: 'Parameter data is not correct or incompleted.'});
    }else{
        let keyredis = 'redis-user-artistlist-'+labelid;
        //check on redis
        rediscli.get(keyredis, function(err, obj) { 
            if (obj) {
                //console.log('key on redis..');
                res.status(201).json({
                    success: true, 
                    data: JSON.parse(obj)
                });                
            } else {
                // returns artists records based on query
                query = { labelid:labelid, status: status};        
                var fields = { 
                    _id:1, 
                    artistname:1 
                };

                var psort = { artistname: 1 };

                Artist.find(query, fields).sort(psort).exec(function(err, result) {
                    if(err) { 
                        res.status(400).json({ success: false, message:'Error processing request '+ err }); 
                    } 
                    res.status(201).json({
                        success: true, 
                        data: result
                    });
                    //set in redis
                    rediscli.set(keyredis,JSON.stringify(result), function(error) {
                        if (error) { throw error; }
                    });                                     
                });
            }
        });
    }
}

exports.pubaddartist = function(req, res, next){
    const labelid = req.params.id;
    const artistname = req.body.artistname;
    const status = req.body.status;
    const artistphotopath = req.body.artistphotopath;
    const artistphotoname = req.body.artistphotoname;
    const artistid = req.body.artistid;

    const q = 'addArtistQueue';

    if (!labelid || !artistname || !status ) {
        return res.status(422).send({ success: false, message: 'Main posted data is not correct or incompleted.' });
    }

    var objbody = req.body;
    var objlabelid = {labelid: labelid};
    var objmsg = Object.assign(objbody,objlabelid);
    var msg = JSON.stringify(objmsg);
    //ch.assertExchange(exchange, 'direct', {durable: false})
    //ch.sendToQueue(q, new Buffer(msg), {persistent: false})

    let pubadd = addArtistpublish('', q, new Buffer(msg));    
    res.status(200).json({
        success: true,
        message: 'Request to save Artist received successfully.'
    });
    //ch.bindQueue(q, exchange, 'registerlabel');
}

/* exports.pubaddartist = function(req, res, next){
    const labelid = req.params.id;
    const artistname = req.body.artistname;
    const status = req.body.status;
    const uploadpath = req.body.uploadpath;
    const token = req.headers['authorization'];
    const q = 'addArtistQueue';

    if (!labelid || !artistname || !status ) {
        return res.status(422).send({ success: false, message: 'Main posted data is not correct or incompleted.' });
    }

    var objbody = req.body;
    var objlabelid = {labelid: labelid};
    var objfile = { fileinputsrc: req.files.fileinputsrc };
    var headers = {token: token};
    var objmsg = Object.assign(objbody,objlabelid,objfile, headers);
    var msg = JSON.stringify(objmsg);
    //ch.assertExchange(exchange, 'direct', {durable: false})
    //ch.sendToQueue(q, new Buffer(msg), {persistent: false})

    let pubadd = addArtistpublish('', q, new Buffer(msg));    
    res.status(200).json({
        success: true,
        message: 'Request to save Artist received successfully.'
    });
    //ch.bindQueue(q, exchange, 'registerlabel');
} */

exports.pubeditartistphoto = function(req, res, next){
    const artistid = req.params.id;
    const artistphotoname = req.body.artistphotoname;
    const artistphotopath = req.body.artistphotopath;
    const oldartistphotoname = req.body.oldartistphotoname;
    const uploadpath = req.body.uploadpath;
    const labelid = req.body.labelid;
    const token = req.headers['authorization'];
    const q = 'editArtistphotoQueue';

    if (!artistid || !artistphotoname || !artistphotopath || !labelid ) {
        return res.status(422).send({ success: false, message: 'Main posted data is not correct or incompleted.' });
    }

    var objbody = req.body;
    var objartistid = {artistid: artistid};
    //var objfile = { fileinputsrc: req.files.fileinputsrc };
    var headers = {token: token};
    //var objmsg = Object.assign(objbody,objartistid,objfile, headers);
    var objmsg = Object.assign(objbody,objartistid, headers);
    var msg = JSON.stringify(objmsg);
    //ch.assertExchange(exchange, 'direct', {durable: false})
    //ch.sendToQueue(q, new Buffer(msg), {persistent: false})

    let pubeditphoto = editArtistphotopublish('', q, new Buffer(msg));    
    res.status(200).json({
        success: true,
        message: 'Request to edit Artist photo received successfully.'
    });
    //ch.bindQueue(q, exchange, 'registerlabel');
}

exports.pubdeleteartist = function(req, res, next){
    const artistid = req.params.id;
    const artistphotoname = req.body.artistphotoname;
    const uploadpath = req.body.uploadpath;
    const labelid = req.body.labelid;
    const token = req.headers['authorization'];
    const q = 'deleteArtistQueue';

    if (!artistid || !artistphotoname || !labelid ) {
        return res.status(422).send({ success: false, message: 'Main posted data is not correct or incompleted.' });
    }

    var objbody = req.body;
    var objartistid = {artistid: artistid};
    var headers = {token: token};
    var objmsg = Object.assign(objbody,objartistid, headers);
    var msg = JSON.stringify(objmsg);
    //ch.assertExchange(exchange, 'direct', {durable: false})
    //ch.sendToQueue(q, new Buffer(msg), {persistent: false})

    let pubdelartist = deleteArtistpublish('', q, new Buffer(msg));    
    res.status(200).json({
        success: true,
        message: 'Request to delete Artist received successfully.'
    });
    //ch.bindQueue(q, exchange, 'registerlabel');
}

//Start RabbitMQ Connection for PUBLISHERS
function startpubRMQartist() {
    amqp.connect(config.amqpURL, function(err, conn) {
      if (err) {
        console.error("[AMQP ARTIST]", err.message);
        return setTimeout(startpubRMQartist, 1000);
      }
      conn.on("error", function(err) {
        if (err.message !== "Connection closing") {
          console.error("[AMQP ARTIST] conn error", err.message);
        }
      });
      conn.on("close", function() {
        console.error("[AMQP ARTIST] reconnecting");
        return setTimeout(startpubRMQartist, 1000);
      });
      console.log("[AMQP ARTIST] connected");
      amqpConn = conn;
      addArtistPub('addArtistQueue');
      editArtistphotoPub('editArtistphotoQueue');
      deleteArtistPub('deleteArtistQueue');
    });
}

var addArtistPubChannel = null;
var addArtistofflinePubQueue = [];
function addArtistPub(q) {
  amqpConn.createConfirmChannel(function(err, ch) {
    if (closeOnErr(err)) return;
    ch.on("error", function(err) {
        console.error("[AMQP ARTIST] add artist channel error", err.message);
    });
    ch.on("close", function() {
        console.log("[AMQP ARTIST] add artist channel closed");
    });
    
    addArtistPubChannel = ch;
    addArtistPubChannel.assertQueue(q, {durable: false});
    
    while (true) {
        var m = addArtistofflinePubQueue.shift();
        if (!m) break;
        addArtistpublish(m[0], m[1], m[2]);
    }
  });
}

function addArtistpublish(exchange, routingKey, content) {
    try {
        addArtistPubChannel.publish(exchange, routingKey, content, { persistent: false },
        function(err, ok) {
          if (err) {
            console.error("[AMQP ARTIST] add artist publish", err);
            addArtistofflinePubQueue.push([exchange, routingKey, content]);
            addArtistPubChannel.connection.close();
            return false;
          }
          console.log("[AMQP ARTIST] add artist publisher completed");
          return true;
        }
      );
    } catch (e) {
      console.error("[AMQP ARTIST] add artist publish", e.message);
      addArtistofflinePubQueue.push([exchange, routingKey, content]);
      return false;
    }
}

var editArtistphotoPubChannel = null;
var editArtistphotoofflinePubQueue = [];
function editArtistphotoPub(q) {
  amqpConn.createConfirmChannel(function(err, ch) {
    if (closeOnErr(err)) return;
    ch.on("error", function(err) {
        console.error("[AMQP ARTIST] edit artist photo channel error", err.message);
    });
    ch.on("close", function() {
        console.log("[AMQP ARTIST] edit artist photo channel closed");
    });
    
    editArtistphotoPubChannel = ch;
    editArtistphotoPubChannel.assertQueue(q, {durable: false});
    
    while (true) {
        var m = editArtistphotoofflinePubQueue.shift();
        if (!m) break;
        editArtistphotopublish(m[0], m[1], m[2]);
    }
  });
}

function editArtistphotopublish(exchange, routingKey, content) {
    try {
        editArtistphotoPubChannel.publish(exchange, routingKey, content, { persistent: false },
        function(err, ok) {
          if (err) {
            console.error("[AMQP ARTIST] edit artist photo publish", err);
            editArtistphotoofflinePubQueue.push([exchange, routingKey, content]);
            editArtistphotoPubChannel.connection.close();
            return false;
          }
          console.log("[AMQP ARTIST] edit artist photo publisher completed");
          return true;
        }
      );
    } catch (e) {
      console.error("[AMQP ARTIST] edit artist photo publish", e.message);
      editArtistphotoofflinePubQueue.push([exchange, routingKey, content]);
      return false;
    }
}

var deleteArtistPubChannel = null;
var deleteArtistofflinePubQueue = [];
function deleteArtistPub(q) {
  amqpConn.createConfirmChannel(function(err, ch) {
    if (closeOnErr(err)) return;
    ch.on("error", function(err) {
        console.error("[AMQP ARTIST] delete artist channel error", err.message);
    });
    ch.on("close", function() {
        console.log("[AMQP ARTIST] delete artist channel closed");
    });
    
    deleteArtistPubChannel = ch;
    deleteArtistPubChannel.assertQueue(q, {durable: false});
    
    while (true) {
        var m = deleteArtistofflinePubQueue.shift();
        if (!m) break;
        deleteArtistpublish(m[0], m[1], m[2]);
    }
  });
}

function deleteArtistpublish(exchange, routingKey, content) {
    try {
        deleteArtistPubChannel.publish(exchange, routingKey, content, { persistent: false },
        function(err, ok) {
          if (err) {
            console.error("[AMQP ARTIST] delete artist publish", err);
            deleteArtistofflinePubQueue.push([exchange, routingKey, content]);
            deleteArtistPubChannel.connection.close();
            return false;
          }
          console.log("[AMQP ARTIST] delete artist publisher completed");
          return true;
        }
      );
    } catch (e) {
      console.error("[AMQP ARTIST] delete artist publish", e.message);
      deleteArtistofflinePubQueue.push([exchange, routingKey, content]);
      return false;
    }
}

function closeOnErr(err) {
    if (!err) return false;
    console.error("[AMQP ARTIST] error", err);
    amqpConn.close();
    return true;
}