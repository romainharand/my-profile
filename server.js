/* (Code de base de Gandi)
var http = require("http");
var port = process.env['PORT'] || 8080;

http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    res.end('<!DOCTYPE html><html><meta charset="utf-8"><title>It works' +
            "</title><b>It works!</b><br /><br />This is the server's " +
            "default server.js.");
}).listen(port);
console.log("Server ready to accept requests on port %d", port);



(Tentative de config)
var http = require("http");
var port = process.env['PORT'] || 8080;
var fs = require('fs');

http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
   fs.readFile('./index.html', null, function(error, data) {
   	if (error) {
   		res.writeHead(404);
   		res.write('File not found!');
   	} else {
   		res.write(data);
   	}
   	res.end();
   });



}).listen(port);
console.log("Server ready to accept requests on port %d", port);
*/


let express = require('express')
let app = express();

app.use(express.static(__dirname + "/public"));


app.get('/', function(req, res){

  return res.sendFile(__dirname + "/index.html");
});
app.get('/index.html', function(req, res){

  return res.sendFile(__dirname + "/index.html");
});
app.get('/labs.html', function(req, res){

  return res.sendFile(__dirname + "/labs.html");
});
app.get('/test-js.html', function(req, res){

  return res.sendFile(__dirname + "/test-js.html");
});
app.get('/test-node.html', function(req, res){

  return res.sendFile(__dirname + "/test-node.html");
});
app.get('/test-abtest.html', function(req, res){

  return res.sendFile(__dirname + "/test-abtest.html");
});
app.get('/test-slideout.html', function(req, res){

  return res.sendFile(__dirname + "/test-slideout.html");
});
app.get('/test-codepen.html', function(req, res){

  return res.sendFile(__dirname + "/test-codepen.html");
});



// app.get('/', (req, res) => {

//   res.sendFile(__dirname + "/pages/index.html");
// });


app.listen(8080);