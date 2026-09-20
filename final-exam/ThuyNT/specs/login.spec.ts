import HomePage from "../page-objects/home.page.ts";
import LoginPage from "../page-objects/login.page.ts";
import {signInData} from "../data/signin-login.data.ts";

describe("Login", () => {
    before(async () => {
        await HomePage.waitForLoad();
        await LoginPage.verifyLoginPage();
    })

    it("Login successfully", async () => {
        await LoginPage.fillLoginForm(signInData.validAccount.email, signInData.validAccount.password);
        await LoginPage.loginBtn.click();
        await expect(LoginPage.loginSuccessMessage).toBeDisplayed();
    }
)
})
