//setTimeOut is async method, which execute a callback function after, provided time

console.log("before");

setTimeout(function greet(greeting, name) { //asynchronous method
    console.log(`${greeting} My name is ${name}!`)
}, 3000, "Hello", "Mrinal");

setTimeout(function greet(greeting, name) { //asynchronous method
    console.log(`${greeting} My name is ${name}!`)
}, 5000, "Hy", "Mukesh");

console.log("after");
// before
// after
// Hello My name is Mrinal!
// Hy My name is Mukesh!
// in total it will take 5 seconds

//serially total 8 seconds
console.log("before");

setTimeout(function greet(greeting, name) { //asynchronous method
    console.log(`${greeting} My name is ${name}!`)
    setTimeout(function greet(greeting, name) { //asynchronous method
        console.log(`${greeting} My name is ${name}!`)
    }, 5000, "Hy", "Mukesh");
}, 3000, "Hello", "Mrinal");

console.log("after");