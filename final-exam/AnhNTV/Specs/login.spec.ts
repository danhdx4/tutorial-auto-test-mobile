import LoginPage from '../Pages/login.page.js';

describe('Login', () => {
    it('Login successfully', async () => {
        await LoginPage.clickMenu();
        await LoginPage.expectMenuDisplayed();
        await LoginPage.clickLogin();
        await LoginPage.expectLoginDisplayed();
        await LoginPage.clickLoginTab();
        await LoginPage.enterEmail('bob@example.com');
        await LoginPage.enterPassword('102030');
        await LoginPage.clickLoginSubmit();
    });
});
