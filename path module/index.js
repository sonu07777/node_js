const path = require("path")
// console.log(path.sep);
// console.log(process.env.path);
// console.log(path.delimiter);
const filepath1 = 'C:\Users\sonus\OneDrive\Desktop'  /*if you want any file and do some work for that file you use like this */
/*if you want path of current file*/
const currentFileName = __filename;
// console.log(currentFileName);
// console.log(__dirname);
// console.log(path.basename(currentFileName));/*here we get the bottom file name of the path which having a name and one extensiom */
// console.log(path.basename(currentFileName,'.js'));/*here we alos find the base file name but without extension name*/
// console.log(path.dirname(currentFileName));/*here we get the path of the directory without the current file name*/
// console.log('extName >',path.extname(currentFileName));
let pathToFile = path.format({
    dir: 'C:\Users\sonus\OneDrive\Desktop\others',
    base: '\index.js'
})/*it combine both the directory */

// console.log(pathToFile);

console.log(path.isAbsolute(currentFileName));/* if the file start with like "c://"  then it is absolute is true */
console.log(path.isAbsolute( '.\index.js'));
console.log(path.join("home","index.js"));  /* it give a url by joing all the given name*/
console.log(path);