describe('Android Native Feature Test', () => {
    it('Access an Activity directly', async () => {
        // click view -> Date Widgets → Dialog
        const viewsBtn = await $('~Views')
        await expect(viewsBtn).toBeExisting()
        await viewsBtn.click()

        const dateWidgetsBtn = await $('~Date Widgets')
        await expect(dateWidgetsBtn).toBeExisting()
        await dateWidgetsBtn.click()

        const dia1Btn = await $('~1. Dialog')
        await expect(dia1Btn).toBeExisting()
        await dia1Btn.click()
        await driver.pause(5000)

        //get the current date
        const today = new Date();
        console.log(today);

        //Click “change the date”
        const changeDateBtn = await $('~change the date')
        await expect(changeDateBtn).toBeExisting()
        await changeDateBtn.click()

        // Scroll horizontally to the right
        async function scrollRight() {
        await $(
        "android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()"
        );
        }
        await scrollRight();

        //click on the 10th day of the month
        const day10Btn = await $('~10 tháng 9 2026')
        await expect(day10Btn).toBeExisting()
        await day10Btn.click()

        //Click on OK button
        const okBtn = await $('//android.widget.Button[@resource-id="android:id/button1"]')
        await expect(okBtn).toBeExisting()
        await okBtn.click()

       // Check new date is displayed
        const newDate = await $('//android.widget.TextView[@resource-id="io.appium.android.apis:id/dateDisplay"]');

        await expect(newDate).toBeExisting();
        await expect(newDate).toHaveText('9-10-2026 01:02');



    })
})