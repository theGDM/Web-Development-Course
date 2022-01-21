// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

// Check the assertion tests for examples.

function uniteUnique() {
    let unionArray = [];
    for (let i = 0; i < arguments.length; ++i) {
        for (let j = 0; j < arguments[i].length; ++j) {
            if (!unionArray.includes(arguments[i][j])) {
                unionArray.push(arguments[i][j]);
            }
        }
    }
    return unionArray;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));