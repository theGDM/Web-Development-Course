//Any function that is passed as an argument to another function.
//Any function that is called after a function has finished executing.

// function printFirstName(firstName) {
//     console.log(firstName);
// }


// function printLastName(lastName) {
//     console.log(lastName);
// }

// printFirstName("Joe");
// printLastName("Root");

//whenever we want certain part to execute after executing some other part only, then the concept of
//asynchronous JS comes.
//callback function can be passed as a argument to another function
// function printFirstName(firstName, ln) {
//     console.log(firstName);
//     ln("Root");
// }


// function printLastName(lastName) {
//     console.log(lastName);
// }

// using second function name as callback function
// printFirstName("Joe", printLastName);
// Synchronous behaviour(Synchronous way of reading file)
const fs = require("fs");
console.log("Before");
let data = fs.readFileSync("text.txt"); //Synchronous function
console.log(data.toString());
console.log("after");

//Asynchronous behaviour(Asynchronous way of reading file)
console.log("Before");
fs.readFile("text.txt", cb); //Asynchronous function
function cb(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data.toString());
    }
}
console.log("after");