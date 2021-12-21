let arr1 = [5, 7, 8, 12, 13, 14, 22, 16, 25, 67, 71];
let arr2 = [1, 3, 5, 7, 9, 11];

Array.prototype.myEvery = function (cb) {
    for (let i = 0; i < this.length; ++i){
        if (!cb(this[i])) {
            return false;
        }
    }
    return true;
}

function isOdd(num) {
    return num % 2 == 1;
}

function belowThreshold(num) {
    return num < 80;
}


let res1 = arr1.myEvery(isOdd);
console.log(res1);

let res2 = arr2.myEvery(isOdd);
console.log(res2);

let res3 = arr1.myEvery(belowThreshold);
console.log(res3);
