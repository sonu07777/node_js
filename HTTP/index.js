const http = require("http");

const server = http.createServer(function (req, res) {
  if (req.url == "/") {
    res.write("<h1>Hellow everyone </h1>");
  } else if (req.url == "/about") {
    res.write("<p>hay this is an <h1>ABOUT PAGE</h1></p>");
  }
  res.end();
});
server.listen(5000);
console.log("the server is running in the browser succesfully ");
