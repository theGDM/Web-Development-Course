let arr1 = [5, 7, 8, 12, 13, 14, 22, 16, 25, 67, 71];
let arr2 = [2, 10, 4, 6, 10, 12];

function isOdd(num) {
    return num % 2 == 1;
}

function mySome(arr, cb) {
    for (let i = 0; i < arr.length; ++i){
        if (cb(arr[i])) {
            return true;
        }
    }
    return false;
}

function belowThreshold(num) {
    return num < 3;
}

let res1 = mySome(arr1, isOdd);
console.log(res1);

let res2 = mySome(arr2, isOdd);
console.log(res2);

let res3 = mySome(arr1, belowThreshold);
console.log(res3);
