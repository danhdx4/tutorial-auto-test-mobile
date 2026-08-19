// ## Bài tập về nhà

// - Access the Date Widget
// - - View → Date Widgets → Dialog
// - Get the current date
// - Click “change the date”
// - Scroll horizontally to the right
// - Select the 10th date of the month
// - Click the OK button
// - Assert that the date has been updated

describe("Adnroid Native Feature Test", () => {
  it.only("Access an Date Widget", async () => {
    // - Access the Date Widget
    await driver.startActivity("io.appium.android.apis", ".view.DateWidgets1");
    await driver.pause(5000);
    const pageTitle = await $(
      'android=new UiSelector().text("Views/Date Widgets/1. Dialog")',
    );
    expect(pageTitle).toBeExisting();

    // - Get the current date
    const dateBtn = await $(
      'android=new UiSelector().resourceId("io.appium.android.apis:id/pickDate").text("change the date")',
    );
    await expect(dateBtn).toBeExisting();

    // - Click “change the date”
    await dateBtn.click();
    const currentDate = await $("android=new UiSelector().selected(true)");

    // - Scroll horizontally to the right
    await $(
      "android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()",
    );

    // - Select the 10th date of the month
    const day10 = await $('android=new UiSelector().text("10")');
    await expect(day10).toBeExisting();
    await day10.click();

    // - Click the OK button
    const ok = await $(
      'android=new UiSelector().resourceId("android:id/button1").text("OK")',
    );
    await expect(ok).toBeExisting();
    await ok.click();

    // - Assert that the date has been updated
    const updatedDate = await dateBtn.getText();
    expect(updatedDate).not.toEqual(currentDate);
  });
});
