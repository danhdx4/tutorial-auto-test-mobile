export default class Page {
  public waitForLoad() {
    //todo
  }

  // verify page title
  public async verifyPageTitle(title: string) {
    const pageTitle = $(`android=new UiSelector().text("${title}")`);
    await expect(pageTitle).toBeDisplayed();
    await expect(pageTitle).toHaveText(title);
  }
}
