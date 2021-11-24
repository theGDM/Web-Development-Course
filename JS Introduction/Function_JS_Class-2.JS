// //Functions - block of statements, which can we invoked from any part of the program.
// let a = 2;
// let b = 3;

// console.log(a + b);

// // function accepts arguments
// function add(a, b) { //a and b are expected value of ffunction add also called as parameters
//     // console.log(a + b);
//     return a + b;//now i have to catch it in some variable
// }//function declaration

// //add(5, 4);//function invokation/or calling
// let sum = add(5, 4);//these 5, 4 are actually arguments that are passed to the function
// console.log(sum);


function sayHi(){ //it has functionality to print Hi
    console.log("Hi");
}

sayHi();
sayHi();
sayHi();


//In Javascript function are also called as first class citizens, Because function can be stored in variable 
//actually first class citizens are variables, so we can treat function as variables
//sayHi is a variable in which we stored function sayHi
//We can treat functions as variables in JS

let sayHi = function () { //no name provided, so these are called as anonymous function //this is also known as function expression
    console.log("Hi");
}

sayHi();

let multiplication = function (a, b) {
    console.log(a*b);
}//anonymous function

multiplication(5, 4);

let division = function (a, b) {
    return a / b;
}

let ans = division(8, 2);
console.log('Answer is:',ans);

//IIEF (Immediately Invoked Function Expression)
//Needed where we need to call a function only one time, immediately

let add = (function (a, b) {//no calling
    console.log("Add is",a + b);
})(10, 20);

let mul = (function (a, b) {
    return a * b;
})(30, 10);

console.log(mul);