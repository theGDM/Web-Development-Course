const fs = require('fs'); //module to deal with file

// //synchronous way of reading a file
// console.log("before");//code before reading a file

// let data1 = fs.readFileSync(`${__dirname}/f1.txt`);
// console.log(data1.toString());

// console.log("after");//code after reading a file
// //if file size is very big(1-2 mb), then we can not reach to the after code immediately, we have to wait utill
// //whole file is not read.

//asynchronous way of reading a file
console.log("before");//code before reading a file

//readFile method takes two argument , one is file path, and a callback function
fs.readFile(`${__dirname}/f1.txt`, cb1);//no sacrifice of time//reading a file asynchronously
fs.readFile(`${__dirname}/f2.txt`, cb2);

function cb1(err, data) {//error first call back function
    if (err) {
        console.log(error);
    } else {
        console.log(data.toString());
    }
}

function cb2(err, data) {
    if (err) {
        console.log(error);
    } else {
        console.log(data.toString());
    }
}

console.log("after");//code after reading a file
