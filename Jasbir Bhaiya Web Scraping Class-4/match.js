let request = require('request');
let jsdom = require("jsdom");
let fs = require("fs");
let path = require("path");
let { JSDOM } = jsdom;

let url = "https://www.espncricinfo.com/series/ipl-2021-1249214/chennai-super-kings-vs-kolkata-knight-riders-final-1254117/full-scorecard";

function tobecalledBySomeone(url) {
    request(url, cb);
}

function cb(err, httpResponse, html) {
    // console.log(url);
    if (err) {
        console.log(err);
    } else if (httpResponse.statusCode == 404) {
        console.log("Page not found");
    } else {
        parseHtml(html);
    }
}

function parseHtml(html) {
    let dom = new JSDOM(html);
    let MyDocument = dom.window.document;

    let losingTeam = MyDocument.querySelector(".match-header-container .team-gray p");
    if (losingTeam == null) {
        console.log("Match tied and no winner as such");
        return;
    }

    // console.log(losingTeam.textContent);

    let bothTheTeams = MyDocument.querySelectorAll(".match-header-container .name-link");
    let WinningTeamName;
    for (let i = 0; i < bothTheTeams.length; i++) {
        if (losingTeam.textContent != bothTheTeams[i].textContent) {
            WinningTeamName = bothTheTeams[i].textContent;
        }
    }

    // console.log(WinningTeamName);

    let venueSelector = MyDocument.querySelector(".match-header-info.match-info-MATCH  .description");
    let venue = venueSelector.textContent;
    let bothInningHtml = MyDocument.querySelectorAll(".Collapsible");
    let team1;
    let team2;
    for (let i = 0; i < bothInningHtml.length; i++) {
        let singleInning = bothInningHtml[i];

        let teamName = getnameOfTheTeam(singleInning);
        if (i == 0) {
            team1 = teamName;
        } else {
            team2 = teamName;
        }
        if (WinningTeamName == teamName) {
            let rows = singleInning.querySelectorAll(".table.batsman tbody tr");
            for (let j = 0; j < rows.length; j++) {
                let tds = rows[j].querySelectorAll("td");
                if (tds.length > 4) {
                    // columns they belong to a valid row-> player 
                    //  Name
                    let name = tds[0].textContent;
                    // runs
                    let runs = tds[2].textContent;
                    // balls
                    let balls = tds[3].textContent;
                    // 4s 
                    let fours = tds[5].textContent;
                    // 6s
                    let sixes = tds[6].textContent;
                    // sr
                    let sr = tds[7].textContent;
                    // opponent team name
                    let opponent;
                    if (i == 0) {
                        // i = 1 -> opponent 
                        opponent = team2
                    } else {
                        // i = 0 -> opponent
                        opponent = team1
                    }

                    console.log(name + " " + runs + " " + balls + " " + fours + " " + sixes + " " + sr + " " + opponent + " " + " " + venue + " " + teamName)
                    saveToFiles(name, runs, balls, fours, sixes, sr, opponent, venue, teamName);
                    // console.log(teamName);
                }
            }
        }
    }
}

function getnameOfTheTeam(singleInning) {
    let teamNameHtml = singleInning.querySelector("h5");
    let teamNameRaw = teamNameHtml.textContent;
    let teamNameArr = teamNameRaw.split("INNINGS");
    let teamName = teamNameArr[0].trim();
    return teamName;
}

function saveToFiles(name, runs, balls, fours, sixes, sr, opponent, venue, teamName) {
    //check whether the folder exist or not
    //check whether the file inside exist or not

    //->data put
    //data update

    let dataObj = {
        name, runs, balls, fours, sixes, sr, opponent, venue, teamName
    }

    //making ipl directory
    let iplDirectoryPath = path.join(__dirname, "IPL-2021");
    let doesIplDirctoryExists = fs.existsSync(iplDirectoryPath);
    // check whether the folder IPL-2021 exist or not
    if (doesIplDirctoryExists == false) {
        fs.mkdirSync(iplDirectoryPath);
    }

    // check whether the folder exist or not
    let doesTeamExist = fs.existsSync(`${iplDirectoryPath}/${teamName}`);
    // console.log(teamName + " " + doesTeamExist);
    if (doesTeamExist == false) {
        fs.mkdirSync(`${iplDirectoryPath}/${teamName}`);
    }

    let pathofPlayerFile = path.join(`${iplDirectoryPath}/${teamName}`, name + ".json");
    let doesPlayerExist = fs.existsSync(pathofPlayerFile);
    // ram 
    let entries = [];
    if (doesPlayerExist == false) {
        // -> data put 
        entries = [];
        entries.push(dataObj);
    } else {
        // data update
        let binaryData = fs.readFileSync(pathofPlayerFile);
        entries = JSON.parse(binaryData);
        entries.push(dataObj);
    }
    // save file  -> file system 
    fs.writeFileSync(pathofPlayerFile, JSON.stringify(entries));

}

module.exports = {
    tobecalledBySomeone: tobecalledBySomeone
}