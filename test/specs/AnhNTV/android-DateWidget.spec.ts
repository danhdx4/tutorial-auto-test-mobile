describe("Android - Finding Elements", () => {
  it("Click Views", async () => {
    //Click Views
    const ViewBtn = await $("~Views");
    await expect(ViewBtn).toBeExisting();
    await ViewBtn.click();

    //Click Date Widgets
    await $("~Date Widgets").click();
    //Click Dialog
    await $("~1. Dialog").click();
    
    //Current Date
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
  });
});

describe("App Lifecycle", () => {
  it("Background and Relaunch App", async () => {
    await driver.background(5);
    await driver.relaunchActiveApp();
  });

  it("should lock the screen", async () => {
    await browser.lock();
  });
});