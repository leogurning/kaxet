const mongoose = require( 'mongoose' );
const Transaction = require('../models/transaction');
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

exports.savetransaction = function(req, res, next){
    const labelid = req.params.id;
    const listenerid = req.body.listenerid;
    const purchaseid = req.body.purchaseid;
    const producttype = req.body.producttype;
    const productid = req.body.productid;
    const dbcr = req.body.dbcr;
    const amount = req.body.amount;  
    const paymentmtd = req.body.paymentmtd;

    if (!listenerid || !labelid ||!purchaseid ||!producttype ||!productid || !dbcr || !amount || !paymentmtd) {
        return res.status(422).send({ success: false, message: 'Main posted data is not correct or incompleted.' });
    } else {
        // Add new transaction
        let oTransaction = new Transaction({
            labelid: labelid,
            listenerid: listenerid,
            purchaseid: purchaseid,
            producttype: producttype,
            productid: productid,
            paymentmtd: paymentmtd,
            dbcr: dbcr,
            amount: amount,
            transactiondt: new Date(),
            objlistenerid: listenerid,
            objlabelid: labelid,
            objpurchaseid: purchaseid,
            objproductid: productid
        });

        oTransaction.save(function(err) {
            if(err){ res.status(400).json({ success: false, message: 'Error processing request '+ err }); }
                
            res.status(201).json({
                success: true,
                message: 'Transaction saved successfully'
            });
            //Delete redis respective keys
            //rediscli.del('redis-user-songpurchase-'+labelid, 'redis-user-songpurchasecnt-'+labelid);
        });
    }
}

