function addTogether() {
    let sum = 0;
    if (arguments.length == 2) {
        for (let i = 0; i < arguments.length; ++i) {
            if (typeof arguments[i] == 'number') {
                sum = sum + arguments[i];
            } else {
                return undefined;
            }
        }
        return sum;
    } else if (arguments.length == 1) {
        if (typeof arguments[0] == 'number') {
            sum = sum + arguments[0];
            function addSecond() {
                if (typeof arguments[0] == 'number') {
                    return sum + arguments[0];
                } else {
                    return undefined;
                }
            }
            return addSecond;
        } else {
            return undefined;
        }
    }
}

console.log(addTogether(2, 3));
console.log(addTogether(23, 30));
console.log(addTogether(5)(7));
console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ"));
console.log(addTogether(2, "3"));
console.log(addTogether(2)([3]));
console.log(addTogether(14)(34));