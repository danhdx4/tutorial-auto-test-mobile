import HomePage from '../page-objects/home.page.ts';
import LoginPage from '../page-objects/login.page.ts';
import Page from '../page-objects/page.ts';
import { SignUpData } from '../data-test/signup-data.ts';

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
        // create a new account
        await loginPage.loginOrSignUpBtn('Sign up')
        await loginPage.fillSignUpForm(SignUpData[1])
        await loginPage.clickSignUpBtn()
        // assertion
        await loginPage.verifyErrorMsg('Please enter a valid email address')
    });

    it('Password field must be valid', async () => {
        // create a new account
        await loginPage.loginOrSignUpBtn('Sign up')
        await loginPage.fillSignUpForm(SignUpData[2])
        await loginPage.clickSignUpBtn()
        // assertion
        await loginPage.verifyErrorMsg('Please enter at least 8 characters')
    });

    it('Repeat password field must be valid', async () => {
        // create a new account
        await loginPage.loginOrSignUpBtn('Sign up')
        await loginPage.fillSignUpForm(SignUpData[3])
        await loginPage.clickSignUpBtn()
        // assertion
        await loginPage.verifyErrorMsg('Please enter the same password')
    });

    it('Should be sign up successfully', async () => {
        // create a new account
        await loginPage.loginOrSignUpBtn('Sign up')
        await loginPage.fillSignUpForm(SignUpData[0])
        // Check input value of fields
        await loginPage.verifySignUpInput(SignUpData[0].email)
        await loginPage.clickSignUpBtn()
        // assertion
        await loginPage.verifyPopupTitle()
        await loginPage.okBtn.click()
    });
})