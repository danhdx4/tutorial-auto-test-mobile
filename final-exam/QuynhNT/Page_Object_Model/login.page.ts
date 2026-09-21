import Page from "./page.ts";
export type SignUp = {
  email: string;
  password: string;
  confirmPassword: string;
};
export default class LoginPage extends Page {
  // ===== Locators =====
  public get logo() {
    return $('android=new UiSelector().text("Login / Sign up Form")');
  }
  public get tabSignUp() {
    return $('android=new UiSelector().text("Sign up")');
  }
  public get inputEmail() {
    return $("~input-email");
  }
  public get inputPassword() {
    return $("~input-password");
  }
  public get inputConfirmPassword() {
    return $("~input-repeat-password");
  }
  public get tabLogin() {
    return $('android=new UiSelector().text("Login")');
  }
  public get btnSignUp() {
    return $('android=new UiSelector().text("SIGN UP")');
  }
  public get btnLogin() {
    return $('android=new UiSelector().text("LOGIN")');
  }
  public get SuccessMessage() {
    return $(
      'android=new UiSelector().resourceId("com.wdiodemoapp:id/alert_title")',
    );
  }
  public get closeSuccessDialog() {
    return $('android=new UiSelector().resourceId("android:id/button1")');
  }
  // ===== Action =====
  public async waitForLoad() {
    await expect(this.logo).toBeDisplayed();
  }
  public async chooseSignUp() {
    await this.tabSignUp.click();
  }
  public async chooseLogin() {
    await this.tabLogin.click();
  }
  public async fillSignUpForm(data: SignUp) {
    await this.inputEmail.setValue(data.email);
    await this.inputPassword.setValue(data.password);
    await this.inputConfirmPassword.setValue(data.confirmPassword);
  }
  public async submitSignUp() {
    await this.btnSignUp.click();
  }
  public async fillPwLogin(password: string) {
    await this.inputPassword.setValue(password);
  }
  public async submitLogin() {
    await this.btnLogin.click();
  }
  public async verifySignUpSuccess() {
    await expect(this.SuccessMessage).toBeDisplayed();
  }
  public async confirmSignUpSuccess() {
    await this.closeSuccessDialog.click();
  }
  // ===== Assertions =====
  public async verifyState(email: string) {
    const actualEmail = await this.inputEmail.getAttribute("text"); //lấy nội dung hiện tại
    expect(actualEmail).toBe(email); //so sánh email trên giao diện với email mong đợi
    await expect(this.inputEmail).toBeDisabled;
  }
  public async verifyLoginSuccess() {
    await expect(this.SuccessMessage).toBeDisplayed();
  }
  public async confirmLoginSuccess() {
    await this.closeSuccessDialog.click();
  }
}
