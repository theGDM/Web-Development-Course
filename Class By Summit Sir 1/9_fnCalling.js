function fun(a, b) {
    console.log(a + " " + b);
    console.log(arguments); //it is arraylike object but not an actual array, as methods like map, filter, reduce are not
    //available
    let res = Array.from(arguments);//making actual array
    let sq = res.map(function (num) {
        return num * 2;
    });
    console.log(sq);
}

fun();
fun(10);
fun(10, 20);
fun(10, 20, 30);
