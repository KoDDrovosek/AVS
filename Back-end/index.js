var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var router = require('./controllers/router');

app.use(express.static('public'));

    router.GET_Request(app);


    router.POST_Request(app);


    router.PUT_Request(app);


    router.DELETE_Request(app);


app.listen(3000);