const mongoose = require( 'mongoose' );
const Album = require('../models/album');
const config = require('../config');
const fs = require('fs');
var rediscli = require('../redisconn');
var amqpConn = null;
var amqp = require('amqplib/callback_api');
//const fetch = require('node-fetch');
//var FormData = require('form-data');

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

startpubRMQalbum();

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
                    //Delete redis respective keys
                    rediscli.del('redis-user-album-'+labelid, 'redis-user-albumcnt-'+labelid, 'redis-user-artistalbumlist-'+artistid+labelid, 'redis-user-albumlist-'+labelid);
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
                    albumcntrate:1,
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
                    //Delete redis respective keys
                    rediscli.del('redis-user-album-'+labelid, 'redis-user-albumcnt-'+labelid, 'redis-user-artistalbumlist-'+artistid+labelid, 'redis-user-albumlist-'+labelid);    
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
    const albumid = req.params.id;
    Album.findById(albumid).exec(function(err, album){ 
        if(err){ res.status(400).json({ success: false, message: 'Error processing request '+ err }); }
        if(album) {
            let labelid = album.labelid;
            let artistid = album.artistid;
            //Delete redis respective keys
            rediscli.del('redis-user-album-'+labelid, 'redis-user-albumcnt-'+labelid, 'redis-user-artistalbumlist-'+artistid+labelid, 'redis-user-albumlist-'+labelid);    
        }
        Album.remove({_id: albumid}, function(err){
            if(err){ res.status(400).json({ success: false, message: 'Error processing request '+ err }); }
            
            res.status(201).json({
                success: true,
                message: 'Album removed successfully'
            });
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
        let keyredis = 'redis-user-album-'+labelid;
        //check on redis
        rediscli.hgetall(keyredis, function(err, obj) { 
            if (obj) {
                //console.log('key on redis...');
                res.status(201).json({
                    success: true,
                    data: JSON.parse(obj.album), 
                    totalcount: obj.totalcount
                }); 
            } else {
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
                    //set in redis
                    rediscli.hmset(keyredis, [ 
                        'album', JSON.stringify(result),
                        'totalcount', totalcount ], function(err, reply) {
                        if (err) {  console.log(err); }
                        console.log(reply);
                    });                                         
                });
            }
        });
	}
}

exports.totalalbumcount = function(req, res, next){
    const labelid = req.params.labelid || req.query.labelid;
    const albumname = req.body.albumname || req.query.albumname;
    const artistid = req.body.artistid || req.query.artistid;
    const albumyear = req.body.albumyear || req.query.albumyear;
    const albumgenre = req.body.albumgenre || req.query.albumgenre;
    const status = req.body.status || req.query.status;

    let query = {};

    if (!labelid) {
        return res.status(422).send({ error: 'Parameter data is not correct or incompleted.'});
	}else{
        let keyredis = 'redis-user-albumcnt-'+labelid;
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
        let keyredis = 'redis-user-artistalbumlist-'+artistid+labelid;
        //check on redis
        rediscli.hgetall(keyredis, function(err, obj) { 
            if (obj) {
                //console.log('key on redis...');
                res.status(201).json({
                    success: true, 
                    data: JSON.parse(obj.album), 
                    npage: obj.npage,
                    totalcount: obj.totalcount
                });
            } else {
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
                        //set in redis
                        rediscli.hmset(keyredis, [ 
                            'album', JSON.stringify(results),
                            'npage', pageCount,
                            'totalcount', count ], function(err, reply) {
                            if (err) {  console.log(err); }
                            console.log(reply);
                        });
                    }
                })
            }        
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

/*     if(!sortby) {
	sortby = 'albumname';
    } */

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

        
        aggregate.lookup(olookup).unwind(ounwind);
        aggregate.lookup(olookup1).unwind(ounwind1);  
        aggregate.match(query);  
        aggregate.project(oproject);
        if(!sortby) {
            var osort = { "artistdetails.artistname": 1, albumname:1, albumgenre:1};
            aggregate.sort(osort);        
        }
        
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
        let keyredis = 'redis-user-albumlist-'+labelid;
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
                    //set in redis
                    rediscli.set(keyredis,JSON.stringify(result), function(error) {
                        if (error) { throw error; }
                    });                                                         
                });
            }            
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

