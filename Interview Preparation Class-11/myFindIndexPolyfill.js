// the findIndex() method returns the index of the first element in the array that
// satisfies the provided testing function. Otherwise return -1
let arr1 = [5, 7, 8, 12, 13, 14, 22, 16, 25, 67, 71];
let arr2 = [2, 10, 4, 6, 5, 12];
let arr3 = [10, 2, 4, 8];

function isLargeNumber(num) {
    return num > 25;
}

function isOdd(num) {
    return num % 2 == 1;
}

function myFindIdx(arr, cb) {
    for (let i = 0; i < arr.length; ++i){
        if (cb(arr[i])) {
            return i;
        }
    }
    return -1;
}


console.log(myFindIdx(arr1, isLargeNumber));
console.log(myFindIdx(arr2, isOdd));
console.log(myFindIdx(arr3, isOdd));