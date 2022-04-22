//creating own promises
const myPromise = new Promise(function (resolve, reject) { //resolve and reject are methods
    let a = 5;
    let b = 5;
    if (a == b) {
        resolve("Yes, a and b are equal");
    } else {
        reject("a and b are not equal");
    }
});

myPromise.then(function (data) {//then method is linked to resolve method, since a and b are equal that means promise is resolved,
    console.log("This is coming from resolve method " + data); //so whatever msg is passed in the resolve method, will come as data in then method
});

myPromise.catch(function (err) {//catch method is linked to reject method, so when a and b are not equal that means promise is rejected,
    console.log("This is coming from resolve method " + err);//so whatever msg is passed in the reject method, will come as err in catch method
})