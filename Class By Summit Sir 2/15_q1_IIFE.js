// my version
// (function () {
//     let number = prompt("Enter a number..");
//     let tempNumber = number;

//     const interval = setInterval(() => {
//         console.log(tempNumber);
//         --tempNumber;
//         if (tempNumber == 0) {
//             alert(`Time's Up! Counted from ${number} to 1`);
//             clearInterval(interval);
//         }
//     }, 1000);
// })();

(function () {
    let timeUnits = parseInt(prompt("How much to count?")); //promt always returns string
    let interval = parseInt(prompt("Enter interval(seconds)?"));

    //calls the handleCall function after interval * 1000 ms
    const intervalId = setInterval(handleCalls, interval * 1000);
    //returns an id which is used to stop calling of setInterval by using clearInterval

    //function can be used as a store of properties (much like objects)(used function as object)
    handleCalls.orgTu = timeUnits;

    function handleCalls() {
        console.log(timeUnits + " left");
        timeUnits -= interval;
        if (timeUnits == 0) {
            alert(handleCalls.orgTu + " has been counted.");
            clearInterval(intervalId);
        }
    }
})();
