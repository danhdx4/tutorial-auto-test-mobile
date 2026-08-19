# Bài 1, 2: Giới thiệu & Installation

## Appium là gì?

- Framework mã nguồn mở dùng để **Automation Testing Mobile Apps**
- Hỗ trợ:

  - Android
  - iOS
  - Native App
  - Hybrid App
  - Mobile Web

- Sử dụng chuẩn **WebDriver Protocol** giao thức chuẩn để điều khiển trình duyệt hoặc thiết bị qua mạng, cho phép test automation gửi lệnh như mở trang, click, nhập text, lấy kết quả
- Không yêu cầu chỉnh sửa source code ứng dụng

---

## WebdriverIO là gì?

- Framework Automation Testing dành cho JavaScript/TypeScript
- Tích hợp sẵn với:

  - Appium
  - Selenium
  - Browser Automation
  - Mobile Automation

- Hỗ trợ:
  - Test Runner
  - Reporting
  - Parallel Execution
  - Page Object Model

---

## Kiến trúc tổng quan

```text
Test Script (WebdriverIO)
            │
            ▼
        Appium Server
            │
            ▼
   UiAutomator2 Driver
            │
            ▼
 Android Emulator / Real Device
            │
            ▼
       Mobile Application
```

---

## Công nghệ sử dụng trong khóa học

- TypeScript (ES6+)
- Node.js
- WebdriverIO
- Appium 4.x
- Android Emulator/ LDPlayer
- Appium Inspector

### Mục tiêu

Xây dựng Framework Mobile Automation hoàn chỉnh cho Android App bằng WebdriverIO và Appium.

## Installation

Note: Không hướng dẫn cài từ thư mục trống, mà kéo source code về chạy lệnh install

Link: https://webdriver.io/docs/gettingstarted/

1. Tạo thư mục mobile-auto
2. Install project with webdriverIO

