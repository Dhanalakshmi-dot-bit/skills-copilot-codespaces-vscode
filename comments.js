// Create web server
var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');

// Create server
http.createServer(function(req, res) {
  var pathname = url.parse(req.url).pathname;
  console.log("Request for " + pathname + " received.");

  // Read file
  fs.readFile(pathname.substr(1), function(err, data) {
    if (err) {
      console.log(err);
      res.writeHead(404, {'Content-Type': 'text/html'});
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data.toString());
    }
    res.end();
  });
}).listen(8081);

console.log('Server running at http://