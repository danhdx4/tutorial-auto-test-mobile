import HomePage from '../../../final-exam/ThuyCN/page-objects/home.page.ts';
import LoginPage from '../../../final-exam/ThuyCN/page-objects/login.page.ts';
import Page from '../../../final-exam/ThuyCN/page-objects/page.ts';
import { LogInData } from '../../../final-exam/ThuyCN/data-test/login-data.ts';

const homePage = new HomePage()
const loginPage = new LoginPage()
const basePage = new Page()

describe('Log In', () => {
    it('Go to login tab', async () => {
        // go to Login Tab
        await homePage.navigateToTab('Login')
        // assertion
        await loginPage.loginPageTitle()
    });

    it('Email field must be valid', async () => {
        // log in a created account
        await loginPage.loginOrSignUpBtn('Login')
        await loginPage.fillLoginInForm(LogInData[1])
        await loginPage.clickLoginBtn()
        // assertion
        await loginPage.verifyErrorMsg('Please enter a valid email address')
    });

    it('Password field must be valid', async () => {
        // log in a created account
        await loginPage.loginOrSignUpBtn('Login')
        await loginPage.fillLoginInForm(LogInData[2])
        await loginPage.clickLoginBtn()
        // assertion
        await loginPage.verifyErrorMsg('Please enter at least 8 characters')
    });

    it('Should be log in successfully', async () => {
        // log in a created account
        await loginPage.loginOrSignUpBtn('Login')
        await loginPage.fillLoginInForm(LogInData[0])
        // Check input value of fields
        await loginPage.verifyLogInInput(LogInData[0].email);
        await loginPage.clickLoginBtn()
        // assertion
        await loginPage.verifyPopupTitle()
        await loginPage.okBtn.click()
    });
})