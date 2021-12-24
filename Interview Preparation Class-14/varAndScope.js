//nextQuestion
//var variable has function scope
//bahar se under ni jata, under se bahar jata hai
var a;
console.log("Before declaration", a);

function fn() {
    console.log("Before declaration", a);
    var a;
    console.log("After declaration", a);
    a = 20;
    if (true) {
        var a = 30;
        console.log("At line 28", a);
    }
    console.log("After initialization", a);
}

a = 40;
console.log("After initialization", a);
fn();
