// Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

// The array will contain objects in the format { name: 'name', avgAlt: avgAlt }.

// You can read about orbital periods on Wikipedia.

// The values should be rounded to the nearest whole number.The body being orbited is Earth.

// The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km^3s^-2.

function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    const c = 2 * Math.PI;
    //T = 2*PI*(sqrt(a^3 / GM))
    //a = avAlt + earthRadius
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i].hasOwnProperty("avgAlt")) {
            let a = Math.pow(earthRadius + arr[i].avgAlt, 3);
            let b = Math.sqrt(a / GM);
            let orbPeriod = Math.round(c * b);
            arr[i].orbitalPeriod = orbPeriod;
            delete arr[i]["avgAlt"];
        }
    }
    return arr;
}

console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));
console.log(orbitalPeriod([{ name: "iss", avgAlt: 413.6 }, { name: "hubble", avgAlt: 556.7 }, { name: "moon", avgAlt: 378632.553 }]));