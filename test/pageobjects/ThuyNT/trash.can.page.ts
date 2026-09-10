import Page from './page.js';
export type TypeNote = 'Text' | 'Checklist'

export type NoteData = {
    title: string,
    body: string
}

class TrashCanPage extends Page {
    public get trashCanPage() {
        return $('android=new UiSelector().text("Trash Can")')
    }

    public get revertBtn() {
        return $('android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/edit_btn")')
    }

    public get revertConfirmBtn() {
        return $('android=new UiSelector().resourceId("android:id/button1")')
    }

    async chooseTypeNote(type: TypeNote) {
        await $(`android=new UiSelector().text("${type}")`).click()
    }

    public async verifyTargetNote(title: string) {
        const targetNote = this.targetNote(title)
        await expect(targetNote).toBeExisting()
    }

    public async chooseTargetNote(noteData: NoteData) {
        const targetNote = this.targetNote(noteData.title)
        await targetNote.click()
    }

    public targetNote(title: string) {
        return $(`android=new UiSelector().text("${title}")`);
    }

    public async verifyNoteNotExist(title: string) {
        const targetNote = this.targetNote(title)
        await expect(targetNote).not.toBeExisting()
    }

    public async waitForLoad() {
        await expect(this.trashCanPage).toBeDisplayed()
    }

    public async revertNote() {
        await this.revertBtn.click()
        await this.revertConfirmBtn.click()
    }

}

export default new TrashCanPage()