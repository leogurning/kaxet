const mongoose = require( 'mongoose' );
const Artist = require('../models/artist');
const config = require('../config');
const fs = require('fs');
// Imports the Cloudinary Cloud client library
const cloudinary = require('cloudinary');
const uploadpath = "kaxet/images/artists/";
cloudinary.config({ 
    cloud_name: config.cloud_name, 
    api_key: config.api_key, 
    api_secret: config.api_secret
}); 

// Imports the Google Cloud client library
const Storage = require('@google-cloud/storage');
const gcsuploadpath = "images/artists/";
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

exports.artistphotoupload = function(req, res, next){
    var stats;
    const d = new Date();
    const ts = ("0" + d.getDate()).slice(-2) + ("0"+(d.getMonth()+1)).slice(-2) + 
                d.getFullYear() + ("0" + d.getHours()).slice(-2) + 
                ("0" + d.getMinutes()).slice(-2) + ("0" + d.getSeconds()).slice(-2);

    if(req.files.artistimage){
      var file = req.files.artistimage;
        const gcsname = ts+'-'+file.name;
        const gcsfile = bucket.file(gcsuploadpath+gcsname);
        const stream = gcsfile.createWriteStream({
            metadata: {
              contentType: file.mimetype
            }
          });

        stream.on('error', (err) => {
            file.cloudStorageError = err;
            console.log("Artist Photo Upload Failed", err);
            return res.status(401).json({ success: false, 
                message:'Artist Photo Upload Failed on streaming upload.'+ err.message
            });      
          });

        stream.on('finish', () => {
            file.cloudStorageObject = gcsname;
            gcsfile.makePublic().then(() => {
                file.cloudStoragePublicUrl = getPublicUrl(gcsname);
                console.log("Artist Photo Uploaded",gcsname);
                res.status(201).json({
                  success: true,
                  message: 'Artist Photo is successfully uploaded.',
                  filedata : {
                        artistphotopath: file.cloudStoragePublicUrl,
                        artistphotoname: file.cloudStorageObject
                    }
                });
                next();
            })
            .catch(err => {
                return res.status(401).json({ success: false, 
                    message:'Artist Photo Upload Failed on making public URL.'
                });      
            });
        });       
        stream.end(file.data);
    } else {
        return res.status(402).json({ success: false, 
            message:'No Artist Photo uploaded.',
            filedata : {artistphotopath: "",artistphotoname: ""}
          });
    };
}

/* exports.artistphotoupload = function(req, res, next){
    var stats;
    const d = new Date();
    const ts = ("0" + d.getDate()).slice(-2) + ("0"+(d.getMonth()+1)).slice(-2) + 
                d.getFullYear() + ("0" + d.getHours()).slice(-2) + 
                ("0" + d.getMinutes()).slice(-2) + ("0" + d.getSeconds()).slice(-2);

    if(req.files.artistimage){
      var file = req.files.artistimage,
        name = ts;
      cloudinary.v2.uploader.upload_stream(
        {public_id: name, folder: uploadpath,invalidate: true,resource_type: 'image'}, 
        function(err, result){
            if(err){
                console.log("Artist Photo Upload Failed", err);
                return res.status(401).json({ success: false, 
                  message:'Artist Photo Upload Failed.'
                });      
            }
            else {
                console.log("Artist Photo Uploaded",name);
                res.status(201).json({
                  success: true,
                  message: 'Artist Photo is successfully uploaded.',
                  filedata : {artistphotopath: result.secure_url,artistphotoname: result.public_id}
                });      
            }
        }).end(file.data);
    } else {
        return res.status(402).json({ success: false, 
            message:'No Artist Photo uploaded.',
            filedata : {artistphotopath: "",artistphotoname: ""}
          });
    };
} */

exports.artistphotodelete = function(req, res, next) {
    const artistphotoname = req.body.artistphotoname;

    if(artistphotoname){
        const gcsfile = bucket.file(gcsuploadpath+artistphotoname);
        gcsfile.delete()
        .then(() => {
            console.log("Delete Artist Photo Success",artistphotoname);
            res.status(201).json({
                success: true,
                message: 'Delete Artist Photo successful.'});    
        })
        .catch(err => {
            console.log("Delete Artist Photo Failed",artistphotoname,err);
            res.status(401).json({ success: false, 
              message:'Delete Artist Photo Failed.'
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

/* exports.artistphotodelete = function(req, res, next) {
    const artistphotoname = req.body.artistphotoname;
    //var deletepathfile = uploadpath + artistphotoname;
    if(artistphotoname){
        cloudinary.v2.uploader.destroy(artistphotoname,
          {invalidate: true, resource_type: 'image'}, 
        function(err, result){
          if(err){
            console.log("Delete Artist Photo Failed",artistphotoname,err);
            res.status(401).json({ success: false, 
              message:'Delete Artist Photo Failed.'
            });
          }
          else {
            console.log("Delete Artist Photo Success",artistphotoname);
            res.status(201).json({
                success: true,
                message: 'Delete Artist Photo successful.'});    
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
		//Edit expense
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
                });
            }
	    }
    }
}

exports.delartist = function(req, res, next) {
	Artist.remove({_id: req.params.id}, function(err){
        if(err){ res.status(400).json({ success: false, message: 'Error processing request '+ err }); }
        res.status(201).json({
        success: true,
        message: 'Artist removed successfully'
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
  
    if(!sortby) {
      sortby = 'artistname';
    }
  
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
  
      var options = {
          page: page,
          limit: limit,
          sortBy: sortby
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
      
      //var osort = { "$sort": { sortby: 1}};
      //aggregate.sort(osort);
        
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

exports.getartistlist = function(req, res, next){
    const labelid = req.params.labelid;
    const status = 'STSACT';
    const sortby = 'artistname';
    let query = {};

    if (!labelid) {
        return res.status(422).send({ error: 'Parameter data is not correct or incompleted.'});
    }else{
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
        });
    }
}