function outer(first) {
    console.log("Inside outer");
    return function inner(second) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           console.log("Inside inner");
        return first * second;
    }
}

var rVal = outer(2)
console.log("Before calling rVal that contains inner");
console.log(rVal);
var ans = rVal(4);
console.log(ans);