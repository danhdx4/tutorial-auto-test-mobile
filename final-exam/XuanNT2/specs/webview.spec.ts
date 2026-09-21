import { verify } from "node:crypto";
import WebPage from "../page-objects/web.page.ts";

describe("Webview App", () => {
  const webPage = new WebPage();
  it("Webview context", async () => {
    // choose button Web
    await webPage.openWebPage();

    // Verify web page
    await webPage.verifyWebPage();

    // switch WEBVIEW
    await webPage.switchToWebView();

    // search selectors
    await webPage.searchSelectors();

    // verify search selectors
    await webPage.verifyWebViewTitle("Selectors | WebdriverIO");

    // switch to native
    await webPage.switchToNative();

    // back to home
    await webPage.backToHome();

    // verify homepage
    await webPage.verifyHomePage();

    // HTML verification
    // await webPage.verifyWebViewTitle(
    //   "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO",
    // );
  });
});
