import Page from './page.js';

export default class NotePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get menuBtn() {
        return $('~More')
    }

    /**
     * define functions
     */
    public async waitForLoad() {
        await expect(this.menuBtn).toBeDisplayed()
    }

    public async chooseTargetNote() {
        //todo
    }

    public async fillNote() {
        // todo
    }
}