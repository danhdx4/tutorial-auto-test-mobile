import Page from './page.js';

export type FunctionType = 'Login' | 'Sign up'

export default class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public async loginPageTitle(){
        await expect ($('android=new UiSelector().text("Login / Sign up Form")')).toBeExisting()
    }
    public async loginOrSignUpBtn(type: FunctionType) {
        await $(`android=new UiSelector().text("${type}")`).click()
    }
    public get emailField(){
        return $('~input-email')
    }
    public get pwField(){
        return $('~input-password')
    }
    public get repeatPwField(){
        return $('~input-repeat-password')
    }
    public async fillSignUpForm(data: {
        email: string,
        password: string,
        repeatPassword: string
    }){
        await this.emailField.addValue(data.email)
        await this.pwField.addValue(data.password)
        await this.repeatPwField.addValue(data.repeatPassword)
    }
    public async fillLoginInForm(data: {
        email: string,
        password: string
    }){
        await this.emailField.addValue(data.email)
        await this.pwField.addValue(data.password)
    }
    public async clickSignUpBtn(){
        await $('~button-SIGN UP').click()
    }
    public async clickLoginBtn(){
        await $('~button-LOGIN').click()
    }
    public async verifyPopupTitle(){
        await expect ($('android=new UiSelector().resourceId("com.wdiodemoapp:id/alert_title")')).toBeDisplayed()
    }
    public get okBtn(){
        return $('android=new UiSelector().resourceId("android:id/button1")')
    }
    public async verifyErrorMsg(msg: string){
        await expect($(`android=new UiSelector().text("${msg}")`)).toBeDisplayed()
    }
    public async verifySignUpInput(email: string){
        await expect(this.emailField).toHaveText(email),
        await expect(this.pwField).toHaveAttribute('password', 'true'),
        await expect(this.repeatPwField).toHaveAttribute('password', 'true')
    }
    public async verifyLogInInput(email: string){
        await expect(this.emailField).toHaveText(email),
        await expect(this.pwField).toHaveAttribute('password', 'true')
    }
}
