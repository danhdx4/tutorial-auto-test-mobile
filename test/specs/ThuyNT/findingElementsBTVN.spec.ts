describe('Android - Finding Elements', () => {
    it('Finding element by accessibility id', async () => {
        // syntax
        // const element = await $('~accessibilityId');
        const appBtn = await $('~App')

        await expect(appBtn).toBeExisting()

        await appBtn.click()
        //BTVN

        const activityBtn = await $('~Activity')

        await expect(activityBtn).toBeExisting()

        await activityBtn.click()

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
        const contentBtn = await $('//*[@content-desc="Content"]')

        await expect(contentBtn).toBeExisting()

        await contentBtn.click()

        const clipBoardBtn = await $('//android.widget.TextView[@content-desc="Clipboard"]')

        await clipBoardBtn.click()

        await driver.pause(5000)
    })

    it.only('Finding element by Android UiAutomator', async () => {
        // Find by Text
        const graphicBtn = await $('android=new UiSelector().text("Graphics")')

        await expect(graphicBtn).toBeExisting()
        await graphicBtn.click()

        // Find by Text Contains
        const clippingBtn = await $('android=new UiSelector().textContains("Clipping")')

        await expect(clippingBtn).toBeExisting()

        await clippingBtn.click()

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
