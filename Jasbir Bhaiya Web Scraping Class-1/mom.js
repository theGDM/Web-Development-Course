let request = require("request");
let jsdom = require("jsdom"); //object
const { JSDOM } = jsdom;//destructuring JSDOM PROPERTY

let url = "https://www.espncricinfo.com/series/afghanistan-in-bangladesh-2021-22-1299826/bangladesh-vs-afghanistan-1st-t20i-1299832/full-scorecard";

request(url, cb);

function cb(err, response, data) {
    if (err) {
        console.log(err);
    } else if (response.statusCode == 404) {
        console.log("Page not found");
    } else {
        handelHtml(data);
    }
}

function handelHtml(data) {
    let dom = new JSDOM(data);
    let document = dom.window.document;
    let playerTag = document.querySelector(".playerofthematch .playerofthematch-name");
    console.log(playerTag.textContent);
}
