const http = require("http");
// const { hostname } = require("os");
const port = 2000;
const hostname = "loacalhost";
const server = http.createServer((res, req) => {
  res.end("working ");
});
server.listen(port, hostname, () => {
  console.log(`server is working on http://${hostname}:${port}`);
});
