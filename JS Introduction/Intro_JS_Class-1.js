// console.log("Hello from the browser from intro.js");
// console.log("Hello from Node.js");

//variables declartion with var, const, let
// var a;//first the variable is initialized with undefined when we declare it
// a = 20;
// console.log(a);

//js is a synchronous language i.e. line by line code exicution and a single threaded language
// a = "hello";
// console.log(a);
// a = null;
// console.log(a);
//js is a dynamic language, means a variable can hold value of different datatypes

//1st problem with var - redeclaration
// var b = 2;
// console.log(b);
// var b = "Hey";
// console.log(b);

//solution 
//let keyword does not allow us to redeclare a variable but variable can be redefine/reassign...that is really good
// let b = 2;
// console.log(b);
// let b = "Hey";
// console.log(b);

//loops and if else
// let flag = true;//storing boolean
// let n = 30;
// for (let i = 2; i * i <= n; ++i){
//     if (n % i == 0) {
//         flag = false;
//         break;
//     }
// }

// if (flag) {
//     console.log(n,"is a prime number");//add space after n
// } else {
//     console.log(n,"is not a prime number:");
// }

//2nd problem with var - scoping - function scoping and block scope
// if (10 % 2 == 0) {
//     var c = 2;
//     console.log(c);
// }
// console.log(c);//it shouldn't happen, it does not have block scope which can we problematic in project
//var is function scope not blocked scope

//solution - let is blocked scope as well as function scope
// if (10 % 2 == 0) {
//     let c = 2;
//     console.log(c);
// }
// console.log(c); //we will get c is not defined that's good

//const - niether redeclation nor redefine is allowed
// const m = 2;
// m = "hello"; //assignment to constant variable is not allowed
// console.log(m);

//strings
let str = "Pepcoders";
console.log(str);

//String methods 
//length of string -> length
console.log(str.length);

//extracting a part of string -> slice , substr
let slicedStr = str.slice(3, 7);//expects two arguments slice(start,end) return slicedStr from strating to ending-1
console.log(slicedStr);//last index get excluded
//last argument is optional, if not provided it will take the last index as length - 1

//substring 
//substr(start, length) starting index and the length of word
let subStr = str.substr(3, 4);
console.log(subStr);

//replace - expects the word to be replaced as first argument by the second argument
let sayHello = 'Hello Mukesh';
console.log(sayHello);
let sayBye = sayHello.replace('Hello', 'Bye');
console.log(sayBye);//Bye Mukesh

//toUpperCase and toLowerCase
let text1 = 'Hello world';
let text2 = text1.toUpperCase();
console.log(text2);

//concatenation - Concatenates more that two strings
let firstStr = "Hello";
let secStr = "World";

let concatenatedStr = firstStr.concat(' ',secStr);
console.log(concatenatedStr);

//trim - removes extra space before starting the characters and after end of characters
let text3 = '   hello world           ';
let trimmedText = text3.trim();
let leftTrim = text3.trimRight();
console.log(trimmedText);
console.log(leftTrim);



