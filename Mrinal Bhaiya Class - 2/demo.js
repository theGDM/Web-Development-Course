const puppeteer = require("puppeteer");

console.log('Before')

let browserWillBeOpenedPromise = puppeteer.launch({
    headless: false,//by default puppetear works on headless(visibility ka na hona hi) //now a browser will open(chromium browser) this brwoser is used for testing purpose
    defaultViewport: null,//we don't want the default browser size set by the google
    args: ['--start-maximized'] //open the site in full screen(full screen)

});//promisified method -> it will return a promise

browserWillBeOpenedPromise.then(function (browserInstance) {//browserInstance -> the browser that is currently opened
    let newTabPromise = browserInstance.newPage();//to open new tab
    return newTabPromise;//will return new tab
}).then(function (newTab) { //newTabpromise jo return hua //now jo tab return hua usme url pass karke new site kholenge 
    let webSiteOpenPromise = newTab.goto("https://www.pepcoding.com");//Url passed, redirect new website
    return webSiteOpenPromise;
}).then(function () {
    console.log("Website Opened!");
});

console.log('After');