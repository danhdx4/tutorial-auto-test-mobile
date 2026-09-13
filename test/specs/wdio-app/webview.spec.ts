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
        // Click on Get Started Btn and verify page title

        // Search with key: Selectors

        //click on the first result item and verify page title

        /** ----------- switch back to Native context -------------*/

    })
})

// 'NATIVE_APP', 'WEBVIEW_com.wdiodemoapp'
