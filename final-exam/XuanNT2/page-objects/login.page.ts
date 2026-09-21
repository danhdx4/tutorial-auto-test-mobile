import Page from "./page.js";

export default class LoginPage extends Page {
  public get loginTab() {
    return $('android=new UiSelector().text("Login")');
  }

  public get signUpTab() {
    return $('android=new UiSelector().text("Sign up")');
  }

  /**
   * Login
   */
  public get inputEmail() {
    // return $('android=new UiSelector().text("Email")');
    return $("~input-email");
  }
  public get inputPassword() {
    // return $('android=new UiSelector().text("Password")');
    return $("~input-password");
  }
  public get loginBtn() {
    return $('android=new UiSelector().text("LOGIN")');
  }

  /**
   * Sign Up
   */
  public get signUpInputEmail() {
    // return $('android=new UiSelector().text("Email")');
    return $("~input-email");
  }

  public get signUpPasswordInput() {
    // return $('android=new UiSelector().text("Password")');
    return $("~input-password");
  }

  public get signUpConfirmInputPassword() {
    return $('android=new UiSelector().text("Confirm password")');
  }
  public get signUpBtn() {
    return $('android=new UiSelector().text("SIGN UP")');
  }

  // Actions
  // click button Login in footer
  public async chooseLogin() {
    await this.loginTab.click();
  }

  // login
  public async login(email: string, password: string) {
    await this.inputEmail.setValue(email);
    await this.inputPassword.setValue(password);

    await this.loginBtn.click();
  }

  // Message dialog
  public get loginSuccessTitle() {
    return $('android=new UiSelector().text("Success")');
  }

  public get loginSuccessMessage() {
    return $('android=new UiSelector().text("You are logged in!")');
  }

  public get loginSuccessOkBtn() {
    return $('android=new UiSelector().text("OK")');
  }

  public async closeSuccessOkBtn() {
    await this.loginSuccessOkBtn.click();
  }

  // message fix
  // public async verifySuccessMessage() {
  //   await expect(this.loginSuccessTitle).toHaveText("Success");
  //   await expect(this.loginSuccessMessage).toHaveText("You are logged in!");
  //   await expect(this.loginSuccessOkBtn).toHaveText("OK");
  // }

  // message flexiable
  public async verifySuccessMessage(
    title: string,
    message: string,
    btnOK: string,
  ) {
    const titleElement = $(`android=new UiSelector().text("${title}")`);
    const messageElement = $(`android=new UiSelector().text("${message}")`);
    const okButton = $(`android=new UiSelector().text("${btnOK}")`);

    await expect(titleElement).toHaveText(title);
    await expect(messageElement).toHaveText(message);
    await expect(okButton).toHaveText(btnOK);
  }

  // click tab Sign Up
  public async chooseSignUp() {
    await this.signUpTab.click();
  }

  public async signUp(
    email: string,
    password: string,
    confirmPassword: string,
  ) {
    await this.signUpInputEmail.setValue(email);
    await this.signUpPasswordInput.setValue(password);
    await this.signUpConfirmInputPassword.setValue(confirmPassword);

    await this.signUpBtn.click();
  }
}
