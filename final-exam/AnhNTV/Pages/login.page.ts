// Page Object cho màn hình Home
class HomePage {

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

    // Kiểm tra tiêu đề Menu có hiển thị
    async expectMenuDisplayed() {
        await expect(this.MenuTitle).toBeDisplayed();
    }


    // ==================== LOGIN / SIGN UP FORM ====================

    // Locator nút Login trong Menu
    get LoginBtn() {
        return $('android=new UiSelector().description("side-menu-item-login")');
    }

    // Click vào nút Login trong Menu
    async clickLogin() {
        await this.LoginBtn.click();
    }

    // Locator tiêu đề màn hình Login / Sign up
    get LoginTitle() {
        return $('android=new UiSelector().text("Login / Sign up Form")');
    }

    // Kiểm tra màn hình Login / Sign up có hiển thị
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

    // Locator nút SIGN UP trên form
    get SignUpSubmitBtn() {
        return $('android=new UiSelector().text("SIGN UP")');
    }

    // Click nút SIGN UP
    async clickSignUpSubmit() {
        await this.SignUpSubmitBtn.click();
    }


    // ==================== LOGIN ====================

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
}

// Export HomePage để sử dụng trong file test
export default new HomePage();