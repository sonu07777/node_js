const http = require("http");
const PORT = 5021;
const HOSTNAME = "localhost";

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.statusCode = 200;
    res.setHeader("Content-type", "text/plain");
    res.end("Youre in the home page ");
  } else if (req.url == "/about") {
    res.statusCode = 200;
    res.setHeader("Content-type", "text/plain");
    res.end("you are in the about pag");
  } else if (req.url == "/contact") {
    res.statusCode = 200;
    res.setHeader("Content-type", "text/plain");
    res.end("you are in the contact  pag");
  } else if (req.url == "/list") {
    const option = {
      hostname: "fakestoreapi.com",
      path: "/products/2",
      method: "GET",
    };
    const apiReq = http.request(option, (apiRes) => {
      apiRes.on("data", (data) => {
        res.statusCode = 200;
        res.setHeader("Content-type", "application/json");
        res.end(data.toString());
      });
    });

    apiReq.on("error", (error) => {
      console.log(e);
    });
    apiReq.end();
  } else {
    res.statusCode = 500;
    res.setHeader("Content-type", "text/plain");
    res.end("the server have some error");
  }
});
server.listen(PORT, () => {
  console.log(`the server is ready to run in ${HOSTNAME}:${PORT}`);
});
