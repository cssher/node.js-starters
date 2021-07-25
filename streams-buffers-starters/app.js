var http = require("http");
var fs = require("fs");

var myReadStream = fs.createReadStream(__dirname + "/read.txt", "utf8");
var myWriteStream = fs.createWriteStream(__dirname + "/write.txt");

let chunkCount = 1;

myReadStream.on("data", (chunk) => {
  console.log(chunkCount + "chunk recieved.");
  chunkCount++;

  myWriteStream.write(chunk);
});
