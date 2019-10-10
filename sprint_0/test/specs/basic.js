const assert = require('assert')

describe('webdriver.io page', () => {
    it('Título correcto', () => {
        browser.url('https://webdriver.io')
        const title = browser.getTitle()
        assert.strictEqual(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js')
    })
})

describe('webdriver.io page', () => {
    it('Cambia a otra página', () => {
        // open url
        browser.url('https://google.com')
        // create new window
        browser.newWindow('https://webdriver.io')

        // switch back via url match
        browser.switchWindow('google.com')

    })
})

describe('webdriver.io page', () => {
    it('Obtiene url', () => {
        // navigate to a new URL
        browser.url('');
        // receive url
        console.log(browser.getUrl());
    })
})