import HomePage from "../Page_Object_Model/home.page.ts";
import WebPage from "../Page_Object_Model/webview.page.ts";
const home = new HomePage();
const webpage = new WebPage();

describe("switch webview", () => {
  it.only("webview", async () => {
    await home.chooseWebview();
    await driver.pause(5000);
    //lấy context hiện tại
    let currentContext = await driver.getContext();
    console.log("Current context: ", currentContext);
    //switch context sang webview
    await driver.switchContext("WEBVIEW_com.wdiodemoapp");
    currentContext = await driver.getContext();
    console.log("Current context: ", currentContext);
    // await webpage.waitForLoad();
    await webpage.chooseSearch();
    await webpage.setValue();
    await webpage.verifyListResult(0);
    await driver.switchContext("NATIVE_APP");
    await home.backToHome();
    await home.waitForLoad();
  });
});
