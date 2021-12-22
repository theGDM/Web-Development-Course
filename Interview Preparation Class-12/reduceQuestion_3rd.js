// Complete the code for the squareList function using any combination of map(), filter(), and reduce().The function should 
// return a new array containing the squares of only the positive integers(decimal numbers are not integers) when an array 
// of real numbers is passed to it.An example of an array of real numbers is[-3, 4.8, 5, 3, -3.2].

const squareList = arr => {
  // Only change code below this line
  let positiveRealNums = arr.filter(getPositiveRealNum);
  let getInteger = positiveRealNums.filter(getIntOnly);
  let getSquared = getInteger.map(getSquare);
  return getSquared;
  // Only change code above this line
};

function getPositiveRealNum(num){
  if(num >= 0){
    return num;
  }
}

function getIntOnly(num){
  if(Number.isInteger(num)){
    return num;
  }
}

function getSquare(num){
  return num * num;
}

console.log(squareList([-3, 4.8, 5, 3, -3.2]));
console.log(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]));
console.log(squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]));
