function fun() {
    let a = 10; //now it will be created in stack memory/or it is local variable
    console.log(a);
}

fun(); //automatically this is window object, this points to window object,
console.log(a);