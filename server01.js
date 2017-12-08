const express 	= require('express');
const bodyParser  = require('body-parser');
const morgan      = require('morgan');
const mongoose    = require('mongoose');
var upload = require('express-fileupload');
const cloudinary = require('cloudinary');
const path = require('path');

const jwt    = require('jsonwebtoken'); 
const config = require('./config'); 

const user = require('./routes/user.js');
const artist = require('./routes/artist.js');
const album = require('./routes/album.js');
const song = require('./routes/song.js');

const artistLn = require('./routes/artistLn.js');
const albumLn = require('./routes/albumLn.js');
const songLn = require('./routes/songLn.js');

const port = process.env.PORT || config.serverport;

mongoose.connect(config.database, function(err){
	if(err){
		console.log('Error connecting database, please check if MongoDB is running.');
	}else{
		console.log('Connected to database...');
	}
}); 

const app = express();

app.use(upload()); // configure middleware

// Enable CORS from client-side
app.use(function(req, res, next) {  
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    if ('OPTIONS' === req.method) { res.send(204); } else { next(); }
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
	res.send('Kaxet API is running at http://legu.herokuapp:' + port + '/api');
});
app.post('/register', user.signup);
app.post('/registerListener', user.signupListener);

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

apiRoutes.post('/artistphotoupload', artist.artistphotoupload);
apiRoutes.post('/artistphotodelete', artist.artistphotodelete);
apiRoutes.post('/artist/:id', artist.saveartist); // API adds & update artist of the label
apiRoutes.delete('/artist/:id', artist.delartist); //API removes the artist details of given artist id
apiRoutes.put('/updateartistphoto/:id', artist.updateartistphoto); // API updates user photo
apiRoutes.get('/artist/:id', artist.getartist); // API returns artist details of given artist id
apiRoutes.get('/artistlist/:labelid', artist.getartistlist); // API returns artist list of given label id
apiRoutes.post('/artist/report/:labelid', artist.artistreport); //API returns artist report based on user input 

//apiRoutes.post('/testalbum/:id', album.testalbum); // API test album of the label
apiRoutes.post('/albumphotoupload', album.albumphotoupload);
apiRoutes.post('/albumphotodelete', album.albumphotodelete);
apiRoutes.post('/album/:id', album.savealbum); // API adds & update album of the label
apiRoutes.put('/updatealbumphoto/:id', album.updatealbumphoto); // API updates album photo
apiRoutes.get('/album/:id', album.getalbum); // API returns album details of given album id
apiRoutes.get('/albumlist/:labelid', album.getalbumlist); // API returns album list of given label id
apiRoutes.get('/albumlistbyartist/:labelid', album.getalbumlistbyartist);
apiRoutes.delete('/album/:id', album.delalbum); //API removes the album details of given album id
apiRoutes.post('/album/report/:labelid', album.albumreport); //API returns album report based on user input 
apiRoutes.post('/album/aggreport/:labelid', album.albumaggregate); //API returns album report based on user input

apiRoutes.post('/songprvwupload', song.songprvwupload);
apiRoutes.post('/songfileupload', song.songfileupload);
apiRoutes.post('/songprvwdelete', song.songprvwdelete);
apiRoutes.post('/songfiledelete', song.songfiledelete);
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

apiRoutes.post('/artist/reportln', artistLn.artistreportLn); //API returns artist report based on user input 
apiRoutes.post('/album/reportln', albumLn.albumreportLn); //API returns album report based on user input 
apiRoutes.post('/album/aggreportln', albumLn.albumaggregateLn); //API returns album report based on user input
apiRoutes.post('/song/aggreportln', songLn.songaggregateLn); //API returns song report based on user input
apiRoutes.post('/song/reportln', songLn.songreportLn);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// kick off the server 
app.listen(port);

console.log('Kaxet app is listening at http://legu.herokuapp:' + port);