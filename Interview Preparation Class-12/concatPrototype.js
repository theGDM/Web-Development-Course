let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7];
let arr3 = [8, 9];

Array.prototype.myConcate = function (...arrays) {
    console.log(arrays);
    let newArray = [...this];
    for (let i = 0; i < arrays.length; ++i){
        if (typeof arrays[i] == "object") {
            newArray.push(...arrays[i]);
        }
    }
    return newArray;
}

console.log(arr1.myConcate(arr2, arr3));
console.log(arr2.myConcate(arr1, arr3));
console.log(arr1.myConcate(arr1, arr3));

// original arrays didn't changed
console.log(arr1);
console.log(arr2);
console.log(arr3);