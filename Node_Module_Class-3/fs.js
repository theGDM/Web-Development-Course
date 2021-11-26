//Node module -> Inbuilt modules - fs module
//node modules are used to perform different tasks as required

//File System Modules -
//we will be reading, writing, updating, and deleteing files from our script.
const fs = require('fs');
const path = require('path');

//reading
//readFileSync() This a method to read a content of a file
// let content = fs.readFileSync('f1.txt'); 
// console.log("This is f1's content " + content);


//writing
//writeFileSync() method is used to put data(write) to a file, 
//if the file passed does not exit it creates a new file and writes to it.
//fs.writeFileSync('f2.txt', "Hello from f2's content");
// expects two parameters, file name and what we wanna write in that file


//append a file
//append file sync adds data to the previously written file, basically it appends a file with new passed content
// fs.appendFileSync('f2.txt', ". Updation to f2.txt file");

//delete a file, by passing its path
//let's quickly create a file that is goig to be deleted
// fs.writeFileSync('f3.txt', " This is the file created to demonstrate the removing function");
// fs.unlinkSync('f3.txt');
// console.log('File removed');


//* Directories *//

//create
//mkdirSync is used to create a new directory
//fs.mkdirSync('myDirectory');
//fs.mkdirSync('myDirectory-1');

//delete
//rmdirSync is used to remove or delete a directory
//fs.rmdirSync('myDirectory');
//console.log("Directory has been removed!");

//to check wheteher a directory exists or not we can use existSync method
//if the directory exists the method return true otherwise false
// let doesExist = fs.existsSync('myDirectory'); //return true or false
// let doesExist1 = fs.existsSync('myDirectory-1');
// console.log(doesExist);
// console.log(doesExist1);

//stats of a folder (Details of a folder)
//lstatSync provide us with all the statistics of a directory
// let doesExist = fs.existsSync('myDirectory');
// let doesExist1 = fs.existsSync('myDirectory-1')
// if (doesExist) { //if myDirectory exist then the code written b/w curly brces will be exicuted
//     let statsOfPath = fs.lstatSync('myDirectory');
//     console.log(statsOfPath);
// } else {
//     console.log('No such directory!')
// }

// if (doesExist1) {
//     let statsOfPath1 = fs.lstatSync('myDirectory-1');
//     console.log(statsOfPath1);
// } else {
//     console.log('No such directory!')
// }

// let statsOfPath = fs.lstatSync('myDirectory-1');
// console.log('isFile?', statsOfPath.isFile());
//isFile is a property which checks passed path is a file or not

// console.log('isDirectory?', statsOfPath.isDirectory());
// // isDirectory is a prop which checks passed path is a directory or not


//read directory Sync method is used to check the content(files) of a particular directory
// let folderPath = 'D:\\Documents\\Pepcoding Web Devlopment\\Node_Module_Class-3\\myDirectory-1';
// let folderContent = fs.readdirSync(folderPath);
// console.log('directory content -> ' + folderContent);
// //problem with this is that, it will convert folderContent array into
// //string.

// console.log(folderContent);
// //This will give us an array

// console.log(folderContent[1]);

//copy files 
//src file(The file which we want to copy), destFolder(At which we will copy the files)
let srcFilePath = 'D:\\Documents\\Pepcoding Web Devlopment\\Node_Module_Class-3\\myDirectory-1\\test3.txt';
let destFolder = 'D:\\Documents\\Pepcoding Web Devlopment\\Node_Module_Class-3\\myDirectory-2';

//Now here comes the use of path module

let toBeCopiedFileName = path.basename(srcFilePath);
console.log(toBeCopiedFileName);
//basename method gets the actual name of the file or directory, in our case toBeCopiedFileName.txt

let destPath = path.join(destFolder, toBeCopiedFileName);
console.log(destPath);
//Now the join method of path module will append the path of the destFolder with the basename of the file which we are going 
//to copy in myDirectory-2 folder

fs.copyFileSync(srcFilePath, destPath);
//Now the copyFileSync will take the two arguments one is path of the source file that is going to be copied, and the destPath.
console.log('File copied!');

