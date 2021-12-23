//Hoisting is a fancy word for memory allocation for JS function
//so the steps for executing js functions
//1. First the memory is allocated for the functions, varriable, arrays, objects
//2. then the code execution will start
//code will execute only after, allocation of memory
//memory for the function are allocated before the code is executed
//functions are created in heap and there address are stored in  stack
//there is no function overloading in JS

//1
imReal(); //calling before defining any function

function imReal() {
    console.log("I am real");
}

imReal();

//2
function imReal() {
    console.log("He isn't, I am the real one");
}

imReal();