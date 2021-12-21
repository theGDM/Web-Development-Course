// prototype is a property which is available on Array Parent Class
// to add some functionality on every array, we add that on prototype
// these all are declared on top
// this -> is a predefined keyword that refers to the entity that calls the method
Array.prototype.sayHello = function () {
    console.log("Hello");
}

//jo bhi array variable is method ko call karega wo 'this' ban jayega or us variable ka
//address this me store ho jayega
Array.prototype.sum = function (array) { 
    let sum = 0;
    for (let i = 0; i < this.length; ++i){
        sum = sum + this[i];
    }  
    console.log(sum);
}

Array.prototype.product = function (array) {
    let prod = 1;
    for (let i = 0; i < this.length; ++i){
        prod = prod * this[i];
    }
    console.log(prod);
}

let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];

//usinh sayHello method on array
arr1.sayHello();
arr2.sayHello();

//using sum method on array
arr1.sum();
arr2.sum();

//using product method on array
arr1.product();
arr2.product();