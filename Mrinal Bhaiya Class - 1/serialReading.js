const fs = require('fs'); //module to deal with file

//readFile method takes two argument , one is file path, and a callback function
fs.readFile(`${__dirname}/f1.txt`, cb1);//no sacrifice of time//reading a file asynchronously

function cb1(err, data) {//error first call back function
    if (err) {
        console.log(error);
    } else {
        console.log(data.toString());
        fs.readFile(`${__dirname}/f2.txt`, cb2);
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