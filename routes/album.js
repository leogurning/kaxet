const mongoose = require( 'mongoose' );
const Album = require('../models/album');
const config = require('../config');
const fs = require('fs');
const cloudinary = require('cloudinary');
const uploadpath = "kaxet/images/albums/";

cloudinary.config({ 
    cloud_name: config.cloud_name, 
    api_key: config.api_key, 
    api_secret: config.api_secret
}); 

// Imports the Google Cloud client library
const Storage = require('@google-cloud/storage');
const gcsuploadpath = "images/albums/";
const storage = new Storage({
    projectId: config.GCLOUD_PROJECT
});
const bucket = storage.bucket(config.CLOUD_BUCKET);
var getPublicUrl = function(filename) {
    return `https://storage.googleapis.com/${config.CLOUD_BUCKET}/${gcsuploadpath}${filename}`;
}
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

exports.testalbum = function(req, res, next){
    const labelid = req.params.id;
    const artistid = req.query.artistid;
    const albumid = req.query.albumid;

    console.log(labelid);
    console.log(artistid);
    console.log(albumid);

    res.status(201).json({
        success: true,
        message: 'Album saved successfully ' + albumid
        });
}

exports.albumphotoupload = function(req, res, next){
    var stats;
    const d = new Date();
    const ts = ("0" + d.getDate()).slice(-2) + ("0"+(d.getMonth()+1)).slice(-2) + 
                d.getFullYear() + ("0" + d.getHours()).slice(-2) + 
                ("0" + d.getMinutes()).slice(-2) + ("0" + d.getSeconds()).slice(-2);

    console.log('Ini req files ' + req.files);
    if(req.files.albumimage){
        var file = req.files.albumimage;
        const gcsname = ts+'-'+file.name;
        const gcsfile = bucket.file(gcsuploadpath+gcsname);
        const stream = gcsfile.createWriteStream({
            metadata: {
              contentType: file.mimetype
            }
          });

        stream.on('error', (err) => {
            file.cloudStorageError = err;
            console.log("Album Photo Upload Failed", err);
            return res.status(401).json({ success: false, 
                message:'Album Photo Upload Failed on streaming upload.'
            });      
          });

        stream.on('finish', () => {
            file.cloudStorageObject = gcsname;
            gcsfile.makePublic().then(() => {
                file.cloudStoragePublicUrl = getPublicUrl(gcsname);
                console.log("Album Photo Uploaded",gcsname);
                res.status(201).json({
                  success: true,
                  message: 'Album Photo is successfully uploaded.',
                  filedata : {
                        albumphotopath: file.cloudStoragePublicUrl,
                        albumphotoname: file.cloudStorageObject
                    }
                });
                next();
            })
            .catch(err => {
                return res.status(401).json({ success: false, 
                    message:'Album Photo Upload Failed on making public URL.'
                });      
            });
        });       
        stream.end(file.data);
    } else {
      return res.status(402).json({ success: false, 
          message:'No Album Photo uploaded.',
          filedata : {albumphotopath: "",albumphotoname: ""}
        });
    };
}

/* exports.albumphotoupload = function(req, res, next){
    var stats;
    const d = new Date();
    const ts = ("0" + d.getDate()).slice(-2) + ("0"+(d.getMonth()+1)).slice(-2) + 
                d.getFullYear() + ("0" + d.getHours()).slice(-2) + 
                ("0" + d.getMinutes()).slice(-2) + ("0" + d.getSeconds()).slice(-2);

    console.log('Ini req files ' + req.files);
    if(req.files.albumimage){
      var file = req.files.albumimage,
        name = ts;
      cloudinary.v2.uploader.upload_stream(
        {public_id: name, folder: uploadpath,invalidate: true,resource_type: 'image'}, 
        function(err, result){
            if(err){
                console.log("Album Photo Upload Failed",name,err);
                return res.status(401).json({ success: false, 
                  message:'Album Photo Upload Failed.'
                });
            }
            else {
                console.log("Album Photo Uploaded",name);
                res.status(201).json({
                  success: true,
                  message: 'Album Photo is successfully uploaded.',
                  filedata : {albumphotopath: result.secure_url,albumphotoname: result.public_id}
                });
            }
        }).end(file.data);
    }
    else {
      return res.status(402).json({ success: false, 
          message:'No Album Photo uploaded.',
          filedata : {albumphotopath: "",albumphotoname: ""}
        });
    };
} */

