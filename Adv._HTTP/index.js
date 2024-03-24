const http = require("http");
const PORT = 3050;
const HOSTNAME = "localhost";

// const server = http.createServer((req,res)=>{
//     res.statusCode=200;
//     res.setHeader("Content-type","text/plain")
//     res.end("server is succesfully running in the page")
// })
const server = http.createServer((req, res) => {
  res.statusCode = 500;//here you get the error bcz the statuscode is 500localhost:3024
  res.setHeader("Content-type", "application/json");
  res.end(JSON.stringify({error: "you have got some error" }));
});
server.listen(PORT, () => {
  console.log(`server running at ${HOSTNAME}:${PORT}`);
});
