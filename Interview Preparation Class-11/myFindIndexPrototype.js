let arr1 = [5, 7, 8, 12, 13, 14, 22, 16, 25, 67, 71];
let arr2 = [2, 10, 4, 6, 5, 12];
let arr3 = [10, 2, 4, 8];

Array.prototype.myFindIndex = function(cb) {
    for (let i = 0; i < this.length; ++i){
        if (cb(this[i])) {
            return i;
        }
    }
    return -1;
}

function isLargeNumber(num) {
    return num > 25;
}

function isOdd(num) {
    return num % 2 == 1;
}


console.log(arr1.myFindIndex(isLargeNumber));
console.log(arr2.myFindIndex(isOdd));
console.log(arr3.myFindIndex(isOdd));