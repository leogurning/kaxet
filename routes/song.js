const mongoose = require( 'mongoose' );
const Song = require('../models/song');
const config = require('../config');
const fs = require('fs');
var rediscli = require('../redisconn');
var amqpConn = null;
var amqp = require('amqplib/callback_api');
const fetch = require('node-fetch');
var FormData = require('form-data');

var ObjId = mongoose.Types.ObjectId;
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

startpubRMQsong();

exports.savesong = function(req, res, next){
  const labelid = req.params.id;
  const artistid = req.query.artistid;
  const albumid = req.query.albumid;  
  const songname = req.body.songname;
  const songlyric = req.body.songlyric;
  const songgenre = req.body.songgenre;
  const songprice = req.body.songprice;
  const songprvwpath = req.body.songprvwpath;
  const songprvwname = req.body.songprvwname;  
  const songfilepath = req.body.songfilepath;
  const songfilename = req.body.songfilename;
  const status = req.body.status;
  const songid = req.body.songid;

  if (!labelid ||!artistid ||!albumid || !songname || !songlyric || !songgenre || !songprice || !status) {
      return res.status(422).send({ success: false, message: 'Main posted data is not correct or incompleted.' });
  } else {
  
      if (songid) {
          //Edit song
          Song.findById(songid).exec(function(err, song){
              if(err){ res.status(400).json({ success: false, message: 'Error processing request '+ err }); }
                  
              if(song) {
                  song.artistid = artistid,
                  song.albumid = albumid,
                  song.songname = songname;
                  song.songlyric = songlyric;
                  song.songgenre = songgenre;
                  song.songprice = songprice;
                  song.status = status;
                  song.objartistid = artistid;
                  song.objalbumid = albumid;
                  song.modifydt = new Date();
              }
              song.save(function(err) {
                  if(err){ res.status(400).json({ success: false, message: 'Error processing request '+ err }); }
                  res.status(201).json({
                      success: true,
                      message: 'Song updated successfully'
                  });
                  //Delete redis respective keys
                  rediscli.del('redis-recentsongs','redis-user-song-'+labelid, 'redis-user-songcnt-'+labelid, 'redis-user-songlist-'+albumid+labelid);
              });
          });

      }else {
          // Add new song
          if (!songprvwpath || !songprvwname || !songfilepath|| !songfilename) {
              return res.status(422).send({ success: false, message: 'Song preview or file is not provided.' });
          } else {
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
                  if(err){ res.status(400).json({ success: false, message: 'Error processing request '+ err }); }
                      
                  res.status(201).json({
                      success: true,
                      message: 'Song saved successfully'
                      });
                  //Delete redis respective keys
                  rediscli.del('redis-recentsongs','redis-user-song-'+labelid, 'redis-user-songcnt-'+labelid, 'redis-user-songlist-'+albumid+labelid);
              });
          }
      }
  }
}

exports.publishsong = function(req, res, next){
  const songid = req.params.id;

  if (!songid) {
      return res.status(422).json({ success: false, message: 'Parameter data is not correct or incompleted.'});
  } else {
      Song.findById(songid).exec(function(err, song){
          if(err){ res.status(400).json({ success: false, message: 'Error processing request '+ err }); }
              
          if(song){
              song.songpublish = 'Y';
              song.modifydt = new Date();
              song.save(function(err){
                if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err }); }
                res.status(201).json({
                    success: true,
                    message: 'Song has been published successfully'
                });
              });
          }
      });
  }
}

exports.cancelpublishsong = function(req, res, next){
  const songid = req.params.id;

  if (!songid) {
      return res.status(422).json({ success: false, message: 'Parameter data is not correct or incompleted.'});
  } else {
      Song.findById(songid).exec(function(err, song){
          if(err){ res.status(400).json({ success: false, message: 'Error processing request '+ err }); }
              
          if(song){
            if (song.songbuy > 0) {
              res.status(400).json({ success: false, message:'Published Song can not be canceled if the song has been sold. ' });
            } else {
              song.songpublish = 'N';
              song.modifydt = new Date();
              song.save(function(err){
                if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err }); }
                res.status(201).json({
                    success: true,
                    message: 'Published Song has been canceled successfully'
                });
              });
            }  
          }
      });
  }
}

exports.songbuyincrement = function(req, res, next){
  const songid = req.params.id;

  if (!songid) {
      return res.status(422).json({ success: false, message: 'Parameter data is not correct or incompleted.'});
  } else {
      Song.findById(songid).exec(function(err, song){
          if(err){ res.status(400).json({ success: false, message: 'Error processing request '+ err }); }
              
          if(song){
              let labelid = song.labelid;
              let albumid = song.albumid;
              song.songbuy = song.songbuy + 1 ;
              song.save(function(err){
                if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err }); }
                res.status(201).json({
                    success: true,
                    message: 'Song buy has been added successfully'
                });
                //Delete redis respective keys
                rediscli.del('redis-topsongs','redis-user-song-'+labelid, 'redis-user-songlist-'+albumid+labelid);
              });
          }
      });
  }
}