exports.artistalbumliststats = function(req, res, next){
    const labelid = req.body.labelid || req.query.labelid;
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
        let keyredis = 'redis-user-artistalbumlist-'+artistid+labelid;
        //check on redis
        rediscli.hgetall(keyredis, function(err, obj) { 
            if (obj) {
                //console.log('key on redis...');
                res.status(201).json({
                    success: true, 
                    data: JSON.parse(obj.album), 
                    npage: obj.npage,
                    totalcount: obj.totalcount
                });
            } else {
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
                        //set in redis
                        rediscli.hmset(keyredis, [ 
                            'album', JSON.stringify(results),
                            'npage', pageCount,
                            'totalcount', count ], function(err, reply) {
                            if (err) {  console.log(err); }
                            console.log(reply);
                        });
                    }
                })
            }        
        });        
	}
}

exports.albumaggstats = function(req, res, next){
    const labelid = req.body.labelid || req.query.labelid;
    const albumname = req.body.albumname || req.query.albumname;
    const artistname = req.body.artistname || req.query.artistname;
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

    // returns albums records based on query
    query = { albumname: new RegExp(albumname,'i'), 
        albumyear: new RegExp(albumyear,'i'),
        "msconfigdetails.group": msconfiggrp,
        "msconfigdetails.status": msconfigsts
    };
    if (labelid) {
        query = merge(query, {labelid:labelid});
    }      
    if (artistname) {
        query = merge(query, {"artistdetails.artistname": new RegExp(artistname,'i')});
    }
    if (albumgenre) {
        query = merge(query, {albumgenre: albumgenre});
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

    //console.log(query);
    var aggregate = Album.aggregate(); 
    var olookuplb = {
        from: 'user',
        localField: 'objlabelid',
        foreignField: '_id',
        as: 'labeldetails'
      };          
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
    var ounwindlb = 'labeldetails';

    var oproject = {
        labelid:1,
        "label": "$labeldetails.name",
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

        
    aggregate.lookup(olookup).unwind(ounwind);
    aggregate.lookup(olookup1).unwind(ounwind1);  
    aggregate.match(query);  
    aggregate.lookup(olookuplb).unwind(ounwindlb);
    aggregate.project(oproject);

    if(!sortby) {
        var osort = {   "labeldetails.name":1, 
                        "artistdetails.artistname": 1, 
                        albumname:1, 
                        albumgenre:1
                    };
        aggregate.sort(osort);        
    }
        
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
    });
}
exports.pubaddalbum = function(req, res, next){
    const labelid = req.params.id;
    const artistid = req.body.artistid;
    const albumname = req.body.albumname;
    const albumyear = req.body.albumyear;
    const albumgenre = req.body.albumgenre;
    const albumprice = req.body.albumprice;
    const albumphotopath = req.body.albumphotopath;
    const albumphotoname = req.body.albumphotoname;
    const status = req.body.status;
    const albumid = req.body.albumid;

    const q = 'addAlbumQueue';

    if (!labelid || !albumname || !albumyear || !albumgenre || !albumprice || !status) {
        return res.status(422).send({ success: false, message: 'Main posted data is not correct or incompleted.' });
    }

    var objbody = req.body;
    var objlabelid = {labelid: labelid};
    var objmsg = Object.assign(objbody,objlabelid);
    var msg = JSON.stringify(objmsg);
    //ch.assertExchange(exchange, 'direct', {durable: false})
    //ch.sendToQueue(q, new Buffer(msg), {persistent: false})

    let pubadd = addAlbumpublish('', q, new Buffer(msg));    
    res.status(200).json({
        success: true,
        message: 'Request to save Album received successfully.'
    });
    //ch.bindQueue(q, exchange, 'registerlabel');
}
exports.pubeditalbumphoto = function(req, res, next){
    const albumid = req.params.id;
    const albumphotoname = req.body.albumphotoname;
    const albumphotopath = req.body.albumphotopath;
    const oldalbumphotoname = req.body.oldalbumphotoname;
    const uploadpath = req.body.uploadpath;
    const labelid = req.body.labelid;
    const token = req.headers['authorization'];
    const q = 'editAlbumphotoQueue';

    if (!albumid || !albumphotoname || !albumphotopath || !labelid ) {
        return res.status(422).send({ success: false, message: 'Main posted data is not correct or incompleted.' });
    }

    var objbody = req.body;
    var objalbumid = {albumid: albumid};
    //var objfile = { fileinputsrc: req.files.fileinputsrc };
    var headers = {token: token};
    //var objmsg = Object.assign(objbody,objartistid,objfile, headers);
    var objmsg = Object.assign(objbody,objalbumid, headers);
    var msg = JSON.stringify(objmsg);
    //ch.assertExchange(exchange, 'direct', {durable: false})
    //ch.sendToQueue(q, new Buffer(msg), {persistent: false})

    let pubeditphoto = editAlbumphotopublish('', q, new Buffer(msg));    
    res.status(200).json({
        success: true,
        message: 'Request to edit Album photo received successfully.'
    });
    //ch.bindQueue(q, exchange, 'registerlabel');
}
exports.pubdeletealbum = function(req, res, next){
    const albumid = req.params.id;
    const albumphotoname = req.body.albumphotoname;
    const uploadpath = req.body.uploadpath;
    const labelid = req.body.labelid;
    const token = req.headers['authorization'];
    const q = 'deleteAlbumQueue';

    if (!albumid || !albumphotoname || !labelid ) {
        return res.status(422).send({ success: false, message: 'Main posted data is not correct or incompleted.' });
    }

    var objbody = req.body;
    var objalbumid = {albumid: albumid};
    var headers = {token: token};
    var objmsg = Object.assign(objbody,objalbumid, headers);
    var msg = JSON.stringify(objmsg);
    //ch.assertExchange(exchange, 'direct', {durable: false})
    //ch.sendToQueue(q, new Buffer(msg), {persistent: false})

    let pubdelalbum = deleteAlbumpublish('', q, new Buffer(msg));    
    res.status(200).json({
        success: true,
        message: 'Request to delete Album received successfully.'
    });
    //ch.bindQueue(q, exchange, 'registerlabel');
}

