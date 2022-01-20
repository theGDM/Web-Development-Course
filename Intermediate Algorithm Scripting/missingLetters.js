// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
    for (let i = 0; i < str.length - 1; ++i) {
        if (String.fromCharCode(str[i].charCodeAt() + 1) !== str[i + 1]) {
            return String.fromCharCode(str[i].charCodeAt() + 1);
        }
    }
    return undefined;
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("bcdf"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));