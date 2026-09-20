import Page from './page.js';

export type NavBtn = 'Home' | 'Webview' | 'Login' | 'Swipe' | 'Menu'

export default class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get logo(){
        return $('android=new UiSelector().className("android.widget.ImageView").instance(0)')
    }
    public async waitForLoad(){
        await this.logo.waitForDisplayed({
            timeout: 60000,
            timeoutMsg: 'Home page did not load'
        })
    }
    public async navigateToTab(type: NavBtn) {
        const tab = await $(`~${type}`)

        await tab.waitForDisplayed({
            timeout: 60000,
            timeoutMsg: `Navigation tab "${type}" was not displayed`
        })
        await tab.click()
    }
}