//Start RabbitMQ Connection for PUBLISHERS
function startpubRMQalbum() {
    amqp.connect(config.amqpURL, function(err, conn) {
      if (err) {
        console.error("[AMQP ALBUM]", err.message);
        return setTimeout(startpubRMQalbum, 1000);
      }
      conn.on("error", function(err) {
        if (err.message !== "Connection closing") {
          console.error("[AMQP ALBUM] conn error", err.message);
        }
      });
      conn.on("close", function() {
        console.error("[AMQP ALBUM] reconnecting");
        return setTimeout(startpubRMQalbum, 1000);
      });
      console.log("[AMQP ALBUM] connected");
      amqpConn = conn;
      addAlbumPub('addAlbumQueue');
      editAlbumphotoPub('editAlbumphotoQueue');
      deleteAlbumPub('deleteAlbumQueue');
    });
}

var addAlbumPubChannel = null;
var addAlbumofflinePubQueue = [];
function addAlbumPub(q) {
  amqpConn.createConfirmChannel(function(err, ch) {
    if (closeOnErr(err)) return;
    ch.on("error", function(err) {
        console.error("[AMQP ALBUM] add album channel error", err.message);
    });
    ch.on("close", function() {
        console.log("[AMQP ALBUM] add album channel closed");
    });
    
    addAlbumPubChannel = ch;
    addAlbumPubChannel.assertQueue(q, {durable: false});
    
    while (true) {
        var m = addAlbumofflinePubQueue.shift();
        if (!m) break;
        addAlbumpublish(m[0], m[1], m[2]);
    }
  });
}

