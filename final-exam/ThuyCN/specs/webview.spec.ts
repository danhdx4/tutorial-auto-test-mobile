import WebPage from '../page-objects/web.page.ts';
import HomePage from '../page-objects/home.page.ts';
import { SearchData } from '../data-test/search-data.ts';

const homePage = new HomePage()
const webPage = new WebPage()

describe('Web tab', () => {
    it('Should search successfully and return to Home', async () => {
        // Open the Web tab.
        await homePage.navigateToTab('Webview')
        await driver.pause(5000)
        // Get context list
        const currentContext = await driver.getContext()
        console.log("Current context: ", currentContext)

        // Get contexts list
        const listOfContexts = await driver.getContexts()
        console.log("List of context: ", listOfContexts)

        // Switch to webview
        await driver.switchContext('WEBVIEW_com.wdiodemoapp')

        // Search "Selectors"
        await webPage.clickSearchBtn()
        await webPage.fillSearch(SearchData.search)
        await webPage.verifyFirstResult(1)

        // Return to the native Home page
        await driver.switchContext('NATIVE_APP')
        await homePage.navigateToTab('Home')
        await homePage.waitForLoad()
    })
})
