import Page from './page.js';

export type TypeNote = 'Text' | 'Checklist'
export type NoteData = {
    title: string,
    body: string
}


class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get logo() {
        return $('android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/logo_image")')
    }
    public get addNote() {
        return $('android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/empty_text")',)
    }

    public async waitForLoad() {
        await expect(this.logo).toBeDisplayed()
    }

    public async verifyInitState() {
        await expect(this.addNote).toBeExisting()
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
}

export default new HomePage()