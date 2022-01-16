function binaryAgent(str) {
    let newArr = str.split(" ");
    for (let i = 0; i < newArr.length; ++i) {
        let binaryNo = parseInt(newArr[i]);
        let decimalEquivalent = binaryToDecimal(binaryNo);
        newArr[i] = String.fromCharCode(decimalEquivalent);
    }
    let decodeRes = newArr.join("");
    return decodeRes;
}

function binaryToDecimal(n) {
    let res = 0;
    let mul = 1;
    while (n > 0) {
        let rem = n % 10;
        let div = n / 10;
        n = Math.floor(div);
        res = res + rem * mul;
        mul = mul * 2;
    }
    return res;
}

let decode1 = binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
console.log(decode1);
let decode2 = binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001");
console.log(decode2);