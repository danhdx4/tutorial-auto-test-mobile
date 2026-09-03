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

    /**
     * define functions
     */
    public async waitForLoad() {
        await expect(this.other).toBeDisplayed()
    }

    public async chooseTargetNote() {
        //todo
    }

    public async fillNote(data: NoteData) {
        await this.noteTitle.setValue(data.title)
        await this.noteBody.setValue(data.body)
    }
}

export default new NotePage()