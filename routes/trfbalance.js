const mongoose = require( 'mongoose' );
const Trfbalance = require('../models/trfbalance');
const Transaction = require('../models/transaction');
const Songpurchase = require('../models/songpurchase');
const config = require('../config');
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

startpubRMQtrfbal();

exports.savetrfbalancereq = function(req, res, next){
    const labelid = req.params.id;
    const amount = req.body.amount;
    const insref = req.body.insref;
    const bankaccno = req.body.bankaccno;
    const bankaccname = req.body.bankaccname;
    const bankname = req.body.bankname;
    const status = req.body.status;

    if (!labelid ||!amount ||!insref ||!bankaccno || !bankaccname || !bankname || !status) {
        return res.status(422).send({ success: false, message: 'Main posted data is not correct or incompleted.' });
    } else {
        // Add new transaction
        let oTrfbalance = new Trfbalance({
            labelid: labelid,
            amount: amount,
            insref: insref,
            bankaccno: bankaccno,
            bankaccname: bankaccname,
            bankname: bankname,
            requestdt: new Date(),
            status: status,
            objlabelid: labelid
        });

        oTrfbalance.save(function(err) {
            if(err){ res.status(400).json({ success: false, message: 'Error processing request '+ err }); }
                
            res.status(201).json({
                success: true,
                message: 'Request saved successfully'
            });
            //Delete redis respective keys
            //rediscli.del('redis-user-songpurchase-'+labelid, 'redis-user-songpurchasecnt-'+labelid);
        });
    }
}

