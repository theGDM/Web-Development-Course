Array.prototype.myFilter = function (cb) {
    let newArray = [];
    for (let i = 0;i < this.length; ++i){
        if (cb(this[i])) {
            newArray.push(this[i]);
        }
    }
    return newArray;
}

function isOdd(num) {
    return num % 2 == 1;
}


let arr1 = [5, 7, 8, 12, 13, 14, 22, 16, 25, 67, 71];
let arr2 = [1, 9, 8, 13, 14, 21, 16, 25, 69, 78];

let oddArray1 = arr1.myFilter(isOdd);
console.log(oddArray1);

let oddArray2 = arr2.myFilter(isOdd);
console.log(oddArray2);