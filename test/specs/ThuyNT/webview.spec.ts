describe('Webview App', () => {
    it('Webview context', async () => {
        await $('~Webview').click()
        await driver.pause(5000)

        // Get current context
        const currentContext = await driver.getContext()
        console.log('Current Context: ', currentContext)

        // Get list of contexts
        const listContexts = await driver.getContexts()
        console.log('List of Contexts: ', listContexts)

        //switch webview
        await driver.switchContext('WEBVIEW_com.wdiodemoapp')
        console.log('Current Context after switch: ', currentContext)

        // click on Started BTn and verify page title
        await 
        await 
    })
})