// //one way
// function whatIsInAName(collection, source) {
//     //array of all the keys of source object
//     let srcKeys = Object.keys(source);
//     //iterationg over collection object
//     //filter the collection
//     let resArray = collection.filter(function (currObj) {
//         for (let i = 0; i < srcKeys.length; ++i) {
//             if (!currObj.hasOwnProperty(srcKeys[i]) || currObj[srcKeys[i]] != source[srcKeys[i]]) {
//                 return false;
//             }
//         }
//         return true;
//     });
//     return resArray;
// }

//second way
function whatIsInAName(collection, source) {
    //array of all the keys of source object
    let srcKeys = Object.keys(source);
    //iterationg over collection object
    //filter the collection
    let resArray = collection.filter(function (currObj) {
        let tempArr = srcKeys.every(function (key) {
            if (currObj.hasOwnProperty(key) && currObj[key] === source[key]) {
                return true;
            }
        });
        return tempArr;
    });
    return resArray;
}


console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
console.log(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }));
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }));
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat": 2 }], { "apple": 1, "bat": 2 }));
console.log(whatIsInAName([{ "a": 1, "b": 2, "c": 3 }], { "a": 1, "b": 9999, "c": 3 }));