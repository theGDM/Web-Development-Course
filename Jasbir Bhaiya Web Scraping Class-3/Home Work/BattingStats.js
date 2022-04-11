const fs = require("fs");

function battingStats(currInning) {
    let batsMenTableHead = currInning.querySelectorAll(".table.batsman thead tr th");
    fs.appendFileSync(`${__dirname}/stats.txt`, "\nBatting Stats -");
    fs.appendFileSync(`${__dirname}/stats.txt`, "\n---------------------------------------------------------------------------------\n|");
    for (let i = 0; i < batsMenTableHead.length; ++i) {
        let l = batsMenTableHead[i].textContent.length;
        if (i == 0) {
            let spaceL = 19 - l;
            let sp = " ".repeat(spaceL);
            fs.appendFileSync(`${__dirname}/stats.txt`, batsMenTableHead[i].textContent + sp + "|");
        } else if (i != 1 && i != 4) {
            let spaceL = 11 - l;
            let sp = " ".repeat(spaceL);
            fs.appendFileSync(`${__dirname}/stats.txt`, batsMenTableHead[i].textContent + sp + "|");
        }
    }
    fs.appendFileSync(`${__dirname}/stats.txt`, "\n---------------------------------------------------------------------------------");

    let batsMenTableRows = currInning.querySelectorAll(".table.batsman tbody tr");
    for (let j = 0; j < batsMenTableRows.length; ++j) {
        let rowDataLength = batsMenTableRows[j].querySelectorAll("td").length;
        if (rowDataLength >= 5) {
            let rowData = batsMenTableRows[j].querySelectorAll("td");
            fs.appendFileSync(`${__dirname}/stats.txt`, "\n|");
            for (let k = 0; k < rowData.length; ++k) {
                let l = rowData[k].textContent.length;
                if (k == 0) {
                    let spaceL = 19 - l;
                    let sp = " ".repeat(spaceL);
                    fs.appendFileSync(`${__dirname}/stats.txt`, rowData[k].textContent + sp + "|");
                } else if (k != 1 && k != 4) {
                    let spaceL = 11 - l;
                    let sp = " ".repeat(spaceL);
                    fs.appendFileSync(`${__dirname}/stats.txt`, rowData[k].textContent + sp + "|");
                }
            }
        }
    }
    fs.appendFileSync(`${__dirname}/stats.txt`, "\n---------------------------------------------------------------------------------\n");
}

module.exports = {
    battingStats: battingStats
}