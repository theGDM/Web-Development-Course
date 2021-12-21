let arr1 = [5, 7, 8, 12, 13, 14, 22, 16, 25, 67, 71];
let arr2 = [1, 3, 5, 7, 9, 11];

function isOdd(num) {
    return num % 2 == 1;
}

function myEvery(arr, cb) {
    for (let i = 0; i < arr.length; ++i){
        if (!cb(arr[i])) {
            return false;
        }
    }
    return true;
}

function belowThreshold(num) {
    return num < 80;
}


let res1 = myEvery(arr1, isOdd);
console.log(res1);

let res2 = myEvery(arr2, isOdd);
console.log(res2);

let res3 = myEvery(arr1, belowThreshold);
console.log(res3);
