import HomePage from "../Page_Object_Model/home.page.ts";
import LoginPage from "../Page_Object_Model/login.page.ts";
import { datatest } from "../Data/signin-login.spec.ts";
const home = new HomePage();
const login = new LoginPage();

describe("Login", () => {
  it("SignUp Susscessfully", async () => {
    await home.waitForLoad();
    await home.chooseLogin();
    await login.waitForLoad();
    await login.chooseSignUp();
    await login.fillSignUpForm(datatest.validAccount);
    await login.submitSignUp();
    await login.verifySignUpSuccess();
    await login.confirmSignUpSuccess();
  });
  it("Login Susscessfully", async () => {
    await login.chooseLogin();
    await login.verifyState(datatest.validAccount.email);
    await login.fillPwLogin(datatest.validAccount.password);
    await login.submitLogin();
    await login.verifyLoginSuccess();
    await login.confirmLoginSuccess();
  });
});
