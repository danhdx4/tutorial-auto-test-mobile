describe('Android - Finding Elements', () => {
    it.only('Finding element by accessibility id', async () => {
        // syntax
        // const element = await $('~accessibilityId');
        const appBtn = await $('~App')

        await expect(appBtn).toBeExisting()

        await appBtn.click()

        await driver.pause(5000)
    })

    it('Finding element by class name', async () => {
        // syntax
        // const element = await $('className');
        // Lưu ý: Việc sử dụng className để tìm kiếm thường không cho ra 1 kết quả duy nhất. 
        // Nếu match nhiều element, thì WebdriverIO sẽ thao tác trên element được tìm thấy đầu tiên trong tập kết quả

        const logo = await $('android.widget.TextView') //trả ra phần tử đầu tiên tìm được

        await expect(logo).toHaveText('API Demos')
    })

    it('Finding element by xPath', async () => {
        /** syntax
        const element = await $('//tagName[@attribute='value']');
        example:
        - content-desc
        - resource-id
        - text
        Lưu ý: XPath rất linh hoạt nhưng dài, khó đọc, dễ brittle, khó maintain
        -> Ưu tiên locator ổn định và đơn giản hơn trước
        */
        const appBtn = await $('//*[@content-desc="App"]')

        await expect(appBtn).toBeExisting()

        await appBtn.click()

        await driver.pause(5000)
    })

    it('Finding element by Android UiAutomator', async () => {
        /** syntax
        const element = await $('android=new UiSelector().<method>("value")');
        */

        // Find by Text
        // $('android=new UiSelector().text("value")')
        const appBtn = await $('android=new UiSelector().text("App")')

        await expect(appBtn).toBeExisting()

        await appBtn.click()

        // Find by Text Contains
        // $('android=new UiSelector().textContains("value")')
        const actionBarBtn = await $('android=new UiSelector().textContains("Action")')

        await expect(actionBarBtn).toBeExisting()

        // Find by Text Starts With
        // $('android=new UiSelector().textStartsWith("value")')

        // Find by Resource ID
        // $('android=new UiSelector().resourceId("resource-id")')
        // Note: Do tìm kiếm bằng resourceId ra nhiều kết quả, nên sử dụng "chaining - nối" các điều kiện để kết quả tìm kiếm chính xác hơn
        // alertBtn dùng 2 điều kiện là resourceId và text
        const alertBtn = await $('android=new UiSelector().resourceId("android:id/text1").text("Alert Dialogs")')
        await alertBtn.click()

        // Find by Description
        // $('android=new UiSelector().description("value")')
        const listDialogBtn = await $('android=new UiSelector().description("List dialog")')
        await listDialogBtn.click()

        await driver.pause(5000)
    })

    it('Finding multiphe elements', async () => {
        // syntax
        // const elements = await $$('selector');

        const btnList = await $$('android.widget.TextView')
        const textList = []
        for (const ele of btnList) {
            textList.push(await ele.getText())
        }
        console.log("check text list: ", textList)
    })
})
