function fun() {
    a = 10; //will become global variable as this line is reached, so it will be formed in window object
    console.log(a);
}

fun(); //automatically this is window object, this points to window object,
console.log(a);