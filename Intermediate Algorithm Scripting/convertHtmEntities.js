// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
    let tempArr = str.split("");
    for (let i = 0; i < tempArr.length; ++i) {
        switch (tempArr[i]) {
            case "&": tempArr[i] = "&amp;";
                break;
            case "<": tempArr[i] = "&lt;";
                break;
            case ">": tempArr[i] = "&gt;";
                break;
            case "'": tempArr[i] = "&apos;";
                break;
            case '"': tempArr[i] = "&quot;";
                break;
        }
    }
    let resStr = tempArr.join("");
    return resStr;
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
console.log(convertHTML("Sixty > twelve"));
console.log(convertHTML('Stuff in "quotation marks"'));
console.log(convertHTML("Schindler's List"));
console.log(convertHTML("<>"));
console.log(convertHTML("abc"));