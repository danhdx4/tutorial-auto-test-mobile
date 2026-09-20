import Page from "./page.ts";

class HomePage extends Page {
  public get logo() {
    return $(
      '//android.widget.ScrollView[@content-desc="Home-screen"]/android.view.ViewGroup/android.widget.ImageView[1]',
    );
  }

  public get homePage() {
    return $('android=new UiSelector().description("Home")');
  }

  public get webviewButton() {
    return $("~Webview");
  }

  public async waitForLoad() {
    await expect(this.logo).toBeDisplayed();
  }

  public async waitForWebview() {
    await this.webviewButton.waitForDisplayed({
      timeout: 10000,
    });

    await this.webviewButton.click();
  }

  public async backToHome() {
    await this.homePage.waitForDisplayed();
    await this.homePage.click();
  }

  public async verifyHomePageDisplayed() {
    await expect(this.homePage).toBeDisplayed();
    const webdriverText = $('android=new UiSelector().text("WEBDRIVER")');

    await expect(webdriverText).toBeDisplayed();
  }
}

export default new HomePage();
