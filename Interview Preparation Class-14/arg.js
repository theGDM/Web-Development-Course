function fn(param1, param2) {
    console.log("Inside fn", param1, param2);
}

fn("Hello", "Hi");
// if there is some argument missing in function call then the value which function parameter will get is undefined, which
// is default value.
fn("Hello");
fn();
fn("Hello", "Hi", "By");

//arguments array
// whatever we pass as argument to function that goes to in argument array
// function Fn() {
//     console.log(arguments);
// }

function Fn(param1, param2) {
    console.log(arguments);
    console.log(param1, param2);
    console.log(arguments[2]);
}
// arguments[0] -> param1 ,arguments[1] -> param2
// first goes to in arguments array and then copy is created for parameters (param1, param2)

Fn("Hello", "Hi");
Fn("Hello");
Fn();
Fn("Hello", "Hi", "By"); // in this Fn call the third argument, goes to index 2, in arguments array;


