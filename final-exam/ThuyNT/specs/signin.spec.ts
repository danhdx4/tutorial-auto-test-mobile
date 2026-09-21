import HomePage from "../page-objects/home.page.ts";
import LoginPage from "../page-objects/login.page.ts";
import {signInData} from "../data/signin-login.data.ts";


describe("Login", () => {
    before(async () => {
        await HomePage.waitForLoad();
        await LoginPage.verifyLoginPage();
    })

    it("Should be sign-in successfully", async () => {
        await LoginPage.verifySignInPage();
        await LoginPage.fillSignInForm(signInData.validAccount.email, signInData.validAccount.password, signInData.validAccount.confirmPassword);
        await LoginPage.signInButton.click();
        await expect(LoginPage.signInSuccessMessage).toBeDisplayed();
    }
)
})
