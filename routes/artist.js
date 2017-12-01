const mongoose = require( 'mongoose' );
const Artist = require('../models/artist');
const config = require('../config');
const fs = require('fs');
const uploadpath = '/Users/leonardgurning/Documents/nodeprojects/kaxet/public/assets/artists/images/';
//const uploadpath = '/Users/leonardgurning/Documents/nodeprojects/kaxet/angular-src/src/assets/artists/images/';

exports.artistphotoupload = function(req, res, next){
    var stats;
    const d = new Date();
    const ts = ("0" + d.getDate()).slice(-2) + ("0"+(d.getMonth()+1)).slice(-2) + 
                d.getFullYear() + ("0" + d.getHours()).slice(-2) + 
                ("0" + d.getMinutes()).slice(-2) + ("0" + d.getSeconds()).slice(-2);

    console.log('Ini req files ' + req.files);
    if(req.files.artistimage){
      var file = req.files.artistimage,
        oriname = file.name,
        name = ts+oriname.substr(oriname.length - 4),
        type = file.mimetype;
      //var uploadpath = __dirname + '/uploads/' + name;
      console.log('Ini working dir ' + __dirname);
      var uploadfile = uploadpath + name;
      var photopath = 'assets/artists/images/'+ name;
      file.mv(uploadfile,function(err){
        if(err){
          console.log("Artist Photo Upload Failed",name,err);
          return res.status(401).json({ success: false, 
            message:'Artist Photo Upload Failed.'
          });
        }
        else {
          console.log("Artist Photo Uploaded",name);
          res.status(201).json({
            success: true,
            message: 'Artist Photo is successfully uploaded.',
            filedata : {artistphotopath: photopath,artistphotoname: name}});
        }
      });
    }
    else {
      return res.status(402).json({ success: false, 
          message:'No Artist Photo uploaded.',
          filedata : {artistphotopath: "",artistphotoname: ""}
        });
    };
}

exports.artistphotodelete = function(req, res, next) {
    const artistphotoname = req.body.artistphotoname;
    var deletepathfile = uploadpath + artistphotoname;
    fs.unlink(deletepathfile, function(err){
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
                status: status
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

exports.getartistlist = function(req, res, next){
    const labelid = req.params.labelid;
    const status = 'active';
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