// reduce -> Hof
// firstparameter of reduce hof is storage, which stores result, it actually have the first element of
// array initially, and second parameter holds the 2nd element of array.
let arr1 = [1, 2, 3, 4, 5];

// initially, storage = 1, currElement = 2
//variation 1
function product(storage, currElement) {
    console.log(`storage - ${storage}, currElement - ${currElement}`);
    return storage * currElement;
}

function summation(storage, currElement) {
    return storage + currElement;
}

let finalProduct = arr1.reduce(product);
console.log(finalProduct);

let finalSum = arr1.reduce(summation);
console.log(finalSum);

//variation no - 2(provided initial value) storage  = 10(provided value)
let finalProduct2 = arr1.reduce(product, 10);
console.log(finalProduct2);

