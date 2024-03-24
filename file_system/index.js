const { log } = require("console");
let fs = require("fs");
const buffer = new Buffer(1023);
// ----------------------------------------------------------
// async way we read the file from another file
/*fs.readFile("input.txt", function (err, data) {
  if (err) {
    console.log("the error is ", err);
    return err;
  }
  console.log(data.toString());
  console.log("end of read data");
  return data;
});

console.log("out of the readfile");*/

// ---------------------------------------------------------
// sync way read the file

/* console.log("start of the read");
var data = fs.readFileSync('input.txt')
console.log(data.toString());
console.log("end of the string "); */
// --------------------------------------------------------
// another way to read file

// fs.open("input.txt", "r+", function (err, fd) {
//   if (err) {
//     console.log(`the err was occure`);
//   }
//   console.log("the file is open");
//   console.log(typeof fd);

//   fs.read(fd, buffer, 0/*this place is for start storing data from wahera the data stored in buffer */, buffer.length, 0/**this place is for start reading from the buffer */, function (er, bytes) {
//     if (er) {
//       console.log("the error was occure");
//     }
//     // here buffer is a object so we call that value in  a inbuiled buffer
//     console.log(`${bytes.length},${buffer.length}` );
//     console.log(buffer.length - 2);
//     console.log(typeof buffer);
//     console.log(buffer[1]);
//     console.log(buffer.slice().toString());
//     fs.close(fd,function(err){
//       if (err){
//       console.log("some error was occuring in  closing the file ");
//       }
//       else{
//         console.log("succesfylly close the file");
//       }
//     })
//   });
  
// });

// -------------------------------------------------
// how to write in another file
// here it override the aleray present data for not override the data we use the append
// fs.writeFile(
//   "input.txt",
//   "hellow i am writing this word from another fiel to your file",
//   function (err) {
//     if (err) {
//       console.log("error was occure");
//     } else {
//       console.log("writing succifully");
//     }
//   }
// );

// append
// fs.appendFile("input.txt",'hellow i am writen through append file',"utf-8", function(err){
//   if (err) {
//     console.log("the file having some error");
    
//   }
//   else{
//     console.log("the file is succesfully applied");
//   }
// })
// ------------------------------------------------------------------------

// how to delete the file from the folder 
fs.unlink("input.txt",function(err){
  if(err){
    console.log("file have some error in the deleting ");
  }
  else{
    console.log("here the file is finally deleted");
  }
})