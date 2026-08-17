describe('Android - Finding Elements', () => {
    it('Click Accessibility', async () => {
        //Locator by accessibility id
        const accessibilityBtn1 = await $('~Accessibility')
        await expect(accessibilityBtn1).toBeExisting()
        await accessibilityBtn1.click()
        await driver.pause(5000)

        //Locator by android uiautomator
        const accessibilityBtn2 = await $('android=new UiSelector().text("Accessibility")')
        await expect(accessibilityBtn2).toBeExisting()
        await accessibilityBtn2.click()
        await driver.pause(5000)
    })

    it('Click Animation', async () => {
        //Locator by xPath
        const Animation1 = await $('//*[@content-desc="Animation"]')
        await expect(Animation1).toBeExisting()
        await Animation1.click()
        await driver.pause(5000)

        //Locator by android uiautomator
        const Animation2 = await $('android=new UiSelector().textContains("Animation")')
        await expect(Animation2).toBeExisting()
        await Animation2.click()
        await driver.pause(5000)
    })

    it('Click App', async () => {
        //Locator by accessibility id
        const App1 = await $('~App')
        await expect(App1).toBeExisting()
        await App1.click()
        await driver.pause(5000)

        //Locator by android uiautomator
        const App2 = await $('android=new UiSelector().description("App")')
        await expect(App2).toBeExisting()
        await App2.click()
        await driver.pause(5000)
    })

    it('Click Content', async () => {
        // Locator by accessibility id
        const Content1 = await $('~Content')
        await expect(Content1).toBeExisting()
        await Content1.click()
        await driver.pause(5000)

        //Locator by android uiautomator
        const Content2 = await $('android=new UiSelector().textContains("Content")')
        await expect(Content2).toBeExisting()
        await Content2.click()
        await driver.pause(5000)
    })

    it('Click Graphics', async () => {
        //Locator by accessibility id
        const Graphics1 = await $('~Graphics')
        await expect(Graphics1).toBeExisting()
        await Graphics1.click()
        await driver.pause(5000)

        //Locator by android uiautomator
        const Graphics2 = await $('android=new UiSelector().textStartsWith("G")')
        await expect(Graphics2).toBeExisting()
        await Graphics2.click()
        await driver.pause(5000)
    })

    it('Click Media', async () => {
        //Locator by accessibility id
        const Media1 = await $('~Media')
        await expect(Media1).toBeExisting()
        await Media1.click()
        await driver.pause(5000)

        //Locator by android uiautomator
        const Media2 = await $('android=new UiSelector().text("Media")')
        await expect(Media2).toBeExisting()
        await Media2.click()
        await driver.pause(5000)
    })

    it('Click NFC', async () => {
        //Locator by accessibility id
        const NFC1 = await $('~NFC')
        await expect(NFC1).toBeExisting()
        await NFC1.click()
        await driver.pause(5000)

        //Locator by android uiautomator
        const NFC2 = await $('android=new UiSelector().textContains("NFC")')
        await expect(NFC2).toBeExisting()
        await NFC2.click()
        await driver.pause(5000)
    })

    it('Click OS', async () => {
        //Locator by accessibility id
        const OS1 = await $('~OS')
        await expect(OS1).toBeExisting()
        await OS1.click()
        await driver.pause(5000)

        //Locator by android uiautomator
        const OS2 = await $('android=new UiSelector().textStartsWith("O")')
        await expect(OS2).toBeExisting()
        await OS2.click()
        await driver.pause(5000)
    })

    it('Click Preference', async () => {
        //Locator by accessibility id
        const Preference1 = await $('~Preference')
        await expect(Preference1).toBeExisting()
        await Preference1.click()
        await driver.pause(5000)

        //Locator by android uiautomator
        const Preference2 = await $('android=new UiSelector().description("Preference")')
        await expect(Preference2).toBeExisting()
        await Preference2.click()
        await driver.pause(5000)
    })

    it('Click Text', async () => {
        //Locator by accessibility id
        const Text1 = await $('~Text')
        await expect(Text1).toBeExisting()
        await Text1.click()
        await driver.pause(5000)

        //Locator by android uiautomator
        const Text2 = await $('android=new UiSelector().text("Text")')
        await expect(Text2).toBeExisting()
        await Text2.click()
        await driver.pause(5000)
    })

    it('Click Views', async () => {
        //Locator by accessibility id
        const Views1 = await $('~Views')
        await expect(Views1).toBeExisting()
        await Views1.click()
        await driver.pause(5000)

        //Locator by android uiautomator
        const Views2 = await $('android=new UiSelector().text("Views")')
        await expect(Views2).toBeExisting()
        await Views2.click()
        await driver.pause(5000)
    })
})