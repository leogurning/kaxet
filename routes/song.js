const mongoose = require( 'mongoose' );
const Song = require('../models/song');
const config = require('../config');
const fs = require('fs');
const cloudinary = require('cloudinary');
const prvwuploadpath = "kaxet/previews/";
const songuploadpath = "kaxet/songs/";

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

cloudinary.config({ 
  cloud_name: config.cloud_name, 
  api_key: config.api_key, 
  api_secret: config.api_secret
}); 

// Imports the Google Cloud client library
const Storage = require('@google-cloud/storage');
const storage = new Storage({
    projectId: config.GCLOUD_PROJECT
});
const bucket = storage.bucket(config.CLOUD_BUCKET);
const gcsuploadpathprvw = "previews/";
const gcsuploadpathsong = "songs/";
var getPublicUrl = function(gcsuploadpath, filename) {
    return `https://storage.googleapis.com/${config.CLOUD_BUCKET}/${gcsuploadpath}${filename}`;
}

exports.songprvwupload = function(req, res, next){
    var stats;
    const d = new Date();
    const ts = ("0" + d.getDate()).slice(-2) + ("0"+(d.getMonth()+1)).slice(-2) + 
                d.getFullYear() + ("0" + d.getHours()).slice(-2) + 
                ("0" + d.getMinutes()).slice(-2) + ("0" + d.getSeconds()).slice(-2);
    if(req.files.songprvw){
      var file = req.files.songprvw,
        oriname = file.name;
        //name = 'prvw-'+ts+oriname.substr(oriname.length - 4);
        const gcsname = ts+'-'+oriname.substr(oriname.length - 4);
        const gcsfile = bucket.file(gcsuploadpathprvw+gcsname);
        const stream = gcsfile.createWriteStream({
            metadata: {
              contentType: file.mimetype
            }
          });

        stream.on('error', (err) => {
            file.cloudStorageError = err;
            console.log("Song Preview Upload Failed", err);
            return res.status(401).json({ success: false, 
                message:'Song Preview Upload Failed on streaming upload.'
            });      
          });

        stream.on('finish', () => {
            file.cloudStorageObject = gcsname;
            gcsfile.makePublic().then(() => {
                file.cloudStoragePublicUrl = getPublicUrl(gcsuploadpathprvw, gcsname);
                console.log("Song Preview Uploaded",gcsname);
                res.status(201).json({
                  success: true,
                  message: 'Song Preview is successfully uploaded.',
                  filedata : {
                        songprvwpath: file.cloudStoragePublicUrl,
                        songprvwname: file.cloudStorageObject
                    }
                });
                next();
            })
            .catch(err => {
                return res.status(401).json({ success: false, 
                    message:'Song Preview Upload Failed on making public URL.'
                });      
            });
        });       
        stream.end(file.data);
    }
    else {
      return res.status(402).json({ success: false, 
          message:'No Song Preview is uploaded.',
          filedata : {songprvwpath: "",songprvwname: ""}
        });
    };
}

/* exports.songprvwupload = function(req, res, next){
  var stats;
  const d = new Date();
  const ts = ("0" + d.getDate()).slice(-2) + ("0"+(d.getMonth()+1)).slice(-2) + 
              d.getFullYear() + ("0" + d.getHours()).slice(-2) + 
              ("0" + d.getMinutes()).slice(-2) + ("0" + d.getSeconds()).slice(-2);
  if(req.files.songprvw){
    var file = req.files.songprvw,
      oriname = file.name,
      name = 'prvw-'+ts+oriname.substr(oriname.length - 4);
      cloudinary.v2.uploader.upload_stream(
        {public_id: name, folder: prvwuploadpath,invalidate: true,resource_type: 'video'}, 
        function(err, result){
            if(err){
              console.log("Song Preview Upload Failed",name,err);
              return res.status(401).json({ success: false, 
                message:'Song Preview Upload Failed.'
              });
            }
            else {
              console.log("Song Preview Uploaded",name);
              res.status(201).json({
                success: true,
                message: 'Song Preview is successfully uploaded.',
                filedata : {songprvwpath: result.secure_url,songprvwname: result.public_id}
              });
            }
        }).end(file.data);
  }
  else {
    return res.status(402).json({ success: false, 
        message:'No Song Preview is uploaded.',
        filedata : {songprvwpath: "",songprvwname: ""}
      });
  };
} */

exports.songprvwdelete = function(req, res, next) {
  const songprvwname = req.body.songprvwname;

  if(songprvwname){
    const gcsfile = bucket.file(gcsuploadpathprvw+songprvwname);
    gcsfile.delete()
    .then(() => {
        console.log("Delete Song Preview Success",songprvwname);
        res.status(201).json({
            success: true,
            message: 'Delete Song Preview successful.'});    
    })
    .catch(err => {
        console.log("Delete Song Preview Failed",songprvwname,err);
        res.status(401).json({ success: false, 
          message:'Delete Song Preview Failed.'
        });
    });
  }
  else {
      console.log("No File selected !");
      res.status(402).json({
          success: false,
          message: 'No File selected !'});    
  };
}

/* exports.songprvwdelete = function(req, res, next) {
  const songprvwname = req.body.songprvwname;

  if(songprvwname){
    cloudinary.v2.uploader.destroy(songprvwname,
      {invalidate: true, resource_type: 'video'}, 
    function(err, result){
      if(err){
        console.log("Delete Song Preview Failed",songprvwname,err);
        res.status(401).json({ success: false, 
          message:'Delete Song Preview Failed.'
        });
      }
      else {
        console.log("Delete Song Preview Success",songprvwname);
        res.status(201).json({
            success: true,
            message: 'Delete Song Preview successful.'});
      }
    });
  }
  else {
      console.log("No File selected !");
      res.status(402).json({
          success: false,
          message: 'No File selected !'});    
  };
} */

