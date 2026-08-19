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
    await expect(updatedDate).toHaveText("9-10-2026", { containing: true });
  });
});
