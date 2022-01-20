// We have defined a function named rangeOfNumbers with two parameters.The function should return an array of integers which begins
// with a number represented by the startNum parameter and ends with a number represented by the endNum parameter.The starting
// number will always be less than or equal to the ending number.Your function must use recursion by calling itself and not use
// loops of any kind.It should also work for cases where both startNum and endNum are the same.

//one way
function rangeOfNumbers(startNum, endNum) {
    //base case
    if (startNum == endNum) {
        let arr = [];
        arr.push(endNum);
        return arr
    }
    //faith call
    let arr = rangeOfNumbers(startNum, endNum - 1);
    //meeting expectation with faith(our work)
    arr.push(endNum);
    return arr;
};

//2nd way
function rangeOfNumbers(startNum, endNum) {
    //base case
    if (startNum == endNum) {
        let arr = [];
        arr.splice(0, 0, startNum);;
        return arr
    }
    //faith call
    let arr = rangeOfNumbers(startNum + 1, endNum);
    //meeting expectation with faith(our work)
    arr.splice(0, 0, startNum);;
    return arr;
};

console.log(rangeOfNumbers(1, 5));
console.log(rangeOfNumbers(6, 9));
console.log(rangeOfNumbers(4, 4));