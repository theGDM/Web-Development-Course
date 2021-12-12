//1. commentry for last ball of match between csk and kxip(53rd match);
//2. Highest wicket taker
const request = require("request");
const cheerio = require("cheerio");

console.log("before");

request("https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary", cb);

function cb(error, response, body) {
    if (error) {
        console.log(error);
    } else {
        handleHtml(body);
    }
}

function handleHtml(html) {
    const selTool = cheerio.load(html);
    //content will have 20 items, i.e it is an array of 20 items
    const content = selTool(".match-comment-wrapper .match-comment-long-text p");
    const lbc = selTool(content[0]).text();
    console.log(lbc);
}
console.log("after");