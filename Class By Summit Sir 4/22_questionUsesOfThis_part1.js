// console.log(a);

function fun() {
    this.a = 10; //we not written let, so it is not local variable but global variable on window object
    console.log(a);
}

fun(); //this points to window object
console.log(a);