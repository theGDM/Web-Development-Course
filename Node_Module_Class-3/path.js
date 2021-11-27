const { Console } = require('console');
const path = require('path');

//extname is a method that will extract the extension of a file, by providing its path, its a path modulw's method
let ext = path.extname('D:\\Documents\\Pepcoding Web Devlopment\\Node_Module_Class-3\\f1.txt');
console.log('Extension of a file ' + ext);

let actualNameOfFile = path.basename('D:\\Documents\\Pepcoding Web Devlopment\\Node_Module_Class-3\\f1.txt');
console.log('Actual name of a file ' + actualNameOfFile);

//This will give us the path of the directory where we are currently present.
//gets you the path of the current directory you are in.
console.log(__dirname);

//This will give us the path of the filename where we actually are coding, or writing.
//gets you the path of the current file you are in.
console.log(__filename);