// - Access the Date Widget
// - - View → Date Widgets → Dialog
// - Get the current date
// - Click “change the date”
// - Scroll horizontally to the right
// - Select the 10th date of the month
// - Click the OK button
// - Assert that the date has been updated

describe('Android Native Feature Test', () => {
    beforeEach(async () => {
        // Keep tests independent from the activity left open by the previous test.
        await driver.startActivity("io.appium.android.apis", ".ApiDemos")
    })

    it('Access the Date Widget', async () => {
        // access activity
        await driver.startActivity("io.appium.android.apis", ".view.DateWidgets1")

        // pause 3s
        await driver.pause(5000)

        // assert
        const pageTitle = await $('android=new UiSelector().text("Views/Date Widgets/1. Dialog")')
        await expect(pageTitle).toBeExisting()
    })

    it('Change current date', async () => {
        // open the target page
        await driver.startActivity("io.appium.android.apis", ".view.DateWidgets1")

        // get current datetime
        const currentDatetime = await $('android=new UiSelector().resourceId("io.appium.android.apis:id/dateDisplay")')
        await expect(currentDatetime).toBeExisting()

        // change the date
        const changeDate = $('~change the date')
        await changeDate.click()

        // swipe calendar
        await $("android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()");

        // choose the 10th
        await $('android=new UiSelector().text("10")').click()
        const okBtn = $('android=new UiSelector().resourceId("android:id/button1")')
        await okBtn.click()

        // Assert that the date has been updated
        await expect(currentDatetime).toHaveText('9-10-2026', {containing: true,})
    })
})
