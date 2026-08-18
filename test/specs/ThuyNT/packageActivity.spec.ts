// ## Bài tập về nhà

// - Access the Date Widget
describe('Android Native Feature Test', () => {
    // - - View → Date Widgets → Dialog
    it('Access the Date Widget', async () => {
        const viewsBtn = await $('~Views')
        await expect(viewsBtn).toBeExisting()
        await viewsBtn.click()

        const dateWidgetsBtn = await $('~Date Widgets')
        await expect(dateWidgetsBtn).toBeExisting()
        await dateWidgetsBtn.click()

        const dialogBtn = await $('android=new UiSelector().text("1. Dialog")')
        await expect(dialogBtn).toBeExisting()
        await dialogBtn.click()
        // - Click “change the date”
        const changeTheDateBtn = await $('~change the date')
        await expect(changeTheDateBtn).toBeExisting()
        await changeTheDateBtn.click()

        // - Scroll horizontally to the right
        await $(
            "android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()"
        );

        // - Select the 10th date of the month
        const date10Btn = await $('android=new UiSelector().text("10")')
        await date10Btn.click()

        // - Click OK
        const okBtn = await $('android=new UiSelector().resourceId("android:id/button1")')
        await okBtn.click()

        // - Assert that the date next month has been updated
        const today = new Date()

        const expectedDate = new Date(
            today.getFullYear(),
            today.getMonth() + 1,
            10
        )


        const dateText = await $(
            'android=new UiSelector().resourceId("io.appium.android.apis:id/dateDisplay")'
        )

        const expectedDateText =
            `${expectedDate.getMonth() + 1}-10-${expectedDate.getFullYear()}`

        await expect(dateText).toHaveText(
            expect.stringContaining(expectedDateText)
        )
        await driver.pause(5000)

    })

})