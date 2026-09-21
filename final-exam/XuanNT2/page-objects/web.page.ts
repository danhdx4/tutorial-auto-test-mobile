import Page from "./page.js";

export default class WebPage extends Page {
  // click button web
  public get webBtn() {
    return $('android=new UiSelector().text("Web")');
  }

  // click button Home
  public get homeBtn() {
    return $('android=new UiSelector().text("Home")');
  }

  // logo
  public get logo() {
    return $(
      'android=new UiSelector().className("android.widget.ImageView").instance(0)',
    );
  }

  // search
  public get searchIcon() {
    return $(".DocSearch.DocSearch-Button");
  }
  public get searchInput() {
    return $(".DocSearch-Input");
  }

  public get firstSearchResult() {
    return $("#docsearch-hits0-item-0");
  }

  // open web page
  public async openWebPage() {
    await this.webBtn.waitForDisplayed({
      timeout: 10000,
    });
    await this.webBtn.click();
    await browser.pause(1000);
  }

  public async verifyWebPage() {
    await this.verifyPageTitle("Web");
  }

  // check switch page
  public async switchToWebView() {
    let currentContext = await browser.getContext();

    console.log("Current context:", currentContext);

    // Get list of contexts
    const listOfContexts = await browser.getContexts();

    console.log("List of contexts:", listOfContexts);

    // Switch to WebView
    await browser.switchContext("WEBVIEW_com.wdiodemoapp");

    // Get current context after switch
    currentContext = await browser.getContext();

    console.log("Current context:", currentContext);
  }

  // search
  public async searchSelectors() {
    await this.searchIcon.waitForDisplayed({
      timeout: 10000,
    });

    await this.searchIcon.click();

    // Input Selectors
    await this.searchInput.waitForDisplayed({
      timeout: 10000,
    });

    await this.searchInput.setValue("Selectors");

    // Click first result
    await this.firstSearchResult.waitForDisplayed({
      timeout: 10000,
    });

    await this.firstSearchResult.click();
  }

  // verify page title after change page
  public async verifyWebViewTitle(title: string) {
    await expect(browser).toHaveTitle(title);
  }

  // Native context
  public async switchToNative() {
    await browser.switchContext("NATIVE_APP");
  }

  // back to home
  public async backToHome() {
    await this.homeBtn.waitForDisplayed({
      timeout: 10000,
    });

    await this.homeBtn.click();
  }

  // verify home to be existing
  public async verifyHomePage() {
    await expect(this.logo).toBeExisting();
  }
}
