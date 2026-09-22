import LoginPage from '../Pages/login.page.js';

describe('Sign up', () => {

    it('Sign up successfully', async () => {

        // 1. Click Menu
        await LoginPage.clickMenu();

        // 2. Verify Menu hiển thị
        await LoginPage.expectMenuDisplayed();

        // 3. Click Login
        await LoginPage.clickLogin();

        // 4. Verify màn Login hiển thị
        await LoginPage.expectLoginDisplayed();

        // 5. Click Sign up
        await LoginPage.clickSignUp();

        // 6. Nhập Email
        await LoginPage.enterEmail('test123@gmail.com');

        // 7. Nhập Password
        await LoginPage.enterPassword('123456');

        // 8. Nhập Confirm Password
        await LoginPage.enterConfirmPassword('123456');

        // 9. Click SIGN UP
        await LoginPage.clickSignUpSubmit();

    });

});