exports.transactionagg = function(req, res, next){
    const labelid =  req.params.id;
    const productname = req.body.productname || req.query.productname;
    const purchaseid = req.body.purchaseid || req.query.purchaseid;
    const buyername = req.body.buyername || req.query.buyername;
    const dbcr = req.body.dbcr || req.query.dbcr;
    const fromamt = req.body.fromamt || req.query.fromamt;
    const toamt = req.body.toamt || req.query.toamt;
    const rptype = req.body.rptype || req.query.rptype;
    const from_dt = req.body.startdt || req.query.startdt;
    const to_dt = req.body.enddt || req.query.enddt;
    const fromdt = new Date(from_dt);
    const todt = new Date(to_dt);
    const msconfiggrp = 'PMTMETHOD';
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
        // returns transaction records based on query
        query = {labelid:labelid, 
            "msconfigdetails.group": msconfiggrp,
            "msconfigdetails.status": msconfigsts};

        if (fromamt && !toamt) {
            let pfromamt = parseInt(fromamt, 10);
            if (pfromamt < 0) {
                return res.status(202).json({ success: false, message: 'From amount cannot be negative.'});
            } else {
                query = merge(query, { amount:{$gte: pfromamt} });
            }
        } else if (!fromamt && toamt) {
            let ptoamt = parseInt(toamt, 10);
            if (ptoamt < 0) {
                return res.status(202).json({ success: false, message: 'TO amount cannot be negative.'});
            } else {
                query = merge(query, { amount:{$lte: ptoamt} });
            }
        } else if (fromamt && toamt) {
            let pfromamt = parseInt(fromamt, 10);
            let ptoamt = parseInt(toamt, 10);
            if (pfromamt < 0 || ptoamt < 0) {
                return res.status(202).send({ success: false, message: 'Amount cannot be negative.'});                
            } else {
                if (pfromamt > ptoamt) {
                    return res.status(202).send({ success: false, message: 'From amount cannot be greater than To amount.'});
                } else {
                    query = merge(query, { amount:{$gte: pfromamt, $lte: ptoamt} });
                }
            }
        }
        if (rptype === 'opt1'){
			// returns records for the current month
			let oDt = new Date();
			let month = oDt.getUTCMonth() + 1; //months from 1-12
			let year = oDt.getUTCFullYear();

			let fdt = new Date(year + "/" + month + "/1");
			let tdt = new Date(year + "/" + month + "/31");
            query = merge(query, { transactiondt:{$gte: fdt, $lte: tdt} });

		} else if (rptype === 'opt2'){
            // return records within given date range
            fromdt.setDate(fromdt.getDate());
            fromdt.setHours(0,0,0);
            todt.setDate(todt.getDate());
            todt.setHours(23,59,59);
            query = merge(query, { transactiondt:{$gte: fromdt, $lte: todt} });

		} else if (rptype === 'opt3') {
            // returns today expense records for the user
            let ptodt = new Date();
            let dt = ptodt.getDate();
			let month = ptodt.getMonth() + 1; //months from 1-12
			let year = ptodt.getFullYear();
            let pfromdt = new Date(year + "/" + month + "/" + dt);
            pfromdt.setHours(0,0,0);
            let todt = new Date(year + "/" + month + "/" + dt);
            todt.setHours(23,59,59);
            query = merge(query, { transactiondt:{$gte: pfromdt, $lte: todt} });
        }
        
        if (productname) {
            query = merge(query, {"songdetails.songname": new RegExp(productname,'i')});
        }    
        if (buyername) {
            query = merge(query, {"listenerdetails.name": new RegExp(buyername,'i')});
        }    
        if (dbcr) {
            query = merge(query, {dbcr:dbcr});
        }
        if (purchaseid) {
            query = merge(query, {purchaseid:purchaseid});
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

        var aggregate = Transaction.aggregate();  
        var olookuplis = {
            from: 'user',
            localField: 'objlistenerid',
            foreignField: '_id',
            as: 'listenerdetails'
        };      
        var olookup = {
            from: 'song',
            localField: 'objproductid',
            foreignField: '_id',
            as: 'songdetails'
        };
        var olookupc = {
            from: 'msconfig',
            localField: 'paymentmtd',
            foreignField: 'code',
            as: 'msconfigdetails'
        };            
        var ounwind = 'songdetails';
        var ounwindlis = 'listenerdetails';
        var ounwindc = 'msconfigdetails';

        var oproject = { 
            _id:1,
            labelid:1,
            listenerid:1,
            purchaseid:1,
            producttype: 1,
            paymentmtd:1,
            "payment": "$msconfigdetails.value",
            productid:1,
            "listener": "$listenerdetails.name",
            "product": "$songdetails.songname",
            dbcr:1,
            amount:1,
            transactiondt:1,
            objproductid:1,
            objlistenerid:1
        };

        aggregate.lookup(olookup).unwind(ounwind);
        aggregate.lookup(olookupc).unwind(ounwindc);
        aggregate.lookup(olookuplis).unwind(ounwindlis);
        aggregate.match(query);
            
        aggregate.project(oproject);      
        if(!sortby) {
            var osort = { transactiondt: -1, amount:1};
            aggregate.sort(osort);
        }
        Transaction.aggregatePaginate(aggregate, options, function(err, results, pageCount, count) {
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

exports.othertransactionagg = function(req, res, next){
    const labelid =  req.params.id;
    const purchaseid = req.body.purchaseid || req.query.purchaseid;
    const dbcr = req.body.dbcr || req.query.dbcr;
    const fromamt = req.body.fromamt || req.query.fromamt;
    const toamt = req.body.toamt || req.query.toamt;
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
        return res.status(202).json({ success: false, message: 'Posted data is not correct or incompleted.'});
	}else if(rptype === 'opt2' && !from_dt && !to_dt){
		return res.status(202).json({ success: false, message: 'From or To date missing.'});
	}else if(fromdt > todt){   
		 return res.status(202).json({ success: false, message: 'From date cannot be greater than To date.'});
	}else{
        // returns transaction records based on query
        query = {labelid:labelid};

        if (fromamt && !toamt) {
            let pfromamt = parseInt(fromamt, 10);
            if (pfromamt < 0) {
                return res.status(202).json({ success: false, message: 'From amount cannot be negative.'});
            } else {
                query = merge(query, { amount:{$gte: pfromamt} });
            }
        } else if (!fromamt && toamt) {
            let ptoamt = parseInt(toamt, 10);
            if (ptoamt < 0) {
                return res.status(202).json({ success: false, message: 'TO amount cannot be negative.'});
            } else {
                query = merge(query, { amount:{$lte: ptoamt} });
            }
        } else if (fromamt && toamt) {
            let pfromamt = parseInt(fromamt, 10);
            let ptoamt = parseInt(toamt, 10);
            if (pfromamt < 0 || ptoamt < 0) {
                return res.status(202).send({ success: false, message: 'Amount cannot be negative.'});                
            } else {
                if (pfromamt > ptoamt) {
                    return res.status(202).send({ success: false, message: 'From amount cannot be greater than To amount.'});
                } else {
                    query = merge(query, { amount:{$gte: pfromamt, $lte: ptoamt} });
                }
            }
        }
        if (rptype === 'opt1'){
			// returns records for the current month
			let oDt = new Date();
			let month = oDt.getUTCMonth() + 1; //months from 1-12
			let year = oDt.getUTCFullYear();

			let fdt = new Date(year + "/" + month + "/1");
			let tdt = new Date(year + "/" + month + "/31");
            query = merge(query, { transactiondt:{$gte: fdt, $lte: tdt} });

		} else if (rptype === 'opt2'){
            // return records within given date range
            fromdt.setDate(fromdt.getDate());
            fromdt.setHours(0,0,0);
            todt.setDate(todt.getDate());
            todt.setHours(23,59,59);
            query = merge(query, { transactiondt:{$gte: fromdt, $lte: todt} });

		} else if (rptype === 'opt3') {
            // returns today expense records for the user
            let ptodt = new Date();
            let dt = ptodt.getDate();
			let month = ptodt.getMonth() + 1; //months from 1-12
			let year = ptodt.getFullYear();
            let pfromdt = new Date(year + "/" + month + "/" + dt);
            pfromdt.setHours(0,0,0);
            let todt = new Date(year + "/" + month + "/" + dt);
            todt.setHours(23,59,59);
            query = merge(query, { transactiondt:{$gte: pfromdt, $lte: todt} });
        }
        
        if (purchaseid) {
            query = merge(query, {purchaseid: new RegExp(purchaseid,'i')});
        }    

        if (dbcr) {
            query = merge(query, {dbcr:dbcr});
        }

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

        var aggregate = Transaction.aggregate();  

        var oproject = { 
            _id:1,
            labelid:1,
            purchaseid:1,
            producttype: 1,
            dbcr:1,
            amount:1,
            transactiondt:1
        };

        aggregate.match(query);
            
        aggregate.project(oproject);      
        if(!sortby) {
            var osort = { transactiondt: -1, amount:1};
            aggregate.sort(osort);
        }
        Transaction.aggregatePaginate(aggregate, options, function(err, results, pageCount, count) {
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

exports.admtransactionagg = function(req, res, next){
    const userid =  req.params.id;
    const labelid =  req.body.labelid || req.query.labelid;
    const productname = req.body.productname || req.query.productname;
    const purchaseid = req.body.purchaseid || req.query.purchaseid;
    const buyername = req.body.buyername || req.query.buyername;
    const dbcr = req.body.dbcr || req.query.dbcr;
    const fromamt = req.body.fromamt || req.query.fromamt;
    const toamt = req.body.toamt || req.query.toamt;
    const rptype = req.body.rptype || req.query.rptype;
    const from_dt = req.body.startdt || req.query.startdt;
    const to_dt = req.body.enddt || req.query.enddt;
    const fromdt = new Date(from_dt);
    const todt = new Date(to_dt);
    const msconfiggrp = 'PMTMETHOD';
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
        // returns transaction records based on query
        query = {"msconfigdetails.group": msconfiggrp,
            "msconfigdetails.status": msconfigsts};

        if (fromamt && !toamt) {
            let pfromamt = parseInt(fromamt, 10);
            if (pfromamt < 0) {
                return res.status(202).json({ success: false, message: 'From amount cannot be negative.'});
            } else {
                query = merge(query, { amount:{$gte: pfromamt} });
            }
        } else if (!fromamt && toamt) {
            let ptoamt = parseInt(toamt, 10);
            if (ptoamt < 0) {
                return res.status(202).json({ success: false, message: 'TO amount cannot be negative.'});
            } else {
                query = merge(query, { amount:{$lte: ptoamt} });
            }
        } else if (fromamt && toamt) {
            let pfromamt = parseInt(fromamt, 10);
            let ptoamt = parseInt(toamt, 10);
            if (pfromamt < 0 || ptoamt < 0) {
                return res.status(202).send({ success: false, message: 'Amount cannot be negative.'});                
            } else {
                if (pfromamt > ptoamt) {
                    return res.status(202).send({ success: false, message: 'From amount cannot be greater than To amount.'});
                } else {
                    query = merge(query, { amount:{$gte: pfromamt, $lte: ptoamt} });
                }
            }
        }
        if (rptype === 'opt1'){
			// returns records for the current month
			let oDt = new Date();
			let month = oDt.getUTCMonth() + 1; //months from 1-12
			let year = oDt.getUTCFullYear();

			let fdt = new Date(year + "/" + month + "/1");
			let tdt = new Date(year + "/" + month + "/31");
            query = merge(query, { transactiondt:{$gte: fdt, $lte: tdt} });

		} else if (rptype === 'opt2'){
            // return records within given date range
            fromdt.setDate(fromdt.getDate());
            fromdt.setHours(0,0,0);
            todt.setDate(todt.getDate());
            todt.setHours(23,59,59);
            query = merge(query, { transactiondt:{$gte: fromdt, $lte: todt} });

		} else if (rptype === 'opt3') {
            // returns today expense records for the user
            let ptodt = new Date();
            let dt = ptodt.getDate();
			let month = ptodt.getMonth() + 1; //months from 1-12
			let year = ptodt.getFullYear();
            let pfromdt = new Date(year + "/" + month + "/" + dt);
            pfromdt.setHours(0,0,0);
            let todt = new Date(year + "/" + month + "/" + dt);
            todt.setHours(23,59,59);
            query = merge(query, { transactiondt:{$gte: pfromdt, $lte: todt} });
        }
        if (labelid) {
            query = merge(query, {labelid: labelid});
        }
        if (productname) {
            query = merge(query, {"songdetails.songname": new RegExp(productname,'i')});
        }    
        if (buyername) {
            query = merge(query, {"listenerdetails.name": new RegExp(buyername,'i')});
        }    
        if (dbcr) {
            query = merge(query, {dbcr:dbcr});
        }
        if (purchaseid) {
            query = merge(query, {purchaseid:purchaseid});
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

        var aggregate = Transaction.aggregate();  
        var olookuplis = {
            from: 'user',
            localField: 'objlistenerid',
            foreignField: '_id',
            as: 'listenerdetails'
        };      
        var olookup = {
            from: 'song',
            localField: 'objproductid',
            foreignField: '_id',
            as: 'songdetails'
        };
        var olookupc = {
            from: 'msconfig',
            localField: 'paymentmtd',
            foreignField: 'code',
            as: 'msconfigdetails'
        };            
        var ounwind = 'songdetails';
        var ounwindlis = 'listenerdetails';
        var ounwindc = 'msconfigdetails';

        var oproject = { 
            _id:1,
            labelid:1,
            listenerid:1,
            purchaseid:1,
            producttype: 1,
            paymentmtd:1,
            "payment": "$msconfigdetails.value",
            productid:1,
            "listener": "$listenerdetails.name",
            "product": "$songdetails.songname",
            dbcr:1,
            amount:1,
            transactiondt:1,
            objproductid:1,
            objlistenerid:1
        };

        aggregate.lookup(olookup).unwind(ounwind);
        aggregate.lookup(olookupc).unwind(ounwindc);
        aggregate.lookup(olookuplis).unwind(ounwindlis);
        aggregate.match(query);
            
        aggregate.project(oproject);      
        if(!sortby) {
            var osort = { transactiondt: -1, amount:1};
            aggregate.sort(osort);
        }
        Transaction.aggregatePaginate(aggregate, options, function(err, results, pageCount, count) {
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

exports.admothertransactionagg = function(req, res, next){
    const userid =  req.params.id;
    const labelid =  req.body.labelid || req.query.labelid;
    const purchaseid = req.body.purchaseid || req.query.purchaseid;
    const dbcr = req.body.dbcr || req.query.dbcr;
    const fromamt = req.body.fromamt || req.query.fromamt;
    const toamt = req.body.toamt || req.query.toamt;
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
  
    if (!rptype) {
        return res.status(202).json({ success: false, message: 'Posted data is not correct or incompleted.'});
	}else if(rptype === 'opt2' && !from_dt && !to_dt){
		return res.status(202).json({ success: false, message: 'From or To date missing.'});
	}else if(fromdt > todt){   
		 return res.status(202).json({ success: false, message: 'From date cannot be greater than To date.'});
	}else{
        // returns transaction records based on query

        if (fromamt && !toamt) {
            let pfromamt = parseInt(fromamt, 10);
            if (pfromamt < 0) {
                return res.status(202).json({ success: false, message: 'From amount cannot be negative.'});
            } else {
                query = merge(query, { amount:{$gte: pfromamt} });
            }
        } else if (!fromamt && toamt) {
            let ptoamt = parseInt(toamt, 10);
            if (ptoamt < 0) {
                return res.status(202).json({ success: false, message: 'TO amount cannot be negative.'});
            } else {
                query = merge(query, { amount:{$lte: ptoamt} });
            }
        } else if (fromamt && toamt) {
            let pfromamt = parseInt(fromamt, 10);
            let ptoamt = parseInt(toamt, 10);
            if (pfromamt < 0 || ptoamt < 0) {
                return res.status(202).send({ success: false, message: 'Amount cannot be negative.'});                
            } else {
                if (pfromamt > ptoamt) {
                    return res.status(202).send({ success: false, message: 'From amount cannot be greater than To amount.'});
                } else {
                    query = merge(query, { amount:{$gte: pfromamt, $lte: ptoamt} });
                }
            }
        }
        if (rptype === 'opt1'){
			// returns records for the current month
			let oDt = new Date();
			let month = oDt.getUTCMonth() + 1; //months from 1-12
			let year = oDt.getUTCFullYear();

			let fdt = new Date(year + "/" + month + "/1");
			let tdt = new Date(year + "/" + month + "/31");
            query = merge(query, { transactiondt:{$gte: fdt, $lte: tdt} });

		} else if (rptype === 'opt2'){
            // return records within given date range
            fromdt.setDate(fromdt.getDate());
            fromdt.setHours(0,0,0);
            todt.setDate(todt.getDate());
            todt.setHours(23,59,59);
            query = merge(query, { transactiondt:{$gte: fromdt, $lte: todt} });

		} else if (rptype === 'opt3') {
            // returns today expense records for the user
            let ptodt = new Date();
            let dt = ptodt.getDate();
			let month = ptodt.getMonth() + 1; //months from 1-12
			let year = ptodt.getFullYear();
            let pfromdt = new Date(year + "/" + month + "/" + dt);
            pfromdt.setHours(0,0,0);
            let todt = new Date(year + "/" + month + "/" + dt);
            todt.setHours(23,59,59);
            query = merge(query, { transactiondt:{$gte: pfromdt, $lte: todt} });
        }
        if (labelid) {
            query = merge(query, {labelid: labelid});
        }
        if (purchaseid) {
            query = merge(query, {purchaseid: new RegExp(purchaseid,'i')});
        }    
     
        if (dbcr) {
            query = merge(query, {dbcr:dbcr});
        }
        
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

        var aggregate = Transaction.aggregate();  

        var oproject = { 
            _id:1,
            labelid:1,
            purchaseid:1,
            producttype: 1,
            dbcr:1,
            amount:1,
            transactiondt:1
        };

        aggregate.match(query);
            
        aggregate.project(oproject);      
        if(!sortby) {
            var osort = { transactiondt: -1, amount:1};
            aggregate.sort(osort);
        }
        Transaction.aggregatePaginate(aggregate, options, function(err, results, pageCount, count) {
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

exports.getlabelbalance = function(req, res, next){
    const labelid =  req.params.id;

    var total;
  
    let query = {};
    let group = {};
    //let qmatch = {};
  
    if (!labelid ) {
        return res.status(202).json({ success: false, message: 'Posted data is not correct or incompleted.'});
	}else{
        // returns transaction records based on query
        query = {labelid:labelid};
        group = { _id: "$dbcr" , 
                  balance: { $sum: "$amount"},
                  count: { $sum: 1}
                };
        var aggregate = Transaction.aggregate();  
        aggregate.match(query);
        aggregate.group(group);    
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
      
}