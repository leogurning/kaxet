const mongoose = require( 'mongoose' );
const Activitylog = require('../models/activitylog');
const config = require('../config');

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

exports.saveactivity = function(req, res, next){
    const userid = req.params.id;
    const activitytype = req.body.activitytype;
    const remarks = req.body.remarks;
    const status = req.body.status;

    if (!userid || !activitytype ||!remarks ||!status ) {
        return res.status(422).send({ success: false, message: 'Main posted data is not correct or incompleted.' });
    } else {
        // Add new Activitylog
        let oActivitylog = new Activitylog({
            logdate: new Date(),
            userid: userid,
            activitytype: activitytype,
            remarks: remarks,
            status: status,
            performedby: userid,
            objuserid: userid,
            objperformedby: userid
        });

        oActivitylog.save(function(err) {
            if(err){ res.status(400).json({ success: false, message: 'Error processing request '+ err }); }
                
            res.status(201).json({
                success: true,
                message: 'Activitylog saved successfully'
            });
            //Delete redis respective keys
            //rediscli.del('redis-user-songpurchase-'+labelid, 'redis-user-songpurchasecnt-'+labelid);
        });
    }
}

exports.activitylogagg = function(req, res, next){
    const userid = req.params.id;
    const activitytype = req.body.activitytype || req.query.activitytype;
    const remarks = req.body.remarks || req.query.remarks;
    const status = req.body.status || req.query.status;

    const rptype = req.body.rptype || req.query.rptype;
    const from_dt = req.body.startdt || req.query.startdt;
    const to_dt = req.body.enddt || req.query.enddt;
    const fromdt = new Date(from_dt);
    const todt = new Date(to_dt);
    const msconfiggrp = 'ALOG';
    const msconfigsts = 'STSACT';
    const msconfiggrp1 = 'ACTSTATUS';
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
  
    if (!userid || !rptype) {
        return res.status(202).json({ success: false, message: 'Posted data is not correct or incompleted.'});
	}else if(rptype === 'opt2' && !from_dt && !to_dt){
		return res.status(202).json({ success: false, message: 'From or To date missing.'});
	}else if(fromdt > todt){   
		 return res.status(202).json({ success: false, message: 'From date cannot be greater than To date.'});
	}else{
        // returns Activitylog records based on query
        query = {userid:userid, 
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
            query = merge(query, { logdate:{$gte: fdt, $lte: tdt} });

		} else if (rptype === 'opt2'){
            // return records within given date range
            fromdt.setDate(fromdt.getDate());
            fromdt.setUTCHours(0,0,0);
            todt.setDate(todt.getDate());
            todt.setUTCHours(23,59,59);
            query = merge(query, { logdate:{$gte: fromdt, $lte: todt} });

		} else if (rptype === 'opt3') {
            // returns today expense records for the user
            let ptodt = new Date();
            let dt = ptodt.getUTCDate()+1;
			let month = ptodt.getUTCMonth() + 1; //months from 1-12
            let year = ptodt.getUTCFullYear();
            let pfromdt = new Date(year + "-" + month + "-" + dt);
            //let pfromdt = new Date(year, month, dt, 0,0,0);
            pfromdt.setUTCHours(0,0,0);
            let todt = new Date(year + "/" + month + "/" + dt);
            todt.setUTCHours(23,59,59);
            query = merge(query, { logdate:{$gte: pfromdt, $lte: todt} });
        }
        if (activitytype) {
            query = merge(query, {activitytype:activitytype});
        }

        if (remarks) {
            query = merge(query, {remarks: new RegExp(remarks,'i')});
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

        var aggregate = Activitylog.aggregate();  
        var olookupuser = {
            from: 'user',
            localField: 'objperformedby',
            foreignField: '_id',
            as: 'userdetails'
        };      
        var olookupc = {
            from: 'msconfig',
            localField: 'activitytype',
            foreignField: 'code',
            as: 'msconfigdetails'
        };            
        var olookupc1 = {
            from: 'msconfig',
            localField: 'status',
            foreignField: 'code',
            as: 'msconfigdetails1'
        };            
        var ounwinduser = 'userdetails';
        var ounwindc = 'msconfigdetails';
        var ounwindc1 = 'msconfigdetails1';

        var oproject = { 
            _id:1,
            userid:1,
            logdate:1,
            activitytype:1,
            remarks:1,
            status: 1,
            "activity": "$msconfigdetails.value",
            "stsval": "$msconfigdetails1.value",
            performedby:1,
            "performed": "$userdetails.name",
            objuserid:1,
            objperformedby:1
        };

        aggregate.lookup(olookupc).unwind(ounwindc);
        aggregate.lookup(olookupc1).unwind(ounwindc1);
        aggregate.match(query);
        aggregate.lookup(olookupuser).unwind(ounwinduser);
            
        aggregate.project(oproject);      
        if(!sortby) {
            var osort = { logdate: 1};
            aggregate.sort(osort);
        }
        Activitylog.aggregatePaginate(aggregate, options, function(err, results, pageCount, count) {
            if(err) 
            {
                res.status(202).json({
                    success: false, 
                    message: err.message
                });
            }
            else
            { 
                res.status(200).json({
                    success: true, 
                    data: results,
                    npage: pageCount,
                    totalcount: count
                });
            }
        })
    }
      
}

exports.admactivitylogagg = function(req, res, next){
    const userid = req.params.id;
    const labelid =  req.body.labelid || req.query.labelid;
    const activitytype = req.body.activitytype || req.query.activitytype;
    const remarks = req.body.remarks || req.query.remarks;
    const status = req.body.status || req.query.status;

    const rptype = req.body.rptype || req.query.rptype;
    const from_dt = req.body.startdt || req.query.startdt;
    const to_dt = req.body.enddt || req.query.enddt;
    const fromdt = new Date(from_dt);
    const todt = new Date(to_dt);
    const msconfiggrp = 'ALOG';
    const msconfigsts = 'STSACT';
    const msconfiggrp1 = 'ACTSTATUS';
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
  
    if (!userid || !rptype) {
        return res.status(202).json({ success: false, message: 'Posted data is not correct or incompleted.'});
	}else if(rptype === 'opt2' && !from_dt && !to_dt){
		return res.status(202).json({ success: false, message: 'From or To date missing.'});
	}else if(fromdt > todt){   
		 return res.status(202).json({ success: false, message: 'From date cannot be greater than To date.'});
	}else{
        // returns Activitylog records based on query
        query = { "msconfigdetails.group": msconfiggrp,
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
            query = merge(query, { logdate:{$gte: fdt, $lte: tdt} });

		} else if (rptype === 'opt2'){
            // return records within given date range
            fromdt.setDate(fromdt.getDate());
            fromdt.setUTCHours(0,0,0);
            todt.setDate(todt.getDate());
            todt.setUTCHours(23,59,59);
            query = merge(query, { logdate:{$gte: fromdt, $lte: todt} });

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
            query = merge(query, { logdate:{$gte: pfromdt, $lte: todt} });
        }
        if (labelid) {
            query = merge(query, {userid:labelid});
        }
        if (activitytype) {
            query = merge(query, {activitytype:activitytype});
        }

        if (remarks) {
            query = merge(query, {remarks: new RegExp(remarks,'i')});
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

        var aggregate = Activitylog.aggregate();  
        var olookupuser = {
            from: 'user',
            localField: 'objperformedby',
            foreignField: '_id',
            as: 'userdetails'
        };      
        var olookupc = {
            from: 'msconfig',
            localField: 'activitytype',
            foreignField: 'code',
            as: 'msconfigdetails'
        };            
        var olookupc1 = {
            from: 'msconfig',
            localField: 'status',
            foreignField: 'code',
            as: 'msconfigdetails1'
        };            
        var ounwinduser = 'userdetails';
        var ounwindc = 'msconfigdetails';
        var ounwindc1 = 'msconfigdetails1';

        var oproject = { 
            _id:1,
            userid:1,
            logdate:1,
            activitytype:1,
            remarks:1,
            status: 1,
            "activity": "$msconfigdetails.value",
            "stsval": "$msconfigdetails1.value",
            performedby:1,
            "performed": "$userdetails.name",
            objuserid:1,
            objperformedby:1
        };

        aggregate.lookup(olookupc).unwind(ounwindc);
        aggregate.lookup(olookupc1).unwind(ounwindc1);
        aggregate.match(query);
        aggregate.lookup(olookupuser).unwind(ounwinduser);
            
        aggregate.project(oproject);      
        if(!sortby) {
            var osort = { logdate: 1};
            aggregate.sort(osort);
        }
        Activitylog.aggregatePaginate(aggregate, options, function(err, results, pageCount, count) {
            if(err) 
            {
                res.status(202).json({
                    success: false, 
                    message: err.message
                });
            }
            else
            { 
                res.status(200).json({
                    success: true, 
                    data: results,
                    npage: pageCount,
                    totalcount: count
                });
            }
        })
    }
      
}