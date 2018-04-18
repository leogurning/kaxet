const mongoose = require( 'mongoose' );
const Song = require('../models/song');
const config = require('../config');
const fs = require('fs');
var rediscli = require('../redisconn');

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
                  rediscli.del('redis-user-song-'+labelid, 'redis-user-songcnt-'+labelid, 'redis-user-songlist-'+albumid+labelid);
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
                  rediscli.del('redis-user-song-'+labelid, 'redis-user-songcnt-'+labelid, 'redis-user-songlist-'+albumid+labelid);
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
                rediscli.del('redis-user-song-'+labelid, 'redis-user-songlist-'+albumid+labelid);
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