import Page from './page.js';

export type TypeNote = 'Text' | 'Checklist'

export default class TrashCanPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get pageTitle() {
        return $('android=new UiSelector().text("Trash Can")')
    }

    public async waitForLoad() {
        await expect(this.pageTitle).toBeDisplayed()
    }

    public async verifyTargetNote(title: string) {
        const targetNote = this.targetNote(title)
        await expect(targetNote).toBeExisting()
    }

    public async chooseTargetNote(title: string) {
        const targetNote = this.targetNote(title)
        await targetNote.click()
    }

    public targetNote(title: string) {
        return $(`android=new UiSelector().text("${title}")`);
    }
    public async revertNote(){
        await $('android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/edit_btn")').click()
    }
    public async confirmRestore() {
    await $('android=new UiSelector().text("OK")').click()
}
}
