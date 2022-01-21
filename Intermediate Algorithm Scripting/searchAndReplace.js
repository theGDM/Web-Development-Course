// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing(before).
// Third argument is what you will be replacing the second argument with (after).
// Note: Preserve the case of the first character in the original word when you are replacing it.
// For example if you mean to replace the word Book with the word dog, it should be replaced as Dog

function myReplace(str, before, after) {
    if ((before[0] >= 'A' && before[0] <= 'Z') && (after[0] >= 'a' && after[0] <= 'z')) {
        after = after[0].toUpperCase() + after.substr(1);
    } else if ((before[0] >= 'a' && before[0] <= 'z') && (after[0] >= 'A' && after[0] <= 'Z')) {
        after = after[0].toLowerCase() + after.substr(1);
    }
    let newStr = str.replace(before, after);
    return newStr;
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log(myReplace("I think we should look up there", "up", "Down"));
console.log(myReplace("This has a spellngi error", "spellngi", "spelling"));
console.log(myReplace("His name is Tom", "Tom", "john"));
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"));