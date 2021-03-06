const express 	= require('express');
const bodyParser  = require('body-parser');
const morgan      = require('morgan');
const mongoose    = require('mongoose');
var upload = require('express-fileupload');
const path = require('path');

const jwt    = require('jsonwebtoken'); 
const config = require('./config'); 

const user = require('./routes/user.js');
const artist = require('./routes/artist.js');
const album = require('./routes/album.js');
const song = require('./routes/song.js');
const songpurchase = require('./routes/songpurchase.js');
const transaction = require('./routes/transaction.js');
const activitylog = require('./routes/activitylog.js');

const consumers = require('./routes/consumers.js');
const trfbalance = require('./routes/trfbalance.js');

const port = process.env.PORT || process.env.KAXETP_SERVICE_PORT || config.serverport;

mongoose.connect(config.database, function(err){
	if(err){
		console.log('Error connecting database, please check if MongoDB is running.');
	}else{
		console.log('Connected to database...');
	}
}); 

const app = express();

app.use(upload()); // configure middleware OF file upload

// Enable CORS from client-side
app.use(function(req, res, next) {  
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    if ('OPTIONS' === req.method) { res.sendStatus(204); } else { next(); }
  });

app.use(express.static(path.join(__dirname, 'public')));

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(require('body-parser').json({ type : '*/*' })); --> this can make error in JSON
app.use(bodyParser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));

// basic routes
app.get('/', function(req, res) {
	res.send('Kaxet API is running at PORT:' + port + '/api');
});
app.post('/register', user.signup);
app.post('/registerlabel', user.pubregisterlabel);
//app.post('/resetpwd', user.resetpassword); // API to reset password user
app.post('/resetpwd', user.pubresetpassword); // API to reset password user
app.post('/doresetpwd', user.doresetpassword); // API to do reset password user
app.put('/updatehash/:id', user.doupdatehash); // API to do update user hash
//app.post('/checkname/:id', song.apicheckname); // API to check name first
//app.post('/checkalbum/:id', song.apicheckalbum); // API to check name first
//app.post('/checkprice/:id', song.apicheckprice); // API to check name first
//app.post('/checkallreqs/:id', song.apiallvalidatesong); // API to check name first
//app.post('/updatesearchstrartist', artist.apiupdatesearchstrartist); // API to update searchstr artist
//app.post('/updatesearchstralbum', album.apiupdatesearchstralbum); // API to update searchstr album
//app.post('/updatesearchstrsong', song.apiupdatesearchstrsong); // API to update searchstr song
//app.post('/updatealbumprice/:id', song.apiupdatealbumprice); // API to update album price
app.get('/actionpmtpurchasecoda', songpurchase.pubactionPaymentCoda); // API to action song payment purchase of the label from Codapay
app.post('/generateMd5hash', songpurchase.generateMd5); // API to generate Md5 hash hex

// express router
var apiRoutes = express.Router();
app.use('/api', apiRoutes);
apiRoutes.post('/login', user.login);
apiRoutes.use(user.authenticate); // route middleware to authenticate and check token

// authenticated routes
apiRoutes.get('/', function(req, res) {
	res.status(201).json({ message: 'Welcome to the authenticated routes!' });
});

apiRoutes.get('/user/:id', user.getuserDetails); // API returns user details 
apiRoutes.put('/user/:id', user.updateUser); // API updates user details
apiRoutes.put('/password/:id', user.updatePassword); // API updates user password
apiRoutes.put('/email/:id', user.updateEmail); // API updates user email
apiRoutes.put('/emailverify', user.emailverification); // API to verify user email
apiRoutes.post('/pubchangelabelstatus/:id', user.pubchangelabelstatus); // API updates user label status
apiRoutes.put('/pubemailverify', user.pubemailverification); // API to verify user email

apiRoutes.post('/artist/:id', artist.saveartist); // API adds & update artist of the label
apiRoutes.post('/pubartist/:id', artist.pubaddartist); // API adds artist of the label
apiRoutes.delete('/artist/:id', artist.delartist); //API removes the artist details of given artist id
apiRoutes.post('/pubdelartist/:id', artist.pubdeleteartist); //API removes the artist details of given artist id
apiRoutes.put('/updateartistphoto/:id', artist.updateartistphoto); // API updates user photo
apiRoutes.post('/pubupdateartistphoto/:id', artist.pubeditartistphoto); // API updates user photo
apiRoutes.get('/artist/:id', artist.getartist); // API returns artist details of given artist id
apiRoutes.get('/artistlist/:labelid', artist.getartistlist); // API returns artist list of given label id
apiRoutes.post('/artist/report/:labelid', artist.artistreport); //API returns artist report based on user input 
apiRoutes.post('/artist/aggreport/:labelid', artist.artistaggreport); //API returns artist report based on user input 
apiRoutes.post('/artist/aggstats/:id', artist.artistaggstats); //API returns artist report based on user input 
apiRoutes.post('/artistcount/:labelid', artist.totalartistcount); //API returns total artist based on user input
apiRoutes.post('/checkartistname/:id', artist.apicheckname); // API to check name first

