// function powerCreator(exp) {
//     let fun = function (base) {
//         let rv = Math.pow(base, exp);
//         return rv;
//     }

//     return fun;
// }

// let squarer = powerCreator(2);
// let val = squarer(8);
// console.log(val);

//how can you change squarer to cuber without calling powerCreator again
//you can change powerCreator

//change poerCreator
//to make it a producer of such functions.
//whose exponent we can change on a later date.

function powerCreator(obj) {
    let fun = function (base) {
        let rv = Math.pow(base, obj.exp);
        return rv;
    }

    return fun;
}

let o1 = {
    exp : 2
}

let squarer = powerCreator(o1);
let val = squarer(8);
console.log(val);

o1.exp = 3;
let val2 = squarer(7);
console.log(val2);