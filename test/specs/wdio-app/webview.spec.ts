describe('Webview App', () => {
    it('Webview context', async () => {
        await $('~Webview').click()
        await driver.pause(5000)

        /** ----------- switch back to Webviewß context -------------*/

        // get context
        let currentContext = await driver.getContext()
        console.log("Current context: ", currentContext)

        // get list of contexts
        const listOfContexts = await driver.getContexts()
        console.log("List of context: ", listOfContexts)

        // witch to webview
        await driver.switchContext('WEBVIEW_com.wdiodemoapp')
        currentContext = await driver.getContext()
        console.log("Current context: ", currentContext)

        /** -----------interaction with the page -------------*/
        const getStartedBtn = $('.button=Get Started')
        await getStartedBtn.scrollIntoView()
        await getStartedBtn.click()
        let pageTitle = await driver.getTitle()
        expect(pageTitle).toBe('Getting Started | WebdriverIO')

        const searchIcon = $('.DocSearch.DocSearch-Button')
        await searchIcon.click()
        const searchInputField = $('.DocSearch-Input')
        await searchInputField.setValue('Selectors')
        //click on the first result item
        await $('#docsearch-hits0-item-0').click()
        pageTitle = await driver.getTitle()
        expect(pageTitle).toBe('Selectors | WebdriverIO')

        /** ----------- switch back to Native context -------------*/
        await driver.switchContext('NATIVE_APP')
        await $('~Home').click()
        const logoImage = $('android=new UiSelector().className("android.widget.ImageView").instance(0)')
        await expect(logoImage).toBeExisting()
    })
})

// 'NATIVE_APP', 'WEBVIEW_com.wdiodemoapp'
