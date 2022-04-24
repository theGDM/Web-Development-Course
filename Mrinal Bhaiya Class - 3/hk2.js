const puppeteer = require("puppeteer");
let email = 'hebov93727@xasems.com';
let password = '1234HK@'

let page;//to store the instance of new pages
const codeFile = require("./codes");

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
    let algoSectionWillBeClicked = waitAndClick(".topic-card a[data-attr1='algorithms']", page); //matlab current page me yadi bo selector mil jaayega to use click kar diya jaayega
    return algoSectionWillBeClicked;
}).then(function () {
    let clickWarmupPromise = waitAndClick("input[value='warmup']", page);
    return clickWarmupPromise;
}).then(function () {
    let allChallenges = page.$$(".ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled", { delay: 100 });//$$ is acting as a querySelectorAll
    return allChallenges;
}).then(function (questions) {
    // console.log(questions.length);
    // console.log(questions[0]);
    let questionWillBeSolvedPromise = questionSolver(page, questions[0], codeFile.answers[0]);
    return questionWillBeSolvedPromise;
});

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

function questionSolver(page, question, answer) {
    return new Promise(function (resolve, reject) {
        let questionWillBeClicked = question.click();
        questionWillBeClicked.then(function () {
            // let selectedEditorPromise = page.click(".checkbox-wrap input");
            // return selectedEditorPromise;
            let selectedEditorPromise = waitAndClick(".monaco-editor.no-user-select.vs", page);
            return selectedEditorPromise;
        }).then(function () {
            return waitAndClick(".checkbox-input", page);
        }).then(function () {
            return page.type(".input.text-area.custominput", answer, { delay: 20 });
        }).then(function () {
            let ctrlOnHoldPromise = page.keyboard.down("Control", { delay: 20 });
            return ctrlOnHoldPromise;
        }).then(function () {
            let AisPressedPromise = page.keyboard.press("A", { delay: 20 });
            return AisPressedPromise;
        }).then(function () {
            let CisPressedPromise = page.keyboard.press("C", { delay: 20 });
            return CisPressedPromise;
        }).then(function () {
            let XisPressedPromise = page.keyboard.press("X", { delay: 20 });
            return XisPressedPromise;
        }).then(function () {
            let ctrlisReleased = page.keyboard.up("Control", { delay: 20 });
            return ctrlisReleased;
        }).then(function () {
            let mainEditorOnFocus = waitAndClick(".monaco-editor.no-user-select.vs", page);
            return mainEditorOnFocus;
        }).then(function () {
            let ctrlOnHoldPromise = page.keyboard.down("Control", { delay: 20 });
            return ctrlOnHoldPromise;
        }).then(function () {
            let AisPressedPromise = page.keyboard.press("A", { delay: 20 });
            return AisPressedPromise;
        }).then(function () {
            let VisPressedPromise = page.keyboard.press("V", { delay: 20 });
            return VisPressedPromise;
        }).then(function () {
            let ctrlisReleased = page.keyboard.up("Control", { delay: 20 });
            return ctrlisReleased;
        }).then(function () {
            return page.click(".hr-monaco-submit.ui-btn-styled", { delay: 50 });
        }).catch(function (err) {
            console.log(err);
        });
    })
}