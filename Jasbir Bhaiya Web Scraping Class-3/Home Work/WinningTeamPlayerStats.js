const request = require("request");
const jsdom = require("jsdom");
const fs = require("fs");
const path = require("path");
const { battingStats } = require("./BattingStats");//requiring battingStats js file
const { bowlingStats } = require("./BowlingStats");//requiring bowlingStats js file

let teams = ["Chennai Super Kings", "Mumbai Indians", "Sunrisers Hyderabad", "Delhi Capitals", "Royal Challengers Bangalore",
    "Kolkata Knight Riders", "Rajasthan Royals", "Punjab Kings"];

let { JSDOM } = jsdom; //extracting JSDOM nested class

let url = "https://www.espncricinfo.com/series/ipl-2021-1249214/chennai-super-kings-vs-kolkata-knight-riders-final-1254117/full-scorecard";
request(url, handelRequest);

function handelRequest(error, httpResponse, html) {
    if (error) {
        console.log(error);
    } else if (httpResponse.statusCode == 404) {
        console.log("Page Not Found!");
    } else {
        parseHtml(html);
    }
}

function parseHtml(html) {
    let dom = new JSDOM(html);
    let myDocument = dom.window.document;
    let team = myDocument.querySelectorAll(".teams .name-detail a .name");
    let matchBetwwen = team[0].textContent + " VS " + team[1].textContent;
    //first we wrote down the match between the teams in stats file
    fs.writeFileSync(`${__dirname}/stats.txt`, "| " + matchBetwwen + " |" + "\n" + "------------------------------------------------");

    //appending match no, place, and date
    let description = myDocument.querySelector(".header-info .description").textContent;//43rd Match (N), Dubai (DSC), Sep 29 2021
    let descriptionArray = description.split(",");
    // console.log(descriptionArray);
    let matchNo = descriptionArray[0].trim();//43rd Match (N)
    let date = descriptionArray[2].trim();//Sep 29 2021
    let matchVenue = descriptionArray[1].trim();//Dubai (DSC)
    // console.log(matchNo + " " + date + " " + matchVenue);
    fs.appendFileSync(`${__dirname}/stats.txt`, "\nMatch Number :- " + matchNo);
    fs.appendFileSync(`${__dirname}/stats.txt`, "\nDate :- " + date);
    fs.appendFileSync(`${__dirname}/stats.txt`, "\nVenue :- " + matchVenue);

    //appending result of the macth b/w two teams
    let result = myDocument.querySelector(".match-info.match-info-MATCH .status-text").textContent;
    fs.appendFileSync(`${__dirname}/stats.txt`, "\nResult :- " + result);

    let playerOfMatchArray = myDocument.querySelectorAll(".playerofthematch-player-detail .playerofthematch-name");
    let playerOfMatch = playerOfMatchArray[0].textContent;
    fs.appendFileSync(`${__dirname}/stats.txt`, "\nPlayer Of The Match :- " + playerOfMatch + "\n");

    // let matchDetailsTable = myDocument.querySelector(".table.match-details-table tbody");
    // // fs.writeFileSync(`${__dirname}/matchDetails.html`, matchDetailsTable.outerHTML);
    // let matchDetailsRows = matchDetailsTable.querySelectorAll("tr");
    // let winningTeamCommentry = matchDetailsRows[6].querySelectorAll("td")[1].textContent;
    // let winningTeamName = winningTeamCommentry.split("won")[0].trim();

    let winningTeamCommentry = myDocument.querySelector(".match-info.match-info-MATCH .status-text").textContent;
    let winningTeamName = winningTeamCommentry.split("won")[0].trim();//Super Kings
    // console.log(winningTeamName);
    let winningTeamFullName = teams.find(team => team.includes(winningTeamName));//getting full name of team //Chennai Super Kings
    // console.log(winningTeamFullName);

    //some edge cases(like winningTeamName KKR, RCB)
    if (winningTeamName == "KKR") {
        winningTeamFullName = "Kolkata Knight Riders";
    } else if (winningTeamName == "RCB") {
        winningTeamFullName = "Royal Challengers Bangalore";
    }

    let innings = myDocument.querySelectorAll(".card.match-scorecard-table .Collapsible");
    for (let i = 0; i < innings.length; ++i) {
        let inningTag = innings[i].querySelector("h5");
        let inningText = inningTag.innerHTML;
        let inningTeam = inningText.split("INNINGS")[0].trim();

        if (inningTeam == winningTeamFullName) {
            battingStats(innings[i]);
        } else {
            bowlingStats(innings[i]);
        }
    }
}