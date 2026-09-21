import Page from "./page.ts"

class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get logo() {
        return $('android=new UiSelector().className("android.widget.ImageView").instance(0)")')
    }

    public async waitForLoad() {
        await expect(this.logo).toBeDisplayed()
    }
}

export default new HomePage()