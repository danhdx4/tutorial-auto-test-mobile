// Access the Date Widget
// View → Date Widgets → Dialog
// Get the current date
// Click “change the date”
// Scroll horizontally to the right
// Select the 10th date of the month
// Click the OK button
// Assert that the date has been updated
describe("Action - Mobile", () => {
  it("should click on the Views button", async () => {
    const viewsBtn = await $("~Views");
    await expect(viewsBtn).toBeExisting();
    await viewsBtn.click();
    const dateWidgetsBtn = await $("~Date Widgets");
    await expect(dateWidgetsBtn).toBeExisting();
    await dateWidgetsBtn.click();
    const dialogBtn = await $("~1. Dialog");
    await expect(dialogBtn).toBeExisting();
    await dialogBtn.click();
    // get cuurrent date
    const currentDate = await $("~io.appium.android.apis:id/dateDisplay");
    await expect(currentDate).toBeExisting();
    const currentDateText = await currentDate.getText();
    console.log("Current date: " + currentDateText);
    const changeDateBtn = await $("~change the date");
    await expect(changeDateBtn).toBeExisting();
    await changeDateBtn.click();
    // scroll horizontally to the right
    await $(
      "android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()",
    );
    const date10Btn = await $("~10 August 2026");
    await expect(date10Btn).toBeExisting();
    await date10Btn.click();
    const okBtn = await $("~android:id/button1");
    await expect(okBtn).toBeExisting();
    await okBtn.click();
    const updatedDate = await $("~io.appium.android.apis:id/dateDisplay");
    await expect(updatedDate).toBeExisting();
    const updatedDateText = await updatedDate.getText();
    expect(updatedDateText).not.toEqual(currentDateText);
  });
  it.only("App & Device APIs", async () => {
    // 1. Open Views/Date Widgets/1. Dialog Page
    // await driver.startActivity("io.appium.android.apis", ".view.DateWidgets1");
    const ViewBtn = await $("~Views");
    await expect(ViewBtn).toBeExisting();
    await ViewBtn.click();

    //Click Date Widgets
    await $("~Date Widgets").click();

    //Click Dialog
    await $("~1. Dialog").click();
    // 3. Đưa app xuống background 5 giây & 4. Tự động Relaunch
    await driver.background(5);
    // 5. Lock device
    await driver.lock();
    await driver.pause(3000);
    // 6. Verify device đang locked
    const isLocked = await driver.isLocked();
    await expect(isLocked).toBe(true);
    // 7. Unlock device
    await driver.unlock();
    await driver.pause(3000);
    // isLocked = await driver.isLocked();
    // Đảm bảo device đã unlock xong trước khi check element
    await expect(isLocked).toBeFalsy();

    // 8. Verify app vẫn hoạt động
    const updatedDate = await $("~io.appium.android.apis:id/dateDisplay");
    await expect(updatedDate).toBeExisting();
  });
});
