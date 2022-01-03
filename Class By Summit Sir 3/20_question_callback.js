//add a fn to all arrays which takes as input two callbacks.
//one for small striing ( < 50 in length) and the other for long strings.

//short string callback should do the following
//My name is Sumeet Malik. I am a teacher. I teach programming.
//=>Malik Sumeet is name My. teacher a am I. programming teach I.

//long string callback should do the following
//=>I teach programming. I am a teacher. My name is Sumeet Malik.

function stringSieve(shortStringHandler, longStringHandler, criteria) {
    let orgArray = this;
    for (let i = 0; i < orgArray.length; ++i){
        let currString = orgArray[i];
        if (currString.length >= criteria) {
            longStringHandler(currString);
        } else if(currString.length < criteria){
            shortStringHandler(currString);
        }
    }
    return this; //so that we can enable chaining. Otherwise i won't we able to chain, like using map, filter, reduce hof.
}

Array.prototype.sieve = stringSieve;

let arr = [
    "Make each day your masterpiece. work hard. Write your own destiny.",
    "Believe in yourself. You can do anything.",
    "I am painter. I am a programmer. I am a graphic designer too.",
    "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    "Keep going. Be all in.",
    "The bad news is time flies. The good news is you're the pilot.",
    "My name is Sumeet Malik. I am a teacher. I teach programming."
];

arr.sieve(workOnShortStr, workOnLongStr, 60);

function workOnShortStr(str) {
    let newArray = [];
    let newString = "";
    let start = 0;
    let count = 0;
    for (let i = 0; i < str.length; ++i){
        ++count;
        if (str[i] === ".") {
            let subStr = str.substr(start, count - 1);
            newArray.push(subStr);
            start = i + 2;
            ++i;
            count = 0;
        }
    }
    
    for (let i = 0; i < newArray.length; ++i){
        let tempArray = newArray[i].split(" ");
        newString = newString + tempArray.reverse().join(" ") + ". ";
    }

    console.log("Short string : " + newString);
}   

function workOnLongStr(str) {
    let newArray = [];
    let newString = "";
    let start = 0;
    let count = 0;
    for (let i = 0; i < str.length; ++i){
        ++count;
        if (str[i] === ".") {
            let subStr = str.substr(start, count - 1);
            newArray.push(subStr);
            start = i + 2;
            ++i;
            count = 0;
        }
    }
    
    //reversing newArray array
    newArray.reverse();
    for (let i = 0; i < newArray.length; ++i){
        newString = newString + newArray[i] + ". ";
    }

    console.log("Long string : " + newString);
}

