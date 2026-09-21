export default class Page {
    /**
     * define selectors using getter methods
     */
    public get homeBtn() { return $('~Home') }
    public get webBtn() { return $('~Webview') }
    public get loginBtn() { return $('~Login') }
    public get formsBtn() { return $('~Forms') }
    public get swipeBtn() { return $('~Swipe') }
    public get dragsBtn() { return $('~Drag') }
    public get menuBtn() { return $('~Menu') }

    public waitForLoad() {
        //todo
    }
}
