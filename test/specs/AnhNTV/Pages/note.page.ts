import Page from './page.js';

class NotePage extends Page {
//tìm button Other
    public get otherBtn() {
        return $(
            'android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/menu_btn")'
        );
    }

    public async waitForLoad() {
        await expect(this.otherBtn).toBeDisplayed();
    }
//tìm title 
    public get titleInput() {
        return $('android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/edit_title")');
    }
//tìm content
    public get contentInput() {
        return $('android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/edit_note")');
    }
//Nhập dữ liệu title
    public async enterTitle(title: string) {
        await this.titleInput.setValue(title);
    }
//Nhập dữ liệu content
    public async enterContent(content: string) {
        await this.contentInput.setValue(content);
    }
//Lưu note
    public async saveNote() {
        await driver.back();
        await driver.back();
    }
//Delete note, tap button OK
    public async deleteNote() {
        await this.otherBtn.click();
        await $('android=new UiSelector().text("Delete")').click();
        await $('android=new UiSelector().text("OK")').click();
    }
}

export default new NotePage();