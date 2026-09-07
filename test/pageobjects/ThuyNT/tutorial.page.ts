import Page from './page.js';

class TutorialPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get pageTitle() {
        return $('android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/textTitle")')
    }

    public get skipBtn() {
        return $('android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip")')
    }

    public async waitForLoad() {
        await expect(this.pageTitle).toBeDisplayed()
    }

    public async skipTutorial() {
        await this.skipBtn.click()
    }
}

export default new TutorialPage()