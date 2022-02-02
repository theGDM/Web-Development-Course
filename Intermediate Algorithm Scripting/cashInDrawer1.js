//return coins object of cid 

function checkCashRegister(price, cash, cid) {
    let conversionObj = {
        "ONE HUNDRED": 100,
        "TWENTY": 20,
        "TEN": 10,
        "FIVE": 5,
        "ONE": 1,
        "QUARTER": 0.25,
        "DIME": 0.1,
        "NICKEL": 0.05,
        "PENNY": 0.01,
    };

    let changeObj = {
        status: "",
        change: []
    }

    let changeDue = cash - price;
    let sumChange = 0;
    for (let c of cid) {
        sumChange = sumChange + c[1];
    }

    //when cid is less than change amount;
    if (sumChange < changeDue) {
        changeObj.status = "INSUFFICIENT_FUNDS";
        return changeObj;
    }

    //when cid is exactly equal to change amount
    if (sumChange == changeDue) {
        changeObj.status = "CLOSED";
        changeObj.change = cid;
        return changeObj;
    }

    let newResult = [];
    cid = cid.reverse();
    for (let i = 0; i < cid.length; ++i) {
        let val = 0;
        while (conversionObj[cid[i][0]] <= changeDue && cid[i][1] > 0) {
            changeDue = changeDue.toFixed(2);
            cid[i][1] = cid[i][1] - conversionObj[cid[i][0]];
            changeDue = changeDue - conversionObj[cid[i][0]];
            val = val + conversionObj[cid[i][0]];
            // console.log(cid + " " + changeDue + " " + val);
        }
        if (val > 0) {
            newResult.push([cid[i][0], val]);
        }
    }
    if (changeDue != 0) {
        changeObj.status = "INSUFFICIENT_FUNDS";
        return changeObj;
    } else {
        changeObj.status = "OPEN";
        changeObj.change = newResult;
        return changeObj;
    }
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))