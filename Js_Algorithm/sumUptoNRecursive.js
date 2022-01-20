// Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.

function sum(arr, n) {
    //base case
    if (n == 0) {
        return 0;
    }
    //faith
    let currSum = sum(arr, n - 1);
    //meeting expectation with faith(our work)
    return currSum + arr[n - 1];
}

console.log(sum([1], 0));
console.log(sum([2, 3, 4], 1));
console.log(sum([2, 3, 4, 5, 6, 7], 4));
console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13], 9));