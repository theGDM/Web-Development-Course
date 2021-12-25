//function are variable
function outer(param) {
    console.log(param);
    param();
}

function chhotaFn() {
    console.log("Hello I am a chhota function");
}

//1
//function can be passed as a parameter to another function -> HOF
outer(chhotaFn);

//2
//function's reference can be stored in another variable -> function expression
let a = [1, 2, 3, 4];
let b = a;
console.log(b);

let anotherFn = function () {
    console.log("I am an expression");
}

anotherFn();

//3
//function return from a function
function Fn() {
    return "Hello";
}

let rval = Fn();
console.log(rval);

function outer() {
    console.log("Hello I am a Outer and I am returning Inner..");
    return function inner() {
        console.log("I am Inner...");
    }
}

let returnV = outer();
console.log(returnV); // [Function : name of returned function]
returnV();