let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7];
let arr3 = [8, 9];

function concatenate(...arrays) {
    let newArray = [];
    for (let i = 0; i < arrays.length; ++i){
        if (typeof arrays[i] == "object") {
            newArray.push(...arrays[i]);
        } else {
            return;
        }
    }
    return newArray;
}

console.log(concatenate(arr1, arr2, arr3));