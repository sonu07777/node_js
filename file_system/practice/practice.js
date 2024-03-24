let fs = require("fs");
console.log("here the programme is start");

fs.readFile("./practice/input.txt",(err, data)=>{
    if (err){
        console.log`the err is ${err}`;
        return err 
    }
    else 
    return console.log(`${data.toString()}`);
   
})
console.log("here the end is over");

const sync = fs.readFileSync('input.txt').toString()
console.log(sync);