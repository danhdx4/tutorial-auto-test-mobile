import LoginPage from '../pages/login.page.js';
import { SignUpData } from '../data/sing-up.data.js';

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
        await LoginPage.enterEmail(SignUpData.success.email);

        // 7. Nhập Password
        await LoginPage.enterPassword(SignUpData.success.password);

        // 8. Nhập Confirm Password
        await LoginPage.enterConfirmPassword(
            SignUpData.success.confirmPassword
        );

        // 9. Click SIGN UP
        await LoginPage.clickSignUpSubmit();

        // 10. Verify message
        await LoginPage.expectMessageDisplayed(
            SignUpData.success.message
        );
    });
});