import LoginPage from "../page-objects/login.page.ts";

describe("Login", () => {
  const loginPage = new LoginPage();

  // data sample
  const email = `test123456@gmail.com`;
  const password = "Test@123456";
  const signUpEmail = `test123456789@gmail.com`;

  // verify login successfully
  it("If Login/Sign Up successfully", async () => {
    await loginPage.chooseLogin();

    // Login
    await loginPage.login(email, password);
    await loginPage.verifySuccessMessage("Success", "You are logged in!", "OK");
    await loginPage.closeSuccessOkBtn();
    await browser.pause(1000);

    // Sign Up
    await loginPage.chooseSignUp();
    await loginPage.signUp(signUpEmail, password, password);
    await loginPage.verifySuccessMessage(
      "Signed Up!",
      "You successfully signed up!",
      "OK",
    );
    await loginPage.closeSuccessOkBtn();
    await browser.pause(1000);
  });
});