exports.updatesongpreview = function(req, res, next){
  const songid = req.params.id;
  const songprvwpath = req.body.songprvwpath;
  const songprvwname = req.body.songprvwname;

  if (!songprvwpath || !songprvwname) {
      return res.status(422).json({ success: false, message: 'Posted data is not correct or incompleted.'});
  } else {
      Song.findById(songid).exec(function(err, song){
          if(err){ res.status(400).json({ success: false, message: 'Error processing request '+ err }); }
              
          if(song){
            if (song.songbuy > 0) {
              res.status(400).json({ success: false, message:'Song preview can not be updated if the song has been sold. ' });
            } else {
              let labelid = song.labelid;
              let albumid = song.albumid;
              song.songprvwpath = songprvwpath;
              song.songprvwname = songprvwname;
              song.songpublish = 'N';
              song.modifydt = new Date();
              song.save(function(err){
                if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err }); }
                res.status(201).json({
                    success: true,
                    message: 'Song Preview details updated successfully'
                });
                //Delete redis respective keys
                rediscli.del('redis-user-song-'+labelid, 'redis-user-songcnt-'+labelid, 'redis-user-songlist-'+albumid+labelid);                
              });
            }

          }
      });
  }
}

exports.updatesongfile = function(req, res, next){
  const songid = req.params.id;
  const songfilepath = req.body.songfilepath;
  const songfilename = req.body.songfilename;

  if (!songfilepath || !songfilename) {
      return res.status(422).json({ success: false, message: 'Posted data is not correct or incompleted.'});
  } else {
      Song.findById(songid).exec(function(err, song){
          if(err){ res.status(400).json({ success: false, message: 'Error processing request '+ err }); }
              
          if(song){
            if (song.songbuy > 0) {
              res.status(400).json({ success: false, message:'Song file can not be updated if the song has been sold. ' });
            } else {
              let labelid = song.labelid;
              let albumid = song.albumid;
              song.songfilepath = songfilepath;
              song.songfilename = songfilename;
              song.songpublish = 'N';
              song.modifydt = new Date();
              song.save(function(err){
                if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err }); }
                res.status(201).json({
                    success: true,
                    message: 'Song File details updated successfully'
                });
                //Delete redis respective keys
                rediscli.del('redis-user-song-'+labelid, 'redis-user-songcnt-'+labelid, 'redis-user-songlist-'+albumid+labelid);                
              });
            }
          }
      });
  }
}

exports.getsong = function(req, res, next){
  Song.find({_id:req.params.id}).exec(function(err, song){
        if(err) { 
            res.status(400).json({ success: false, message:'Error processing request '+ err }); 
        }
        res.status(201).json({
        success: true, 
        data: song
      });
    });
}

exports.delsong = function(req, res, next) {
  const songid = req.params.id;
  Song.findById(songid).exec(function(err, song){ 
      if(err){ res.status(400).json({ success: false, message: 'Error processing request '+ err }); }
      if (song) {
        let labelid = song.labelid;
        let artistid = song.artistid;
        let albumid = song.albumid;
        //Delete redis respective keys
        rediscli.del('redis-user-song-'+labelid, 'redis-user-songcnt-'+labelid, 'redis-user-songlist-'+albumid+labelid);                
      }
      Song.remove({_id: songid}, function(err){
        if(err){ res.status(400).json({ success: false, message: 'Error processing request '+ err }); }
        res.status(201).json({
            success: true,
            message: 'Song removed successfully'
        });
      });
  });  
}

