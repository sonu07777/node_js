const fs = require("fs");

fs.readFile("./nodejs_architechture.txt", (err, data) => {
  if (err) {
    console.log("the file have some errr in read ");
    return err;
  }
  return console.log(data.toString());
});
// ------------------------APPEND SOME ANOTHER DATA 
fs.appendFile("./nodejs_architechture.txt",`High performance.: Node.js is built on Chrome's V8 JavaScript engine, which makes it very fast.
Scalability.: Node.js is designed to be scalable, so it can handle a large number of concurrent users.
Easy to learn.: Node.js is based on JavaScript, which is a popular programming language that is easy to learn.
Large and active community.: Node.js has a large and active community of developers who contribute to the project and create new modules.
Cost-effective.: Node.js is open source, so it is free to use.
Cross-platform compatibility.: Node.js can be used on Windows, Mac, and Linux.`,function(err,data){
    if(err){
        console.log("the file have some err while append the data ");
    }
    return console.log("the data succesfully add to the file ");
})
// -----------------------AGAIN READ THE DATA AND PRINT THE DATA
fs.readFile("./nodejs_architechture.txt", (err, data) => {
    if (err) {
      console.log("the file have some errr in read ");
      return err;
    }
    return console.log("--------------------------"+ data.toString());
  });

  fs.unlink("./nodejs_architechture.txt",function(err){
    if (err){
        console.log("some error have occur when deleting the data ");
    }
  })