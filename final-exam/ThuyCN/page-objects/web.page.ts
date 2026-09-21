import Page from './page.js';

export default class WebPage extends Page { 
    public get searchBtn(){
        return $('.DocSearch.DocSearch-Button')
    }
    public async clickSearchBtn(){
        await this.searchBtn.waitForClickable({ timeout: 30000 })
        await this.searchBtn.click()
    }
    public get searchInputField(){
        return $('.DocSearch-Input')
    }
    public async fillSearch(text: string){
        await this.searchInputField.waitForDisplayed({ timeout: 30000 })
        await this.searchInputField.setValue(text)
    }
    public async verifyFirstResult(number: any){
        await expect($(`#docsearch-hits0-item-${number}`)).toBeDisplayed()
    }
}