//apiRoutes.post('/testalbum/:id', album.testalbum); // API test album of the label
apiRoutes.post('/album/:id', album.savealbum); // API adds & update album of the label
apiRoutes.put('/updatealbumphoto/:id', album.updatealbumphoto); // API updates album photo
apiRoutes.get('/album/:id', album.getalbum); // API returns album details of given album id
apiRoutes.get('/albumlist/:labelid', album.getalbumlist); // API returns album list of given label id
apiRoutes.get('/albumlistbyartist/:labelid', album.getalbumlistbyartist);
apiRoutes.delete('/album/:id', album.delalbum); //API removes the album details of given album id
apiRoutes.post('/album/report/:labelid', album.albumreport); //API returns album report based on user input 
apiRoutes.post('/album/artistalbumreport/:labelid', album.artistalbumlist); //API returns album report based on user input 
apiRoutes.post('/album/aggreport/:labelid', album.albumaggregate); //API returns album report based on user input
apiRoutes.post('/albumcount/:labelid', album.totalalbumcount); //API returns total album based on user input 
apiRoutes.post('/album/artistalbumreportstats/:labelid', album.artistalbumliststats); //API returns album report based on user input 
apiRoutes.post('/album/aggstats/:id', album.albumaggstats); //API returns album report based on user input
apiRoutes.post('/pubaddalbum/:id', album.pubaddalbum); // API adds album of the label
apiRoutes.post('/pubeditalbumphoto/:id', album.pubeditalbumphoto); // API updates album photo of the label
apiRoutes.post('/pubdeletealbum/:id', album.pubdeletealbum); // API removes album of the label
apiRoutes.post('/checkalbumname/:id', album.apicheckname); // API to check name first

apiRoutes.post('/song/:id', song.savesong); // API adds & update song of the label
apiRoutes.put('/publishsong/:id', song.publishsong); // API to publish song of the label
apiRoutes.put('/cancelpublishsong/:id', song.cancelpublishsong); // API to cancel publish song of the label
apiRoutes.put('/songbuyincrement/:id', song.songbuyincrement);
apiRoutes.put('/updatesongpreview/:id', song.updatesongpreview); // API updates song preview
apiRoutes.put('/updatesongfile/:id', song.updatesongfile); // API updates song file
apiRoutes.get('/song/:id', song.getsong); // API get song details of the label
apiRoutes.get('/songaggregate/:id', song.getsongaggregate); // API returns song details of given song id
apiRoutes.delete('/song/:id', song.delsong); //API removes the song details of given song id
apiRoutes.post('/song/aggreport/:labelid', song.songaggregate); //API returns song report based on user input
apiRoutes.post('/song/report/:labelid', song.songreport);
apiRoutes.post('/song/list/:labelid', song.songlist);
apiRoutes.post('/songcount/:labelid', song.totalsongcount);
apiRoutes.post('/song/stats/:id', song.songliststats);
apiRoutes.post('/pubsong/:id', song.pubaddsong); // API adds & update song of the label
apiRoutes.post('/uploadsong/:id', song.uploadsongfiles); // API upload song files of the label
apiRoutes.post('/pubeditsongprvw/:id', song.pubeditsongprvw); // API update song preview of the label
apiRoutes.post('/pubeditsongfile/:id', song.pubeditsongfile); // API update song file of the label
apiRoutes.post('/pubdeletesong/:id', song.pubdeletesong); // API delete song of the label
apiRoutes.post('/pubeditsong/:id', song.pubeditsong); // API update song of the label
apiRoutes.post('/checksongname/:id', song.apicheckname); // API to check song name first
apiRoutes.post('/topaggreportln', song.topsongaggregate); //API returns topbuy song report based on user input

apiRoutes.post('/songpurchase/:id', songpurchase.savesongpurchase); // API adds song purchase of the label
apiRoutes.get('/songpurchase/:id', songpurchase.getsongpurchase); // API get song purchase of the label
apiRoutes.delete('/songpurchase/:id', songpurchase.delsongpurchase); // API delete song purchase of the label
apiRoutes.put('/songpurchase/:id', songpurchase.updatestatuspurchase); // API update status song purchase of the label
apiRoutes.post('/songpurchaseagg/:id', songpurchase.songpurchaseagg);
apiRoutes.post('/pendingsongpurchaseagg/:id', songpurchase.pendingsongpurchaseagg);
apiRoutes.get('/songpurchaseagg/:id', songpurchase.getsongpurchaseagg);
apiRoutes.post('/pendingsongpurchasecount/:labelid', songpurchase.pendingsongpurchasecount);
apiRoutes.post('/admsongpurchaseagg/:id', songpurchase.admsongpurchaseagg);
apiRoutes.post('/actionpmtpurchase/:id', songpurchase.pubactionPayment); // API to action song payment purchase of the label

apiRoutes.post('/transaction/:id', transaction.savetransaction); // API adds transaction of the label
apiRoutes.post('/transactionagg/:id', transaction.transactionagg); // API get transaction data of the label
apiRoutes.post('/admtransactionagg/:id', transaction.admtransactionagg); // API get transaction data of the label
apiRoutes.get('/labelbalance/:id', transaction.getlabelbalance); // API get balance data of the label
apiRoutes.post('/othertransactionagg/:id', transaction.othertransactionagg); // API get transaction data of the label
apiRoutes.post('/admothertransactionagg/:id', transaction.admothertransactionagg); // API get transaction data of the label

apiRoutes.post('/activitylog/:id', activitylog.saveactivity); // API adds activitylog of the label
apiRoutes.post('/activitylogagg/:id', activitylog.activitylogagg); // API get activitylog data of the label
apiRoutes.post('/admactivitylogagg/:id', activitylog.admactivitylogagg); // API get activitylog data of the label

apiRoutes.post('/trfbalancereq/:id', trfbalance.pubaddtrfbalancereq); // API adds transfer balance request of the label
apiRoutes.post('/trfbalancereqagg/:id', trfbalance.trfbalancereqagg); // API display list of transfer balance request of the label
apiRoutes.get('/gettrfbalancereqagg/:id', trfbalance.gettrfbalancereqagg); // API get details of transfer balance request of the label

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// kick off the server 
app.listen(port);

console.log('Kaxet app is listening at PORT:' + port);