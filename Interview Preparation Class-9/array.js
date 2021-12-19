let array = [1, 2, 3, 4, 5]; //not defined size
//print
console.log(array);

//length
console.log(array.length);

//loop
for (let i = 0; i < array.length; ++i){
    //get value
    console.log(array[i]);
}

//removeLast
array.pop();
//removeFirst
array.shift();

console.log(array);

//addLast
array.push(10, 20, 30);
//addFirst
array.unshift(40, 50);

console.log(array);

//part of original array(original array not affected);
//first parameter is starting index
//second parameter is ending index
let copyOfPartOfThatArray = array.slice(1, 3); //last index not included
console.log(copyOfPartOfThatArray);

//splice function affects the original array
//first parameter is starting index
//second parameter is length of element 
let partOforiginalArray = array.splice(2, 4);
console.log(partOforiginalArray);
//original array is changed permanently
console.log(array);

//if element is present then gives, true/false
let isPressent = array.includes(50);
let indexOfele = array.indexOf(20); //gives index of element
console.log(isPressent);
console.log(indexOfele);