describe('Add Notes', () => {
    it('Skip tutorial', async () => {
        await $(
            'android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip")',
        ).click();

        const addNoteText = $('android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/empty_text")')
        await expect(addNoteText).toBeDisplayed()
    });

    it('Should be add a new note successfully', async () => {
        // add note, save changes, verify note
        //Navigate to add note screen
        const addNoteText = $('android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/empty_text")')
        await addNoteText.click()
        const textBtn = $('android=new UiSelector().className("android.widget.LinearLayout").instance(3)')
        await textBtn.click()
        const bbgBar = $('android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/menu_btn")')
        await expect(bbgBar).toBeDisplayed()

        // add note title
        const titleInputField = $('android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/edit_title")')
        await titleInputField.addValue('Favorite Anime')

        // add note body
        const bodyInputField = $('android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/edit_note")')
        await bodyInputField.addValue('OnePice\nNaruto\nGhibli')

        // save the changes
        await driver.back() // saved
        await driver.back() // back to home

        // assertion
        await expect(addNoteText).not.toBeDisplayed()
        const targetNote = $('android=new UiSelector().text("Favorite Anime")')
        await expect(targetNote).toBeDisplayed()
    })
})
