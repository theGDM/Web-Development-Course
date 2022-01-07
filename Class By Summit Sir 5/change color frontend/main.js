(function () {
    // console.log("Hi"); 
    let btn = document.querySelector("#myBtn");
    let h1 = document.querySelector("h1");
    //when we click on button the color of h1 tag will change to gree color.
    //click is type of event, and 2nd parameter is callback function, which will execute only ,when the event is happened
    btn.addEventListener("click", function () {
        h1.style.color = "green";
    })
       
    //when we hover on button the color oh h1 tag will change to blue, and as soon as we hover out the mouse from the button
    //the h1 tag regains its original color.
    btn.addEventListener("mouseover", function () {
        h1.style.color = "blue";
    })
 
    //as soon as we remove 
    btn.addEventListener("mouseout", function () {
        h1.style.color = "red";
    })
})();