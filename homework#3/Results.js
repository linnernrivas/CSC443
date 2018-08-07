var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req.res){
  res.writeHead(200,{'Content-Type': 'text/html'});
  var q =url.parse(req.url,true).query;
  var txt =q.Q1;

  fs.readFile('Results.text',function(err,data){
      data
  });
  res.end(txt);
}).listen(8080);