exports.songaggregate = function(req, res, next){
  const labelid = req.params.labelid || req.query.labelid;
  const artistid = req.body.artistid || req.query.artistid;
  const albumid = req.body.albumid || req.query.albumid;
  const songname = req.body.songname || req.query.songname;
  const albumyear = req.body.albumyear || req.query.albumyear;
  const songgenre = req.body.songgenre || req.query.songgenre;
  const songpublish = req.body.songpublish || req.query.songpublish;
  const songbuy = req.body.songbuy || req.query.songbuy;  
  const status = req.body.status || req.query.status;
  const msconfiggrp = 'GENRE';
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

  if(!sortby) {
    sortby = 'songname';
  }

  if (!labelid) {
      return res.status(422).send({ error: 'Parameter data is not correct or incompleted.'});
  }else{

    // returns songs records based on query
    query = {labelid:labelid, 
      songname: new RegExp(songname,'i'),
      "albumdetails.albumyear": new RegExp(albumyear,'i'),
      //songpublish: new RegExp(songpublish,'i'),
      "msconfigdetails.group": msconfiggrp,
      "msconfigdetails.status": msconfigsts
    };
    if (artistid) {
      query = merge(query, {artistid:artistid});
    }
    if (albumid) {
      query = merge(query, {albumid:albumid});
    }
    if (songgenre) {
      query = merge(query, {songgenre:songgenre});
    }    
    if (songpublish) {
      query = merge(query, {songpublish:songpublish});
    }    
    if (songbuy) {
      if (songbuy == 'Y') {
        query = merge(query, {songbuy: { $gt: 0 }});
      } else {
        query = merge(query, {songbuy: { $lte: 0 }});
      }
    }  
    if (status) {
      query = merge(query, {status:status});
    }
    console.log(query);

    var options = {
        page: page,
        limit: limit,
        sortBy: sortby
    }
    
    var aggregate = Song.aggregate();        
    var olookup = {
      from: 'artist',
      localField: 'objartistid',
      foreignField: '_id',
      as: 'artistdetails'
    };
    var olookup1 = {
      from: 'album',
      localField: 'objalbumid',
      foreignField: '_id',
      as: 'albumdetails'
    };
    var olookup2 = {
      from: 'msconfig',
      localField: 'songgenre',
      foreignField: 'code',
      as: 'msconfigdetails'
    };    
    var ounwind = 'artistdetails';
    var ounwind1 = 'albumdetails';
    var ounwind2 = 'msconfigdetails';

    var oproject = { 
        _id:1,
        labelid:1,
        artistid:1,
        albumid:1,
        songname: 1,
        songgenre:1,
        "genrevalue": "$msconfigdetails.value",
        songlyric:1,
        songprice:1,
        "artist": "$artistdetails.artistname",
        "album": "$albumdetails.albumname",
        "albumyear": "$albumdetails.albumyear",
        objartistid:1,
        objalbumid:1,
        songpublish:1,
        songbuy:1,
        status:1,
        songprvwpath:1,
        songprvwname:1,    
        songfilepath:1,
        songfilename:1,
      };
        
    
    aggregate.lookup(olookup).unwind(ounwind);
    aggregate.lookup(olookup1).unwind(ounwind1);  
    aggregate.lookup(olookup2).unwind(ounwind2);  
    aggregate.match(query);  
    aggregate.project(oproject);      
    
    //var osort = { "$sort": { sortby: 1}};
    //aggregate.sort(osort);
      
    Song.aggregatePaginate(aggregate, options, function(err, results, pageCount, count) {
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

exports.getsongaggregate = function(req, res, next){
  
  const songid = new mongoose.Types.ObjectId(req.params.id);
  let query = {};
  
  if (!songid) {
      return res.status(422).send({ error: 'Parameter data is not correct or incompleted.'});
  }else{
      query = { _id:songid };
  }     

  var aggregate = Song.aggregate();        
  var olookup = {
    from: 'artist',
    localField: 'objartistid',
    foreignField: '_id',
    as: 'artistdetails'
  };
   var olookup1 = {
    from: 'album',
    localField: 'objalbumid',
    foreignField: '_id',
    as: 'albumdetails'
  };
  var ounwind = 'artistdetails';
  var ounwind1 = 'albumdetails';

  var oproject = { 
      _id:1,
      labelid:1,
      artistid:1,
      albumid:1,
      songname: 1,
      songgenre:1,
      songlyric:1,
      songprice:1,
      "artist": "$artistdetails.artistname",
      "album": "$albumdetails.albumname",
      "albumyear": "$albumdetails.albumyear",
      objartistid:1,
      objalbumid:1,
      songpublish:1,
      songbuy:1,
      status:1,
      songprvwpath:1,
      songprvwname:1,    
      songfilepath:1,
      songfilename:1,
    };
      
  aggregate.match(query).lookup(olookup).unwind(ounwind);
  aggregate.lookup(olookup1).unwind(ounwind1);  
  aggregate.project(oproject);      

  aggregate.exec(function(err, result) {
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
            data: result
        });
    }
  });  
}

exports.songreport = function(req, res, next){
  const labelid = req.params.labelid || req.query.labelid;
  const artistid = req.body.artistid || req.query.artistid;
  const albumid = req.body.albumid || req.query.albumid;
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
    sortby = 'songname';
  }

  var offset = (page - 1) * limit;

  if (!labelid) {
      return res.status(422).send({ error: 'Parameter data is not correct or incompleted.'});
  }else{
    let keyredis = 'redis-user-song-'+labelid;
    //check on redis
    rediscli.hgetall(keyredis, function(err, obj) { 
      if (obj) {
        //console.log('key on redis...');
        res.status(201).json({
            success: true,
            data: JSON.parse(obj.song), 
            totalcount: obj.totalcount
        }); 
      } else {
        // returns albums records based on query
        query = {labelid:labelid};
        if (artistid) {
          query = merge(query, {artistid:artistid});
        }
        if (albumid) {
          query = merge(query, {albumid:albumid});
        }

        Song.count(query, function(err, count){
                  totalcount = count;                
          if(count > offset){
            offset = 0;
          }
        });

        var options = {
          select: 'songname songpublish songbuy songprice status songprvwpath songprvwname songfilepath songfilename',
          sort: sortby,
          offset: offset,
          limit: limit
        }
        //console.log(query);
        Song.paginate(query, options).then(function(result) {
          res.status(201).json({
            success: true, 
            data: result,
            totalcount: totalcount
          });
          //set in redis
          rediscli.hmset(keyredis, [ 
              'song', JSON.stringify(result),
              'totalcount', totalcount ], function(err, reply) {
              if (err) {  console.log(err); }
              console.log(reply);
          });           
        });
      }        
    });    
  }
}

