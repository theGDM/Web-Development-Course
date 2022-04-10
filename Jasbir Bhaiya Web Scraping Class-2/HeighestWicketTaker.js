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

        if (inningTeam != winningTeam) {
            let tableBowlerRows = innings[i].querySelectorAll(".table.bowler tbody tr");
            //fs.writeFileSync(`${__dirname}/tableBowler.html`, tableBowlerRows.outerHTML); we can not use outerHTML property
            //on NodeList, array or when we use querySelectorAll
            // console.log(tableBowlerRows.length); //9
            let hwt = "";
            let hw = -1;
            for (let j = 0; j < tableBowlerRows.length; ++j) {
                let rowDataLength = tableBowlerRows[j].querySelectorAll("td").length;
                if (rowDataLength > 1) {
                    let tableData = tableBowlerRows[j].querySelectorAll("td");
                    let nameOfBowler = tableData[0].textContent;
                    let wicket = tableData[4].textContent;

                    console.log(nameOfBowler + " " + wicket);

                    if (wicket > hw) {
                        hw = wicket;
                        hwt = nameOfBowler;
                    }
                }
            }
            console.log("---------------------------------------------------------");
            console.log(`Winning team is ${winningTeam}.`);
            console.log(`Player with heigest wicket is ${hwt} with ${hw} wickets..`);
        }
    }
}