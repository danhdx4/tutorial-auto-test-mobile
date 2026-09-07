describe('Add note', () => {
    it('Skip Tutortial', async () => {
        await $('android = new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip")'            
        ).click();

        const addNotetext = await $('new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/empty_text")')
        await expect(addNotetext).toBeDisplayed();
    })
})
