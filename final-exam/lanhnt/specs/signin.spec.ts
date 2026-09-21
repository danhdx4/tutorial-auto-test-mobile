import { addStep } from "@wdio/allure-reporter";
import homePage from "../page-objects/home.page.ts";
import signUpTab from "../page-objects/sign.up.tab.ts";
import { signupData } from "../test-data/singin.data.ts";
import LoginPage from "../page-objects/login.page.ts";

describe('Verify sign in function', () => {
    before(async () => {
        const loginPage = new LoginPage()
        addStep("Open the login page");
        await homePage.loginBtn.click()
        await loginPage.waitForLoad()

        addStep("Open the signup tab");
        await signUpTab.signupTabBtn.click()
        await signUpTab.waitForLoad()
    })

    after(async () => {
        addStep("Clear up the data in the form");
        await signUpTab.clearForm()
    })

    it('Should be sign in fail without email', async () => {
        addStep("Fill up the sign in data and click sign up btn");
        await signUpTab.fillSignupForm(signupData.errorWithoutEmail.data)

        addStep("Verrify message")
        await signUpTab.verifyErrorMgs(signupData.errorWithoutEmail.message)
    })

    it('Should be sign in fail without password', async () => {
        addStep("Fill up the sign in data and click sign up btn");
        await signUpTab.fillSignupForm(signupData.errorWithoutPassword.data)

        addStep("Verrify message")
        await signUpTab.verifyErrorMgs(signupData.errorWithoutPassword.message)
    })

    it('Should be sign in fail without confirm password', async () => {
        addStep("Fill up the sign in data and click sign up btn");
        await signUpTab.fillSignupForm(signupData.errorWithoutConfirmPassword.data)

        addStep("Verrify message")
        await signUpTab.verifyErrorMgs(signupData.errorWithoutConfirmPassword.message)
    })

    it('Should be sign in successfully with valid data', async () => {
        addStep("Fill up the sign in data and click sign up btn");
        await signUpTab.fillSignupForm(signupData.success.data)

        addStep("Verrify message")
        await signUpTab.verifySuccessAlert(signupData.success.message)
    })
})

//npx wdio final-exam/lanhnt/wdio.conf.ts --spec final-exam/lanhnt/specs/signin.spec.ts