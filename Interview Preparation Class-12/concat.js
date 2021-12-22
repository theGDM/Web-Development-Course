//concat -> returns a new concatenated array, without modifying the orginal ones.
let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6];
let arr3 = [7, 8, 9];

let res1 = arr1.concat(arr2);
console.log(res1);

let res2 = arr1.concat(arr2, arr3);
console.log(res2);

let res3 = arr3.concat(arr3, arr2);
console.log(res3);