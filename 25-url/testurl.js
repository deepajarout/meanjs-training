var http = require('http');

http.createServer(function (request, response){
    response.writeHead(200,{'Content-Type':'text/html'});
    response.write(request.url);
    response.end();
}).listen(9090);