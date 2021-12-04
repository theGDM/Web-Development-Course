// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the.endsWith() method, which was introduced in ES2015.But for the purpose of this challenge,
// we would like you to use one of the JavaScript substring methods instead.

function confirmEnding(str, target) {
    let targetLength = target.length;//length of target string provided
    let strEnd = str.substr(str.length - targetLength); //extracting substring of str, of length equal to target str length.
    if (strEnd === target) {
        return true;
    } else {
        return false;
    }
}

console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Congratulation", "on"));
console.log(confirmEnding("Connor", "n"));
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));
console.log(confirmEnding("He has to give me a new name", "name"));
console.log(confirmEnding("Open sesame", "same"));
console.log(confirmEnding("Open sesame", "sage"));
console.log(confirmEnding("Open sesame", "game"));
console.log(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"));
console.log(confirmEnding("Abstraction", "action"));

