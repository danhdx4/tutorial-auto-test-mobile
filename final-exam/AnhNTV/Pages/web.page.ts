import Page from './page.js';

class WebPage extends Page {

    // BUTTON WEB

    // Locator button Web ở Home
    get WebBtn() {
        return $('android=new UiSelector().text("Web")');
    }

    // Click button Web
    async clickWeb() {
        await this.WebBtn.click();
    }


    // VERIFY MÀN WEB

    // Search button trên màn Web theo accessibility id
    get SearchBtn() {
        return $('~Search (Ctrl+K)');
    }

    // Kiểm tra màn Web đã hiển thị
    async expectWebDisplayed() {
        await expect($('[aria-label="Search (Ctrl+K)"]')).toBeDisplayed();
    }


    // CHUYỂN SANG WEBVIEW

    async switchToWebView() {

        // Lấy context hiện tại
        let currentContext = await driver.getContext();
        console.log('Context hiện tại: ', currentContext);

        // Lấy danh sách các context
        const listOfContexts = await driver.getContexts();
        console.log('Danh sách context: ', listOfContexts);

        // Chờ WebView xuất hiện rồi chuyển sang context thực tế của app
        await browser.waitUntil(
            async () => (await driver.getContexts()).some((context) => context.startsWith('WEBVIEW')),
            {
                timeout: 15000,
                timeoutMsg: 'WebView context was not created after opening the Web page',
            },
        );

        const webViewContext = (await driver.getContexts()).find((context) => context.startsWith('WEBVIEW'));
        if (!webViewContext) {
            throw new Error('No WebView context is available');
        }

        await driver.switchContext(webViewContext);

        // Kiểm tra context hiện tại
        currentContext = await driver.getContext();
        console.log('Context hiện tại: ', currentContext);
    }


    // SEARCH - WEBVIEW

    // Button Search trên WebView
    get SearchButton() {
        return $('[aria-label="Search (Ctrl+K)"]');
    }

    // Click Search
    async clickSearch() {
        await this.SearchButton.click();
    }

    // Ô input Search trên WebView
    get SearchInput() {
        return $('#docsearch-input');
    }

    // Nhập Selectors
    async enterSearch(text: string) {
        await this.SearchInput.setValue(text);
    }


    // VERIFY SELECTORS

    // Locator chữ/kết quả "Selectors"
    get SelectorsTitle() {
        return $('a[href="/docs/selectors/"]');
    }

    // Verify màn hình Selectors
    async expectSelectorsDisplayed() {
        await expect(this.SelectorsTitle).toBeDisplayed();
    }


    // CHUYỂN VỀ NATIVE

    async switchToNative() {
        await driver.switchContext('NATIVE_APP');
    }


    // BACK HOME

    async backToHome() {
        await driver.back();
    }

    // Verify Home
    get HomeTitle() {
        return $('android=new UiSelector().text("Home")');
    }

    async expectHomeDisplayed() {
        await expect(this.HomeTitle).toBeDisplayed();
    }
}

export default new WebPage();