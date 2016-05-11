"use strict";
const   express = require('express'),
        app = express(),
        port = 3000;

app.use(function (req, res, next) {
    console.log(req.url);
    console.log(req);
    //res.send({ msg: "hello" });
    next();
});

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/dist'));

app.listen(port, function (){console.info('Listening port on ' + port)});