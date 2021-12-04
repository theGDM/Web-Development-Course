// Return the entire nested array which have the largest element in whole array

function largestOfFour(arr) {
  let max = Number.MIN_VALUE;
  let pos = 0;
  for(let i = 0; i < arr.length; ++i){
    for(let j = 0; j < arr[i].length; ++j){
      if(arr[i][j] > max){
        max = arr[i][j];
        pos = i;
      }
    }
  }
  let res = arr.splice(pos,1);//it will give a nested array with only one entry
  console.log(res[0]);
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));
console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));
