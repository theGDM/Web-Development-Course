let arr = [2, 3, 4, 5, 6];

Array.prototype.myReduce = function (cb, initialStorage) {
    let storage, start;

    if (initialStorage) {
        storage = initialStorage;
        start = 0;
    } else {
        storage = this[0];
        start = 1;
    }

    for (let i = start; i < this.length; ++i){
        let currElement = this[i];
        storage = cb(storage, currElement);
    }
    return storage;
}

function product(storage, currElement) {
    return storage * currElement;
}

function summation(storage, currElement) {
    return storage + currElement;
}

let finalProduct = arr.myReduce(product);
console.log(finalProduct);

let finalSum = arr.myReduce(summation);
console.log(finalSum);

let finalProduct2 = arr.myReduce(product, 10); //with initial product = 10
console.log(finalProduct2);

let finalSum2 = arr.myReduce(summation, 100); // with initial sum = 100
console.log(finalSum2);