exports.trfbalancereqagg = function(req, res, next){
    const labelid =  req.params.id;
    const insref = req.body.insref || req.query.insref;
    const status = req.body.status || req.query.status;
    const msconfiggrp = 'TRFBLSTATUS';
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
  
    if (!labelid ) {
        return res.status(202).json({ success: false, message: 'Posted data is not correct or incompleted.'});
	}else{
        // returns songs records based on query
        query = {labelid:labelid, 
                "msconfigdetails.group": msconfiggrp,
                "msconfigdetails.status": msconfigsts
            };

        if (insref) {
            query = merge(query, {insref: new RegExp(insref,'i')});
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

        var aggregate = Trfbalance.aggregate();  
        
        var olookupc = {
            from: 'msconfig',
            localField: 'status',
            foreignField: 'code',
            as: 'msconfigdetails'
          };          
            
        var ounwindc = 'msconfigdetails';

        var oproject = { 
            _id:1,
            labelid:1,
            amount:1,
            insref:1,
            bankaccno: 1,
            bankaccname:1,
            bankname: 1,
            requestdt:1,
            status:1,
            "stsvalue": "$msconfigdetails.value"
        };

        aggregate.lookup(olookupc).unwind(ounwindc);
        aggregate.match(query);
        aggregate.project(oproject);      
        if(!sortby) {
            var osort = { requestdt: -1, amount:1};
            aggregate.sort(osort);
        }
        Trfbalance.aggregatePaginate(aggregate, options, function(err, results, pageCount, count) {
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

exports.gettrfbalancereqagg = function(req, res, next){
    const trfreqid =  req.params.id;
    const msconfiggrp = 'TRFBLSTATUS';
    const msconfigsts = 'STSACT';
  
    if (!trfreqid ) {
        return res.status(202).json({ success: false, message: 'Posted data is not correct or incompleted.'});
	}else{
        // returns songs records based on query
        query = {_id: new mongoose.Types.ObjectId(trfreqid), 
                "msconfigdetails.group": msconfiggrp,
                "msconfigdetails.status": msconfigsts
            };

        var aggregate = Trfbalance.aggregate();  
        
        var olookupc = {
            from: 'msconfig',
            localField: 'status',
            foreignField: 'code',
            as: 'msconfigdetails'
          };          
            
        var ounwindc = 'msconfigdetails';

        var oproject = { 
            _id:1,
            labelid:1,
            amount:1,
            insref:1,
            bankaccno: 1,
            bankaccname:1,
            bankname: 1,
            requestdt:1,
            status:1,
            "stsvalue": "$msconfigdetails.value",
            transferdt:1,
            transferslippath:1,
            transferslipname:1,
            bankref:1,
            remarks:1,
            extfield1:1,
            extfield2:1,
            objlabelid:1
        };

        aggregate.lookup(olookupc).unwind(ounwindc);
        aggregate.match(query);
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
        })
    }
      
}

exports.pubaddtrfbalancereq = function(req, res, next){
    const labelid = req.params.id;
    const amount = req.body.amount;
    const insref = req.body.insref;
    const bankaccno = req.body.bankaccno;
    const bankaccname = req.body.bankaccname;
    const bankname = req.body.bankname;
    const status = req.body.status;
    //const uploadpath = req.body.uploadpath;
    //const token = req.headers['authorization'];
    const q = 'addTrfbalanceQueue';
  
    if (!labelid ||!amount ||!insref ||!bankaccno || !bankaccname || !bankname || !status) {
        return res.status(422).send({ success: false, message: 'Main posted data is not correct or incompleted.' });
    }
    checkBalance(labelid, amount, function(err, result) {
      if (err) { return res.status(400).json({success: false, message:err}); }
      //console.log('hasil: '+result);
      if (result === 'Y') {
        checkPendingTrf(labelid, function(err, trfresult) {
            if (err) { return res.status(400).json({success: false, message:err}); }            
            if (trfresult === 'NF') {
                checkPendingCash(labelid, function(err, cashresult) {
                    if (err) { return res.status(400).json({success: false, message:err}); }
                    if (cashresult === 'NF') {
                        var objbody = req.body;
                        var objlabelid = {labelid: labelid};
                        //var objfile = { fileinputsrc: req.files.fileinputsrc };
                        //var headers = {token: token};
                        //var objmsg = Object.assign(objbody,objlabelid,objfile, headers);
                        var objmsg = Object.assign(objbody,objlabelid);
                        var msg = JSON.stringify(objmsg);
                        //ch.assertExchange(exchange, 'direct', {durable: false})
                        //ch.sendToQueue(q, new Buffer(msg), {persistent: false})
                        
                        let pubaddtrfbalance = addTrfbalancepublish('', q, new Buffer.from(msg));    
                        res.status(200).json({
                          success: true,
                          message: 'Request trf balance received successfully.'
                        });
                        //ch.bindQueue(q, exchange, 'registerlabel');
                    } else {
                        res.status(201).json({
                            success: false,
                            message: 'Proses error !. You still have pending cash purchase transaction. Please complete it first.'
                            //rname: rname.toUpperCase()
                        });
                    }                   
                })
            } else {
                res.status(201).json({
                    success: false,
                    message: 'Proses error !. You still have pending OR in progress transfer balance request.'
                    //rname: rname.toUpperCase()
                });
            }
        })  
        
      } else {
          res.status(201).json({
              success: false,
              message: 'Proses error !. Amount: ' + amount+' is greater than your balance OR Invalid balance checking.'
              //rname: rname.toUpperCase()
          });
      }
    });
}

//Start RabbitMQ Connection for PUBLISHERS
function startpubRMQtrfbal() {
    amqp.connect(config.amqpURL, function(err, conn) {
      if (err) {
        console.error("[AMQP TRF BALANCE]", err.message);
        return setTimeout(startpubRMQtrfbal, 1000);
      }
      conn.on("error", function(err) {
        if (err.message !== "Connection closing") {
          console.error("[AMQP TRF BALANCE] conn error", err.message);
        }
      });
      conn.on("close", function() {
        console.error("[AMQP TRF BALANCE] reconnecting");
        return setTimeout(startpubRMQtrfbal, 1000);
      });
      console.log("[AMQP TRF BALANCE] connected");
      amqpConn = conn;
      addTrfbalancereqPub('addTrfbalanceQueue');
    });
}

var addTrfbalancePubChannel = null;
var addTrfbalanceofflinePubQueue = [];
function addTrfbalancereqPub(q) {
  amqpConn.createConfirmChannel(function(err, ch) {
    if (closeOnErr(err)) return;
    ch.on("error", function(err) {
        console.error("[AMQP TRF BALANCE] add trf balance channel error", err.message);
    });
    ch.on("close", function() {
        console.log("[AMQP TRF BALANCE] add trf balance channel closed");
    });
    
    addTrfbalancePubChannel = ch;
    addTrfbalancePubChannel.assertQueue(q, {durable: false});
    
    while (true) {
        var m = addTrfbalanceofflinePubQueue.shift();
        if (!m) break;
        addTrfbalancepublish(m[0], m[1], m[2]);
    }
  });
}

function addTrfbalancepublish(exchange, routingKey, content) {
  try {
    addTrfbalancePubChannel.publish(exchange, routingKey, content, { persistent: false },
      function(err, ok) {
        if (err) {
          console.error("[AMQP TRF BALANCE] add trf balance publish", err);
          addTrfbalanceofflinePubQueue.push([exchange, routingKey, content]);
          addTrfbalancePubChannel.connection.close();
          return false;
        }
        console.log("[AMQP TRF BALANCE] add trf balance publisher completed");
        return true;
      }
    );
  } catch (e) {
    console.error("[AMQP TRF BALANCE] add trf balance publish", e.message);
    addTrfbalanceofflinePubQueue.push([exchange, routingKey, content]);
    return false;
  }
}

function closeOnErr(err) {
    if (!err) return false;
    console.error("[AMQP TRF BALANCE] error", err);
    amqpConn.close();
    return true;
}

function checkBalance(labelid, amount, cb) {
    try {

        let query = {};
        let group = {};
        var amt, amt1, totalbalance, totalnet;
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
                cb(err,null);
            }
            else
            { 
                if (result.length > 1) {
                    amt = getamount(result[0]._id,result[0].balance);
                    amt1 = getamount(result[1]._id,result[1].balance);
                    totalbalance = amt + amt1;
                } else if (result.length === 1) {
                    amt = getamount(result[0]._id,result[0].balance);
                    totalbalance = amt;
                } else {
                    totalbalance = 0;
                }
                totalnet = totalbalance - amount;
                if (totalnet < 0) {
                    cb(null, 'N');
                } else {
                    cb(null, 'Y');
                }

            }
        })        
    } catch (error) {
        //console.error(false, error.message);
        cb(error,null);
    }
}

