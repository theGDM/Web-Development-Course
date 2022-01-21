function smallestCommons(arr) {
    let start, end;
    if (arr[0] < arr[1]) {
        start = arr[0];
        end = arr[1];
    } else {
        start = arr[1];
        end = arr[0];
    }

    let res = arr[0] * arr[1];
    for (let i = start; i <= end; ++i) {
        if (res % i != 0) {
            ++res;
            i = start - 1;
        }
    }
    return res;
}

console.log(smallestCommons([1, 5]));
console.log(smallestCommons([5, 1]));
console.log(smallestCommons([2, 10]));
console.log(smallestCommons([1, 13]));
console.log(smallestCommons([13, 1]));
console.log(smallestCommons([23, 18]));