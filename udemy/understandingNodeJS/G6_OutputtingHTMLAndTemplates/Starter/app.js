var http = require('http');// http module
var fs = require('fs'); //file module

http.createServer(function(req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });//res Header
    var html = fs.readFileSync(__dirname + '/index.htm', 'utf8');
    var message = 'Hello World ...';
    html = html.replace('{Message}', message);
    res.end(html);
    
}).listen(1337, '127.0.0.1');