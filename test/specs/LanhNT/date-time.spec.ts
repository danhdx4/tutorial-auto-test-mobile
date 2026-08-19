import { getDateTime } from "../../utils/helper.spec.ts"

describe('Date Time', () => {
    it('Date Time - Horizontal scroll', async () => {
        // Open Views/Date Widgets/1. Dialog Page
        await driver.startActivity("io.appium.android.apis", ".view.DateWidgets1")

        // Locator for date field
        const dateField = await $('android=new UiSelector().resourceId("io.appium.android.apis:id/dateDisplay")')

        // assert default date time
        const expectedDate = getDateTime()
        await expect(await dateField.getText()).toContain(expectedDate)

        // Click on 'change the date' button
        await $('~change the date').click()

        // Scroll horizontal
        await $("android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()");
        await $('android=new UiSelector().text("10")').click();
        await $('android=new UiSelector().resourceId("android:id/button1")').click()

        // assert date updated
        await expect(await dateField.getText()).not.toContain(expectedDate)
        await expect(await dateField.getText()).toContain('10')
    })
})