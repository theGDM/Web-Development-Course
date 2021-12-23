//1. fn definition
function fn(param) {
    console.log("I am function definition", param);
}

// variable assignment
// let a = [10, 20, 30];
// let b = a;
// console.log(b) //[10, 20, 30]

//2. function expression
let secondName = function originalName() {
    console.log("I am function expressions");
}

secondName();
//originalName //give error

//3. IIFE
(function drawBoard() {
    console.log("Board is immediately drawn");
})();

(function sum(a, b) {
    console.log(a + b);
})(20, 30);

//4. Anonymous function
let mul = (function (a, b) {
    return a * b;
})(20, 30);

console.log(mul);