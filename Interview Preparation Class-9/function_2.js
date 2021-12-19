//function definition, where function's body is present
//Js is high order language, so we can't see the address printed
function sayHi(name) {
    console.log("Hi", name);
    name();
}

//chhotaFunction
function chhotaFunction() {
    console.log("I am a chhotaFunction");
}

console.log(sayHi); //print function name
console.log(chhotaFunction); //print function name

// I am passing a function as argement
sayHi(chhotaFunction);//actually i am passing address of chhotafunction as argument to sayHi function