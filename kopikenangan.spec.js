const { By, Builder, Browser } = require('selenium-webdriver');
const assert = require("assert");

(async function firstTest() {
    let driver;

    try {
        driver = await new Builder().forBrowser(Browser.CHROME).build();
        await driver.get('https://kopikenangan.com/');

        let title = await driver.getTitle();
        assert.equal("Kopi Kenangan", title);

        await driver.manage().setTimeouts({ implicit: 500 });

        let quoteCEO = await driver.findElements(By.className('sqsrte-large'));
        let nameCEO = await driver.findElements(By.className('image-subtitle sqs-dynamic-text'));

        console.log("Quote CEO");
        console.log(await quoteCEO[1].getText());

        console.log("");

        console.log("Name CEO");
        console.log(await nameCEO[0].getText());

        console.log("");
    } catch (e) {
        console.log(e)
    } finally {
        await driver.quit();
    }
}())