var express = require('express');
var bodyParser = require('body-parser');
var jsonexport = require('jsonexport');
var fs = require("fs");
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
MongoClient.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true },function(err, client){
    console.log("successfully connected to server");
    var app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/getdata', (req, res, next)=>{
        console.log(req.query);
        let dbName = "Company";
        let db = client.db(dbName);
        let collection = db.collection('sales_data');
        collection.find((req.query),function(err, docs){    
            console.log("search done");
           console.log(docs);
           res.send(docs);

        })
    })


        app.listen(3000, () => {
        console.log('Server is running on PORT3000');
    });
 
})
