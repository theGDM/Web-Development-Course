function powerCreator(obj) {
    if (typeof obj.exp !== 'number') {
        console.log("exp must be a number.");
        return null;
    }
    
    let powerFun = function (base) {
        let rv = Math.pow(base, obj.exp);
        return rv;
    }

    return powerFun;
}
//stack ki bo value jo kho jayegi use under wale function ke scopes me rakh lega.
//inner function makes a closure on the varibale of outer function, that inner function uses.

let obj = {
    exp: 2
}

let squarer = powerCreator(obj);
let val = squarer(8);
console.log(val);

obj.exp = 3;
let cuber = powerCreator(obj);
let ans = cuber(8);
console.log(ans);