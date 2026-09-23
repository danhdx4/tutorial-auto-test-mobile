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

    // Search button trên màn Web theo selector DOM của webview
    get SearchBtn() {
        return $('.DocSearch-Button');
    }

    // Kiểm tra màn Web đã hiển thị
    async expectWebDisplayed() {
        await expect(this.SearchBtn).toBeDisplayed();
    }


    // CHUYỂN SANG WEBVIEW

    async switchToWebView() {
        // Chờ webview xuất hiện
        await browser.waitUntil(
            // Lấy danh sách contexts và kiếm tra xem có webview chưa
            async () => (await browser.getContexts())
                .some(context => typeof context === 'string' && context.startsWith('WEBVIEW')),
            {
                timeout: 15000,
                timeoutMsg: 'WebView không xuất hiện'
            }
        );

        // Tìm chính xác webview
        const webView = (await browser.getContexts())
            .find((context): context is string =>
                typeof context === 'string' && context.startsWith('WEBVIEW')
            );

        if (!webView) {
            throw new Error('Không tìm thấy WebView');
        }

        await browser.switchContext(webView);
    }

    // SEARCH - WEBVIEW

    // Button Search trên WebView
    get SearchButton() {
        return $('.DocSearch-Button');
    }

    // Click Search
    async clickSearch() {
        await this.SearchButton.click();
    }

    // Ô input Search trên WebView
    get SearchInput() {
        return $('.DocSearch-Input');
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