//higher order function - map
//original array does not change, unless and utill, array stores the element which are reference variable(object, and nested array)
//get initials 1st example
let array = ["Jasbeer Singh", "Summet Malik", "Rajneesh Malik", "Jitendra Punia"];

// let namesArray = array[0].split(" ")
// let firstInitial = namesArray[0].charAt(0);
// let secondInitial = namesArray[1].charAt(0);
// console.log(firstInitial + " " + secondInitial);

function getInitial(name) {
    let namesArray = name.split(" ")
    // console.log(namesArray);
    let firstInitial = namesArray[0].charAt(0);
    let secondInitial = namesArray[1].charAt(0);
    return firstInitial + ". " + secondInitial + ".";
}

let intialArray = array.map(getInitial);
console.log(intialArray);

//2nd example
let arr = [5, 7, 19, 12, 13, 14, 91, 16, 25, 67, 71];

function square(x) {
    return x * x;
}

let squareArray = arr.map(square);
console.log(squareArray);

//3rd example
// income -> less than 100 -> return double of initial income
// income -> greater than 100 -> return half of the initial income
let number = [
    {
        sex: "M",
        age: 20,
        income: 200
    },
    {
        sex: "F",
        age: 20,
        income: 200
    },
    {
        sex: "F",
        age: 20,
        income: 20 
    },
    {
        sex: "F",
        age: 20,
        income: 300
    },
    {
        sex: "M",
        age: 20,
        income: 50
    },
    {
        sex: "M",
        age: 20,
        income: 70
    }
];


function double_1(obj) {
    if (obj.income < 100) {
        //now send the copied object, by not affecting the original array's object
        return {
            sex: obj.sex,
            age: obj.age,
            income: obj.income * 2
        }
    } 
    return obj;
}

function double_2(obj) {
    //option_1
    let newObject = {};
    for (let key in obj) {
        newObject[key] = obj[key];
    }

    //option_2
    //let newObject = { ...obj };

    if (newObject.income < 100) {
        newObject.income *= 2;
    }
    return newObject;
}

let arrayRes1 = number.map(double_1);
let arrayRes2 = number.map(double_2);
console.log(arrayRes1);
console.log(number); //original number array will get modified
console.log(arrayRes2);
console.log(number); //original number array will get modified

let incomes = [100, 200, 30, 20, 10];

function doubleLessIncome(element) {
    if (element < 100) {
        element = element * 2;
    }
    return element; //return is compulsory
}

let newIncomeArr = incomes.map(doubleLessIncome);
console.log(newIncomeArr);
console.log(incomes);