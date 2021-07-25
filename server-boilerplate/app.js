var http = require("http");

var server = http.createServer((req, res) => {
  res.writeHead(200, { "Conten-Type": "text/plain" });
  res.end("Hello from Server !");
});

server.listen(3000, "127.0.0.1");
