import Page from './page.js';

export type NoteData = {
    title: string,
    body: string
}
export type Option = "Check" | "Send" | "Reminder" | "Find" | "Lock" | "Archive" | "Delete"

class NotePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get otherBtn() {
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

    public get revertBtn() {
        return $('android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/edit_btn")')
    }

    /**
     * define functions
     */
    public async waitForLoad() {
        await expect(this.otherBtn).toBeDisplayed()
    }

    public async chooseTargetNote() {
        //todo
    }

    public async fillNote(data: NoteData) {
        await this.noteTitle.setValue(data.title)
        await this.noteBody.setValue(data.body)
    }

    public async chooseOptionFromMenu(option: Option) {
        await $(`android=new UiSelector().text("${option}")`).click()
    }
}

export default new NotePage()