// You will be provided with an initial array(the first argument in the destroyer function), followed by one or more arguments. 
// Remove all elements from the initial array that are of the same value as these arguments.

// Note: You have to use the arguments object.

function destroyer(arr) {
  for(let i = 1;i < arguments.length; ++i){
    let currArgument = arguments[i];
    for(let i = 0; i < arr.length; ++i){
      if(arr[i] == currArgument){
        arr.splice(i,1);
        // console.log(arr);
        --i;
      }
    }
  }
  return arr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
console.log(destroyer([2, 3, 2, 3], 2, 3));
console.log(destroyer(["tree", "hamburger", 53], "tree", 53));
console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"));