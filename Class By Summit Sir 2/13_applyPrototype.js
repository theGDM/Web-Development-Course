Function.prototype.myApply = function () {
    let orgFun = this;
    let args = Array.from(arguments);
    let thisForCall = args[0];
    let params = args[1];

    // orgFun.apply(thisForCall, params);
    // without using apply
    thisForCall.fun = orgFun;
    thisForCall.fun(...params);
    delete thisForCall.fun;
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

obj1.fun1.myApply(obj2, ["Krishna", "Balram", "Radha"]);