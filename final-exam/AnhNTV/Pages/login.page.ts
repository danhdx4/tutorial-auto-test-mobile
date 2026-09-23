import Page from './page.js';

// Page Object cho màn hình Login
class LoginPage extends Page {

    // ==================== MENU ====================

    // Locator nút Menu
    get MenuBtn() {
        return $('android=new UiSelector().text("Menu")');
    }

    // Click vào nút Menu
    async clickMenu() {
        await this.MenuBtn.click();
    }

    // Locator tiêu đề Menu
    get MenuTitle() {
        return $('android=new UiSelector().text("Menu")');
    }

    // Kiểm tra Menu hiển thị
    async expectMenuDisplayed() {
        await expect(this.MenuTitle).toBeDisplayed();
    }


    // ==================== LOGIN ====================

    // Locator nút Login trong Menu
    get LoginBtn() {
        return $('android=new UiSelector().description("side-menu-item-login")');
    }

    // Click Login
    async clickLogin() {
        await this.LoginBtn.click();
    }

    // Locator tiêu đề Login
    get LoginTitle() {
        return $('android=new UiSelector().text("Login")');
    }

    // Kiểm tra màn hình Login hiển thị
    async expectLoginDisplayed() {
        await expect(this.LoginTitle).toBeDisplayed();
    }


    // ==================== SIGN UP ====================

    // Locator tab Sign up
    get SignUpBtn() {
        return $('android=new UiSelector().text("Sign up")');
    }

    // Click vào tab Sign up
    async clickSignUp() {
        await this.SignUpBtn.click();
    }


    // ==================== LOGIN FORM ====================

    // Locator ô nhập Email
    get EmailInput() {
        return $('android=new UiSelector().text("Email")');
    }

    // Nhập Email
    async enterEmail(email: string) {
        await this.EmailInput.setValue(email);
    }

    // Locator ô nhập Password
    get PasswordInput() {
        return $('android=new UiSelector().text("Password")');
    }

    // Nhập Password
    async enterPassword(password: string) {
        await this.PasswordInput.setValue(password);
    }

    // Locator ô nhập Confirm Password
    get ConfirmPasswordInput() {
        return $('android=new UiSelector().text("Confirm password")');
    }

    // Nhập lại Password để xác nhận
    async enterConfirmPassword(confirmPassword: string) {
        await this.ConfirmPasswordInput.setValue(confirmPassword);
    }

    // Locator tab Login
    get LoginTabBtn() {
        return $('android=new UiSelector().text("Login")');
    }

    // Click vào tab Login
    async clickLoginTab() {
        await this.LoginTabBtn.click();
    }

    // Locator nút LOGIN trên form
    get LoginSubmitBtn() {
        return $('android=new UiSelector().text("LOGIN")');
    }

    // Click nút LOGIN
    async clickLoginSubmit() {
        await this.LoginSubmitBtn.click();
    }

    // Locator nút SIGN UP trên form
    get SignUpSubmitBtn() {
        return $('android=new UiSelector().text("SIGN UP")');
    }

    // Click nút SIGN UP
    async clickSignUpSubmit() {
        await this.SignUpSubmitBtn.click();
    }


    // ==================== MESSAGE ====================

    // Kiểm tra message
    async expectMessageDisplayed(message: string) {
        await expect(
            $('android=new UiSelector().text("' + message + '")')
        ).toBeDisplayed();
    }
}

export default new LoginPage();