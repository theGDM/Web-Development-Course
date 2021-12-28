let obj = {
    fun1: function () {
        console.log("This man is called " + this.fullName + ". His age is " + this.age);
    },

    fun2: function () {
        console.log("This man is called " + obj.fullName + ". His age is " + obj.age);
    },

    fun3: function () {
        console.log("This man is called " + fullName + ". His age is " + age);
    },


    fullName: "Summet Malik",
    age: 34
}

obj.fun1(); //this will work fine, as this is automatically passed which holds memory address of obj
obj.fun2(); //this too work
obj.fun3(); //not work