function addAlbumpublish(exchange, routingKey, content) {
    try {
        addAlbumPubChannel.publish(exchange, routingKey, content, { persistent: false },
        function(err, ok) {
          if (err) {
            console.error("[AMQP ALBUM] add album publish", err);
            addAlbumofflinePubQueue.push([exchange, routingKey, content]);
            addAlbumPubChannel.connection.close();
            return false;
          }
          console.log("[AMQP ALBUM] add album publisher completed");
          return true;
        }
      );
    } catch (e) {
      console.error("[AMQP ALBUM] add album publish", e.message);
      addAlbumofflinePubQueue.push([exchange, routingKey, content]);
      return false;
    }
}

var editAlbumphotoPubChannel = null;
var editAlbumphotoofflinePubQueue = [];
function editAlbumphotoPub(q) {
  amqpConn.createConfirmChannel(function(err, ch) {
    if (closeOnErr(err)) return;
    ch.on("error", function(err) {
        console.error("[AMQP ALBUM] edit album photo channel error", err.message);
    });
    ch.on("close", function() {
        console.log("[AMQP ALBUM] edit album photo channel closed");
    });
    
    editAlbumphotoPubChannel = ch;
    editAlbumphotoPubChannel.assertQueue(q, {durable: false});
    
    while (true) {
        var m = editAlbumphotoofflinePubQueue.shift();
        if (!m) break;
        editAlbumphotopublish(m[0], m[1], m[2]);
    }
  });
}

function editAlbumphotopublish(exchange, routingKey, content) {
    try {
        editAlbumphotoPubChannel.publish(exchange, routingKey, content, { persistent: false },
        function(err, ok) {
          if (err) {
            console.error("[AMQP ALBUM] edit album photo publish", err);
            editAlbumphotoofflinePubQueue.push([exchange, routingKey, content]);
            editAlbumphotoPubChannel.connection.close();
            return false;
          }
          console.log("[AMQP ALBUM] edit album photo publisher completed");
          return true;
        }
      );
    } catch (e) {
      console.error("[AMQP ALBUM] edit album photo publish", e.message);
      editAlbumphotoofflinePubQueue.push([exchange, routingKey, content]);
      return false;
    }
}

var deleteAlbumPubChannel = null;
var deleteAlbumofflinePubQueue = [];
function deleteAlbumPub(q) {
  amqpConn.createConfirmChannel(function(err, ch) {
    if (closeOnErr(err)) return;
    ch.on("error", function(err) {
        console.error("[AMQP ALBUM] delete album channel error", err.message);
    });
    ch.on("close", function() {
        console.log("[AMQP ALBUM] delete album channel closed");
    });
    
    deleteAlbumPubChannel = ch;
    deleteAlbumPubChannel.assertQueue(q, {durable: false});
    
    while (true) {
        var m = deleteAlbumofflinePubQueue.shift();
        if (!m) break;
        deleteAlbumpublish(m[0], m[1], m[2]);
    }
  });
}

function deleteAlbumpublish(exchange, routingKey, content) {
    try {
        deleteAlbumPubChannel.publish(exchange, routingKey, content, { persistent: false },
        function(err, ok) {
          if (err) {
            console.error("[AMQP ALBUM] delete album publish", err);
            deleteAlbumofflinePubQueue.push([exchange, routingKey, content]);
            deleteAlbumPubChannel.connection.close();
            return false;
          }
          console.log("[AMQP ALBUM] delete album publisher completed");
          return true;
        }
      );
    } catch (e) {
      console.error("[AMQP ALBUM] delete album publish", e.message);
      deleteAlbumofflinePubQueue.push([exchange, routingKey, content]);
      return false;
    }
}

function closeOnErr(err) {
    if (!err) return false;
    console.error("[AMQP ALBUM] error", err);
    amqpConn.close();
    return true;
}