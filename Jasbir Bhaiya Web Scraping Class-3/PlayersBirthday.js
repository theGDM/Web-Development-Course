const request = require("request");
const jsdom = require("jsdom");
const fs = require("fs");
const path = require("path");

let { JSDOM } = jsdom;

//URL for match b/w bangladesh and afganistan
let url = "https://www.espncricinfo.com/series/afghanistan-in-bangladesh-2021-22-1299826/bangladesh-vs-afghanistan-1st-t20i-1299832/full-scorecard";

request(url, handleRequest);//take two parameters, one is url and 2nd is callback function

function handleRequest(error, httpResponse, html) {
    if (error) {
        console.log(error);
    } else if (httpResponse.statusCode == 404) {
        console.log("Page Not Found!");
    } else {
        parseHtml(html);
    }
}

function parseHtml(Html) {
    let dom = new JSDOM(Html);
    let myDocument = dom.window.document;
    let spanTag = myDocument.querySelector(".match-info.match-info-MATCH .status-text span");
    let winText = spanTag.innerHTML;//Bangladesh won by 61 runs
    let textArray = winText.split("won");//[ 'Bangladesh ', ' by 61 runs' ]
    let winningTeam = textArray[0].trim();//Bangladesh

    let innings = myDocument.querySelectorAll(".card.match-scorecard-table .Collapsible");
    for (let i = 0; i < innings.length; ++i) {
        // fs.writeFileSync(`${__dirname}/inning${i + 1}.html`, innings[i].outerHTML);
        let inningTag = innings[i].querySelector("h5");
        let inningText = inningTag.innerHTML;//Bangladesh INNINGS (20 overs maximum) //Afghanistan INNINGS (target: 156 runs from 20 overs)
        let inningTeam = inningText.split("INNINGS")[0].trim();//Bangladesh //Afghanistan

        if (inningTeam == winningTeam) {
            let batsMenTableRows = innings[i].querySelectorAll(".table.batsman tbody tr");
            for (let j = 0; j < batsMenTableRows.length; ++j) {
                let rowDataLength = batsMenTableRows[j].querySelectorAll("td").length;
                if (rowDataLength >= 5) { //just to avoid last row(EXTRAS)
                    let rowData = batsMenTableRows[j].querySelectorAll("td");
                    let nameOfBatter = rowData[0].textContent;
                    let playerLink = 'https://www.espncricinfo.com' + rowData[0].querySelector("a").getAttribute("href"); //from oth data cell of of each row, selct anchor tag, and then its href
                    printBirthday(nameOfBatter, playerLink);
                    // console.log(nameOfBatter + " ----> " + playerLink);
                }
            }
        }
    }
}

function printBirthday(name, playerLink) {
    request(playerLink, function (error, httpResponse, Html) {
        if (error) {
            console.log(error);
        } else if (httpResponse.statusCode == 404) {
            console.log("Page Not Found!");
        } else {
            parsePlayerDetails(Html, name);
        }
    })
}

function parsePlayerDetails(Html, name) {
    let dom = new JSDOM(Html);
    let myDocument = dom.window.document;
    let playerGrid = myDocument.querySelector("div.player_overview-grid");
    // fs.writeFileSync(`${__dirname}/${name} PlayerGrid.html`, playerGrid.outerHTML);
    let playerGridDiv = playerGrid.querySelectorAll("div");//all divs of player_overview grid
    let dob = playerGridDiv[1].textContent;
    console.log(name + " --> " + dob);
}