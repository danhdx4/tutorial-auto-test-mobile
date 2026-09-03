import Page from './page.js';

export default class NotePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get other() {
        return $(
            'android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/menu_btn")',
        )
    }
    public get noteTitle() {
        return $('android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/edit_title")')
    }
    public get noteBody() {
        return $('android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/edit_note")')
    }

    /**
     * define functions
     */
    public async waitForLoad() {
        await expect(this.other).toBeDisplayed()
    }

    public async chooseTargetNote() {
        //todo
    }

    public async fillNote(title: string, body: string) {
        await this.noteTitle.setValue(title)
        await this.noteBody.setValue(body)
    }
}