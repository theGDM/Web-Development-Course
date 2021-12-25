// function outer() {
//     var arr = [];
//     for (var i = 0; i < 3; ++i){
//         arr.push(function () {
//             console.log(i);
//         })
//     }
//     return arr;
// }
 
// console.log("Before calling outer");
// var arr = outer();
// arr[0](); //3
// arr[1](); //3
// arr[2](); //3
// console.log("After calling outer");

// solution 1 - using execution context
function outer() {
    var arr = [];
    for (var i = 0; i < 3; ++i){
        function newFn (){
            var j = i;
            return function () {
                console.log(j);
            }
        }  
        arr.push(newFn());
    }
    return arr;
}

console.log("Before calling outer");
let arr = outer();
arr[0](); //3
arr[1](); //3
arr[2](); //3
console.log("After calling outer");  