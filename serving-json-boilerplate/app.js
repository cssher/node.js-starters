var http = require("http");

var fs = require("fs");

var server = http.createServer((req, res) => {
    
    res.writeHead(200, {"Content-Type": "application/json"});
    var myReadStream = fs.createReadStream(__dirname + "/read.json", "utf8");
    myReadStream.pipe(res);
});

server.listen(3000, "127.0.0.1");