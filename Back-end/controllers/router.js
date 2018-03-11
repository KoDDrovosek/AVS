var express = require("express");
var app = express();
var request = require('request');
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded());

module.exports.GET_Request = function(app){

    app.use("/",function(req,res){
        res.sendFile('./public/index');
    });
    app.get("/get_by_category",function(req,res){

    });
    app.get("/slots",function(req,res){

    });
    app.get("/",function(req,res){

    });
};

module.exports.POST_Request = function(app){

};

module.exports.PUT_Request = function(app){

};

module.exports.DELETE_Request = function(app){

};