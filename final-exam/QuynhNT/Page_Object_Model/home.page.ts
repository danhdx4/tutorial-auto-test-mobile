import Page from "./page.ts";
export default class HomePage extends Page {
  public get logo() {
    return $('android=new UiSelector().text("Support")');
  }
  public get btnLogin() {
    return $('android=new UiSelector().text("Login")');
  }
  public get btnWebview() {
    return $("~Webview");
  }
  public get iconHome() {
    return $('android=new UiSelector().description("Home")');
  }
  public async chooseLogin() {
    await this.btnLogin.click();
  }
  public async waitForLoad() {
    await expect(this.logo).toBeDisplayed();
  }
  public async chooseWebview() {
    await this.btnWebview.click();
  }
  public async backToHome() {
    await this.iconHome.click();
  }
}