exports.songfileupload = function(req, res, next){
  var stats;
  const d = new Date();
  const ts = ("0" + d.getDate()).slice(-2) + ("0"+(d.getMonth()+1)).slice(-2) + 
              d.getFullYear() + ("0" + d.getHours()).slice(-2) + 
              ("0" + d.getMinutes()).slice(-2) + ("0" + d.getSeconds()).slice(-2);

  if(req.files.songfile){
    var file = req.files.songfile,
      oriname = file.name;
      //name = 'song-'+ts+oriname.substr(oriname.length - 4);
    const gcsname = ts+'-'+oriname.substr(oriname.length - 4);
    const gcsfile = bucket.file(gcsuploadpathsong+gcsname);
    const stream = gcsfile.createWriteStream({
        metadata: {
          contentType: file.mimetype
        }
      });

      stream.on('error', (err) => {
          file.cloudStorageError = err;
          console.log("Song File Upload Failed", err);
          return res.status(401).json({ success: false, 
              message:'Song File Upload Failed on streaming upload.'
          });      
        });

      stream.on('finish', () => {
          file.cloudStorageObject = gcsname;
          gcsfile.makePublic().then(() => {
              file.cloudStoragePublicUrl = getPublicUrl(gcsuploadpathsong, gcsname);
              console.log("Song File Uploaded",gcsname);
              res.status(201).json({
                success: true,
                message: 'Song File is successfully uploaded.',
                filedata : {
                      songfilepath: file.cloudStoragePublicUrl,
                      songfilename: file.cloudStorageObject
                  }
              });
              next();
          })
          .catch(err => {
              return res.status(401).json({ success: false, 
                  message:'Song File Upload Failed on making public URL.'
              });      
          });
      });       
      stream.end(file.data);
  }
  else {
    return res.status(402).json({ success: false, 
        message:'No Song File is uploaded.',
        filedata : {songfilepath: "",songfilename: ""}
      });
  };
}

/* exports.songfileupload = function(req, res, next){
  var stats;
  const d = new Date();
  const ts = ("0" + d.getDate()).slice(-2) + ("0"+(d.getMonth()+1)).slice(-2) + 
              d.getFullYear() + ("0" + d.getHours()).slice(-2) + 
              ("0" + d.getMinutes()).slice(-2) + ("0" + d.getSeconds()).slice(-2);

  if(req.files.songfile){
    var file = req.files.songfile,
      oriname = file.name,
      name = 'song-'+ts+oriname.substr(oriname.length - 4);
    
      cloudinary.v2.uploader.upload_stream(
        {public_id: name, folder: songuploadpath,invalidate: true,resource_type: 'video'}, 
        function(err, result){
            if(err){
              console.log("Song File Upload Failed",name,err);
              return res.status(401).json({ success: false, 
                message:'Song File Upload Failed.'
              });
            }
            else {
              console.log("Song File Uploaded",name);
              res.status(201).json({
                success: true,
                message: 'Song File is successfully uploaded.',
                filedata : {songfilepath: result.secure_url,songfilename: result.public_id}});
            }
        }).end(file.data);
  }
  else {
    return res.status(402).json({ success: false, 
        message:'No Song File is uploaded.',
        filedata : {songfilepath: "",songfilename: ""}
      });
  };
} */

exports.songfiledelete = function(req, res, next) {
  const songfilename = req.body.songfilename;
  if(songfilename){
    const gcsfile = bucket.file(gcsuploadpathsong+songfilename);
    gcsfile.delete()
    .then(() => {
        console.log("Delete Song File Success",songfilename);
        res.status(201).json({
            success: true,
            message: 'Delete Song File successful.'});    
    })
    .catch(err => {
        console.log("Delete Song File Failed",songfilename,err);
        res.status(401).json({ success: false, 
          message:'Delete Song File Failed.'
        });
    });
  }
  else {
      console.log("No File selected !");
      res.status(402).json({
          success: false,
          message: 'No File selected !'});    
  };
}

/* exports.songfiledelete = function(req, res, next) {
  const songfilename = req.body.songfilename;
  if(songfilename){
    cloudinary.v2.uploader.destroy(songfilename,
      {invalidate: true, resource_type: 'video'}, 
    function(err, result){
      if(err){
        console.log("Delete Song File Failed",songfilename,err);
        res.status(401).json({ success: false, 
          message:'Delete Song File Failed.'
        });
      }
      else {
        console.log("Delete Song File Success",songfilename);
        res.status(201).json({
            success: true,
            message: 'Delete Song File successful.'});
      }
    });
  }
  else {
      console.log("No File selected !");
      res.status(402).json({
          success: false,
          message: 'No File selected !'});    
  };
} */

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
              song.songbuy = song.songbuy + 1 ;
              song.save(function(err){
                if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err }); }
                res.status(201).json({
                    success: true,
                    message: 'Song buy has been added successfully'
                });
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
  Song.remove({_id: req.params.id}, function(err){
        if(err){ res.status(400).json({ success: false, message: 'Error processing request '+ err }); }
        res.status(201).json({
            success: true,
            message: 'Song removed successfully'
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
      songpublish: new RegExp(songpublish,'i'),
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
    console.log(query);
    Song.paginate(query, options).then(function(result) {
      res.status(201).json({
        success: true, 
        data: result,
        totalcount: totalcount
      });
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
    // returns albums records based on query
    query = {labelid:labelid};
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
        
    aggregate.match(query).lookup(olookup).unwind(ounwind);
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