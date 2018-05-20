const mongoose = require( 'mongoose' );
const Songpurchase = require('../models/songpurchase');
const config = require('../config');
//const fs = require('fs');
var rediscli = require('../redisconn');
var amqpConn = null;
var amqp = require('amqplib/callback_api');

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

startpubRMQpurchase();

exports.savesongpurchase = function(req, res, next){
    const labelid = req.params.id;
    const listenerid = req.body.listenerid;
    const songid = req.body.songid;
    const artistid = req.body.artistid;
    const albumid = req.body.albumid;  
    const songprice = req.body.songprice;
    const status = req.body.status;
    const paymentmtd = req.body.paymentmtd;
  
    if (!listenerid || !labelid ||!songid ||!artistid ||!albumid || !songprice || !status || !paymentmtd) {
        return res.status(422).send({ success: false, message: 'Main posted data is not correct or incompleted.' });
    } else {
        // Add new song
        let oSongpurchase = new Songpurchase({
            listenerid: listenerid,
            labelid: labelid,
            songid: songid,
            artistid: artistid,
            albumid: albumid,
            songprice: songprice,
            status: status,
            paymentmtd:paymentmtd,
            purchasedt: new Date(),
            approvedt: null,
            objlistenerid: listenerid,
            objlabelid: labelid,
            objsongid: songid,
            objartistid: artistid,
            objalbumid: albumid
        });

        oSongpurchase.save(function(err) {
            if(err){ res.status(400).json({ success: false, message: 'Error processing request '+ err }); }
                
            res.status(201).json({
                success: true,
                message: 'Song purchase saved successfully'
            });
            //Delete redis respective keys
            rediscli.del('redis-user-pendingsongpurchase-cnt-'+labelid);
        });
    }
}

exports.getsongpurchase = function(req, res, next){
    Songpurchase.find({_id:req.params.id}).exec(function(err, songpurchase){
        if(err) { 
            res.status(400).json({ success: false, message:'Error processing request '+ err }); 
        }
        res.status(201).json({
            success: true, 
            data: songpurchase
        });
    });
}
  
exports.delsongpurchase = function(req, res, next) {
    const songpurchaseid = req.params.id;
    Songpurchase.remove({_id: songpurchaseid}, function(err){
        if(err){ res.status(400).json({ success: false, message: 'Error processing request '+ err }); }
        res.status(201).json({
            success: true,
            message: 'Song purchase removed successfully'
        });
    });
/*     Songpurchase.findById(songpurchaseid).exec(function(err, songpurchase){ 
        if(err){ res.status(400).json({ success: false, message: 'Error processing request '+ err }); }
        if (songpurchase) {
            let labelid = songpurchase.labelid;
            //Delete redis respective keys
            rediscli.del('redis-user-songpurchase-'+labelid, 'redis-user-songpurchasecnt-'+labelid);
        }
        Songpurchase.remove({_id: songpurchaseid}, function(err){
            if(err){ res.status(400).json({ success: false, message: 'Error processing request '+ err }); }
            res.status(201).json({
                success: true,
                message: 'Song purchase removed successfully'
            });
        });
    }); */  
}

exports.updatestatuspurchase = function(req, res, next){
    const songpurchaseid = req.params.id;
    const status = req.body.status;
  
    if (!songpurchaseid || !status) {
        return res.status(422).json({ success: false, message: 'Posted data is not correct or incompleted.'});
    } else {
        Songpurchase.findById(songpurchaseid).exec(function(err, songpurchase){
            if(err){ res.status(400).json({ success: false, message: 'Error processing request '+ err }); }
                
            if(songpurchase){
                let labelid = songpurchase.labelid;
                songpurchase.status = status;
                songpurchase.approvedt = new Date();
                songpurchase.save(function(err){
                    if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err }); }
                    res.status(201).json({
                      success: true,
                      message: 'Song Purchase updated successfully'
                    });
                    //Delete redis respective keys
                    rediscli.del('redis-user-pendingsongpurchase-cnt-'+labelid);
                });  
            }
        });
    }
}

