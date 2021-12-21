let arr1 = [5, 7, 8, 12, 13, 14, 22, 16, 25, 67, 71];
let arr2 = [2, 10, 4, 6, 10, 12];

function isOdd(num) {
    return num % 2 == 1;
}

Array.prototype.mySome = function(cb){
    for (let i = 0; i < this.length; ++i){
        if (cb(this[i])) {
            return true;
        }
    }
    return false;
}

function isOdd(num) {
    return num % 2 == 1;
}

function belowThreshold(num) {
    return num < 3;
}

let res1 = arr1.mySome(isOdd);
console.log(res1);

let res2 = arr2.mySome(isOdd);
console.log(res2);

let res3 = arr1.mySome(belowThreshold);
console.log(res3);
