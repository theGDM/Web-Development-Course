const fs = require("fs");

function bowlingStats(currInning) {
    let bowlerTableHead = currInning.querySelectorAll(".table.bowler thead tr th");
    fs.appendFileSync(`${__dirname}/stats.txt`, "\nBowling Stats -");
    fs.appendFileSync(`${__dirname}/stats.txt`, "\n---------------------------------------------------------------------------------------------------------------------------------------------\n|");
    for (let i = 0; i < bowlerTableHead.length; ++i) {
        // console.log(batsMenTableHead[i].textContent);
        let l = bowlerTableHead[i].textContent.length;
        if (i == 0) {
            let spaceL = 19 - l;
            let sp = " ".repeat(spaceL);
            fs.appendFileSync(`${__dirname}/stats.txt`, bowlerTableHead[i].textContent + sp + "|");
        } else {
            let spaceL = 11 - l;
            let sp = " ".repeat(spaceL);
            fs.appendFileSync(`${__dirname}/stats.txt`, bowlerTableHead[i].textContent + sp + "|");
        }
    }
    fs.appendFileSync(`${__dirname}/stats.txt`, "\n---------------------------------------------------------------------------------------------------------------------------------------------");

    let bowlerTableRows = currInning.querySelectorAll(".table.bowler tbody tr");
    for (let j = 0; j < bowlerTableRows.length; ++j) {
        let rowDataLength = bowlerTableRows[j].querySelectorAll("td").length;
        if (rowDataLength >= 5) {
            let rowData = bowlerTableRows[j].querySelectorAll("td");
            fs.appendFileSync(`${__dirname}/stats.txt`, "\n|");
            for (let k = 0; k < rowData.length; ++k) {
                let l = rowData[k].textContent.length;
                if (k == 0) {
                    let spaceL = 19 - l;
                    let sp = " ".repeat(spaceL);
                    fs.appendFileSync(`${__dirname}/stats.txt`, rowData[k].textContent + sp + "|");
                } else {
                    let spaceL = 11 - l;
                    let sp = " ".repeat(spaceL);
                    fs.appendFileSync(`${__dirname}/stats.txt`, rowData[k].textContent + sp + "|");
                }
            }
        }
    }
    fs.appendFileSync(`${__dirname}/stats.txt`, "\n---------------------------------------------------------------------------------------------------------------------------------------------\n");
}

module.exports = {
    bowlingStats: bowlingStats
}