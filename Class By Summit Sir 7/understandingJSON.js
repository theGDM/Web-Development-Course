let arr = [
    {
        id: 1,
        name: "Summit"
    },
    {
        id: 2,
        name: "Jasvinder"
    },
    {
        id: 3,
        name: "Rajneesh"
    },
    {
        id: 4,
        name: "Jitendra"
    }
];

let jsonOfArr = JSON.stringify(arr);//convert JS arr in JSON
console.log(jsonOfArr);

let originalArr = JSON.parse(jsonOfArr); //convert JSON into arr
console.log(originalArr);