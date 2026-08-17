describe('Adnroid Native Feature Test', () => {
    it('Access an Activity directly', async () => {
        // access activity
        await driver.startActivity("io.appium.android.apis", ".app.AlertDialogSamples")

        // pause 3s
        await driver.pause(5000)

        // assert
        const pageTitle = await $('android=new UiSelector().text("App/Alert Dialogs")')
        expect(pageTitle).toBeExisting()
    })

    it('Working with Dialog Boxes', async () => {
        // open the target page
        await driver.startActivity("io.appium.android.apis", ".app.AlertDialogSamples")

        // click on first dialog

        // accept Alert

        // dismiss alert

        // click on the OK button

        // click on the Cancel button

        // assertion - alert box is no longer visiable
    })

    it('Vertical Scrolling', async () => {
        // open Activity app: App -> Activity

        // scroll to end

        // click on 'Secure Surfaces btn"

        // scrollTextIntoView

        // assertion Secure Dialog to be Exist
    })

    it('Horizontal Scrolling1', async () => {
        // open the target page
        // Views -> Gallery -> 1. Photos
        await driver.startActivity("io.appium.android.apis", ".view.Gallery1")
    })
})