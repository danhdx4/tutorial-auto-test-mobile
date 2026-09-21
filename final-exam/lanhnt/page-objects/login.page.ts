import Page from "./page.ts"

export default class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get title() {
        return $('android=new UiSelector().text("Login / Sign up Form")')
    }
    public get loginTabBtn() {
        return $('~button-login-container')
    }
    public get signupTabBtn() {
        return $('~button-sign-up-container')
    }

    public async waitForLoad() {
        await expect(this.title).toBeDisplayed()
    }

    public async verifyErrorMgs(errMsgText: string) {
        const errMsg = $(`android=new UiSelector().text("${errMsgText}")`)
        await expect(errMsg).toBeExisting()
    }

    public async verifySuccessAlert(msgText: string) {
        const msg = $(`android=new UiSelector().resourceId("android:id/message")`)
        await expect(msg).toHaveText(msgText)
        const okBtn = $('android=new UiSelector().text("OK")')
        await okBtn.click()
    }
}