describe('Android - Finding Elements', () => {
    it('Finding element by accessibility id', async () => {
        // syntax
        // const element = await $('~accessibilityId');
    })

    it('Finding element by class name', async () => {
        // syntax
        // const element = await $('className');
        // Lưu ý: Việc sử dụng className để tìm kiếm thường không cho ra 1 kết quả duy nhất. 
        // Nếu match nhiều element, thì WebdriverIO sẽ thao tác trên element được tìm thấy đầu tiên trong tập kết quả

    })

    it('Finding element by xPath', async () => {
        /** syntax
        const element = await $('//tagName[@attribute='value']');
        example:
        - content-desc
        - resource-id
        - texxt
        Lưu ý: XPath rất linh hoạt nhưng dài, khó đọc, dễ brittle, khó maintain
        -> Ưu tiên locator ổn định và đơn giản hơn trước
        */
        const element = $('//*[@content-desc="App"]')
        await expect(element).toBeExisting()
    })

    it('Finding element by Android UiAutomator', async () => {
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

    })

    it.only('Finding multiphe elements', async () => {
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
