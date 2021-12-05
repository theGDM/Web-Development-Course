// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'.This means 
// that given an element x, the 'truth test' is passed if func(x) is true.If no element passes the test, return undefined.

function findElement(arr, func) {
  let num = 0;
  for(let i = 0; i < arr.length;++i){
    if(func(arr[i])){
      return arr[i];
    }
  }
  return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

// inside findElement function callstack
// let arr  = [1, 2, 3, 4];
// let func = num => num % 2 === 0;
// if array have any even entry return that entry, and stop execution of findElement function
// if array don't have any even entry, then return undefined
console.log(findElement([1, 3, 5, 8, 9, 10], function (num) { return num % 2 === 0; }));
console.log(findElement([1, 3, 5, 9], function (num) { return num % 2 === 0; }));