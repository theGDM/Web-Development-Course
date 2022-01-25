function whatIsInAName(collection, source) {
    const arr = [];
    let count;
    for (let i = 0; i < collection.length; ++i) {
        count = 0;
        for (let propSource in source) {
            for (let collectionObjProp in collection[i]) {
                //first we would verify keys are same, and if then we move to check whether values of that
                //keys are same are not.
                if (source[propSource] === collection[i][collectionObjProp] && propSource === collectionObjProp) {
                    ++count;
                }
            }
        }
        // console.log(count);
        if (count == Object.keys(source).length) {
            arr.push(collection[i]);
        }
    }
    return arr;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
console.log(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }));
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }));
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat": 2 }], { "apple": 1, "bat": 2 }));
console.log(whatIsInAName([{ "a": 1, "b": 2, "c": 3 }], { "a": 1, "b": 9999, "c": 3 }));