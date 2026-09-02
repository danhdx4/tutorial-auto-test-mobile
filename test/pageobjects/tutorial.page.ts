import Page from './page.js';

export default class TutorialPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get pageTitle() {
        return $('android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/textTitle")')
    }
}