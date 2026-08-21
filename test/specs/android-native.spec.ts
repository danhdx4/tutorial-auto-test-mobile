import { getDateTime } from "../utils/helper.spec.ts"

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
        const theOKCancelDialogBtn = $('~OK Cancel dialog with a message')
        await theOKCancelDialogBtn.click()

        // accept Alert
        // await driver.acceptAlert()

        // dismiss alert
        await driver.dismissAlert()

        // click on the OK button

        // click on the Cancel button

        // assertion - alert box is no longer visiable
        const msgText = await $('android=new UiSelector().resourceId("android:id/alertTitle")')
        await expect(msgText).not.toBeExisting()
    })

    it('Vertical Scrolling', async () => {
        // open Activity app: App -> Activity
        await $('~App').click()
        await $('~Activity').click()

        // scroll to end
        // UiSelector tìm container → UiScrollable thao tác scroll → scrollToEnd() scroll đến cuối.
        // 1 = tối đa bao nhiêu lần swipe, 5 = mỗi swipe được thực hiện với bao nhiêu step
        // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)')

        // click on 'Secure Surfaces btn"
        // await $('~Secure Surfaces').click()

        // scrollTextIntoView
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")')
            .click();

        // assertion Secure Dialog to be Exist
        const securityDialogBtn = $('~Secure Dialog')
        await expect(securityDialogBtn).toBeExisting()
    })

    it('Horizontal Scrolling1', async () => {
        // open the target page
        // Views -> Gallery -> 1. Photos
        await driver.startActivity("io.appium.android.apis", ".view.Gallery1")

        await $(
            "android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()"
        );

        await $(
            "android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()"
        );

        await driver.pause(3000);
    })

    it.only('App & Device APIs', async () => {
        // 1. Open Views/Date Widgets/1. Dialog Page
        await driver.startActivity("io.appium.android.apis", ".view.DateWidgets1")

        // 3. Đưa app xuống background 5 giây & 4. Tự động Relaunch
        await driver.background(5)

        // 5. Lock device
        await driver.lock()
        await driver.pause(5000)

        // 6. Verify device đang locked
        let isLock = await driver.isLocked()
        await expect(isLock).toBeTruthy()

        // 7. Unlock device
        await driver.unlock()
        await driver.pause(5000)
        isLock = await driver.isLocked()

        // Đảm bảo device đã unlock xong trước khi check element
        await expect(isLock).toBeFalsy()

        // 8. Verify app vẫn hoạt động
        const currentDate = await $(
            'android=new UiSelector().resourceId("io.appium.android.apis:id/dateDisplay")'
        ).getText();

        // In ngày hiện tại ra console để kiểm tra
        console.log("Current date:", currentDate);

        //Click Change the date
        await $("~change the date").click();

        //  scroll
        // Scroll horizontally to the right 
        // scroll theo chiều ngang và scroll sang bên phải
        await $(
            "android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()"
        );

        // Tìm ngày 10 trong tháng hiện tại của Date Picker
        // và click vào ngày 10
        await $(
            'android=new UiSelector().text("10")',
        ).click();

        // Click OK để xác nhận ngày đã chọn
        await $(
            'android=new UiSelector().text("OK")',
        ).click();
        // Chờ 5 giây để nhìn thấy ngày mới trên emulator
        await driver.pause(5000);

        // Lấy lại ngày sau khi chọn ngày 10
        const updatedDate = await $(
            'android=new UiSelector().resourceId("io.appium.android.apis:id/dateDisplay")',
        ).getText();

        // In ngày mới ra console
        console.log("Updated date:", updatedDate);

        // Kiểm tra ngày 10 có tồn tại trên màn hình không
        await expect(
            $(
                'android=new UiSelector().resourceId("io.appium.android.apis:id/dateDisplay")'
            )
        ).toBeExisting();
    })
})