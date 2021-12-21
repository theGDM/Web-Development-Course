// for each -> it does task for every element of array
const array1 = ['a', 'b', 'c'];
const array2 = [2, 3, 4, 5, 6];

function printElement(element) {
    console.log(element);
}

array1.forEach(printElement);
array2.forEach(printElement);

// every -> if every elements of array satisfy certain condition, then returns boolean value true/false
const array3 = [1, 30, 39, 29, 10, 13];

function isBelowThreshold(currElement) {
    return currElement < 40;
}

let res = array3.every(isBelowThreshold);
console.log(res);

// some -> if atleast one element of array satisfy certain condition, then returns boolean value true/false
const array4 = [1, 30, 39, 29, 10, 13];
const array5 = [1, 3, 9, 29, 11, 13];

function isEven(currElement) {
    return currElement % 2 == 0;
}

let ans1 = array4.some(isEven);
console.log(ans1);

let ans2 = array5.some(isEven);
console.log(ans2);

// the findIndex() method returns the index of the first element in the array that
// satisfies the provided testing function. Otherwise return -1
function isLargeNumber(num) {
    return num > 13;
}

let res1 = array5.findIndex(isLargeNumber);
console.log(res1);

let res2 = array4.findIndex(isLargeNumber);
console.log(res2);