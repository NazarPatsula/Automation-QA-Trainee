// import { expect } from '@wdio/globals'
import MainPage from './../pages/main.page.js'
import GameDevPage from './../pages/gamedev.page.js'
import GameDevTopRatesPage from './../pages/gamedevtoprates.page.js'

describe('WebdriverIO', () => {
    // xit('should have correct title', async() => {
    //     await browser.url('https://webdriver.io/');

    //     const title = await browser.getTitle();
    //     console.log('Page title: ', title);
        
    //     await expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO');
    // });

    it("should show addValue command", async() => {
        await browser.url(`https://the-internet.herokuapp.com/login`);

        let input = await $("#username")
        await input.addValue("hello")
        await browser.pause(2000)
        
        await input.addValue(1234)
        await browser.pause(2000)

        await expect(input).toHaveValue("hello1234")
    });

    // xit("should show setValue command", async() => {
    //     await browser.url(`https://the-internet.herokuapp.com/login`);

    //     let input = await $("#username")
    //     await input.setValue("world")
    //     await input.setValue("hello")
    //     await browser.pause(2000)

    //     console.log(await input.getValue())
    //     await expect(input).toHaveValue("hello")
    // });

    // xit("should show click command", async() => {
    //     await browser.url(`https://the-internet.herokuapp.com/login`);

    //     let loginButton = await $('.radius')
    //     await browser.pause(2000)
    //     await loginButton.click()
    //     await browser.pause(4000)

    //     let inputUsername = await $("#username")
    //     await inputUsername.addValue("tomsmith")
    //     await browser.pause(2000)

    //     let inputPassword = await $("#password")
    //     await inputPassword.addValue("SuperSecretPassword!")
    //     await browser.pause(2000)

    //     await loginButton.click()
    //     await browser.pause(4000)
    // });

    // xit("should show getAttribute command", async() => {
    //     await browser.url(`https://dou.ua/search`);

    //     let inputSearch = await $('#gsc-i-id1')
    //     let attr = await inputSearch.getAttribute("aria-label")
    //     console.log("Placeholder attribute is: " + attr)

    //     await inputSearch.setValue("Cat")
    //     attr = await inputSearch.getValue()
    //     await browser.pause(2000)
    //     console.log("Value attribute is: " + attr)
    // });
    
    // xit("should show getLocation command", async() => {
    //     await browser.url(`https://dou.ua`);

    //     let inputSearch = await $('#txtGlobalSearch')
    //     let location = await inputSearch.getLocation()
    //     console.log("Location is: " + location)

    //     let xLocation = await inputSearch.getLocation("x")
    //     console.log("Location by 'x' is: " + xLocation)
    // });

    // xit("should show getText command", async() => {
    //     await browser.url(`https://webdriver.io`);

    //     let subtitle = await $('.hero__subtitle')
    //     console.log("Subtitle text is: " + await subtitle.getText())
    // });

    // xit("should show if an element is clickable", async() => {
    //     await browser.url("https://webdriver.io");

    //     const blogButton = await $('.button[href="/docs/gettingstarted"]')
    //     let clickable = await blogButton.isClickable()
    //     console.log("Is clickable: " + clickable)
    // });

    // xit("should show if an element is displayed", async() => {
    //     await browser.url(`https://webdriver.io`);

    //     const blogButton = await $('.button[href="/docs/gettingstarted"]')
    //     let displayed = await blogButton.isDisplayed()
    //     console.log("Is displayed: " + displayed)
    // });

    // xit("should show if an element is visible", async() => {
    //     await browser.url(`https://webdriver.io`);

    //     const blogButton = await $('.button[href="/docs/gettingstarted"]')

    //     const isDisplayedInViewport = await blogButton.isDisplayed();
    //     const location = await blogButton.getLocation();
    //     const size = await blogButton.getSize();

    //     const windowSize = await browser.getWindowSize();

    //     const inViewport = (
    //         location.x >= 0 &&
    //         location.y >= 0 &&
    //         location.x + size.width <= windowSize.width &&
    //         location.y + size.height <= windowSize.height
    //     );

    //     console.log("Is blog button visible in viewport:", isDisplayedInViewport && inViewport);
    // });

    // xit("should show if an element is enabled", async() => {
    //     await browser.url(`https://webdriver.io`)

    //     const getStartedButton = await $('.button[href="/docs/gettingstarted"]')
    //     let isEnabled = await getStartedButton.isEnabled()
    //     console.log("Is get started button enabled: " + isEnabled)
    // });

    // xit("should show if an element is focused", async() => {
    //     await browser.url(`https://webdriver.io`);

    //     const getStartedButton = await $('.button[href="/docs/gettingstarted"]')
    //     let isFocused = await getStartedButton.isFocused()
    //     console.log("Is get started button focused before click: " + isFocused)
    //     await browser.pause(2000)
    //     await getStartedButton.click()
    //     console.log("Is get started button focused after click: " + isFocused)
    //     await browser.pause(2000)
    // });

    // xit("should show movement to element action", async() => {
    //     await browser.url(`https://webdriver.io`);

    //     const getStartedLink = await $('.footer__link-item[href="/docs/gettingstarted"]')
    //     await browser.pause(2000)
    //     await getStartedLink.scrollIntoView()
    //     await browser.pause(2000)
    // });

    // xit("should show save screenshot command", async() => {
    //     await browser.url(`https://webdriver.io`);

    //     const getStartedLink = await $('.footer__link-item[href="/docs/gettingstarted"]')
    //     await browser.pause(2000)
    //     await getStartedLink.scrollIntoView()
    //     await browser.pause(2000)
    //     await getStartedLink.saveScreenshot('linkScreenshot.png')
    // });

    // xit("should switch to another window", async() => {
    //     await browser.url(`https://webdriver.io`);

    //     await browser.newWindow(`https://google.com`);
    //     await browser.pause(2000)

    //     await browser.switchWindow(`https://webdriver.io`);
    //     await browser.pause(2000)
    // });

    // xit("should show waitUntil command", async() => {
    //     await browser.url(`https://webdriver.io`);

    //     await browser.waitUntil(async() => {
    //         return await $('.button[href="/docs/gettingstarted"]').isDisplayed();
    //     }, {
    //         timeout: 5000, 
    //         timeoutMsg: "Button is not displayed"
    //     });
    // });

    // xit("should get HTML for certain elements", async() => {
    //     await browser.url(`https://webdriver.io`);

    //     const outerHTML = await $('.dropdown__menu').getHTML()
    //     console.log("outerHTML: " + outerHTML)

    //     const innerHTML = await $('.dropdown__menu').getHTML({ includeSelectorTag: false })
    //     console.log("innerHTML: " + innerHTML)
    // });

    // it("should show addValue command", async() => {
    //     await browser.url(`https://the-internet.herokuapp.com/login`);

    //     await LoginPage.setUsernameInput(123)
    //     await browser.pause(2000)

    //     await LoginPage.username.addValue("hello")
    //     await browser.pause(2000)

    //     await LoginPage.setPasswordInput("superpassword!")
    //     await browser.pause(2000)

    //     await LoginPage.clickOnLoginBtn()
    // });

    // it("done", async() => {
    //     await browser.url('https://dou.ua')

    //     await MainPage.clickOnBandBtn()
    //     await browser.pause(2000)

    //     await MainPage.clickOnForumBtn()
    //     await browser.pause(2000)

    //     await MainPage.clickOnGameDevBtn()
    //     await browser.pause(2000)

    //     expect(GameDevPage.companyGameDevsRateLink).toBeClickable()
    // });
});
