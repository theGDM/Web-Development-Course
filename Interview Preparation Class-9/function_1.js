//function definition, where function's body is present
function sayHi(name) {
    console.log("Hi", name);
}

//function invocation(function)
sayHi("RDJ");
let rVal = sayHi("Captain America");//returned value is undefined, as function is not returning anything
console.log("rVale is", rVal);

//string
sayHi("Heloo");
//number
sayHi(10);
//array(reference type -> Only address is passed)
sayHi([10, 20, 30, 40]);
//object(reference type -> Only address is passed)
sayHi({ myName: "RDJ" });
//function can also be passed as variable(its address passed)
sayHi(chhotaFunction);
sayHi(sayHi);

//function definition, where function's body is present
function returnName(name) {
    console.log("Hi", name);
    return { firstName: name };
}

//function invocation(function)
returnName("RDJ");
let nameObject = returnName("Captain America");//returned value is undefined, as function is not returning anything
console.log("Returned object is", nameObject);

//chhotaFunction
function chhotaFunction() {
    console.log("I am a chhotaFunction");
}