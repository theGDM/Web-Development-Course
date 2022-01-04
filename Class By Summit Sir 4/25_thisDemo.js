a = 100;
b = 200;
c = 300;

function fun() {
    console.log(this.a + " " + this.b + " " + this.c + " ");
}

let obj = {
    a: 10,
    b: 20,
    c: 30,
    fun1: function () {
        console.log(this.a + " " + this.b + " " + this.c + " ");
    },
    fun2: fun,
    fun3: () => { //don't use this in arrow function
        console.log(this.a + " " + this.b + " " + this.c + " ");
    }
}

let o2 = {
    a: 1000,
    b: 2000,
    c: 3000
}

obj.fun1(); ////this = obj
fun(); //this = window/global
obj.fun2(); //this = obj
obj.fun3(); //this not global, nor obj

obj.fun1.call(o2);
fun.call(o2); //this = window, is now replaced by o2
obj.fun2.call(o2);
obj.fun3.call(o2);//this = undefined
//don't use this in arrow function and also don't use call, apply and bind, also don't use arguments, also not as a constructor.