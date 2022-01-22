// Flatten a nested array.You must account for varying levels of nesting.

function steamrollArray(arr) {
    let convertToStr = arr.toString(); // "1,2,,3" => "1,2,3"
    let removeDoubleComma = convertToStr.replace(",,", ","); // ['1','2','3']
    let tempArr = removeDoubleComma.split(",");
    let resArr = tempArr.map(function (ch) {
        if (ch == "[object Object]") {
            // bring back empty objects if there any
            return {};
        } else if (isNaN(ch)) {
            // isNaN will results true if we get string, other wise false
            // if we get numeric value
            return ch;
        } else {
            return parseInt(ch);
        }
    });

    return resArr;
}

console.log(steamrollArray([[["a"]], [["b"]]]));
console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([1, [], [3, [[4]]]]));
console.log(steamrollArray([1, {}, [3, [[4]]]]));
