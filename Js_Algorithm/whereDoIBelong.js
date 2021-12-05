// Return the lowest index at which a value(second argument) should be inserted into an array(first argument) once it has been
// sorted.The returned value should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

// Likewise, getIndexToIns([20, 3, 5], 19) should return 2 because once the array has been sorted it will look like[3, 5, 20] and
// 19 is less than 20(index 2) and greater than 5(index 1).

function getIndexToIns(arr, num) {
  //to sort array first
  arr.sort(function(a, b){
    return a - b;
  });
    
  if(num <= arr[0] || arr.length == 0) return 0;
  if (num > arr[arr.length - 1]) return arr.length;
    
  for(let i = 0; i < arr.length - 1; ++i){
    if(num > arr[i] && num <= arr[i + 1]){
      return i + 1;
    }
  }
}

//2nd way
// function getIndexToIns(arr, num) {
//   return arr
//     .concat(num)
//     .sort((a, b) => a - b)
//     .indexOf(num);
// }

//1. We use method - chaining to invoke one method after another to solve the problem
// in a single line.First we create a new array with the contents of arr and num by 
// using the concat() method
//2. Then we use sort() with the callback arrow function (a, b) => return a - b to sort the
// numbers in ascending order
//3. Lastly we return the position or index of num in the array with the indexOf() method

//3rd way
// function getIndexToIns(arr, num) {
//   arr.sort((a, b) => a - b);

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= num)
//       return i;
//   }

//   return arr.length;
// }

//1. First I sort the array using.sort(callbackFunction) to sort it by lowest to highest,
// from left to right.
//2. Then I use a for loop to compare the items in the array starting from the smallest one. 
// When an item on the array is greater than the number we are comparing against, then we return the index.

console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([3, 10, 5], 3));
console.log(getIndexToIns([5, 3, 20, 3], 5));
console.log(getIndexToIns([2, 20, 10], 19));
console.log(getIndexToIns([2, 5, 10], 15));
console.log(getIndexToIns([], 1));

