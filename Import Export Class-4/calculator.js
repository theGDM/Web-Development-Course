//basic calculator
//conventional function

function addition(a, b) {
    console.log('The addition is ', a + b);
}

function subtract(a, b) {
    console.log('The subtraction is ', a - b);
}

function multiplication(a, b) {
    console.log('The multiplication is ', a * b);
}

function division(a, b) {
    console.log('The division is ', a / b);
}


// addition(3, 4);
// subtract(5, 4);
// multiplication(3, 4);
// division(8, 3);

//lets, execute these function in another file

module.exports = {
    add: addition,
    sub: subtract,
    mul: multiplication,
    div: division
}

//module.exports is a object provided by nodejs, by which we can export our function in key-value pairs
//we will use our function with the keys we assigned to the functions's name.