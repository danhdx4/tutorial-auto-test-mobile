import Page from './page.js';

class TutorialPage extends Page{
    public get pageTitle() {
        return $(
            'android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/textTitle")'
        );
    }

    public get skipBtn() {
        return $(
            'android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip")'
        );
    }
//Xác nhận tutorial đã load
    public async waitForLoad() {
        await expect(this.pageTitle).toBeDisplayed();
    }

    public async skipTutorial() {
        await this.skipBtn.click();
    }
}

export default new TutorialPage();