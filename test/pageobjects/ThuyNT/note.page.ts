import Page from './page.js';

export type NoteData = {
    title: string,
    body: string
}

class NotePage extends Page {
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
    public get editBtn() {
        return $('android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/edit_btn")')
    }

    public get deleteBtn() {
        return $('android=new UiSelector().text("Delete")')
    }

    public get btnDeleteConfirm() {
    return $('android=new UiSelector().resourceId("android:id/button1")');
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

    public async fillNote(NoteData: NoteData) {
        await this.noteTitle.setValue(NoteData.title)
        await this.noteBody.setValue(NoteData.body)
    }

    public async editNote() {
        await this.editBtn.click()
    }

    public async deleteNote() {
        await this.other.click()
        await this.deleteBtn.click()
        await this.btnDeleteConfirm.click()
    }

}

export default new NotePage()