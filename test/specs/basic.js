const assert = require('assert')

describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('https://webdriver.io')
        const title = browser.getTitle()
        assert.strictEqual(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js')
    })
})

describe('webdriver.io page', () => {
    it('should switch to another window', () => {
        // open url
        browser.url('https://google.com')
        // create new window
        browser.newWindow('https://webdriver.io')

        // switch back via url match
        browser.switchWindow('google.com')

    })
})

describe('webdriver.io page', () => {
    // navigate to a new URL
    browser.url('https://webdriver.io');
    // receive url
    console.log(browser.getUrl());
})