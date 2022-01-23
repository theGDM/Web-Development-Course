function rot13(str) {
    let tempArr = str.split("");
    for (let i = 0; i < tempArr.length; ++i) {
        if (tempArr[i] >= 'A' && tempArr[i] <= 'M') {
            let idx = str.charCodeAt(i) + 13;
            tempArr[i] = String.fromCharCode(idx);
        } else if (tempArr[i] >= 'N' && tempArr[i] <= 'Z') {
            let idx = str.charCodeAt(i) - 13;
            tempArr[i] = String.fromCharCode(idx);
        }
    }
    return tempArr.join("");
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));