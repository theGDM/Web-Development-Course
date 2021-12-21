Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line
  for(let i = 0; i < this.length; ++i){
    newArray.push(callback(this[i]));
  }
  // Only change code above this line
  return newArray;
};

// The global variable
const s = [23, 65, 98, 5];

const new_s = s.myMap(function(item) {
  return item * 2;
});

console.log(new_s);

//help -----
// let callback = function(item) {
//   return item * 2;
// }

//filter prototype
Array.prototype.myFilter = function(callback) {
  // Only change code below this line
  let newArray = [];
  for(let i = 0; i < this.length; ++i){
    if(callback(this[i])){
      newArray.push(this[i]);
    }
  }
  // Only change code above this line
  return newArray;
};

// The global variable
const t = [23, 65, 98, 5];

const new_t = t.myFilter(function(item) {
  return item % 2 === 1;
});

console.log(new_t);