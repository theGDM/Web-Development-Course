let obj = {
    fun1: function (frnd1, frnd2) {
        console.log("This man is called " + this.fullName + ". His age is " + this.age);
        console.log(this.fullName + " says hello to " + frnd1 + ".");
        console.log(this.fullName + " says hello to " + frnd2 + ".");
        console.log(arguments);
    },

    fullName: "Summet Malik",
    age: 34
}

obj.fun1("Navdeep", "Vikas");

obj.fun1.call({ //effectively i override this (i adjusted by myself)
    fullName: "Neha",
    age: 33
}, "Mehwish", "Shailja");
//call is function , it is available on all functions. It can be used to call those functions.
//the use case is, if you want to override the defualt this.
//this object is not modified, only instead of passing this
//can we used for array too

let obj2 = {
    fullName: "Sudama",
    age: 21
};

//Practical use - To alter default this behaviour
//matlab functionality mujhe obj ki use karni ho lekin data mujhe kisi dusre object ka use karna ho
obj.fun1.call(obj2, "Krishna", "Balram"); //.call is used to change this
obj.fun1.apply(obj2, ["Krishna", "Balram", "Lakhan"]);

//apply is similar tomcall. It just uses an array to pass arguments

//bind is dis-similar. It doesn't make a call. It gives you a new function to call.
let boundFunction = obj.fun1.bind(obj2, "Mehwish", "Shailja", "Supriya");
//bound stores the function for future call
boundFunction("Sumeet", "Rajneesh");

