import HomePage from '../pages/home.page.js';
import WebPage from '../pages/web.page.js';

describe('WebView', () => {

    it('WebView successfully', async () => {

        // 1. Chọn button Web
        await HomePage.clickWeb();

        // 2. Switch sang WebView trước khi kiểm tra màn hình web
        await WebPage.switchToWebView();

        // 3. Verify màn hình Web hiển thị
        await WebPage.expectWebDisplayed();

        // 4. Click Search
        await WebPage.clickSearch();

        // 5. Nhập "Selectors"
        await WebPage.enterSearch('Selectors');

        // 6. Verify màn hình Selectors
        await WebPage.expectSelectorsDisplayed();

        // 7. Switch về Native
        await WebPage.switchToNative();

        // 8. Back về Home
        await WebPage.backToHome();

        // 9. Verify màn hình Home
        await WebPage.expectHomeDisplayed();
    });

});