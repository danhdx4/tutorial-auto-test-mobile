describe('Webview App', () => {
    it('Webview context', async () => {
        await $('~Webview').click()
        await driver.pause(5000)

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

        // interaction with the page
    })
})

// 'NATIVE_APP', 'WEBVIEW_com.wdiodemoapp'
