var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<p style="color:red;">Hello World!</p>');
}).listen(8010); 