// Return true if the string in the first element of the array contains all of the letters of the string in the second element 
// of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first,
// ignoring case.

// The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

// Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.

function mutation(arr) {
  let count = 0;
  let j = 0;
  arr[0] = arr[0].toLowerCase(); //lowercase 1st string of arr
  arr[1] = arr[1].toLowerCase(); //lowercase 2nd string of arr

  for(let i = 0; i < arr[0].length; ++i){
    if(arr[1][j] == arr[0][i]){
      ++count;
      ++j;
      i = -1; //set the value of i to -1, so after hitting } it become 0, and for loop again starts with 0th index
    }
  }
 
  //if no of counts is equal to arr[1].length that means, every charcter of 2nd string found in 1st string
  if(count == arr[1].length){
    return true;
  }else{
    return false;
  }
}

console.log(mutation(["hello", "hey"]));
console.log(mutation(["hello", "Hello"]));
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
console.log(mutation(["Mary", "Army"]));
console.log(mutation(["Mary", "Aarmy"]));
console.log(mutation(["Alien", "line"]));
console.log(mutation(["floor", "for"]));
console.log(mutation(["hello", "neo"]));
console.log(mutation(["voodoo", "no"]));
console.log(mutation(["ate", "date"]));
console.log(mutation(["Tiger", "Zebra"]))
console.log(mutation(["Noel", "Ole"]));