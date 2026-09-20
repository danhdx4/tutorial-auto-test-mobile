import WebviewPage from "../page-objects/webview.page.ts";
import HomePage from "../page-objects/home.page.ts";
describe("Webview App", () => {
  before(async () => {
    await HomePage.waitForWebview();
  });
  it("Webview context", async () => {
    await WebviewPage.getCurrentContext();
    await WebviewPage.getAllContexts();
    await WebviewPage.switchToWebviewContext("WEBVIEW_com.wdiodemoapp");

    // Find and click Search
    await WebviewPage.goToSearch();

    // Search for "Selectors"
    await WebviewPage.searchForSelectors();

    // Verify the "Selectors" page is displayed
    await WebviewPage.verifySelectorsPage();

    await WebviewPage.switchToNativeContext("NATIVE_APP");
    await HomePage.backToHome();
    await HomePage.verifyHomePageDisplayed();
  });
});
