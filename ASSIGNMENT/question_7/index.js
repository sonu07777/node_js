const http = require("http");

const server = http.createServer(function (req, res) {
  if (req.url == "/") {
    res.write("<h1>Hellow everyone </h1>");
  } else if (req.url == "/about") {
    res.write("<p>I Am Happy To Learn Full Stack Web Development From PW Skills!</p>");
  }
  res.end();
});
server.listen(5003);
console.log("the server is running in the browser succesfully ");
