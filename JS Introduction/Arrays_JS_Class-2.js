//Arrays - ordered collection of same or different datatypes
//creation of array
let arr = [1,2,3,4,5] //Array is initialized with square brackets
console.log(arr);

//in JS we can put any kind of data in the array
let mixArray = [1, 2, 3, undefined, null, 'Hello']; //totally valid array
console.log(mixArray);

//Array Methods
let cars = ["BMW", "Mercedes", "Porche"];
console.log(cars);

//replace - replace an element in array
cars[1] = "Bentley";
console.log(cars);

//Add a new element to an array
//Easygoing language - JS , no static behaviour of array
cars[3] = 'Mercedes';
console.log(cars);

//length of an array
console.log(cars.length);

//Array Manipulation Methods - at the end of array
//Pop method (inbuilt method) - it takes out element from the end of the array
let poppedCar = cars.pop();
console.log("Popped Element:", poppedCar);
console.log("Array after pop:", cars);

//push - it adds an element at the end of an array
cars.push("Ducati");
console.log("Array after push:", cars);

//Array Manipulation Methods - at the Start of array
//shift - it removes element from the starting of array
let shiftedCar = cars.shift();
console.log("ShiftedCar Element:", shiftedCar);
console.log("Array after shift:", cars);

//unshift - it adds an element at the start of an array
cars.unshift("Toyota");
console.log("Array after unshift:", cars);