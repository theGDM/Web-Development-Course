// It is also a HOF on array
// It takes a function -> test function -> returns true/false
// filter method call the cb function on every element of the provided array
// If callback function returns true for a particular element of provided array, then it adds
// that element in the newArray.

// filter implement -> library implementation(How filter works behind the scene)
// take array and function as argument
// return a new array

let arr = [5, 7, 8, 12, 13, 14, 22, 16, 25, 67, 71];

function isEven(num) {
    return num % 2 == 0;
}

function isOdd(num) {
    return num % 2 == 1;
}

function myFilter(arr, cb) {
    let newArray = [];
    for (let i = 0; i < arr.length; ++i){
        if (cb(arr[i])) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

let evenArray = myFilter(arr, isEven);
console.log(evenArray);

let oddArray = myFilter(arr, isOdd);
console.log(oddArray);
