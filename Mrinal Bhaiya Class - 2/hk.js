const puppeteer = require("puppeteer");
let email = 'hebov93727@xasems.com';
let password = '1234HK@'

let page;//to store the instance of new pages

let browserOpenedPromise = puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized']
});

browserOpenedPromise.then(function (browserInstance) {
    let newTabPromise = browserInstance.newPage();//to open new tab
    return newTabPromise;//will return new tab
}).then(function (newTab) { //newTablePromised jo return hua
    page = newTab;
    let webSiteOpenPromise = page.goto("https://www.hackerrank.com/auth/login");//Url passed, redirect new website
    return webSiteOpenPromise;
}).then(function () {
    // console.log("Hackerrank Website Opened!");
    //currently page will have login page
    let emailWillBeTypedPromise = page.type("input[id='input-1']", email, { delay: 100 });
    return emailWillBeTypedPromise;
}).then(function () {
    let passwordWillBeTypedPromise = page.type("input[id='input-2']", password, { delay: 100 });
    return passwordWillBeTypedPromise;
}).then(function () {
    let buttonWillBePressed = page.click("button[data-analytics='LoginPassword']");
    return buttonWillBePressed;
}).then(function () {
    let algoSectionWillBeClicked = waitAndClick(".topic-card a[data-attr1='algorithms']", page);
    return algoSectionWillBeClicked;
}).then(function () {
    console.log("In algorithm section!");
})

function waitAndClick(selector, cPage) {
    return new Promise(function (resolve, reject) {//return new promise
        let waitForModalPromise = cPage.waitForSelector(selector); //wait for page updatation, waiting for this selector page to load

        waitForModalPromise.then(function () {
            let clickTheModalPromise = cPage.click(selector);//now click that page(algorithm)
            return clickTheModalPromise;
        }).then(function () {
            resolve();
        }).catch(function () {
            reject();
        })
    })
}