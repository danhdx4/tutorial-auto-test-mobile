import { addStep } from "@wdio/allure-reporter";
import homePage from "../page-objects/home.page.ts";
import { loginData } from "../test-data/login.data.ts";
import LoginPage from "../page-objects/login.page.ts";
import loginTab from "../page-objects/login.tab.ts";

describe('Verify login in function', () => {
    before(async () => {
        const loginPage = new LoginPage()
        addStep("Open the login page");
        await homePage.loginBtn.click()
        await loginPage.waitForLoad()

        addStep("Open the login tab");
        await loginTab.loginTabBtn.click()
        await loginTab.waitForLoad()
    })

    after(async () => {
        addStep("Clear up the data in the form");
        await loginTab.clearForm()
    })

    it('Should be login fail without email', async () => {
        addStep("Fill up the login data and click login btn");
        await loginTab.fillLoginForm(loginData.errorWithoutEmail.data)

        addStep("Verrify message")
        await loginTab.verifyErrorMgs(loginData.errorWithoutEmail.message)
    })

    it('Should be login fail without password', async () => {
        addStep("Fill up the login data and click login btn");
        await loginTab.fillLoginForm(loginData.errorWithoutPassword.data)

        addStep("Verrify message")
        await loginTab.verifyErrorMgs(loginData.errorWithoutPassword.message)
    })

    it('Should be login successfully with valid data', async () => {
        addStep("Fill up the login data and click login btn");
        await loginTab.fillLoginForm(loginData.success.data)

        addStep("Verrify message")
        await loginTab.verifySuccessAlert(loginData.success.message)
    })
})

//npx wdio final-exam/lanhnt/wdio.conf.ts --spec final-exam/lanhnt/specs/login.spec.ts