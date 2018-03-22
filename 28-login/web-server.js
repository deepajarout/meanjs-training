var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  var path = url.parse(req.url, true);
  var route = path.pathname;

  var queryStrings = url.parse(req.url, true).query;

  console.log('route --> '+ route);
  // Handle the HTTP methods as well: GET, POST, PUT
  switch(route){
    case "/":
      fs.readFile('login.html', function(err, data) {
        if (err) {
          res.writeHead(404, {'Content-Type': 'text/html'});
          return res.end("404 Not Found");
        } 
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      });
      break;
    case "/login":
      if(queryStrings.username !== '' && queryStrings.password !== ''){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>Welcome! '+ queryStrings.username + '</h1>');
        return res.end();
      }else{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<a href="/">Please go back and login again </a>');
        return res.end();
      }
      
      break;
    default:
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
  }

}).listen(9090); 
