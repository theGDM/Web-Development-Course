// Return true if the given string is a palindrome.Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the 
// same case (lower or upper case) in order to check for palindromes.

// We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

// We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

function palindrome(str) {
    let tempStr = str.replace(/[^a-zA-Z0-9]/g, ""); //it do actually recursively
    let lowerCaseStr = tempStr.toLowerCase();
    let mid = Math.floor(lowerCaseStr.length / 2); // (7/2) = 3.5 = 3
    for (let i = 0, j = lowerCaseStr.length - 1; i <= mid && j >= mid; ++i, --j) {
        // console.log(lowerCaseStr[i] + "-" + i + " " + lowerCaseStr[j] + "-" + j);
        if (lowerCaseStr[i] != lowerCaseStr[j]) {
            return false;
        }
    }
    return true;
}

console.log(palindrome("eye"));
console.log(palindrome("_eye"));
console.log(palindrome("race car"));
console.log(palindrome("not a palindrome"));
console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("never odd or even"));
console.log(palindrome("nope"));
console.log(palindrome("almostomla"));
console.log(palindrome("My age is 0, 0 si ega ym."));
console.log(palindrome("1 eye for of 1 eye."));
console.log(palindrome("0_0 (: /-\ :) 0-0"));
console.log(palindrome("five|\_/|four"));
console.log(palindrome("2_A3*3#A2"));
console.log(palindrome("2A3*3a2"));

