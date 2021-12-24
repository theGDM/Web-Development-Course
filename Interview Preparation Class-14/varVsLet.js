//reassign
//function scope,redeclare, you can access variable before even declaring it (X)
// console.log(a);//accessing before declaring
// var a;
// a = 10;
// console.log(a);
// var a; //this is redeclaration
// a = 20;
// console.log(a);

//let
//block scope, redeclare is illegle, can not access before declaring
//Temporal dead zone -> you can not access a let variable before declaration
// console.log(a); //Cannot access 'a' before initialization/ declartion
let a;
console.log(a); // now we can access variable , because a has been declared
a = 30;
console.log(a);