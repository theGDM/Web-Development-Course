//1. commentry for last ball of match between csk and kxip(53rd match);
//2. Highest wicket taker
const request = require("request");
const cheerio = require("cheerio");

console.log("before");

request("https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/full-scorecard", cb);

function cb(error, response, body) {
    if (error) {
        console.log(error);
    } else {
        handleHtml(body);
    }
}

function handleHtml(html) {
    const selTool = cheerio.load(html);
    // content will have 20 items, i.e it is an array of 20 items
    // const bowlingTableArr = selTool(".table.bowler tbody tr");
    let teamArr = selTool(".match-info.match-info-MATCH .team");
    let winningTeamName;
    // console.log(selTool(teamArr).text());
    for (let i = 0; i < teamArr.length; ++i) {
        let hasClass = selTool(teamArr[i]).hasClass("team-gray");
        if (!hasClass) {
            let teamName = selTool(teamArr[i]).find(".name");
            winningTeamName = selTool(teamName).text();
            // console.log(winningTeamName);
        }
    }

    let inningsArr = selTool(".card.content-block.match-scorecard-table  .Collapsible");
    let htmlStr = "";

    for (let i = 0; i < inningsArr.length; ++i) {
        let htmlTableContent = selTool(inningsArr[i]).html();
        htmlStr = htmlStr + htmlTableContent; //html content for table

        let teamNameElement = selTool(inningsArr[i]).find(".header-title.label");
        let teamName = teamNameElement.text(); //conatins teams names

        // console.log(teamName);
        teamName = teamName.split("INNINGS")[0].trim();//first we will split string and that will return an array of two elements
        // console.log(teamName);

        let hwtName = "";
        let hwt = 0;
        if (winningTeamName != teamName) {
            let tableRowElement = selTool(inningsArr[i]).find(".table.bowler tbody tr");

            for (let j = 0; j < tableRowElement.length; ++j) {
                // console.log(selTool(tableRowElement[j]).text());
                let rowData = selTool(tableRowElement[j]).find("td"); //will return array of data elements of each row
                let playerName = selTool(rowData[0]).text();
                let wicketsOfBowler = selTool(rowData[4]).text();
                if (wicketsOfBowler > hwt) {
                    hwt = wicketsOfBowler
                    hwtName = playerName;
                }
            }
            console.log(`Highest wicket taker in ${winningTeamName} is ${hwtName} with ${hwt} wickets.
            Congratulation to him for this great achievement.`);
        }
    }
    // console.log(htmlStr);
}
console.log("after");