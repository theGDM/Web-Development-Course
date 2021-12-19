let array1 = [1, 4, 3, 300, 6, 5];
let array2 = [1, 3, 100, 200, 400];
//you are given two arrays, arrays have unique element
//create union of these two arrays, without using extra space.
let flag;
for (let i = 0; i < array1.length; ++i){
    let temp = array1[i];
    flag = 0;
    for (let j = 0; j < array2.length; ++j){
        if (temp == array2[j]) {
            flag = 1;
            break;
        }
    }
    if (flag != 1) {
        array2.push(temp);
    }
}

console.log(array2);

//using includes property
let array3 = [1, 4, 3, 300, 6, 5];
let array4 = [1, 3, 100, 200, 400];

for (let i = 0; i < array3.length; ++i){
    let cElement = array3[i];
    let isPresent = array4.includes(cElement);
    if (!isPresent) {
        array4.push(cElement);
    }   
}

console.log(array4);