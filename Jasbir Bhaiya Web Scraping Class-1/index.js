let request = require("request");
let jsdom = require("jsdom"); //object
const fs = require('fs');
const path = require("path");
//console.log(jsdom);//object
//console.log(jsdom.JSDOM);//nested class
const { JSDOM } = jsdom;//destructuring JSDOM PROPERTY
let url = "https://www.google.com";

//callback -> request -> get data
request(url, cb);

//callback function is called by your request
//data -> html code
// function cb(err, httpResponse, data) {
//     if (err) {
//         console.log(err);
//     } else if (httpResponse.statusCode == 404) {
//         console.log("Page not found");
//     } else {
//         console.log(data); //not readable data//raw dom
//     }
// }

//so the data/code i am getting is not readable at all, so we need some package
//which can actually parse this code into pure HTML code.
//so we will use jsdom
function cb(err, httpResponse, data) {
    if (err) {
        console.log(err);
    } else if (httpResponse.statusCode == 404) {
        console.log("Page not found");
    } else {
        console.log("Data Received");
        let dom = new JSDOM(data);
        console.log(data.includes("lnXdpd"));//it is not included in coming data, as this comes in dark mode which is currently i am using
        let Mydocument = dom.window.document;
        // let titleTag = document.querySelector("title");
        // console.log(titleTag.textContent);
        let imgTag = Mydocument.querySelector("img");
        fs.writeFileSync(`${__dirname}/tag.html`, imgTag.outerHTML);
        let imgUrl = imgTag.getAttribute("src");
        console.log("https://www.google.com" + imgUrl);
    }
}

