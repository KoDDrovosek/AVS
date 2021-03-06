var express = require("express");
var app = express();
var request = require('request');
var bodyParser = require("body-parser");
var blog = require("./blogs");




module.exports.GET_Request = function(app){

    app.get("/",function(req,res){
        res.sendFile('/home/hosts/5min/public/index.html');
    });
    app.get('/admin',function(req,res){
        res.sendFile('/home/hosts/5min/public/index.html');
    });
    app.get('/posts',function(req,res){
        res.sendFile('/home/hosts/5min/public/index.html');
    })
    app.get('/about_ib',function(req,res){
        res.sendFile('/home/hosts/5min/public/index.html');
    })
    app.get('/getBlog',function(req,res){
        blog.getBlog(req,res);
    });
};

module.exports.POST_Request = function(app){
    app.use(bodyParser.urlencoded());
    app.use(bodyParser.json());
    app.post('/addBlog',function(req,res){
        console.log(req.body);
        blog.postBlog(req,res);
    });
};

module.exports.PUT_Request = function(app){

};

module.exports.DELETE_Request = function(app){
    
};