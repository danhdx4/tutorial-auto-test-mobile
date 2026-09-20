import Page from "./page.ts";

class WebviewPage extends Page {
  public get searchButton() {
    return $("//*[contains(@class, 'DocSearch-Button')]");
  }

  public get searchInput() {
    return $(".DocSearch-Input");
  }

  public get searchResult() {
    return $("#docsearch-list");
  }

  public get selectorsOption() {
    return this.searchResult.$("*=Selectors");
  }

  public get header() {
    return $("h1");
  }

  public async getCurrentContext() {
    const currentContext = await driver.getContext();
    console.log("Current Context:", currentContext);
    return currentContext;
  }

  public async getAllContexts() {
    const listContexts = await driver.getContexts();
    console.log("List of Contexts:", listContexts);
    return listContexts;
  }

  public async switchToWebviewContext(contextName = "WEBVIEW_com.wdiodemoapp") {
    await driver.switchContext(contextName);
    const currentContextAfterSwitch = await driver.getContext();
    console.log("Current Context after switch:", currentContextAfterSwitch);
    return currentContextAfterSwitch;
  }

  public async switchToNativeContext(contextName = "NATIVE_APP") {
    await driver.switchContext(contextName);
    const currentContextAfterSwitch = await driver.getContext();
    console.log(
      "Current Context after native switch:",
      currentContextAfterSwitch,
    );
    return currentContextAfterSwitch;
  }

  public async goToSearch() {
    await this.searchButton.waitForDisplayed({
      timeout: 100000,
    });
    await this.searchButton.click();
  }

  public async searchForSelectors() {
    await this.searchInput.setValue("Selectors");
    await this.searchResult.waitForDisplayed({ timeout: 10000 });
    await this.selectorsOption.click();
  }

  public async verifySelectorsPage() {
    await this.header.waitForDisplayed();

    await expect(this.header).toHaveText("Selectors");
  }
}

export default new WebviewPage();