exports.albumphotodelete = function(req, res, next) {
    const albumphotoname = req.body.albumphotoname;
    if(albumphotoname){
        const gcsfile = bucket.file(gcsuploadpath+albumphotoname);
        gcsfile.delete()
        .then(() => {
            console.log("Delete Album Photo Success",albumphotoname);
            res.status(201).json({
                success: true,
                message: 'Delete Album Photo successful.'});    
        })
        .catch(err => {
            console.log("Delete Album Photo Failed",albumphotoname,err);
            res.status(401).json({ success: false, 
              message:'Delete Album Photo Failed.'
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

/* exports.albumphotodelete = function(req, res, next) {
    const albumphotoname = req.body.albumphotoname;
    if(albumphotoname){
        cloudinary.v2.uploader.destroy(albumphotoname,
          {invalidate: true, resource_type: 'image'}, 
        function(err, result){
          if(err){
            console.log("Delete Album Photo Failed",albumphotoname,err);
            res.status(401).json({ success: false, 
              message:'Delete Album Photo Failed.'
            });
          }
          else {
            console.log("Delete Album Photo Success",albumphotoname);
            res.status(201).json({
                success: true,
                message: 'Delete Album Photo successful.'});
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

exports.savealbum = function(req, res, next){
    const labelid = req.params.id;
    const artistid = req.query.artistid;
    const albumname = req.body.albumname;
    const albumyear = req.body.albumyear;
    const albumgenre = req.body.albumgenre;
    const albumprice = req.body.albumprice;
    const albumphotopath = req.body.albumphotopath;
    const albumphotoname = req.body.albumphotoname;
    const status = req.body.status;
    const albumid = req.body.albumid;

    if (!labelid || !albumname || !albumyear || !albumgenre || !albumprice || !status) {
        return res.status(422).send({ success: false, message: 'Main posted data is not correct or incompleted.' });
    } else {
		
        if (albumid) {
            //Edit album
            Album.findById(albumid).exec(function(err, album){
                if(err){ res.status(400).json({ success: false, message: 'Error processing request '+ err }); }
                    
                if(album) {
                    album.artistid = artistid,
                    album.albumname = albumname;
                    album.albumyear = albumyear;
                    album.albumgenre = albumgenre;
                    album.albumprice = albumprice;
                    album.status = status;
                    album.objartistid = artistid;
                    album.modifydt = new Date();
                }
                album.save(function(err) {
                    if(err){ res.status(400).json({ success: false, message: 'Error processing request '+ err }); }
                    res.status(201).json({
                        success: true,
                        message: 'Album updated successfully'
                    });
                });
            });

        }else {
            // Add new album
            if (!albumphotopath || !albumphotoname) {
                return res.status(422).send({ success: false, message: 'Album photo is not provided.' });
            } else {
                let oAlbum = new Album({
                    labelid: labelid,
                    artistid: artistid,
                    albumname: albumname,
                    albumyear: albumyear,
                    albumgenre: albumgenre,
                    albumrate: 5,
                    albumprice: albumprice,
                    albumphotopath: albumphotopath,
                    albumphotoname: albumphotoname,
                    status: status,
                    objartistid: artistid,
                    objlabelid: labelid,
                    createddt: new Date(),
                    modifydt: new Date()
                });
        
                oAlbum.save(function(err) {
                    if(err){ res.status(400).json({ success: false, message: 'Error processing request '+ err }); }
                        
                    res.status(201).json({
                        success: true,
                        message: 'Album saved successfully'
                        });
                });
            }
        }
    }
}

exports.updatealbumphoto = function(req, res, next){
    const albumid = req.params.id;
    const albumphotopath = req.body.albumphotopath;
    const albumphotoname = req.body.albumphotoname;

    if (!albumphotopath || !albumphotoname) {
        return res.status(422).json({ success: false, message: 'Posted data is not correct or incompleted.'});
    } else {
        Album.findById(albumid).exec(function(err, album){
            if(err){ res.status(400).json({ success: false, message: 'Error processing request '+ err }); }
                
            if(album){
                album.albumphotopath = albumphotopath;
                album.albumphotoname = albumphotoname;
                album.modifydt = new Date();
            }
            album.save(function(err){
                if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err }); }
                res.status(201).json({
                    success: true,
                    message: 'Album Photo details updated successfully'
                });
            });
        });
   }
}

exports.getalbum = function(req, res, next){
	Album.find({_id:req.params.id}).exec(function(err, album){
        if(err) { 
            res.status(400).json({ success: false, message:'Error processing request '+ err }); 
        }
        res.status(201).json({
		    success: true, 
		    data: album
	    });
    });
}

exports.delalbum = function(req, res, next) {
	Album.remove({_id: req.params.id}, function(err){
        if(err){ res.status(400).json({ success: false, message: 'Error processing request '+ err }); }
        
        res.status(201).json({
            success: true,
            message: 'Album removed successfully'
        });
    });
}

exports.albumreport = function(req, res, next){
    const labelid = req.params.labelid || req.query.labelid;
    const albumname = req.body.albumname || req.query.albumname;
    const artistid = req.body.artistid || req.query.artistid;
    const albumyear = req.body.albumyear || req.query.albumyear;
    const albumgenre = req.body.albumgenre || req.query.albumgenre;
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
	sortby = 'albumname';
    }

    var offset = (page - 1) * limit;

    if (!labelid) {
        return res.status(422).send({ error: 'Parameter data is not correct or incompleted.'});
	}else{
			// returns albums records based on query
            if (!status) {

                if (!albumgenre) {
                    if (!artistid) {
                        query = { labelid:labelid, 
                            albumname: new RegExp(albumname,'i'), 
                            albumyear: new RegExp(albumyear,'i')};
                    } else {
                        query = { labelid:labelid, 
                            albumname: new RegExp(albumname,'i'),
                            artistid:artistid, 
                            albumyear: new RegExp(albumyear,'i')};
                    }

                }else {
                    if (!artistid) {
                        query = { labelid:labelid, 
                            albumname: new RegExp(albumname,'i'), 
                            albumyear: new RegExp(albumyear,'i'), 
                            albumgenre: albumgenre};
                    }else {
                        query = { labelid:labelid, 
                            albumname: new RegExp(albumname,'i'), 
                            albumyear: new RegExp(albumyear,'i'), 
                            artistid:artistid,
                            albumgenre: albumgenre};
                    }
                }

            }else{

                if (!albumgenre) {
                    if (!artistid) {
                        query = { labelid:labelid, 
                            albumname: new RegExp(albumname,'i'), 
                            albumyear: new RegExp(albumyear,'i'), 
                            status: status};
                    } else{
                        query = { labelid:labelid, 
                            albumname: new RegExp(albumname,'i'),
                            artistid:artistid, 
                            albumyear: new RegExp(albumyear,'i'), 
                            status: status};
                    }

                }else {
                    if (!artistid) {
                        query = { labelid:labelid, 
                            albumname: new RegExp(albumname,'i'), 
                            albumyear: new RegExp(albumyear,'i'), 
                            albumgenre: albumgenre, 
                            status: status};
                    } else {
                        query = { labelid:labelid, 
                            albumname: new RegExp(albumname,'i'), 
                            artistid:artistid,
                            albumyear: new RegExp(albumyear,'i'), 
                            albumgenre: albumgenre, 
                            status: status};
                    }
                }
            }

			Album.count(query, function(err, count){
                totalcount = count;                
                if(count > offset){
					offset = 0;
				}
			});

		var options = {
			select: 'albumname albumyear albumgenre artistid albumprice status albumphotopath albumphotoname',
			sort: sortby,
			offset: offset,
			limit: limit
		}
        console.log(query);
		Album.paginate(query, options).then(function(result) {
			res.status(201).json({
				success: true, 
                data: result,
                totalcount: totalcount
			});
		});
	}
}

exports.artistalbumlist = function(req, res, next){
    const labelid = req.params.labelid || req.query.labelid;
    const albumname = req.body.albumname || req.query.albumname;
    const artistid = req.body.artistid || req.query.artistid;
    const albumyear = req.body.albumyear || req.query.albumyear;
    const albumgenre = req.body.albumgenre || req.query.albumgenre;
    const status = req.body.status || req.query.status;
    const genregrp = 'GENRE';
    const statusgrp = 'CSTATUS';
    const msconfigsts = 'STSACT';
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
	sortby = 'albumname';
    }

    var offset = (page - 1) * limit;

    if (!labelid) {
        return res.status(422).send({ error: 'Parameter data is not correct or incompleted.'});
	}else{
        // returns albums records based on query
        query = {labelid:labelid,
            albumname: new RegExp(albumname,'i'), 
            albumyear: new RegExp(albumyear,'i'),
            "genredetails.group": genregrp,
            "genredetails.status": msconfigsts,
            "statusdetails.group": statusgrp,
            "statusdetails.status": msconfigsts
            };
        
        if (artistid) {
            query = merge(query, {artistid:artistid});
        }
        if (albumgenre) {
            query = merge(query, {albumgenre: albumgenre});
        }  
        if (status) {
            query = merge(query, {status:status});
        }

        var options = {
            page: page,
            limit: limit,
            sortBy: sortby
        }

        var aggregate = Album.aggregate();        
        var olookup = {
            from: 'msconfig',
            localField: 'albumgenre',
            foreignField: 'code',
            as: 'genredetails'
        };    
        var olookup1 = {
                from: 'msconfig',
                localField: 'status',
                foreignField: 'code',
                as: 'statusdetails'
            };

        var ounwind = 'genredetails';
        var ounwind1 = 'statusdetails';
        var oproject = {
            albumname: 1,
            albumyear: 1,
            albumgenre:1,
            "genrevalue": "$genredetails.value",
            albumprice:1,
            status:1,
            "stsvalue": "$statusdetails.value",
            albumphotopath:1,
            albumphotoname:1        
        };

        //var osort = { "$sort": { sortby: 1}};
        aggregate.lookup(olookup).unwind(ounwind);
        aggregate.lookup(olookup1).unwind(ounwind1);  
        aggregate.match(query);  
        aggregate.project(oproject);

        Album.aggregatePaginate(aggregate, options, function(err, results, pageCount, count) {
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

exports.albumaggregate = function(req, res, next){
    const labelid = req.params.labelid || req.query.labelid;
    const albumname = req.body.albumname || req.query.albumname;
    const artistid = req.body.artistid || req.query.artistid;
    const albumyear = req.body.albumyear || req.query.albumyear;
    const albumgenre = req.body.albumgenre || req.query.albumgenre;
    const status = req.body.status || req.query.status;
    const msconfiggrp = 'GENRE';
    const msconfigsts = 'STSACT';
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
	sortby = 'albumname';
    }

    if (!labelid) {
        return res.status(422).send({ error: 'Parameter data is not correct or incompleted.'});
	}else{
		// returns albums records based on query
        query = {labelid:labelid,
            albumname: new RegExp(albumname,'i'), 
            albumyear: new RegExp(albumyear,'i'),
            "msconfigdetails.group": msconfiggrp,
            "msconfigdetails.status": msconfigsts
            };
        
        if (artistid) {
            query = merge(query, {artistid:artistid});
        }
        if (albumgenre) {
            query = merge(query, {albumgenre: albumgenre});
        }  
        if (status) {
            query = merge(query, {status:status});
        }
		var options = {
            page: page,
            limit: limit,
            sortBy: sortby
		}
        console.log(query);
        var aggregate = Album.aggregate();        
        var olookup = {
              from: 'artist',
              localField: 'objartistid',
              foreignField: '_id',
              as: 'artistdetails'
            };
        var olookup1 = {
            from: 'msconfig',
            localField: 'albumgenre',
            foreignField: 'code',
            as: 'msconfigdetails'
        };    
        var ounwind = 'artistdetails';
        var ounwind1 = 'msconfigdetails';
        var oproject = {
            labelid:1,
            artistid:1,
            albumname: 1,
            albumyear: 1,
            albumgenre:1,
            "genrevalue": "$msconfigdetails.value",
            objartistid:1,
            "artist": "$artistdetails.artistname",
            albumprice:1,
            status:1,
            albumphotopath:1,
            albumphotoname:1        
        };

        //var osort = { "$sort": { sortby: 1}};
        aggregate.lookup(olookup).unwind(ounwind);
        aggregate.lookup(olookup1).unwind(ounwind1);  
        aggregate.match(query);  
        aggregate.project(oproject);
        //aggregate.sort(osort);
        
        Album.aggregatePaginate(aggregate, options, function(err, results, pageCount, count) {
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

exports.getalbumlist = function(req, res, next){
    const labelid = req.params.labelid;
    const status = 'STSACT';
    const sortby = 'albumname';
    let query = {};

    if (!labelid) {
        return res.status(422).send({ error: 'Parameter data is not correct or incompleted.'});
    }else{
        // returns artists records based on query
        query = { labelid:labelid, status: status};        
        var fields = { 
            _id:1, 
            albumname:1 
        };

        var psort = { albumname: 1 };

        Album.find(query, fields).sort(psort).exec(function(err, result) {
            if(err) { 
                res.status(400).json({ success: false, message:'Error processing request '+ err }); 
            } 
            res.status(201).json({
                success: true, 
                data: result
            });
        });
    }
}

exports.getalbumlistbyartist = function(req, res, next){
    const labelid = req.params.labelid;
    const artistid = req.query.artistid;
    const status = 'STSACT';
    const sortby = 'albumname';
    let query = {};

    if (!labelid) {
        return res.status(422).send({ error: 'Parameter data is not correct or incompleted.'});
    }else{
        // returns artists records based on query
        query = { labelid:labelid, status: status};
        if (artistid) {
            query = merge(query, {artistid:artistid});
        }     
        var fields = { 
            _id:1, 
            albumname:1 
        };

        var psort = { albumname: 1 };

        Album.find(query, fields).sort(psort).exec(function(err, result) {
            if(err) { 
                res.status(400).json({ success: false, message:'Error processing request '+ err }); 
            } 
            res.status(201).json({
                success: true, 
                data: result
            });
        });
    }
}