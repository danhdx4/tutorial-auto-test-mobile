describe("Webview app", () => {
  it("Webview context", async () => {
    await $("~Webview").click();
    await driver.pause(5000);
    //get context
    let currentContext = await driver.getContext();
    console.log("Current Context:", currentContext);
    //get list contexts
    const Listcontexts = await driver.getContexts();
    console.log("All Contexts:", Listcontexts);
    //switch to webview
    await driver.switchContext("WEBVIEW_com.wdiodemoapp");
    currentContext = await driver.getContext();
    console.log("Current Context:", currentContext);

    //click button get started
    const getStartedBtn = $(".button=Get Started!");
    await getStartedBtn.scrollIntoView();
    await getStartedBtn.click();
    let pageTitle = await driver.getTitle();
    await expect(pageTitle).toBe("Getting Started | WebdriverIO");

    // Search key: selector
  });
});