function getamount(sign, amount) {
    var result = amount;
    if (sign === "-") {
        result = -1 * amount;
      }
    return result;
}

function checkPendingTrf(labelid, cb) {
    try {
        var query = {};
        //query = {labelid: labelid, status:{ $ne: 'STSCMPL' }};
        query = {labelid: labelid, status:'STSPEND'};
        //query = {labelid: labelid, artistname: {$regex: pname, $options:"0i"}};
        //console.log(query);
        Trfbalance.findOne(query).exec(function(err, result){
            if (err) { cb(err, null);}
            if (result) {
                //console.log(true);
                cb(null, 'FN');
            } else {
                //console.log(false);
                cb(null, 'NF');                
            }
        });        
    } catch (error) {
        //console.error(false, error.message);
        cb(error,null);
    }
}

function checkPendingCash(labelid, cb) {
    try {
        var query = {};
        query = {labelid: labelid, status:'STSPEND', paymentmtd:'PMTCASH' };
        //query = {labelid: labelid, artistname: {$regex: pname, $options:"0i"}};
        //console.log(query);
        Songpurchase.findOne(query).exec(function(err, result){
            if (err) { cb(err, null);}
            if (result) {
                //console.log(true);
                cb(null, 'FN');
            } else {
                //console.log(false);
                cb(null, 'NF');                
            }
        });        
    } catch (error) {
        //console.error(false, error.message);
        cb(error,null);
    }
}