// implementing our own forEach method
Array.prototype.myForEach = function (cb) {
    for (let i = 0; i < this.length; ++i){
        cb(this[i]);
    }
}

// global arrays
const array1 = [2, 3, 4, 5, 6];
const array2 = ['a', 'b', 'c', 'd', 'e'];

function square(element) {
    console.log(element * element);
}

function nextChar(ch) {
    let nextChar = String.fromCharCode(ch.charCodeAt(0) + 1);
    console.log(nextChar)
}

array1.myForEach(square);
array2.myForEach(nextChar);