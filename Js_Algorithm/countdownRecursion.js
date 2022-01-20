// We have defined a function called countdown with one parameter(n).The function should use recursion to return an array
// containing the integers n through 1 based on the n parameter.If the function is called with a number less than 1, the
// function should return an empty array.For example, calling this function with n = 5 should return the array[5, 4, 3, 2, 1].
// Your function must use recursion by calling itself and must not use loops of any kind.

//one way
function countdown(n) {
    //base case
    if (n <= 0) {
        return [];
    }

    //faith
    let arr = countdown(n - 1);

    //meeting expectaion with faith(our work)
    arr.unshift(n);
    return arr;
}

//2nd way
function countdown(n) {
    //base case
    if (n <= 0) {
        return [];
    }

    //faith
    let arr = countdown(n - 1);

    //meeting expectaion with faith(our work)
    arr.splice(0, 0, n);
    return arr;
}

console.log(countdown(-1));
console.log(countdown(10));
console.log(countdown(15));