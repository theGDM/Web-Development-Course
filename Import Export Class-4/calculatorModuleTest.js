//Here we will import the our own created module
const calculatorModule = require('./calculator');

console.log(calculatorModule);

//use our imported methods
calculatorModule.add(2, 4);
calculatorModule.sub(3, 5);
calculatorModule.mul(4, 8);
calculatorModule.div(7, 8);