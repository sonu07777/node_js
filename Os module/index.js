const os = require("os");

console.log("cpu architecture"+ os.arch);
console.log("total memomry:"+os.totalmem());
console.log("free memomry:"+ os.freemem());
console.log("network interferance"+os.networkInterfaces());
// console.log("network interferance"+JSON.stringify(os.networkInterfaces()));
console.log("os defult temp diroctory"+os.tmpdir());
console.log(os.endianness());
console.log(os.hostname());
console.log(os.type());
console.log(os.platform());
console.log(os.release());