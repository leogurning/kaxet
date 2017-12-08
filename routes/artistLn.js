const mongoose = require( 'mongoose' );
const Artist = require('../models/artist');
const config = require('../config');

exports.artistreportLn = function(req, res, next){
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

    // returns all artists records
    if (!status) {
        query = { artistname: new RegExp(artistname,'i')};
    }else{
        query = { artistname: new RegExp(artistname,'i'), status: status};
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