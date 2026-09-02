import Page from './page.js';

export default class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get logo() {
        return $('android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/logo_image")')
    }
}