function primeSieve(primeHandler, nonPrimepHandler) {
    let orgArray = this;
    primeHandler.callForTheFirstTime = true; //function as object
    nonPrimepHandler.callForTheFirstTime = true;
    let flag;
    for (let i = 0; i < orgArray.length; ++i){
        let currElement = orgArray[i];
        flag = true;
        for (let j = 2; j * j <= currElement; ++j){
            if (currElement % j == 0) {
                flag = false;
                break;
            }
        }

        if (flag) {
            primeHandler(currElement);
        } else {
            nonPrimepHandler(currElement);
        }
    }
    return this;
}

const fs = require("fs");

Array.prototype.sieve = primeSieve; //adding sieve method on prototype

let arr = [11, 18, 34, 37, 49, 53, 71, 84, 97];

arr.sieve(workOnPrime, workOnNonPrime);

function workOnPrime(num) {
    //printing after getting num in prime.txt file
    if (workOnPrime.callForTheFirstTime == true) {
        if (fs.existsSync("primes.txt")) {
            fs.rmSync("primes.txt");
        }
        workOnPrime.callForTheFirstTime = false;
        fs.writeFileSync("primes.txt", "All prime numbers --> ");
    }

    fs.appendFileSync("primes.txt", num + " ");
}

function workOnNonPrime(num) {
    //printing after getting
    if (workOnNonPrime.callForTheFirstTime == true) {
        if (fs.existsSync("nonPrimes.txt")) {
            fs.rmSync("nonPrimes.txt");
        }
        workOnNonPrime.callForTheFirstTime = false;
        fs.writeFileSync("nonPrimes.txt", "All non-prime numbers --> ");
    }

    fs.appendFileSync("nonPrimes.txt", num + " ");
}