exports.totalsongcount = function(req, res, next){
  const labelid = req.params.labelid || req.query.labelid;
  const artistid = req.body.artistid || req.query.artistid;
  const albumid = req.body.albumid || req.query.albumid;
  
  let query = {};

  if (!labelid) {
      return res.status(422).send({ error: 'Parameter data is not correct or incompleted.'});
  }else{
    let keyredis = 'redis-user-songcnt-'+labelid;
    //check on redis
    rediscli.get(keyredis, function(err, obj) { 
      if (obj) {
        //console.log('key on redis...');
        res.status(201).json({
            success: true,
            totalcount: obj
        }); 
      } else {
        // returns albums records based on query
        query = {labelid:labelid};
        if (artistid) {
          query = merge(query, {artistid:artistid});
        }
        if (albumid) {
          query = merge(query, {albumid:albumid});
        }

        Song.count(query, function(err, count){
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

exports.songlist = function(req, res, next){
  const labelid = req.params.labelid || req.query.labelid;
  const artistid = req.body.artistid || req.query.artistid;
  const albumid = req.body.albumid || req.query.albumid;
  var totalcount;

  let limit = parseInt(req.query.limit);
  let page = parseInt(req.body.page || req.query.page);
  let sortby = req.body.sortby || req.query.sortby;
  let query = {};
  const statusgrp = 'CSTATUS';
  const msconfigsts = 'STSACT';

  if(!limit || limit < 1) {
    limit = 10;
  }

  if(!page || page < 1) {
    page = 1;
  }

  if(!sortby) {
    sortby = 'songname';
  }

  if (!labelid) {
      return res.status(422).send({ error: 'Parameter data is not correct or incompleted.'});
  }else{
    let keyredis = 'redis-user-songlist-'+albumid+labelid;
    //check on redis
    rediscli.hgetall(keyredis, function(err, obj) { 
      if (obj) {
        //console.log('key on redis...');
        res.status(201).json({
            success: true, 
            data: JSON.parse(obj.song), 
            npage: obj.npage,
            totalcount: obj.totalcount
        });
      } else {
          // returns albums records based on query
          query = {labelid:labelid,
            "msconfigdetails.group": statusgrp,
            "msconfigdetails.status": msconfigsts 
            };
          if (artistid) {
            query = merge(query, {artistid:artistid});
          }
          if (albumid) {
            query = merge(query, {albumid:albumid});
          }
          var options = {
            page: page,
            limit: limit,
            sortBy: sortby
          }
          var aggregate = Song.aggregate();        
          var olookup = {
            from: 'msconfig',
            localField: 'status',
            foreignField: 'code',
            as: 'msconfigdetails'
          };
          var ounwind = 'msconfigdetails';

          var oproject = { 
            _id:1,
            labelid:1,
            artistid:1,
            albumid:1,
            songname: 1,
            songgenre:1,
            songlyric:1,
            songprice:1,
            "stsvalue": "$msconfigdetails.value",
            objartistid:1,
            objalbumid:1,
            songpublish:1,
            songbuy:1,
            status:1,
            songprvwpath:1,
            songprvwname:1,    
            songfilepath:1,
            songfilename:1,
          };
          
          aggregate.lookup(olookup).unwind(ounwind);
          aggregate.match(query);
          aggregate.project(oproject);      

          Song.aggregatePaginate(aggregate, options, function(err, results, pageCount, count) {
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
                  //set in redis
                  rediscli.hmset(keyredis, [ 
                    'song', JSON.stringify(results),
                    'npage', pageCount,
                    'totalcount', count ], function(err, reply) {
                    if (err) {  console.log(err); }
                    console.log(reply);
                  });
              }
          });
      }        
    })    
  }
}

exports.songliststats = function(req, res, next){
  const labelid = req.body.labelid || req.query.labelid;
  const artistid = req.body.artistid || req.query.artistid;
  const albumid = req.body.albumid || req.query.albumid;
  var totalcount;

  let limit = parseInt(req.query.limit);
  let page = parseInt(req.body.page || req.query.page);
  let sortby = req.body.sortby || req.query.sortby;
  let query = {};
  const statusgrp = 'CSTATUS';
  const msconfigsts = 'STSACT';

  if(!limit || limit < 1) {
    limit = 10;
  }

  if(!page || page < 1) {
    page = 1;
  }

  if(!sortby) {
    sortby = 'songname';
  }

  if (!labelid) {
      return res.status(422).send({ error: 'Parameter data is not correct or incompleted.'});
  }else{
    let keyredis = 'redis-user-songlist-'+albumid+labelid;
    //check on redis
    rediscli.hgetall(keyredis, function(err, obj) { 
      if (obj) {
        //console.log('key on redis...');
        res.status(201).json({
            success: true, 
            data: JSON.parse(obj.song), 
            npage: obj.npage,
            totalcount: obj.totalcount
        });
      } else {
          // returns albums records based on query
          query = {labelid:labelid,
            "msconfigdetails.group": statusgrp,
            "msconfigdetails.status": msconfigsts 
            };
          if (artistid) {
            query = merge(query, {artistid:artistid});
          }
          if (albumid) {
            query = merge(query, {albumid:albumid});
          }
          var options = {
            page: page,
            limit: limit,
            sortBy: sortby
          }
          var aggregate = Song.aggregate();        
          var olookup = {
            from: 'msconfig',
            localField: 'status',
            foreignField: 'code',
            as: 'msconfigdetails'
          };
          var ounwind = 'msconfigdetails';

          var oproject = { 
            _id:1,
            labelid:1,
            artistid:1,
            albumid:1,
            songname: 1,
            songgenre:1,
            songlyric:1,
            songprice:1,
            "stsvalue": "$msconfigdetails.value",
            objartistid:1,
            objalbumid:1,
            songpublish:1,
            songbuy:1,
            status:1,
            songprvwpath:1,
            songprvwname:1,    
            songfilepath:1,
            songfilename:1,
          };
          
          aggregate.lookup(olookup).unwind(ounwind);
          aggregate.match(query);
          aggregate.project(oproject);      

          Song.aggregatePaginate(aggregate, options, function(err, results, pageCount, count) {
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
                  //set in redis
                  rediscli.hmset(keyredis, [ 
                    'song', JSON.stringify(results),
                    'npage', pageCount,
                    'totalcount', count ], function(err, reply) {
                    if (err) {  console.log(err); }
                    console.log(reply);
                  });
              }
          });
      }        
    })    
  }
}

function isEmpty(obj) {
  for(var prop in obj) {
      if(obj.hasOwnProperty(prop))
          return false;
  }

  return JSON.stringify(obj) === JSON.stringify({});
}
exports.uploadsongfiles = async function(req, res, next) {
    const prvwuploadpath = req.body.prvwuploadpath;
    const songuploadpath = req.body.songuploadpath;
    const token = req.headers['authorization'];

    var prvwfile = req.files.prvwfileinputsrc,
        prvworiname = prvwfile.name;
    var songfile = req.files.songfileinputsrc,
        songoriname = songfile.name;   
    
    const headers = { 'Authorization': token }; 
    const formData = new FormData();
    formData.append('fileinputsrc',new Buffer.from(prvwfile.data), prvworiname);
    formData.append('uploadpath', prvwuploadpath);                
    // Call notification API to send verification email
    const responsea = fetch(config.filetransferurl+'/api/inputfileupload', { 
        method: 'POST',
        body:    formData,
        headers: headers
    })
    .then(res => res.json());
    /* .then(data => {
        //console.log(data);
        if (data.success === true) {
          prvwsuccess = true;
          prvwfilepath = data.filedata.filepath
          prvwfilename = data.filedata.filename
        }
    })
    .catch(err => {
      console.log("upload song files error with message: "+ err.message);
    }); */
    //const prvwdata = await responsea.json();
    const formData1 = new FormData();
    formData1.append('fileinputsrc',new Buffer.from(songfile.data), songoriname);
    formData1.append('uploadpath', songuploadpath);                
    // Call notification API to send verification email
    const responseb = fetch(config.filetransferurl+'/api/inputfileupload', { 
        method: 'POST',
        body:    formData1,
        headers: headers
    })
    .then(res => res.json());
   /* .then(data => {
        //console.log(data);
        if (data.success === true) {
          songsuccess = true;
          songfilepath = data.filedata.filepath
          songfilename = data.filedata.filename
        }
    })
    .catch(err => {
      console.log("upload song files error with message: "+ err.message);
    }); */
    //const songdata = await responseb.json();
    const resvalues = await Promise.all([responsea, responseb]);
    const prvwdata = await resvalues[0];
    const songdata = await resvalues[1];
    //console.log(prvwdata);
    //console.log(songdata);
    if (prvwdata.success && songdata.success) {
      res.status(200).json({
        success: true,
        preview: { prvwfilepath: prvwdata.filedata.filepath, prvwfilename: prvwdata.filedata.filename},
        song: { songfilepath: songdata.filedata.filepath, songfilename: songdata.filedata.filename}
      });
    } else {
      res.status(201).json({
        success: false,
        message: 'upload song files error'
      });
    }
}
exports.pubaddsong = function(req, res, next){
  const labelid = req.params.id;
  const artistid = req.body.artistid;
  const albumid = req.body.albumid;
  const songname = req.body.songname;
  const songlyric = req.body.songlyric;
  const songgenre = req.body.songgenre;
  const songprice = req.body.songprice;
  const songprvwpath = req.body.songprvwpath;
  const songprvwname = req.body.songprvwname;
  const songfilepath = req.body.songfilepath;
  const songfilename = req.body.songfilename;  
  const status = req.body.status;
  //const uploadpath = req.body.uploadpath;
  //const token = req.headers['authorization'];
  const q = 'addSongQueue';

  if (!labelid ||!artistid ||!albumid || !songname || !songlyric || !songgenre || !songprice || !status) {
      return res.status(422).send({ success: false, message: 'Main posted data is not correct or incompleted.' });
  }

  var objbody = req.body;
  var objlabelid = {labelid: labelid};
  //var objfile = { fileinputsrc: req.files.fileinputsrc };
  //var headers = {token: token};
  //var objmsg = Object.assign(objbody,objlabelid,objfile, headers);
  var objmsg = Object.assign(objbody,objlabelid);
  var msg = JSON.stringify(objmsg);
  //ch.assertExchange(exchange, 'direct', {durable: false})
  //ch.sendToQueue(q, new Buffer(msg), {persistent: false})

  let pubaddsong = addSongpublish('', q, new Buffer(msg));    
  res.status(200).json({
    success: true,
    message: 'Request to save Song received successfully.'
  });
  //ch.bindQueue(q, exchange, 'registerlabel');
}

exports.pubeditsong = function(req, res, next){
  const labelid = req.params.id;
  const songid = req.body.songid;
  const artistid = req.body.artistid;
  const albumid = req.body.albumid;
  const songname = req.body.songname;
  const songlyric = req.body.songlyric;
  const songgenre = req.body.songgenre;
  const songprice = req.body.songprice;
  const status = req.body.status;
  //const uploadpath = req.body.uploadpath;
  //const token = req.headers['authorization'];
  const q = 'editSongQueue';

  if (!songid || !labelid ||!artistid ||!albumid || !songname || !songlyric || !songgenre || !songprice || !status) {
      return res.status(422).send({ success: false, message: 'Main posted data is not correct or incompleted.' });
  }

  var objbody = req.body;
  var objlabelid = {labelid: labelid};
  var objmsg = Object.assign(objbody,objlabelid);
  var msg = JSON.stringify(objmsg);
  //ch.assertExchange(exchange, 'direct', {durable: false})
  //ch.sendToQueue(q, new Buffer(msg), {persistent: false})

  let pubeditsong = editSongpublish('', q, new Buffer(msg));    
  res.status(200).json({
    success: true,
    message: 'Request to update Song received successfully.'
  });
  //ch.bindQueue(q, exchange, 'registerlabel');
}

exports.pubeditsongprvw = function(req, res, next){
  const songid = req.params.id;
  const labelid = req.body.labelid;
  const songprvwpath = req.body.songprvwpath;
  const songprvwname = req.body.songprvwname;
  const oldsongprvwname = req.body.oldsongprvwname;  
  const token = req.headers['authorization'];

  const q = 'editSongprvwQueue';

  if (!labelid || !songid || !songprvwpath ||!songprvwname || !oldsongprvwname ) {
      return res.status(422).send({ success: false, message: 'Main posted data is not correct or incompleted.' });
  }

  var objbody = req.body;
  var objsongid = {songid: songid};
  var headers = {token: token};
  var objmsg = Object.assign(objbody, objsongid, headers);
  var msg = JSON.stringify(objmsg);
  //ch.assertExchange(exchange, 'direct', {durable: false})
  //ch.sendToQueue(q, new Buffer(msg), {persistent: false})

  let pubeditsongprvw = editSongprvwpublish('', q, new Buffer(msg));    
  res.status(200).json({
    success: true,
    message: 'Request to edit Song preview received successfully.'
  });
  //ch.bindQueue(q, exchange, 'registerlabel');
}
exports.pubeditsongfile = function(req, res, next){
  const songid = req.params.id;
  const labelid = req.body.labelid;
  const songfilepath = req.body.songfilepath;
  const songfilename = req.body.songfilename;
  const oldsongfilename = req.body.oldsongfilename;  
  const token = req.headers['authorization'];

  const q = 'editSongfileQueue';

  if (!labelid || !songid || !songfilepath ||!songfilename || !oldsongfilename ) {
      return res.status(422).send({ success: false, message: 'Main posted data is not correct or incompleted.' });
  }

  var objbody = req.body;
  var objsongid = {songid: songid};
  var headers = {token: token};
  var objmsg = Object.assign(objbody, objsongid, headers);
  var msg = JSON.stringify(objmsg);
  //ch.assertExchange(exchange, 'direct', {durable: false})
  //ch.sendToQueue(q, new Buffer(msg), {persistent: false})

  let pubeditsongfile = editSongfilepublish('', q, new Buffer(msg));    
  res.status(200).json({
    success: true,
    message: 'Request to edit Song file received successfully.'
  });
  //ch.bindQueue(q, exchange, 'registerlabel');
}

exports.pubdeletesong = function(req, res, next){
  const songid = req.params.id;
  const songprvwname = req.body.songprvwname;
  const songfilename = req.body.songfilename;
  const labelid = req.body.labelid;
  const token = req.headers['authorization'];

  const q = 'deleteSongQueue';

  if (!labelid || !songid || !songfilename || !songprvwname) {
      return res.status(422).send({ success: false, message: 'Main posted data is not correct or incompleted.' });
  }

  var objbody = req.body;
  var objsongid = {songid: songid};
  var headers = {token: token};
  var objmsg = Object.assign(objbody, objsongid, headers);
  var msg = JSON.stringify(objmsg);
  //ch.assertExchange(exchange, 'direct', {durable: false})
  //ch.sendToQueue(q, new Buffer(msg), {persistent: false})

  let pubdeletesong = deleteSongpublish('', q, new Buffer(msg));    
  res.status(200).json({
    success: true,
    message: 'Request to delete Song received successfully.'
  });
  //ch.bindQueue(q, exchange, 'registerlabel');
}

//Start RabbitMQ Connection for PUBLISHERS
function startpubRMQsong() {
  amqp.connect(config.amqpURL, function(err, conn) {
    if (err) {
      console.error("[AMQP SONG]", err.message);
      return setTimeout(startpubRMQsong, 1000);
    }
    conn.on("error", function(err) {
      if (err.message !== "Connection closing") {
        console.error("[AMQP SONG] conn error", err.message);
      }
    });
    conn.on("close", function() {
      console.error("[AMQP SONG] reconnecting");
      return setTimeout(startpubRMQsong, 1000);
    });
    console.log("[AMQP SONG] connected");
    amqpConn = conn;
    addSongPub('addSongQueue');
    editSongprvwPub('editSongprvwQueue');
    editSongfilePub('editSongfileQueue');
    deleteSongPub('deleteSongQueue');
    editSongPub('editSongQueue');
  });
}

var addSongPubChannel = null;
var addSongofflinePubQueue = [];
function addSongPub(q) {
  amqpConn.createConfirmChannel(function(err, ch) {
    if (closeOnErr(err)) return;
    ch.on("error", function(err) {
        console.error("[AMQP SONG] add song channel error", err.message);
    });
    ch.on("close", function() {
        console.log("[AMQP SONG] add song channel closed");
    });
    
    addSongPubChannel = ch;
    addSongPubChannel.assertQueue(q, {durable: false});
    
    while (true) {
        var m = addSongofflinePubQueue.shift();
        if (!m) break;
        addSongpublish(m[0], m[1], m[2]);
    }
  });
}

function addSongpublish(exchange, routingKey, content) {
  try {
    addSongPubChannel.publish(exchange, routingKey, content, { persistent: false },
      function(err, ok) {
        if (err) {
          console.error("[AMQP SONG] add song publish", err);
          addSongofflinePubQueue.push([exchange, routingKey, content]);
          addSongPubChannel.connection.close();
          return false;
        }
        console.log("[AMQP SONG] add song publisher completed");
        return true;
      }
    );
  } catch (e) {
    console.error("[AMQP SONG] add song publish", e.message);
    addSongofflinePubQueue.push([exchange, routingKey, content]);
    return false;
  }
  /*   return new Promise((resolve, reject) => {
    try {
      addSongPubChannel.publish(exchange, routingKey, content, { persistent: false },
        function(err, ok) {
          if (err) {
            console.error("[AMQP SONG] add song publish", err);
            addSongofflinePubQueue.push([exchange, routingKey, content]);
            addSongPubChannel.connection.close();
            reject(false);
          }
          console.log("[AMQP SONG] add song publisher completed");
          resolve(true);
        }
      );
    } catch (e) {
      console.error("[AMQP SONG] add song publish", e.message);
      addSongofflinePubQueue.push([exchange, routingKey, content]);
      reject(false);
    }
  }); */
}

var editSongprvwPubChannel = null;
var editSongprvwofflinePubQueue = [];
function editSongprvwPub(q) {
  amqpConn.createConfirmChannel(function(err, ch) {
    if (closeOnErr(err)) return;
    ch.on("error", function(err) {
        console.error("[AMQP SONG] edit song preview channel error", err.message);
    });
    ch.on("close", function() {
        console.log("[AMQP SONG] edit song preview channel closed");
    });
    
    editSongprvwPubChannel = ch;
    editSongprvwPubChannel.assertQueue(q, {durable: false});
    
    while (true) {
        var m = editSongprvwofflinePubQueue.shift();
        if (!m) break;
        editSongprvwpublish(m[0], m[1], m[2]);
    }
  });
}

function editSongprvwpublish(exchange, routingKey, content) {
    try {
      editSongprvwPubChannel.publish(exchange, routingKey, content, { persistent: false },
        function(err, ok) {
          if (err) {
            console.error("[AMQP SONG] edit song preview publish", err);
            editSongprvwofflinePubQueue.push([exchange, routingKey, content]);
            editSongprvwPubChannel.connection.close();
            return false;
          }
          console.log("[AMQP SONG] edit song preview publisher completed");
          return true;
        }
      );
    } catch (e) {
      console.error("[AMQP SONG] edit song preview publish", e.message);
      editSongprvwofflinePubQueue.push([exchange, routingKey, content]);
      return false;
    }
}

var editSongfilePubChannel = null;
var editSongfileofflinePubQueue = [];
function editSongfilePub(q) {
  amqpConn.createConfirmChannel(function(err, ch) {
    if (closeOnErr(err)) return;
    ch.on("error", function(err) {
        console.error("[AMQP SONG] edit song file channel error", err.message);
    });
    ch.on("close", function() {
        console.log("[AMQP SONG] edit song file channel closed");
    });
    
    editSongfilePubChannel = ch;
    editSongfilePubChannel.assertQueue(q, {durable: false});
    
    while (true) {
        var m = editSongfileofflinePubQueue.shift();
        if (!m) break;
        editSongfilepublish(m[0], m[1], m[2]);
    }
  });
}

function editSongfilepublish(exchange, routingKey, content) {
    try {
      editSongfilePubChannel.publish(exchange, routingKey, content, { persistent: false },
        function(err, ok) {
          if (err) {
            console.error("[AMQP SONG] edit song file publish", err);
            editSongfileofflinePubQueue.push([exchange, routingKey, content]);
            editSongfilePubChannel.connection.close();
            return false;
          }
          console.log("[AMQP SONG] edit song file publisher completed");
          return true;
        }
      );
    } catch (e) {
      console.error("[AMQP SONG] edit song file publish", e.message);
      editSongfileofflinePubQueue.push([exchange, routingKey, content]);
      return false;
    }
}

var deleteSongPubChannel = null;
var deleteSongofflinePubQueue = [];
function deleteSongPub(q) {
  amqpConn.createConfirmChannel(function(err, ch) {
    if (closeOnErr(err)) return;
    ch.on("error", function(err) {
        console.error("[AMQP SONG] delete song channel error", err.message);
    });
    ch.on("close", function() {
        console.log("[AMQP SONG] delete song channel closed");
    });
    
    deleteSongPubChannel = ch;
    deleteSongPubChannel.assertQueue(q, {durable: false});
    
    while (true) {
        var m = deleteSongofflinePubQueue.shift();
        if (!m) break;
        deleteSongpublish(m[0], m[1], m[2]);
    }
  });
}

function deleteSongpublish(exchange, routingKey, content) {
    try {
      deleteSongPubChannel.publish(exchange, routingKey, content, { persistent: false },
        function(err, ok) {
          if (err) {
            console.error("[AMQP SONG] delete song publish", err);
            deleteSongofflinePubQueue.push([exchange, routingKey, content]);
            deleteSongPubChannel.connection.close();
            return false;
          }
          console.log("[AMQP SONG] delete song publisher completed");
          return true;
        }
      );
    } catch (e) {
      console.error("[AMQP SONG] delete song publish", e.message);
      deleteSongofflinePubQueue.push([exchange, routingKey, content]);
      return false;
    }
}

var editSongPubChannel = null;
var editSongofflinePubQueue = [];
function editSongPub(q) {
  amqpConn.createConfirmChannel(function(err, ch) {
    if (closeOnErr(err)) return;
    ch.on("error", function(err) {
        console.error("[AMQP SONG] edit song channel error", err.message);
    });
    ch.on("close", function() {
        console.log("[AMQP SONG] edit song channel closed");
    });
    
    editSongPubChannel = ch;
    editSongPubChannel.assertQueue(q, {durable: false});
    
    while (true) {
        var m = editSongofflinePubQueue.shift();
        if (!m) break;
        editSongpublish(m[0], m[1], m[2]);
    }
  });
}

function editSongpublish(exchange, routingKey, content) {
  try {
    editSongPubChannel.publish(exchange, routingKey, content, { persistent: false },
      function(err, ok) {
        if (err) {
          console.error("[AMQP SONG] edit song publish", err);
          editSongofflinePubQueue.push([exchange, routingKey, content]);
          editSongPubChannel.connection.close();
          return false;
        }
        console.log("[AMQP SONG] edit song publisher completed");
        return true;
      }
    );
  } catch (e) {
    console.error("[AMQP SONG] edit song publish", e.message);
    editSongofflinePubQueue.push([exchange, routingKey, content]);
    return false;
  }
}

function closeOnErr(err) {
  if (!err) return false;
  console.error("[AMQP SONG] error", err);
  amqpConn.close();
  return true;
}