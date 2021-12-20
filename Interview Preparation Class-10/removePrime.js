let arr = [5, 7, 19, 12, 13, 14, 91, 16, 25, 67, 71];
// can not use extra space
let flag;
for (let i = 0; i < arr.length; ++i){
    let arrCurEle = arr[i];
    //checking if prime or not
    flag = 1;
    for (let j = 2; j * j <= arrCurEle; ++j){
        if (arrCurEle % j == 0) {
            flag = 0;
            break;
        }
    }
    if (flag) {
        arr.splice(i, 1);
        --i;
    }
}

console.log(arr);

//using backward loop
let arr1 = [5, 7, 19, 12, 13, 14, 91, 16, 25, 67, 71];
// can not use extra space
let flag1;
for (let i = arr1.length; i >= 0; --i){
    let arrCurEle = arr1[i];
    //checking if prime or not
    flag1 = 1;
    for (let j = 2; j * j <= arrCurEle; ++j){
        if (arrCurEle % j == 0) {
            flag1 = 0;
            break;
        }
    }
    if (flag1) {
        arr1.splice(i, 1);
    }
}

console.log(arr);