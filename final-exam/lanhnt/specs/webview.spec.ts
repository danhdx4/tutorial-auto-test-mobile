import { addStep } from "@wdio/allure-reporter"
import webPage from "../page-objects/web.page.ts"

describe('Verify webview context', () => {
    before(async () => {
        addStep("Open web page")
        await webPage.webBtn.click()

        addStep('Switch to webview context')
        await driver.switchContext('WEBVIEW_com.wdiodemoapp')
        await webPage.waitForLoad()
    })

    after(async () => {
        addStep("Switch back to native context")
        await driver.switchContext('NATIVE_APP')
    })

    it("Should search and goto the target page successfully", async () => {
        await webPage.searchIcon.click()
        await webPage.searchByKey('Selectors')

        await webPage.verifyPageTitle('Selectors | WebdriverIO')
    })
})

// 'NATIVE_APP', 'WEBVIEW_com.wdiodemoapp'
//npx wdio final-exam/lanhnt/wdio.conf.ts --spec final-exam/lanhnt/specs/webview.spec.ts
