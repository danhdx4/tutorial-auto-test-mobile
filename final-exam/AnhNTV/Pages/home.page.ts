import Page from './page.js';

class HomePage extends Page {

    // Button Web trên màn hình Home
    get WebBtn() {
        return $('android=new UiSelector().text("Web")');
    }

    // Title Home
    get HomeTitle() {
        return $('android=new UiSelector().text("Home")');
    }

    // Click button Web
    async clickWeb() {
        await this.WebBtn.click();
    }

    // Verify màn hình Home hiển thị
    async expectHomeDisplayed() {
        await expect(this.HomeTitle).toBeDisplayed();
    }
}

export default new HomePage();