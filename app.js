var MongoClient = require('mongodb').MongoClient;
var express = require("express");
var app = express ();
app.use(express.static("static"));
var url = "mongodb://esseccergyisc00l@138.68.110.210:27017/admin?readPreference=primary";

MongoClient.connect(url, function(err, db) {
    console.log("Connected to mongoDB", err);
    var collection = db.collection('produitreprise');
    var app = express()
    app.engine('handlebars', exphbs({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');
    app.use(express.static('files'));




app.listen(2017, function(err){
    console.log("my server app is running on port 2017");
});