exports.songpurchaseagg = function(req, res, next){
    const labelid =  req.params.id;
    const artistname = req.body.artistname || req.query.artistname;
    //const albumname = req.body.albumname || req.query.albumname;
    const buyername = req.body.buyername || req.query.buyername;
    const songname = req.body.songname || req.query.songname;
    const status = req.body.status || req.query.status;
    const paymentmtd = req.body.paymentmtd || req.query.paymentmtd;
    const rptype = req.body.rptype || req.query.rptype;
    const from_dt = req.body.startdt || req.query.startdt;
    const to_dt = req.body.enddt || req.query.enddt;
    const fromdt = new Date(from_dt);
    const todt = new Date(to_dt);
    const msconfiggrp = 'PMTSTATUS';
    const msconfigsts = 'STSACT';
    const msconfiggrp1 = 'PMTMETHOD';
    const msconfigsts1 = 'STSACT';

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
  
  /*   if(!sortby) {
      sortby = 'songname';
    } */
  
    if (!labelid || !rptype) {
        return res.status(202).json({ success: false, message: 'Posted data is not correct or incompleted.'});
	}else if(rptype === 'opt2' && !from_dt && !to_dt){
		return res.status(202).json({ success: false, message: 'From or To date missing.'});
	}else if(fromdt > todt){   
		 return res.status(202).json({ success: false, message: 'From date cannot be greater than To date.'});
	}else{
        // returns songs records based on query
        query = {labelid:labelid, 
                "msconfigdetails.group": msconfiggrp,
                "msconfigdetails.status": msconfigsts,
                "msconfigdetails1.group": msconfiggrp1,
                "msconfigdetails1.status": msconfigsts1};
        if (rptype === 'opt1'){
			// returns records for the current month
			let oDt = new Date();
			let month = oDt.getUTCMonth() + 1; //months from 1-12
			let year = oDt.getUTCFullYear();

			let fdt = new Date(year + "/" + month + "/1");
			let tdt = new Date(year + "/" + month + "/31");
            query = merge(query, { purchasedt:{$gte: fdt, $lte: tdt} });

		} else if (rptype === 'opt2'){
            // return records within given date range
            fromdt.setDate(fromdt.getDate());
            fromdt.setUTCHours(0,0,0);
            todt.setDate(todt.getDate());
            todt.setUTCHours(23,59,59);
            query = merge(query, { purchasedt:{$gte: fromdt, $lte: todt} });

		} else if (rptype === 'opt3') {
            // returns today expense records for the user
            let ptodt = new Date();
            let dt = ptodt.getUTCDate() + 1;
			let month = ptodt.getUTCMonth() + 1; //months from 1-12
            let year = ptodt.getUTCFullYear();
            let pfromdt = new Date(year + "/" + month + "/" + dt);
            pfromdt.setUTCHours(0,0,0);
            let todt = new Date(year + "/" + month + "/" + dt);
            todt.setUTCHours(23,59,59);
            query = merge(query, { purchasedt:{$gte: pfromdt, $lte: todt} });
		}
        if (artistname) {
            query = merge(query, {"artistdetails.artistname": new RegExp(artistname,'i')});
        }
        /* if (albumname) {
            query = merge(query, {"albumdetails.albumname": new RegExp(albumname,'i')});
        } */
        if (buyername) {
            query = merge(query, {"listenerdetails.name": new RegExp(buyername,'i')});
        }
        if (songname) {
            query = merge(query, {"songdetails.songname": new RegExp(songname,'i')});
        }    
        if (status) {
            query = merge(query, {status:status});
        }
        if (paymentmtd) {
            query = merge(query, {paymentmtd:paymentmtd});
        }
        console.log(query);
        if(!sortby) {
            var options = {
                page: page,
                limit: limit
            }
        }
        else {
            var options = {
                page: page,
                limit: limit,
                sortBy: sortby
            }
        }

        var aggregate = Songpurchase.aggregate();  
        var olookuplis = {
            from: 'user',
            localField: 'objlistenerid',
            foreignField: '_id',
            as: 'listenerdetails'
        };
        var olookupc = {
            from: 'msconfig',
            localField: 'status',
            foreignField: 'code',
            as: 'msconfigdetails'
          };          
        var olookupc1 = {
            from: 'msconfig',
            localField: 'paymentmtd',
            foreignField: 'code',
            as: 'msconfigdetails1'
          };            
        var olookup = {
            from: 'artist',
            localField: 'objartistid',
            foreignField: '_id',
            as: 'artistdetails'
        };
/*         var olookup1 = {
            from: 'album',
            localField: 'objalbumid',
            foreignField: '_id',
            as: 'albumdetails'
        }; */
        var olookup2 = {
            from: 'song',
            localField: 'objsongid',
            foreignField: '_id',
            as: 'songdetails'
        };
        var ounwind = 'artistdetails';
        // var ounwind1 = 'albumdetails';
        var ounwind2 = 'songdetails';
        var ounwindlis = 'listenerdetails';
        var ounwindc = 'msconfigdetails';
        var ounwindc1 = 'msconfigdetails1';

        var oproject = { 
            _id:1,
            labelid:1,
            artistid:1,
            albumid:1,
            songid: 1,
            songprice:1,
            "listener": "$listenerdetails.name",
            "artist": "$artistdetails.artistname",
            // "album": "$albumdetails.albumname",
            "song": "$songdetails.songname",
            purchasedt:1,
            approvedt:1,
            objartistid:1,
            objalbumid:1,
            objsongid:1,
            objlistenerid:1,
            status:1,
            "stsvalue": "$msconfigdetails.value",
            paymentmtd:1,
            "payment": "$msconfigdetails1.value",
        };

        aggregate.lookup(olookup).unwind(ounwind);  
        aggregate.lookup(olookup2).unwind(ounwind2);
        aggregate.lookup(olookuplis).unwind(ounwindlis);
        aggregate.lookup(olookupc).unwind(ounwindc);
        aggregate.lookup(olookupc1).unwind(ounwindc1);
        aggregate.match(query);
        //aggregate.lookup(olookup1).unwind(ounwind1);
        aggregate.project(oproject);      
        if(!sortby) {
            var osort = { purchasedt: 1, songprice:1, artistid:1};
            aggregate.sort(osort);
        }
        Songpurchase.aggregatePaginate(aggregate, options, function(err, results, pageCount, count) {
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

exports.pendingsongpurchaseagg = function(req, res, next){
    const labelid =  req.params.id;
    const artistname = req.body.artistname || req.query.artistname;
    //const albumname = req.body.albumname || req.query.albumname;
    const buyername = req.body.buyername || req.query.buyername;
    const songname = req.body.songname || req.query.songname;
    const status = 'STSPEND';
    const paymentmtd = 'PMTCASH';
    const rptype = req.body.rptype || req.query.rptype;
    const from_dt = req.body.startdt || req.query.startdt;
    const to_dt = req.body.enddt || req.query.enddt;
    const fromdt = new Date(from_dt);
    const todt = new Date(to_dt);

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
  
  /*   if(!sortby) {
      sortby = 'songname';
    } */
  
    if (!labelid || !rptype) {
        return res.status(202).send({ success: false, message: 'Posted data is not correct or incompleted.'});
	}else if(rptype === 'opt2' && !from_dt && !to_dt){
		return res.status(202).send({ success: false, message: 'From or To date missing.'});
	}else if(fromdt > todt){   
		 return res.status(202).send({ success: false, message: 'From date cannot be greater than To date.'});
	}else{
        // returns songs records based on query
        query = {labelid:labelid, paymentmtd:paymentmtd};
        if (rptype === 'opt1'){
			// returns records for the current month
			let oDt = new Date();
			let month = oDt.getUTCMonth() + 1; //months from 1-12
			let year = oDt.getUTCFullYear();

			let fdt = new Date(year + "/" + month + "/1");
			let tdt = new Date(year + "/" + month + "/31");
            query = merge(query, { purchasedt:{$gte: fdt, $lte: tdt} });

		} else if (rptype === 'opt2'){
            // return records within given date range
            fromdt.setDate(fromdt.getDate());
            fromdt.setUTCHours(0,0,0);
            todt.setDate(todt.getDate());
            todt.setUTCHours(23,59,59);
            query = merge(query, { purchasedt:{$gte: fromdt, $lte: todt} });

		} else if (rptype === 'opt3') {
            // returns today expense records for the user
            let ptodt = new Date();
            let dt = ptodt.getUTCDate() + 1;
			let month = ptodt.getUTCMonth() + 1; //months from 1-12
			let year = ptodt.getUTCFullYear();
            let pfromdt = new Date(year + "/" + month + "/" + dt);
            pfromdt.setUTCHours(0,0,0);
            let todt = new Date(year + "/" + month + "/" + dt);
            todt.setUTCHours(23,59,59);
            query = merge(query, { purchasedt:{$gte: pfromdt, $lte: todt} });
		}
        if (artistname) {
            query = merge(query, {"artistdetails.artistname": new RegExp(artistname,'i')});
        }
        /* if (albumname) {
            query = merge(query, {"albumdetails.albumname": new RegExp(albumname,'i')});
        } */
        if (buyername) {
            query = merge(query, {"listenerdetails.name": new RegExp(buyername,'i')});
        }
        if (songname) {
            query = merge(query, {"songdetails.songname": new RegExp(songname,'i')});
        }    
        if (status) {
            query = merge(query, {status:status});
        }
        console.log(query);
        if(!sortby) {
            var options = {
                page: page,
                limit: limit
            }
        }
        else {
            var options = {
                page: page,
                limit: limit,
                sortBy: sortby
            }
        }

        var aggregate = Songpurchase.aggregate();  
        var olookuplis = {
            from: 'user',
            localField: 'objlistenerid',
            foreignField: '_id',
            as: 'listenerdetails'
        };      
        var olookup = {
            from: 'artist',
            localField: 'objartistid',
            foreignField: '_id',
            as: 'artistdetails'
        };
/*         var olookup1 = {
            from: 'album',
            localField: 'objalbumid',
            foreignField: '_id',
            as: 'albumdetails'
        }; */
        var olookup2 = {
            from: 'song',
            localField: 'objsongid',
            foreignField: '_id',
            as: 'songdetails'
        };
        var ounwind = 'artistdetails';
        // var ounwind1 = 'albumdetails';
        var ounwind2 = 'songdetails';
        var ounwindlis = 'listenerdetails';

        var oproject = { 
            _id:1,
            labelid:1,
            artistid:1,
            albumid:1,
            songid: 1,
            songprice:1,
            "listener": "$listenerdetails.name",
            "artist": "$artistdetails.artistname",
            // "album": "$albumdetails.albumname",
            "song": "$songdetails.songname",
            purchasedt:1,
            approvedt:1,
            objartistid:1,
            objalbumid:1,
            objsongid:1,
            objlistenerid:1,
            status:1
        };

        aggregate.lookup(olookup).unwind(ounwind);  
        aggregate.lookup(olookup2).unwind(ounwind2);
        aggregate.lookup(olookuplis).unwind(ounwindlis);
        aggregate.match(query);
        //aggregate.lookup(olookup1).unwind(ounwind1);
        aggregate.project(oproject);      
        if(!sortby) {
            var osort = { purchasedt: 1, songprice:1, artistid:1};
            aggregate.sort(osort);
        }
        Songpurchase.aggregatePaginate(aggregate, options, function(err, results, pageCount, count) {
            if(err) 
            {
                res.status(202).json({
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

exports.getsongpurchaseagg = function(req, res, next){
    //const labelid =  req.params.id;
    //const songpurchaseid =  req.body.songpurchaseid;
    const songpurchaseid =  req.params.id;
    const msconfiggrp = 'PMTSTATUS';
    const msconfigsts = 'STSACT';
    const msconfiggrp1 = 'PMTMETHOD';
    const msconfigsts1 = 'STSACT';

    let query = {};
  
    // returns songs records based on query
     query = { _id: new mongoose.Types.ObjectId(songpurchaseid), 
            "msconfigdetails.group": msconfiggrp,
            "msconfigdetails.status": msconfigsts,
            "msconfigdetails1.group": msconfiggrp1,
            "msconfigdetails1.status": msconfigsts1};
    //query = { _id:new mongoose.Types.ObjectId(songpurchaseid) };

    var aggregate = Songpurchase.aggregate();  
    var olookuplis = {
        from: 'user',
        localField: 'objlistenerid',
        foreignField: '_id',
        as: 'listenerdetails'
    };
    var olookuplb = {
        from: 'user',
        localField: 'objlabelid',
        foreignField: '_id',
        as: 'labeldetails'
    };
    var olookupc = {
        from: 'msconfig',
        localField: 'status',
        foreignField: 'code',
        as: 'msconfigdetails'
        };          
    var olookupc1 = {
            from: 'msconfig',
            localField: 'paymentmtd',
            foreignField: 'code',
            as: 'msconfigdetails1'
        };            
   var olookup = {
        from: 'artist',
        localField: 'objartistid',
        foreignField: '_id',
        as: 'artistdetails'
    };
/*         var olookup1 = {
        from: 'album',
        localField: 'objalbumid',
        foreignField: '_id',
        as: 'albumdetails'
    }; */
    var olookup2 = {
        from: 'song',
        localField: 'objsongid',
        foreignField: '_id',
        as: 'songdetails'
    };
    var ounwind = 'artistdetails';
    // var ounwind1 = 'albumdetails';
    var ounwind2 = 'songdetails';
    var ounwindlis = 'listenerdetails';
    var ounwindc = 'msconfigdetails';
    var ounwindc1 = 'msconfigdetails1';
    var ounwindlb = 'labeldetails';

    var oproject = { 
        _id:1,
        labelid:1,
        "label": "$labeldetails.name",
        artistid:1,
        albumid:1,
        songid: 1,
        songprice:1,
        "listener": "$listenerdetails.name",
        "artist": "$artistdetails.artistname",
        // "album": "$albumdetails.albumname",
        "song": "$songdetails.songname",
        purchasedt:1,
        approvedt:1,
        objartistid:1,
        objalbumid:1,
        objsongid:1,
        objlistenerid:1,
        status:1,
        "stsvalue": "$msconfigdetails.value",
        paymentmtd:1,
        "payment": "$msconfigdetails1.value"
    };
    //console.log(query);
    aggregate.lookup(olookupc).unwind(ounwindc);
    aggregate.lookup(olookupc1).unwind(ounwindc1);
    aggregate.match(query);
    aggregate.lookup(olookup).unwind(ounwind);  
    aggregate.lookup(olookup2).unwind(ounwind2);
    aggregate.lookup(olookuplis).unwind(ounwindlis);
    aggregate.lookup(olookuplb).unwind(ounwindlb);
    //aggregate.lookup(olookup1).unwind(ounwind1);
    aggregate.project(oproject);      

    aggregate.exec(function(err, result) {
        if(err) 
        {
            res.status(202).json({
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
    })
      
}

exports.pendingsongpurchasecount = function(req, res, next){
    const labelid = req.params.labelid || req.query.labelid;
    const status = req.body.status || req.query.status;

    let query = {};

    if (!labelid) {
        return res.status(202).json({ success: false, message: 'Parameter data is not correct or incompleted.'});
	}else{
        let keyredis = 'redis-user-pendingsongpurchase-cnt-'+labelid;
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
                
                Songpurchase.count(query, function(err, count){
                    if(err){ res.status(202).json({ success: false, message:'Error processing request '+ err }); }
                    
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

exports.admsongpurchaseagg = function(req, res, next){
    const userid =  req.params.id;
    const labelid =  req.body.labelid || req.query.labelid;
    const artistname = req.body.artistname || req.query.artistname;
    //const albumname = req.body.albumname || req.query.albumname;
    const buyername = req.body.buyername || req.query.buyername;
    const songname = req.body.songname || req.query.songname;
    const status = req.body.status || req.query.status;
    const paymentmtd = req.body.paymentmtd || req.query.paymentmtd;
    const rptype = req.body.rptype || req.query.rptype;
    const from_dt = req.body.startdt || req.query.startdt;
    const to_dt = req.body.enddt || req.query.enddt;
    const fromdt = new Date(from_dt);
    const todt = new Date(to_dt);
    const msconfiggrp = 'PMTSTATUS';
    const msconfigsts = 'STSACT';
    const msconfiggrp1 = 'PMTMETHOD';
    const msconfigsts1 = 'STSACT';

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
  
  /*   if(!sortby) {
      sortby = 'songname';
    } */
  
    if (!rptype) {
        return res.status(202).json({ success: false, message: 'Posted data is not correct or incompleted.'});
	}else if(rptype === 'opt2' && !from_dt && !to_dt){
		return res.status(202).json({ success: false, message: 'From or To date missing.'});
	}else if(fromdt > todt){   
		 return res.status(202).json({ success: false, message: 'From date cannot be greater than To date.'});
	}else{
        // returns songs records based on query
        query = {"msconfigdetails.group": msconfiggrp,
                "msconfigdetails.status": msconfigsts,
                "msconfigdetails1.group": msconfiggrp1,
                "msconfigdetails1.status": msconfigsts1};
        if (rptype === 'opt1'){
			// returns records for the current month
			let oDt = new Date();
			let month = oDt.getUTCMonth() + 1; //months from 1-12
			let year = oDt.getUTCFullYear();

			let fdt = new Date(year + "/" + month + "/1");
			let tdt = new Date(year + "/" + month + "/31");
            query = merge(query, { purchasedt:{$gte: fdt, $lte: tdt} });

		} else if (rptype === 'opt2'){
            // return records within given date range
            fromdt.setDate(fromdt.getDate());
            fromdt.setUTCHours(0,0,0);
            todt.setDate(todt.getDate());
            todt.setUTCHours(23,59,59);
            query = merge(query, { purchasedt:{$gte: fromdt, $lte: todt} });

		} else if (rptype === 'opt3') {
            // returns today expense records for the user
            let ptodt = new Date();
            let dt = ptodt.getUTCDate() + 1;
			let month = ptodt.getUTCMonth() + 1; //months from 1-12
			let year = ptodt.getUTCFullYear();
            let pfromdt = new Date(year + "/" + month + "/" + dt);
            pfromdt.setUTCHours(0,0,0);
            let todt = new Date(year + "/" + month + "/" + dt);
            todt.setUTCHours(23,59,59);
            query = merge(query, { purchasedt:{$gte: pfromdt, $lte: todt} });
        }
        
        if (labelid) {
            query = merge(query, {labelid:labelid});
        }
        if (artistname) {
            query = merge(query, {"artistdetails.artistname": new RegExp(artistname,'i')});
        }
        /* if (albumname) {
            query = merge(query, {"albumdetails.albumname": new RegExp(albumname,'i')});
        } */
        if (buyername) {
            query = merge(query, {"listenerdetails.name": new RegExp(buyername,'i')});
        }
        if (songname) {
            query = merge(query, {"songdetails.songname": new RegExp(songname,'i')});
        }    
        if (status) {
            query = merge(query, {status:status});
        }
        if (paymentmtd) {
            query = merge(query, {paymentmtd:paymentmtd});
        }
        console.log(query);
        if(!sortby) {
            var options = {
                page: page,
                limit: limit
            }
        }
        else {
            var options = {
                page: page,
                limit: limit,
                sortBy: sortby
            }
        }

        var aggregate = Songpurchase.aggregate();  
        var olookuplis = {
            from: 'user',
            localField: 'objlistenerid',
            foreignField: '_id',
            as: 'listenerdetails'
        };
        var olookuplb = {
            from: 'user',
            localField: 'objlabelid',
            foreignField: '_id',
            as: 'labeldetails'
        };
        var olookupc = {
            from: 'msconfig',
            localField: 'status',
            foreignField: 'code',
            as: 'msconfigdetails'
          };          
        var olookupc1 = {
            from: 'msconfig',
            localField: 'paymentmtd',
            foreignField: 'code',
            as: 'msconfigdetails1'
          };            
        var olookup = {
            from: 'artist',
            localField: 'objartistid',
            foreignField: '_id',
            as: 'artistdetails'
        };
/*         var olookup1 = {
            from: 'album',
            localField: 'objalbumid',
            foreignField: '_id',
            as: 'albumdetails'
        }; */
        var olookup2 = {
            from: 'song',
            localField: 'objsongid',
            foreignField: '_id',
            as: 'songdetails'
        };
        var ounwind = 'artistdetails';
        // var ounwind1 = 'albumdetails';
        var ounwind2 = 'songdetails';
        var ounwindlis = 'listenerdetails';
        var ounwindc = 'msconfigdetails';
        var ounwindc1 = 'msconfigdetails1';
        var ounwindlb = 'labeldetails';

        var oproject = { 
            _id:1,
            labelid:1,
            "label":"$labeldetails.name",
            artistid:1,
            albumid:1,
            songid: 1,
            songprice:1,
            "listener": "$listenerdetails.name",
            "artist": "$artistdetails.artistname",
            // "album": "$albumdetails.albumname",
            "song": "$songdetails.songname",
            purchasedt:1,
            approvedt:1,
            objartistid:1,
            objalbumid:1,
            objsongid:1,
            objlistenerid:1,
            status:1,
            "stsvalue": "$msconfigdetails.value",
            paymentmtd:1,
            "payment": "$msconfigdetails1.value",
        };

        aggregate.lookup(olookup).unwind(ounwind);  
        aggregate.lookup(olookup2).unwind(ounwind2);
        aggregate.lookup(olookuplis).unwind(ounwindlis);
        aggregate.lookup(olookupc).unwind(ounwindc);
        aggregate.lookup(olookupc1).unwind(ounwindc1);
        aggregate.match(query);
        aggregate.lookup(olookuplb).unwind(ounwindlb);
        //aggregate.lookup(olookup1).unwind(ounwind1);
        aggregate.project(oproject);      
        if(!sortby) {
            var osort = { purchasedt: 1, songprice:1, artistid:1};
            aggregate.sort(osort);
        }
        Songpurchase.aggregatePaginate(aggregate, options, function(err, results, pageCount, count) {
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
exports.pubactionPayment = function(req, res, next){
    const labelid = req.params.id;
    const songpurchaseid = req.body.songpurchaseid;
    const status = req.body.status;
    const listenerid = req.body.listenerid;
    const paymentmtd = req.body.paymentmtd;
    const producttype = req.body.producttype;
    const songid = req.body.songid;
    const dbcr = req.body.dbcr;
    const amount = req.body.amount;

    const q = 'purchaseQueue';

    if (!labelid || !songpurchaseid || !status ) {
        return res.status(422).send({ success: false, message: 'Main posted data is not correct or incompleted.' });
    }

    var objbody = req.body;
    var objlabelid = {labelid: labelid};
    var objmsg = Object.assign(objbody,objlabelid);
    var msg = JSON.stringify(objmsg);
    //ch.assertExchange(exchange, 'direct', {durable: false})
    //ch.sendToQueue(q, new Buffer(msg), {persistent: false})

    let pubadd = actionPaymentpublish('', q, new Buffer(msg));    
    res.status(200).json({
        success: true,
        message: 'Request to save purchase data received successfully.'
    });
    //ch.bindQueue(q, exchange, 'registerlabel');
}

//Start RabbitMQ Connection for PUBLISHERS
function startpubRMQpurchase() {
    amqp.connect(config.amqpURL, function(err, conn) {
      if (err) {
        console.error("[AMQP PURCHASE]", err.message);
        return setTimeout(startpubRMQpurchase, 1000);
      }
      conn.on("error", function(err) {
        if (err.message !== "Connection closing") {
          console.error("[AMQP PURCHASE] conn error", err.message);
        }
      });
      conn.on("close", function() {
        console.error("[AMQP PURCHASE] reconnecting");
        return setTimeout(startpubRMQpurchase, 1000);
      });
      console.log("[AMQP PURCHASE] connected");
      amqpConn = conn;
      actionPaymentPub('purchaseQueue');
    });
}

var actionPaymentPubChannel = null;
var actionPaymentofflinePubQueue = [];
function actionPaymentPub(q) {
  amqpConn.createConfirmChannel(function(err, ch) {
    if (closeOnErr(err)) return;
    ch.on("error", function(err) {
        console.error("[AMQP PURCHASE] action payment channel error", err.message);
    });
    ch.on("close", function() {
        console.log("[AMQP PURCHASE] action payment channel closed");
    });
    
    actionPaymentPubChannel = ch;
    actionPaymentPubChannel.assertQueue(q, {durable: false});
    
    while (true) {
        var m = actionPaymentofflinePubQueue.shift();
        if (!m) break;
        actionPaymentpublish(m[0], m[1], m[2]);
    }
  });
}

function actionPaymentpublish(exchange, routingKey, content) {
    try {
        actionPaymentPubChannel.publish(exchange, routingKey, content, { persistent: false },
        function(err, ok) {
          if (err) {
            console.error("[AMQP PURCHASE] action payment publish", err);
            actionPaymentofflinePubQueue.push([exchange, routingKey, content]);
            actionPaymentPubChannel.connection.close();
            return false;
          }
          console.log("[AMQP PURCHASE] action payment publisher completed");
          return true;
        }
      );
    } catch (e) {
      console.error("[AMQP PURCHASE] action payment publish", e.message);
      actionPaymentofflinePubQueue.push([exchange, routingKey, content]);
      return false;
    }
}

function closeOnErr(err) {
    if (!err) return false;
    console.error("[AMQP PURCHASE] error", err);
    amqpConn.close();
    return true;
}