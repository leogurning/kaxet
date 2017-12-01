const mongoose = require( 'mongoose' );
const Album = require('../models/album');
const config = require('../config');
const fs = require('fs');
const uploadpath = config.baseuploadpath + 'assets/albums/images/';
//const uploadpath = '/Users/leonardgurning/Documents/nodeprojects/kaxet/angular-src/src/assets/artists/images/';

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
      var file = req.files.albumimage,
        oriname = file.name,
        name = ts+oriname.substr(oriname.length - 4),
        type = file.mimetype;
      //var uploadpath = __dirname + '/uploads/' + name;
      console.log('Ini working dir ' + __dirname);
      var uploadfile = uploadpath + name;
      var photopath = 'assets/albums/images/'+ name;
      file.mv(uploadfile,function(err){
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
            filedata : {albumphotopath: photopath,albumphotoname: name}});
        }
      });
    }
    else {
      return res.status(402).json({ success: false, 
          message:'No Album Photo uploaded.',
          filedata : {albumphotopath: "",albumphotoname: ""}
        });
    };
}

exports.albumphotodelete = function(req, res, next) {
    const albumphotoname = req.body.albumphotoname;
    var deletepathfile = uploadpath + albumphotoname;
    fs.unlink(deletepathfile, function(err){
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
                    objartistid: artistid
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

exports.albumaggregate = function(req, res, next){
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
        var oproject = {
            labelid:1,
            artistid:1,
            albumname: 1,
            albumyear: 1,
            albumgenre:1,
            objartistid:1,
            "artist": "$artistdetails.artistname",
            albumprice:1,
            status:1,
            albumphotopath:1,
            albumphotoname:1        
        };
        var ounwind = 'artist';
        //var osort = { "$sort": { sortby: 1}};
        aggregate.match(query).lookup(olookup);
        aggregate.project(oproject);
        aggregate.unwind(ounwind);
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
    const status = 'active';
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
    const status = 'active';
    const sortby = 'albumname';
    let query = {};

    if (!labelid) {
        return res.status(422).send({ error: 'Parameter data is not correct or incompleted.'});
    }else{
        // returns artists records based on query
        query = { labelid:labelid, artistid:artistid, status: status};        
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