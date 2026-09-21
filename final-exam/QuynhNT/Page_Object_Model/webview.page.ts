import Page from "./page.ts";
export default class WebPage extends Page {
  public get iconSearch() {
    return $(".DocSearch.DocSearch-Button");
  }
  public get inputSearch() {
    return $(".DocSearch-Input");
  }
  public async chooseSearch() {
    await this.iconSearch.waitForClickable({ timeout: 30000 });
    await this.iconSearch.click();
  }
  public async setValue() {
    await this.inputSearch.waitForDisplayed({ timeout: 10000 });
    await this.inputSearch.setValue("Selectors");
  }
  public async verifyListResult(number: any) {
    await expect($(`#docsearch-hits0-item-${number}`)).toBeDisplayed();
    await $(`#docsearch-hits0-item-${number}`).click();
  }
}
