describe('Android - Finding Elements', () => {
    it.only('Finding element by accessibility id', async () => {
        // syntax
        // const element = await $('~accessibilityId');
        
        //find Accessibility
        const accessibilityBtn = await $('~Accessibility')
        await expect(accessibilityBtn).toBeExisting()
        await accessibilityBtn.click()
        
        //find Animation
        const animationBtn = await $('~Animation')
        await expect(animationBtn).toBeExisting()
        await animationBtn.click()

        //find App
        const appBtn = await $('~App')
        await expect(appBtn).toBeExisting()
        await appBtn.click()

        //find Content
        const contentBtn = await $('~Content')
        await expect(contentBtn).toBeExisting()
        await contentBtn.click()

        //find Graphics
        const graphicsBtn = await $('~Graphics')
        await expect(graphicsBtn).toBeExisting()
        await graphicsBtn.click()

        //find Media
        const mediaBtn = await $('~Media')
        await expect(mediaBtn).toBeExisting()
        await mediaBtn.click()

        //find NFC
        const nfcBtn = await $('~NFC')
        await expect(nfcBtn).toBeExisting()
        await nfcBtn.click() 

        //find OS
        const osBtn = await $('~OS')
        await expect(osBtn).toBeExisting()
        await osBtn.click() 

        //find Preference
        const preferenceBtn = await $('~Preference')
        await expect(preferenceBtn).toBeExisting()
        await preferenceBtn.click()

        //find Text
        const textBtn = await $('~Text')
        await expect(textBtn).toBeExisting()
        await textBtn.click()

        //find Views
        const viewsBtn = await $('~Views')
        await expect(viewsBtn).toBeExisting()
        await viewsBtn.click()

        await driver.pause(5000)
    })

    it('Finding element by class name', async () => {
        // syntax
        // const element = await $('className');
        // Lưu ý: Việc sử dụng className để tìm kiếm thường không cho ra 1 kết quả duy nhất. 
        // Nếu match nhiều element, thì WebdriverIO sẽ thao tác trên element được tìm thấy đầu tiên trong tập kết quả

         //find Accessibility
         const accessibilityBtn = await $('android.widget.TextView')
         await expect(accessibilityBtn).toBeExisting()
         await accessibilityBtn.click()
         
         //find Animation
         const animationBtn = await $('android.widget.TextView')
         await expect(animationBtn).toBeExisting()
         await animationBtn.click()
 
         //find App
         const appBtn = await $('android.widget.TextView')
         await expect(appBtn).toBeExisting()
         await appBtn.click()
 
         //find Content
         const contentBtn = await $('android.widget.TextView')
         await expect(contentBtn).toBeExisting()
         await contentBtn.click()
 
         //find Graphics
         const graphicsBtn = await $('android.widget.TextView')
         await expect(graphicsBtn).toBeExisting()
         await graphicsBtn.click()
 
         //find Media
         const mediaBtn = await $('android.widget.TextView')
         await expect(mediaBtn).toBeExisting()
         await mediaBtn.click()
 
         //find NFC
         const nfcBtn = await $('android.widget.TextView')
         await expect(nfcBtn).toBeExisting()
         await nfcBtn.click() 
 
         //find OS
         const osBtn = await $('android.widget.TextView')
         await expect(osBtn).toBeExisting()
         await osBtn.click() 
 
         //find Preference
         const preferenceBtn = await $('~android.widget.TextView')
         await expect(preferenceBtn).toBeExisting()
         await preferenceBtn.click()
 
         //find Text
         const textBtn = await $('android.widget.TextView')
         await expect(textBtn).toBeExisting()
         await textBtn.click()
 
         //find Views
         const viewsBtn = await $('android.widget.TextView')
         await expect(viewsBtn).toBeExisting()
         await viewsBtn.click()
 
         await driver.pause(5000)
     })

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

        //find Accessibility
        const accessibilityBtn = await $('//android.widget.TextView[@content-desc="Accessibility"]')
        await expect(accessibilityBtn).toBeExisting();
        await accessibilityBtn.click();

        //find Animation
         const animationBtn = await $('//android.widget.TextView[@content-desc="Animation"]')
         await expect(animationBtn).toBeExisting()
         await animationBtn.click()
 
         //find App
         const appBtn = await $('//android.widget.TextView[@content-desc="App"]')
         await expect(appBtn).toBeExisting()
         await appBtn.click()
 
         //find Content
         const contentBtn = await $('//android.widget.TextView[@content-desc="Content"]')
         await expect(contentBtn).toBeExisting()
         await contentBtn.click()
 
         //find Graphics
         const graphicsBtn = await $('//android.widget.TextView[@content-desc="Graphics"]')
         await expect(graphicsBtn).toBeExisting()
         await graphicsBtn.click()
 
         //find Media
         const mediaBtn = await $('//android.widget.TextView[@content-desc="Media"]')
         await expect(mediaBtn).toBeExisting()
         await mediaBtn.click()
 
         //find NFC
         const nfcBtn = await $('//android.widget.TextView[@content-desc="NFC"]')
         await expect(nfcBtn).toBeExisting()
         await nfcBtn.click() 
 
         //find OS
         const osBtn = await $('//android.widget.TextView[@content-desc="OS"]')
         await expect(osBtn).toBeExisting()
         await osBtn.click() 
 
         //find Preference
         const preferenceBtn = await $('//android.widget.TextView[@content-desc="Preference"]')
         await expect(preferenceBtn).toBeExisting()
         await preferenceBtn.click()
 
         //find Text
         const textBtn = await $('//android.widget.TextView[@content-desc="Text"]')
         await expect(textBtn).toBeExisting()
         await textBtn.click()
 
         //find Views
         const viewsBtn = await $('//android.widget.TextView[@content-desc="Views"]')
         await expect(viewsBtn).toBeExisting()
         await viewsBtn.click()
 
         await driver.pause(5000)

    })

    it('Finding element by Android UiAutomator', async () => {
        /** syntax
        const element = await $('android=new UiSelector().<method>("value")');
        */

        //find Accessibility
        const accessibilityBtn = await $('new UiSelector().text("Accessibility")')
        await expect(accessibilityBtn).toBeExisting();
        await accessibilityBtn.click();

        //find Animation
         const animationBtn = await $('new UiSelector().text("Animation")')
         await expect(animationBtn).toBeExisting()
         await animationBtn.click()
 
         //find App
         const appBtn = await $('new UiSelector().text("App")')
         await expect(appBtn).toBeExisting()
         await appBtn.click()
 
         //find Content
         const contentBtn = await $('new UiSelector().text("Content")')
         await expect(contentBtn).toBeExisting()
         await contentBtn.click()
 
         //find Graphics
         const graphicsBtn = await $('new UiSelector().text("Graphics")')
         await expect(graphicsBtn).toBeExisting()
         await graphicsBtn.click()
 
         //find Media
         const mediaBtn = await $('new UiSelector().text("Media")')
         await expect(mediaBtn).toBeExisting()
         await mediaBtn.click()
 
         //find NFC
         const nfcBtn = await $('new UiSelector().text("NFC")')
         await expect(nfcBtn).toBeExisting()
         await nfcBtn.click() 
 
         //find OS
         const osBtn = await $('new UiSelector().text("OS")')
         await expect(osBtn).toBeExisting()
         await osBtn.click() 
 
         //find Preference
         const preferenceBtn = await $('new UiSelector().text("Preference")')
         await expect(preferenceBtn).toBeExisting()
         await preferenceBtn.click()
 
         //find Text
         const textBtn = await $('new UiSelector().text("Text")')
         await expect(textBtn).toBeExisting()
         await textBtn.click()
 
         //find Views
         const viewsBtn = await $('new UiSelector().text("Views")')
         await expect(viewsBtn).toBeExisting()
         await viewsBtn.click()
 
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