- Command: npm init wdio@latest .
- Option init:
  - E2E Testing - of Web or Mobile Applications
  - On my local machine
  - Mobile - native, hybrid and mobile web apps, on Android or iOS
  - Android - native, hybrid and mobile web apps, tested on emulators and real devices
    > using UiAutomator2 (https://www.npmjs.com/package/appium-uiautomator2-driver)
  - Mocha (https://mochajs.org/)
  - Do you want to use Typescript to write tests? -> y
  - Do you want WebdriverIO to autogenerate some test files?: y
  - Orther: mặc định (enter)

3. Setup Emulator with Android Studio

4. Giải thích ý nghĩa các setting trong file config
   File: /mobile-auto/wdio.conf.ts
   Đây là file cấu hình cho WebdriverIO, một framework để tự động hóa kiểm thử (automation test).

- runner: 'local': Chạy test trên máy của bạn (local).
- port: 4723: Cổng giao tiếp với Appium server, công cụ để tự động hóa ứng dụng mobile.
- [specs: ['./test/specs//\*.ts']](http://vscodecontentref/3)\*\*: Chỉ định nơi chứa các file kịch bản test. Ở đây là tất cả các file có đuôi .ts trong thư mục test/specs và các thư mục con của nó.
- maxInstances: 10: Số lượng kịch bản test tối đa có thể chạy song song cùng một lúc.
- capabilities: Định nghĩa các môi trường bạn muốn test. Trong file này, nó được cấu hình để chạy test trên:
- logLevel: 'info': Mức độ chi tiết của log khi chạy test. info là mức thông tin chung.
- bail: 0: Nếu khác 0, việc test sẽ dừng lại ngay sau khi có một số lượng test case nhất định bị thất bại. 0 có nghĩa là sẽ chạy hết tất cả các test case dù có thất bại.
- waitforTimeout: 10000: Thời gian chờ tối đa (10 giây) cho một câu lệnh chờ một element xuất hiện.
- services: ['appium']: Tự động khởi động và dừng Appium server trước và sau khi chạy test.
- framework: 'mocha': Sử dụng Mocha làm framework để viết và tổ chức các test case.
- reporters: ['spec']: Định dạng kết quả hiển thị trên màn hình terminal sau khi chạy test.
- mochaOpts: Các tùy chọn riêng cho framework Mocha, ví dụ như timeout (60 giây) cho mỗi test case.
- hooks: Các hàm sẽ được tự động thực thi tại các thời điểm khác nhau của quá trình test (ví dụ: trước/sau khi chạy tất cả test, trước/sau mỗi test case). Trong file của bạn, các hook này đang được comment lại.

5. WebdriverIO Capabilities Setup

```ts
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'Pixel 4',
        'appium:platformVersion': '12.0',
        'appium:automationName': 'UiAutomator2',
        'appium:app': path.join(process.cwd(), 'app/android/ApiDemos-debug.apk')
    }],

```

6. Set up Test folder

7. Run sample test

```ts
describe("Sample", () => {
  it("Run app", async () => {
    await driver.pause(5000);
  });
});
```

8. Setup Appium Inspector

- setup capabilities cho app
- chạy cổng 4724: appium -p 4724
- run app in appium inspector

# Bài 3: Android - Finding Elements

Link: https://webdriver.io/docs/bestpractices/ and
https://webdriver.io/docs/selectors#mobile-selectors

## Mục tiêu bài học

- Tìm element Android bằng các locator phổ biến trong WebdriverIO + Appium.
- Hiểu ưu/nhược điểm của từng cách tìm element.
- Sử dụng Android UiAutomator để tạo locator linh hoạt hơn.
- Phân biệt $ và $$ khi tìm một hoặc nhiều element.

```ts
describe("Android - Finding Elements", () => {
  it("Finding element by accessibility id", async () => {
    // syntax
    // const element = await $('~accessibilityId');
  });

  it("Finding element by class name", async () => {
    // syntax
    // const element = await $('className');
    // Lưu ý: Việc sử dụng className để tìm kiếm thường không cho ra 1 kết quả duy nhất.
    // Nếu match nhiều element, thì WebdriverIO sẽ thao tác trên element được tìm thấy đầu tiên trong tập kết quả
  });

  it("Finding element by xPath", async () => {
    /** syntax
        const element = await $('//tagName[@attribute='value']');
        example:
        - content-desc
        - resource-id
        - texxt
        Lưu ý: XPath rất linh hoạt nhưng dài, khó đọc, dễ brittle, khó maintain
        -> Ưu tiên locator ổn định và đơn giản hơn trước
        */
    const element = $('//*[@content-desc="App"]');
    await expect(element).toBeExisting();
  });

  it("Finding element by Android UiAutomator", async () => {
    /** syntax
        const element = await $('android=new UiSelector().<method>("value")');
        */
    // Find by Text
    // $('android=new UiSelector().text("value")')
    // Find by Text Contains
    // $('android=new UiSelector().textContains("value")')
    // Find by Text Starts With
    // $('android=new UiSelector().textStartsWith("value")')
    // Find by Resource ID
    // $('android=new UiSelector().resourceId("resource-id")')
    // Find by Description
    // $('android=new UiSelector().description("value")')
  });

  it.only("Finding multiphe elements", async () => {
    // syntax
    // const elements = await $$('selector');

    const btnList = await $$("android.widget.TextView");
    const textList = [];
    for (const ele of btnList) {
      textList.push(await ele.getText());
    }
    console.log("check text list: ", textList);
  });
});
```

## Bài tập về nhà

Định vị mỗi phần tử trên trang Home bằng ít nhất 2 cách khác nhau

# Bài 4: Android Native Features: UI Interaction

## Mục tiêu

Học viên có thể xử lý các thành phần native phổ biến và thao tác với màn hình Android.

## Package & Activiity - Android

Package & Activity là gì?

- Package = định danh của ứng dụng. "Đây là app nào?"
- Activity = một màn hình/chức năng UI trong ứng dụng. "Trong app đó, mở màn hình nào"
- Cách xác định package và activity thông qua Appium

```ts
capabilities: ([
  {
    platformName: "Android",
    "appium:deviceName": "Pixel 4",
    "appium:platformVersion": "12.0",
    "appium:automationName": "UiAutomator2",
    "appium:appPackage": "io.appium.android.apis",
    "appium:appActivity": ".ApiDemos",
  },
]

it("Access an Activity directly", async () => {
    // access activity
    await driver.startActivity(
      "io.appium.android.apis",
      ".app.AlertDialogSamples",
    );

    // pause 3s
    await driver.pause(5000);

    // assert
    const pageTitle = await $(
      'android=new UiSelector().text("App/Alert Dialogs")',
    );
    expect(pageTitle).toBeExisting();
}));
```

### Working with Dialog & Alert Box

```ts
it("Working with Dialog Boxes", async () => {
  // open the target page
  await driver.startActivity(
    "io.appium.android.apis",
    ".app.AlertDialogSamples"
  );

  // click on first dialog

  // accept Alert

  // dismiss alert

  // click on the OK button

  // click on the Cancel button

  // assertion - alert box is no longer visiable
});
```

## Vertical Scrolling

Link: https://developer.android.com/reference/androidx/test/uiautomator/UiScrollable

```ts
it.only("Vertical Scrolling1", async () => {
  // open Activity app: App -> Activity
  await $("~App").click();
  await $("~Activity").click();

  // // scroll to end
  // // UiSelector tìm container → UiScrollable thao tác scroll → scrollToEnd() scroll đến cuối.
  // // 1 = tối đa bao nhiêu lần swipe, 5 = mỗi swipe được thực hiện với bao nhiêu step
  // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)')

  // // click on 'Secure Surfaces btn"
  // await $('~Secure Surfaces').click()

  // scrollTextIntoView
  await $(
    'android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")'
  ).click();

  // assertion Secure Dialog to be Exist
  await expect($("~Secure Dialog")).toBeExisting();
});
```

## Horizontal Scrolling

```ts
it.only("Horizontal Scrolling1", async () => {
  // open the target page
  // Views -> Gallery -> 1. Photos
  await driver.startActivity("io.appium.android.apis", ".view.Gallery1");

  // Horizontal scrolling
  await $(
    "android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()"
  );

  await $(
    "android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()"
  );

  await driver.pause(3000);
});
```

## Bài tập về nhà

- Access the Date Widget
- - View → Date Widgets → Dialog
- Get the current date
- Click “change the date”
- Scroll horizontally to the right
- Select the 10th date of the month
- Click the OK button
- Assert that the date has been updated

# Bài 5: Android Native Features: App & Device APIs

Link: https://webdriver.io/docs/api/mobile/

## App APIs - điều khiển vòng đời và cách mở app

launchApp()
background()
relaunchActiveApp()
deepLink()

## Device APIs - tương tác với trạng thái/dữ liệu của device

isLocked()
lock()
unlock()

## Thực hành

```
1. Launch app
       ↓
3. Đưa app xuống background 5 giây
       ↓
4. Relaunch app
       ↓
5. Lock device
       ↓
6. Verify device đang locked
       ↓
7. Unlock device
       ↓
8. Verify app vẫn hoạt động
```

````ts
    it.only('App & Device APIs', async () => {
        // 1. Open Views/Date Widgets/1. Dialog Page
        await driver.startActivity("io.appium.android.apis", ".view.DateWidgets1")

        // 3. Đưa app xuống background 5 giây & 4. Tự động Relaunch
        // Tham số 5 nghĩa là app sẽ ở trạng thái chạy ngầm 5s, sau đó khôi phục lại
        // await driver.background(5);

        await driver.background(-1)
        await driver.pause(5000)
        await driver.activateApp("io.appium.android.apis")

        // 5. Lock device
        await driver.lock();
        await driver.pause(5000)

        // 6. Verify device đang locked
        let isDeviceLocked = await driver.isLocked();
        expect(isDeviceLocked).toBe(true);

        // 7. Unlock device
        await driver.unlock();
        await driver.pause(5000)

        // Đảm bảo device đã unlock xong trước khi check element
        isDeviceLocked = await driver.isLocked();
        expect(isDeviceLocked).toBe(false);

        // 8. Verify app vẫn hoạt động
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
```

# Buổi 6, 7, 8: Page Object Model/ Practice with Android App

## Handle Permission

## Skip Tutorial Test

## Add Note Test

## Delete Note

# Buổi 9, 10: Webview

# Buổi 11: Reporting

# Buổi 12: Bài tập lớn
````
