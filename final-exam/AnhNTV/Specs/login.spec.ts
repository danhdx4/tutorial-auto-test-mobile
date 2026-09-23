import LoginPage from '../pages/login.page.js';
import { LogInData } from '../data/login.data.js';

describe('Login', () => {

    it('Login successfully', async () => {

        await LoginPage.clickMenu();
        await LoginPage.expectMenuDisplayed();

        await LoginPage.clickLogin();
        await LoginPage.expectLoginDisplayed();

        await LoginPage.clickLoginTab();

        // Lấy data Login thành công
        await LoginPage.enterEmail(LogInData[0].email);
        await LoginPage.enterPassword(LogInData[0].password);

        await LoginPage.clickLoginSubmit();

        // Verify message
        await LoginPage.expectMessageDisplayed(LogInData[0].message);
    });
});