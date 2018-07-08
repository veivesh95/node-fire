var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');
var methodOverride = require('method-override');
var cors = require('cors');
var port = process.env.PORT || 8080;

const admin = require('firebase-admin');
const serviceAccount = require('./Auth/serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());

app.get('/', function(req, res) {
  res.send('http://localhost:' + port);
});

app.listen(port);
console.log('node-firestore server is running on port ', port);
