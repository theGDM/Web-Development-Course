//function's definition
function sayHello(name) {
    console.log("Hey", name);
}

//function invocation
sayHello("Jasbeer");

//I haven't call the function -> function name prints in square brackets
console.log(sayHello);
//when we are not calling a function just passing its name, then its address will not be printed,
//but its name in bracket format [function : name of function];

console.log(sayHello("Jasbeer"));//we will get undefined, as sayHello is not returning anything
let rval = sayHello("RDG");
console.log(rval);

// if we don't pass anything to function , then parameter will be undefined
sayHello();

//return value from function
function sayHy(name) {
    console.log("Hey", name)
    return "returned from a function";
}

let val = sayHy("Jasbir");
console.log(val);

function sum(a, b) {
    return a + b;
}

let sumRes = sum(5, 6);
console.log(sumRes);
