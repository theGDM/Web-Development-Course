// Description:
// Find output of the following

//memory allocation takes place first and then code executes
//let say it get 6k memory location in heap memory area
//f = 6k
function f() { 
    console.log(arguments);
}

//let say it get 8k memory location in heap memory area
//f = 8k
function f(a, b) { 
    return a + b;
}

//so in memory stack the f will hold the 10k memory address, and call the function f at line no. 17
console.log(f(2, 3, 4, 5)); //14

//let say it get 10k memory location in heap memory area
//f = 10k (final)
function f(x, y, z, t) {  
    return x + y + z + t;
}

//so in memory stack the f will hold the 10k memory address, and call the function f at line no. 17
console.log(f(2, 3, 4, 5)); //14