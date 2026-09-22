import WebPage from '../Pages/web.page.js';

describe('WebView', () => {

    it('should search Selectors on WebView', async () => {

        // 1. Click vào nút Web trên màn hình Home
        await WebPage.clickWeb();

        // 2. Chuyển từ Native App sang WebView
        await WebPage.switchToWebView();

        // 3. Kiểm tra màn hình WebView đã hiển thị
        await WebPage.expectWebDisplayed();

        // 4. Click vào ô tìm kiếm
        await WebPage.clickSearch();

        // 5. Nhập từ khóa "Selectors" vào ô tìm kiếm
        await WebPage.enterSearch('Selectors');

        // 6. Kiểm tra kết quả "Selectors" được hiển thị
        await WebPage.expectSelectorsDisplayed();

        // 7. Chuyển từ WebView về Native App
        await WebPage.switchToNative();

        // 8. Quay lại màn hình Home
        await WebPage.backToHome();

        // 9. Kiểm tra màn hình Home đã hiển thị
        await WebPage.expectHomeDisplayed();

    });

});