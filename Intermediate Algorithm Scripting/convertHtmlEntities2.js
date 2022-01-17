// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
//using map HOF and using object
const entitiCodeObject = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&apos;",
    '"': "&quot;"
};

// function convertHTML(str) {
//     let tempArr = str.split("");
//     let newArr = tempArr.map(function (ch) {
//         for (let key in entitiCodeObject) {
//             if (key === ch) {
//                 return entitiCodeObject[key];
//             }
//         }
//         return ch;
//     });
//     return newArr.join("");
// }

// optimized code of above
// function convertHTML(str) {
//     let tempArr = str.split("");
//     let newArr = tempArr.map(function (ch) {
//         if (entitiCodeObject[ch]) {
//             return entitiCodeObject[ch];
//         } else {
//             return ch;
//         }
//     });
//     return newArr.join("");
// }

// one liner solution
function convertHTML(str) {
    //Use map function to return a filtered str with all entities changed automatically.
    return str.split("").map(entity => entitiCodeObject[entity] || entity).join("");
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
console.log(convertHTML("Sixty > twelve"));
console.log(convertHTML('Stuff in "quotation marks"'));
console.log(convertHTML("Schindler's List"));
console.log(convertHTML("<>"));
console.log(convertHTML("abc"));