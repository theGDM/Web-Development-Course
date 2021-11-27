//Here we will import our own created module
const transformTextModule = require("./transformText");

//using our imported methods
console.log(transformTextModule.upperCaseSentence("Hello my name is robert downey junior"));
console.log(transformTextModule.lowerCaseSentence("Hello my name is ROBERT DOWNEY junior"));
console.log(transformTextModule.capitalizeSentence("Hello my naMe Is Robert dOWney juNIor"));
console.log(transformTextModule.toggleCase("hello my name IS CHRIST hemsWORTH"));