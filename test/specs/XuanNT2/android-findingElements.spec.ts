describe("Android - Finding Elements", () => {
  it("Finding element by accessibility id", async () => {
    // syntax
    // const element = await $('~accessibilityId');
    // const appBtn = await $("~App");
    // await expect(appBtn).toBeExisting();
    // await appBtn.click();
    // await driver.pause(500);

    // ## Bài tập về nhà
    // Định vị mỗi phần tử trên trang Home bằng accessibilityId

    // get list items
    const elems = await $$(
      'android=new UiSelector().resourceId("android:id/text1")',
    );

    // get list accessibilityId
    const accessibilityIds = [];
    for (const elem of elems) {
      const accessibilityId = await elem.getAttribute("content-desc");

      accessibilityIds.push(accessibilityId);
    }
    console.log("Accessibility IDs:", accessibilityIds);

    // định vị các phần tử thông qua accessibilityId
    for (const accessibilityId of accessibilityIds) {
      const elem = await $(`~${accessibilityId}`);
      await expect(elem).toBeExisting();
      // await elem.click();
      // await driver.pause(500);
    }
  });

  it("Finding element by class name", async () => {
    // syntax
    // const element = await $('className');
    // Lưu ý: Việc sử dụng className để tìm kiếm thường không cho ra 1 kết quả duy nhất.
    // Nếu match nhiều element, thì WebdriverIO sẽ thao tác trên element được tìm thấy đầu tiên trong tập kết quả
    const appBtn = await $("android.widget.TextView");
    await expect(appBtn).toHaveText("API Demos");
  });

  it("Finding element by xPath", async () => {
    /** syntax
        const element = await $('//tagName[@attribute='value']');
        example:
        - content-desc
        - resource-id
        - text
        Lưu ý: XPath rất linh hoạt nhưng dài, khó đọc, dễ brittle, khó maintain
        -> Ưu tiên locator ổn định và đơn giản hơn trước
        */
    const appBtn = await $('//android.widget.TextView[@content-desc="App"]');
    await expect(appBtn).toBeExisting();
    await appBtn.click();
    await driver.pause(500);
  });

  it.only("Finding element by Android UiAutomator", async () => {
    // /** syntax
    //     const element = await $('android=new UiSelector().<method>("value")');
    //     */
    // // Find by Text
    // // $('android=new UiSelector().text("value")')
    // const appBtn = await $('android=new UiSelector().text("App")');
    // await expect(appBtn).toBeExisting();
    // await appBtn.click();
    // await driver.pause(500);

    // // Find by Text Contains
    // // $('android=new UiSelector().textContains("value")')
    // const graphicsBtn = await $(
    //   'android=new UiSelector().textContains("Graphics")',
    // );
    // await expect(graphicsBtn).toBeExisting();
    // await graphicsBtn.click();
    // await driver.pause(500);

    // // Find by Text Starts With
    // // $('android=new UiSelector().textStartsWith("value")')
    // const apidemoBtn = await $('android=new UiSelector().textStartWith("API")');
    // await expect(apidemoBtn).toBeExisting();
    // await apidemoBtn.click();
    // await driver.pause(500);

    // // Find by Resource ID
    // // $('android=new UiSelector().resourceId("resource-id")')
    // // Note: Do tìm kiếm bằng resourceId ra nhiều kết quả, nên sử dụng "chaining - nối" các điều kiện để kết quả tìm kiếm chính xác hơn
    // // alertBtn dùng 2 điều kiện là resourceId và text
    // const animationBtn = await $(
    //   'android=new UiSelector().resourceId("android:id/text1").text("Animation")',
    // );
    // await expect(animationBtn).toBeExisting();
    // await animationBtn.click();
    // await driver.pause(500);

    // // Find by Description
    // // $('android=new UiSelector().description("value")')
    // const preferenceBtn = await $(
    //   'android=new UiSelector().description("android:id/text1").text("Preference")',
    // );
    // await expect(preferenceBtn).toBeExisting();
    // await preferenceBtn.click();
    // await driver.pause(500);

    // ## Bài tập về nhà
    // Định vị mỗi phần tử trên trang Home bằng resourceId

    // get list items
    const elems = await $$(
      'android=new UiSelector().resourceId("android:id/text1")',
    );

    // định vị các phần tử thông qua resourceId
    for (const elem of elems) {
      const text = await elem.getText();
      const resourceId = await $(
        `android=new UiSelector().resourceId("android:id/text1").text("${text}")`,
      );
      await expect(resourceId).toBeExisting();
      // await elem.click();
      // await driver.pause(500);
    }
  });

  it("Finding multiphe elements", async () => {
    // syntax
    // const elements = await $$('selector');
    const btnList = await $$("android.widget.TextView");
    const textList = [];
    for (const elem of btnList) {
      textList.push(await elem.getText());
    }
    console.log("Text list", textList);
  });
});
