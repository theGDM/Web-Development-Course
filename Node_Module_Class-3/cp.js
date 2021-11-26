//Today's class on Node.js and Modules
//Node module -> Inbuilt modules - child_process(one of the inBuilt modules)

//we can make different subprocess using child_process

const cp = require('child_process');

// console.log("Trying to open calculator");
// cp.execSync('calc')//cammand for opening calculator
// console.log("Calculator opened!");

// console.log("Trying to open VsCode");
// cp.execSync('code')//cammand for opening vscode editor
// console.log("Vscode opened!");  

//we can handle website, visit website, open chrome etc and using child process
//cp.execSync("start chrome https://www.pepcoding.com/resources/"); //now it will start chrome and direct me to pepcoding website

let output = cp.execSync('node test.js');
console.log(output) //data is comming in buffer form/i.e. some encrypted form;
console.log('Output is ' + output) //so we append it with string so that, it will concatenate binary data in string format
console.log(output.toString()); //we can convert the buffer data to string by using toString() method.
