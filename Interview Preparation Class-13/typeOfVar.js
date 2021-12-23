// fn definition
function fn(param) {
    console.log("I am function definition", param);
}

//string value
fn("Hello");

//boolean value
fn(true);

//array - (address passed)
fn([1, 2, 3, 4]);

//object - (address passed)
fn({ name: "Jasbir" });

//NAN
fn(NaN);

//function are also varibales -> functions are first class citizens in js
function sample() {
    console.log("I am a sample function");
}

//function can also be passed as an argument in a function
fn(sample);