import Page from "./page.ts"

class WebPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get logo() {
        return $('.DocSearch.DocSearch-Button')
    }

    public get searchIcon() {
        return $('.DocSearch.DocSearch-Button')
    }

    public get searchInputField() {
        return $('.DocSearch-Input')
    }

    public async waitForLoad() {
        await expect(this.logo).toBeDisplayed()
    }

    public async searchByKey(key: string) {
        await this.searchInputField.setValue(key)
        await $('#docsearch-hits0-item-0').click()
    }

    public async verifyPageTitle(title: string) {
        let pageTitle = await driver.getTitle()
        expect(pageTitle).toBe(title)
    }
}

export default new WebPage()