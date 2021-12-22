let arr = [2, 3, 4, 5, 6];

function myReduce(arr, cb, initialStorage) {
    let storage, start;

    if (initialStorage) {
        storage = initialStorage;
        start = 0;
    } else {
        storage = arr[0];
        start = 1;
    }

    for (let i = start; i < arr.length; ++i){
        let currElement = arr[i];
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

let finalProduct = myReduce(arr, product);
console.log(finalProduct);

let finalSum = myReduce(arr, summation);
console.log(finalSum);

let finalProduct2 = myReduce(arr, product, 10); //with initial product = 10
console.log(finalProduct2);

let finalSum2 = myReduce(arr, summation, 100); // with initial sum = 100
console.log(finalSum2);
