//In this module i am going to define some methods that operate on strings,
//and transform them, according to user requirements....

//method to uppercase single character
const upperCase = function (ch) {
    if (ch >= 'a' && ch <= 'z') {
        return String.fromCharCode(ch.charCodeAt(0) - 32);
    }
    return ch;
}

//method to lowercase single character
const lowerCase = function (ch) {
    if (ch >= 'A' && ch <= 'Z') {
        return String.fromCharCode(ch.charCodeAt(0) + 32);
    }
    return ch;
}

//method to upperCase entire sentence
const upperCaseSentence = function (text) {
    let res = ""
    for (let i = 0; i < text.length; ++i){
        let ch = text[i];
        if (ch >= 'a' && ch <= 'z') {
            res = res + String.fromCharCode(ch.charCodeAt(0) - 32);
        } else {
            res = res + ch;
        }
    }
    return res;
}

//method to lowercase entire sentence
const lowerCaseSentence = function (text) {
    let res = ""
    for (let i = 0; i < text.length; ++i){
        let ch = text[i];
        if (ch >= 'A' && ch <= 'Z') {
            res = res + String.fromCharCode(ch.charCodeAt(0) + 32);
        } else {
            res = res + ch;
        }
    }
    return res;
}

//method to capitalize entire sentence
const capitalizeSentence = function (text) {
    let res = ""
    res = res + upperCase(text[0]);
    for (let i = 1; i < text.length; ++i) {
        if (text[i] == " ") {
            res = res + text[i];
            res = res + upperCase(text[i + 1]);
            ++i;
        } else {
            res = res + lowerCase(text[i]);
        }
    }
    return res;
}

//method to toggle case of each character in entire sentence
const toggleCase = function (text) {
    let res = "";
    for (let i = 0; i < text.length; ++i){
        let ch = text[i];
        if (ch >= 'A' && ch <= 'Z') {
            res = res + lowerCase(ch);
        } else if (ch >= 'a' && ch <= 'z') {
            res = res + upperCase(ch);
        } else {
            res = res + ch;
        }
    }
    return res;
}


// const output1 = upperCaseSentence("Hello my name is robert downey junior");
// console.log(output1);

// const output2 = lowerCaseSentence("Hello my name is ROBERT DOWNEY junior");
// console.log(output2);

// const output3 = capitalizeSentence("Hello my naMe Is Robert dOWney juNIor");
// console.log(output3);

// const output4 = toggleCase("hello my name IS CHRIST hemsWORTH");
// console.log(output4);

module.exports = {
    lowerCase: lowerCase,
    upperCase: upperCase,
    lowerCaseSentence: lowerCaseSentence,
    upperCaseSentence: upperCaseSentence,
    capitalizeSentence: capitalizeSentence,
    toggleCase: toggleCase
}


