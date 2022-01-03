function powerCreator(exp) {
    if (typeof exp !== 'number') {
        console.log("exp must be a number.");
        return null;
    }
    
    let powerFun = function (base) {
        let rv = Math.pow(base, exp);
        return rv;
    }

    return powerFun;
}
//stack ki bo value jo kho jayegi use under wale function ke scopes me rakh lega.
//inner function makes a closure on the varibale of outer function, that inner function uses.
let squarer = powerCreator(2);
let val = squarer(8);
console.log(val);