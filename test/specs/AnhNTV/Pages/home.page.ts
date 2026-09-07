import Page from './page.js';

class HomePage extends Page {

    public get pageTitle() {
        return $(
            'android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/textTitle")'
        );
    }
//Neo bằng text Add note
    public get addNoteText() {
        return $(
            'android=new UiSelector().text("Add note")'
        );
    }
//Đợi cho trang Home load xong
    public async waitForLoad() {
        await expect(this.addNoteText).toBeDisplayed();
    }
//Kiểm tra text addnote hiển thị
    public async expectAddNoteDisplayed() {
        await expect(this.addNoteText).toBeDisplayed();
    }
//Click vào Add note  --> Click Text
    public async clickAddNote() {
        await this.addNoteText.click();
        await $('android=new UiSelector().text("Text")').click();
    }
//Verify Add note đang hiển thị
    public async expectNoteDisplayed(title: string) {
        await expect($(`android=new UiSelector().text("${title}")`)).toBeDisplayed();
    }
//Verify Add note không còn nữa
    public async expectNoteNotDisplayed(title: string) {
        await expect($(`android=new UiSelector().text("${title}")`)).not.toBeDisplayed();
    }
//Mở note theo title 
    public async openNote(title: string) {
        await $(`android=new UiSelector().text("${title}")`).click();
    }
}

export default new HomePage();