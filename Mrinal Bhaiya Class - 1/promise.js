const fs = require('fs');

console.log("before");

// fs.readFile(`${__dirname}/f1.txt`, function (err, data) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data.toString());
//     }
// });

// console.log(fs.promises.readFile);
let promise = fs.promises.readFile(`${__dirname}/f1.txt`);

console.log(promise); //pending state

// setTimeout(() => {
//     console.log(promise);
// }, 5000);

promise.then(function (data) {//if promise is fulfilled then we get the data 
    console.log(data.toString());
})//fulfilled or resolved

promise.catch(function (err) {//catch method is used to catch error and show the error
    console.log("Error", err);
})//unfulfilled or rejected

console.log("after");

//jaise hi promise ka kaam khatam hoga, waise hi then method usse data lekar print kar dega, to isse hamara promise fulfilled ho gaya.
//catch method wait for error, aur jaise hi promise ne koi error diya, catch method us error ko pick karke, error show kar dega, means
//our promise is unfulfilled