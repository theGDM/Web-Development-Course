Function.prototype.myCall = function () {
    let orgFun = this;
    //this can not be on left side for assignment
    let args = Array.from(arguments);
    let thisForCall = args[0];
    let params = args.slice(1);

    // orgFun.apply(thisForCall, params);
    // without using apply
    thisForCall.fun = orgFun;
    thisForCall.fun(...params);
    delete thisForCall.fun;

    // arr = [10, 20, 30, 40, 50]
    // ...arr = 10, 20, 30, 40, 50
}

let obj1 = {
    fun1: function (frnd1, frnd2) {
        console.log("This man is called " + this.fullName + ". His age is " + this.age);
        console.log(this.fullName + " says hello to " + frnd1 + ".");
        console.log(this.fullName + " says hello to " + frnd2 + ".");
        console.log(arguments);
    },

    fullName: "Summet Malik",
    age: 34
}

let obj2 = {
    fullName: "Sudama",
    age: 21
};

obj1.fun1.mycall(obj2, "Krishna", "Balram", "Radha");