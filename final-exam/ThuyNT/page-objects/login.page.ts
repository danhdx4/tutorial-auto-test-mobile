import Page from "./page.ts";

class LoginPage extends Page {
    public get loginPage() {
        return $('android=new UiSelector().description("Login")');
    }

    public get signInPage() {
        return $('android=new UiSelector().text("Sign up")');
    }

    public get emailInput() {
        return $('~input-email');
    }

    public get passwordInput() {
        return $('~input-password');
    }

    public get confirmPasswordInput() {
        return $('~input-repeat-password');
    }

    public get signInButton() {
        return $('android=new UiSelector().description("button-SIGN UP")');
    }

    public get signInSuccessMessage() {
        return $('//*[@text="You successfully signed up!"]');
    }

    public get loginBtn() {
        return $('android=new UiSelector().description("button-LOGIN")');
    }

    public get loginSuccessMessage() {
        return $('//*[@text="You are logged in!"]');
    }

    public async verifyLoginPage() {
        await this.loginPage.click();
        await expect(this.loginPage).toBeDisplayed();
    }

    public async verifySignInPage() {
        await this.signInPage.click();
        await expect(this.signInPage).toBeDisplayed();
    }

    public async fillSignInForm(email: string, password: string, confirmPassword: string) {
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.confirmPasswordInput.setValue(confirmPassword);
    }

    public async fillLoginForm(email: string, password: string) {
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
    }


}

export default new LoginPage();