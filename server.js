// app.js
// load modules
var express = require('express');  

var libCpuUsage = require( 'cpu-usage' );

// declare global var
var reading = 0;

var app = express();
var server = app.listen(80);
var io = require('socket.io').listen(server);

app.get('/', function(req, res,next) {  
    res.sendFile(__dirname + '/index.html');
});

// get CPU usage every 1000ms 
libCpuUsage( 1000, function( load ) {
    console.log(load)
    reading = load
});

//allow cross domain connection
io.set('origins', '*:*');

io.on('connection', function(client) {  
    console.log('Client connected...');

    client.on('request', function(data) {
        client.emit('reading', reading);
    });
});