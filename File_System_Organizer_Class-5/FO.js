//1 .First Activity with Node.js
//We will be creating a File System Organizer//
//Features of the project - 
//If you have numerous Files in a folder and they are not Properly arranged
//so you can use this tool to arrange them in a specific directory according to their extension
//Like text files will go into text File folder .exe files will go into application folder and so on
//So at the end you will have a arranged set of files in specific folders
//we will be using built in node modules like fs and path to create this project.

const helpObj = require("./commands/help") //imported help script
const treeObj = require("./commands/tree"); //imported tree script
const organizeObj = require("./commands/organize")

//On command line, input goes as array
//Node.js treats command line inputs as array and that array is your process array
// let input = process.argv[4];//node FO.js organizer //treat as array
// console.log(input);

let inputArr = process.argv.slice(2); //from 2nd index to last index, it will give us an array
//slice is used to extract the command and path that we will pass, from command line
// console.log(process.argv);

let command = inputArr[0];

switch (command) {
    case 'tree':
        treeObj.treeFn(inputArr[1]);
        break;
    case 'organize':
        organizeObj.organizerFn(inputArr[1]);// passing a directory path
        break;
    case 'help':
        helpObj.helpFn();
        break;
    default:
        console.log('Wrong Command :('); 
}