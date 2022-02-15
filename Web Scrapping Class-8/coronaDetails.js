//extracting useful information or data from got html body using request package, is done by cheerio
const request = require("request");
const cheerio = require("cheerio");

console.log("before");
//after reaching the given websites the callback function will perform the next task
request("https://www.worldometers.info/coronavirus/", cb);

function cb(error, response, html) {
    if (error) {
        console.log(error);
    } else {
        handleHtml(html);
    }
}


function handleHtml(html) {
    //in selector tool we are getting the whole html body of a requested page!
    let selTool = cheerio.load(html);
    //console.log(selTool.html());//it will load html
    // let contentArr = selTool("#maincounter-wrap span");//it will return an array of selected content
    let contentArr = selTool(".maincounter-number span");
    console.log(contentArr);

    //just to show tha we got array
    // for (let i = 0; i < contentArr.length; ++i){
    //     let data = selTool(contentArr[i]).text();
    //     console.log('data ->', data);
    // }

    let totalCases = selTool(contentArr[0]).text();
    let totalDeaths = selTool(contentArr[1]).text();
    let totalRecovered = selTool(contentArr[2]).text();

    console.log(`Total Cases - ${totalCases}`);
    console.log(`Total Deaths - ${totalDeaths}`);
    console.log(`Total Recoverd - ${totalRecovered}`);
}

console.log("after");