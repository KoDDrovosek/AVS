var mongoClient = require("mongodb").MongoClient,assert = require('assert');

var config = require('./config.json');

module.exports.postBlog = function(req,res){
    mongoClient.connect(config.db, function(err, db){
        db.collection("blogs").insertMany([req.body], function(err, results){
            res.sendStatus(200);
            db.close();
        });
    });
};
module.exports.getBlog = function(req,res){
    mongoClient.connect(config.db, function(err, db){
        db.collection("blogs").find().toArray(function(err, results){
            res.send(results);
            db.close();
        });
    });
};