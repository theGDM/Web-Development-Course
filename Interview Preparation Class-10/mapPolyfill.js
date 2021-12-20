// map implement -> library implementation(How map works behind the scene)
// take array and function as argument
// return a new array

let arr = [5, 7, 19, 12, 13, 14, 91, 16, 25, 67, 71];

function square(x) {
    return x * x;
}

function cube(x) {
    return x * x * x;
}

function myMap(arr, cb) {
    let newArray = [];
    for (let i = 0; i < arr.length; ++i){
        let ans = cb(arr[i]);
        newArray.push(ans);
    }
    return newArray;
}

let newSquareArray = myMap(arr, square);
console.log(newSquareArray);

let newCubeArray = myMap(arr, cube);
console.log(newCubeArray);