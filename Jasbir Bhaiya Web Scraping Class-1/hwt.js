const request = require("request");
let jsdom = require("jsdom"); //object
const fs = require("fs");
const { JSDOM } = jsdom;//destructuring JSDOM PROPERTY

let url = "https://www.espncricinfo.com/series/afghanistan-in-bangladesh-2021-22-1299826/bangladesh-vs-afghanistan-1st-t20i-1299832/full-scorecard";

request(url, cb);

function cb(err, response, data) {
    if (err) {
        console.log(err);
    } else if (response.statusCode == 404) {
        console.log("Page not found");
    } else {
        parseHtml(data);
    }
}

function parseHtml(html) {
    let dom = new JSDOM(html);
    let MyDocument = dom.window.document;
    // let winningTeamTag = document.querySelectorAll(".name-detail a .name");
    let status = MyDocument.querySelector(".match-info.match-info-MATCH .status-text");
    fs.writeFileSync("tag.html", status.outerHTML);
    let text = status.textContent;
    console.log(text);
}

//the differnece is due to responsive-ness of website
// .match-info.match-info-MATCH.match-info-MATCH-full-width .status-text
// .match-info.match-info-MATCH.match-info-MATCH-full-width .status-text
// .match-info.match-info-MATCH.match-info-MATCH-half-width .status-text