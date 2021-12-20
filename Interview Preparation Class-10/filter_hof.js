//using filter HOF
let array2 = [1, 3, 5, 6, 9, 8, 10, 11, 14, 13];
//passed -> if condition is passed then pushed into new array
//failed -> if condition is failed then not pushed into new array

function isOdd(number) {
    return number % 2 == 1;
}

function isEven(number) {
    return number % 2 == 0;
}

let oddArray = array2.filter(isOdd);
console.log(oddArray);

let evenArray = array2.filter(isEven);
console.log(evenArray);