Function.prototype.myBind = function () {
    let orgFun = this; //11k
    let argsArray = Array.from(arguments);
    let newThis = argsArray[0]; //12k
    let newParams = argsArray.slice(1);
    // myBind wale ke bo variables, myFun ke closure me store ho jayenge jo myFun use karne wala hoga or jo uski definition me 
    // present honge
    let myFun = function () {
        let moreParams = Array.from(arguments);
        let totalParams = newParams.concat(moreParams);
        orgFun.apply(newThis, totalParams);
    }

    return myFun;
}

//fun1 ke uper bind call hua hai, to this me fun1 aayega

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

let boundFn = obj1.fun1.myBind(obj2, "Krishna", "Balram", "Radha");
boundFn("Mahesh", "Suresh");