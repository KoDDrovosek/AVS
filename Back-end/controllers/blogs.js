var mongoClient = require("mongodb").MongoClient,assert = require('assert');

var config = require('./config.json');

module.exports.postBlog = function(data){
    console.log(data);
    mongoClient.connect(config.db, function(err, db){
        db.collection("blogs").insertMany([data], function(err, results){
            console.log(results);
            console.log(err);
            db.close();
        });
    });
};