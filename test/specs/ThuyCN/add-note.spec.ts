// Hoàn thiện phần testcase add-note như demo trên lớp
// Thêm testcase xử lý luồng edit-note

describe('Add Notes', () => {
    it('Skip tutorial', async () => {
        await $('android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip")')
        .click()
    });

    it('Should be add a new note successfully', async () => {
        // add note, save changes, verify note
        const addNoteBtn = $('android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/main_btn1")')
        await addNoteBtn.click()
        await $('android=new UiSelector().text("Text")').click()
        // add note title
        const titleNoteField = $('android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/edit_title")')
        await titleNoteField.setValue('This is my note')
        // add note body
        const bodyNoteField = $('android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/edit_note")')
        await bodyNoteField.setValue('Please dont delete my note. Its for testing')
        // save the changes
        await driver.back()
        await driver.back()
        // assertion
        const createdNote = $('android=new UiSelector().text("This is my note")')
        await expect(createdNote).toBeDisplayed()
    });

    it('Edit a created note', async () => {
        // click a note that you wanna edit
        const createdNote = $('android=new UiSelector().text("This is my note")')
        await createdNote.click()
        const editBtn = $('android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/edit_btn")')
        await editBtn.click()
        // edit note
        const titleNoteField = $('android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/edit_title")')
        await titleNoteField.setValue('This is my testing note')
        // save the changes
        await driver.back()
        await driver.back()
        // assertion
        const editedNote = $('android=new UiSelector().text("This is my testing note")')
        await expect(editedNote).toBeDisplayed()
    })
})