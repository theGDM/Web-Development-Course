// these functions are available on arraya
// lodash
// Higher order function are function that receives function as an argument or a function that
// returns a function.
let array = [1, 2, 3, 4, 5, 6];

function square(x) {
    return x * x;
}

function cube(x) {
     return x * x * x;
}

//manually, squaring all element
console.log(square(array[0]));
console.log(square(array[1]));
console.log(square(array[2]));
console.log(square(array[3]));
console.log(square(array[4]));

//by using map which is HOF
//does not affect the original array
let squareArray = array.map(square);
console.log(squareArray);

let cubeArray = array.map(cube);
console.log(cubeArray);