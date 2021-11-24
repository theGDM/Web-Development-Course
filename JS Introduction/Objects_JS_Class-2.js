//Objects 
//Key value pair
//to declare an object
let object = {}//initialization of empty objects

let cap = {
    firstName: "Steve",//firstName is a key and Steve is value given to it
    lastName: "Rogers",
    friends: ['Bucky', 'Tony Stark', 'Dr. Banner'],
    isAvenger: true,
    age: 150,
    isMarried: false,
    address: {
        state: 'New York',
        city: 'Manhatten'
    },
    sayHi: function fn() {
        console.log('Cap says Hi')
    }
}

console.log(cap);

//Access of objects properties - Using dot operator
console.log(cap.firstName);
console.log(cap.friends);
console.log(cap.friends[1]);

// - Using bracket notation
console.log(cap['age']);
console.log("------------------------");
console.log(cap['friends']);
console.log(cap['friends'][1]);//Important

//function calling declared as key value pair inside the object
cap.sayHi();

//update object
cap.isAvenger = false;
console.log(cap);

//updating object inside object(Nesting Object)
cap.address.state = "New York State";
console.log(cap);

//create something inside an object
cap.movies = ['Captain America', 'Age of Ultron', 'Endgame'];
console.log(cap);

//delete a property
delete cap.isMarried;
console.log(cap);

//Special loop (For in loop) //Specifically for objects
for (let key in cap) {//return every key of object cap
    console.log("Key ->", key, "Value ->", cap[key]);
}

for (let key in cap) {//return every keys of object cap
    console.log("Key ->", key, "Value ->", cap.key);//wrong: we can not use dot operation in for in loop, we will get undefine value
}



