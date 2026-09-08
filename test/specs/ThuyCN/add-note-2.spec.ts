import HomePage from '../../pageobjects/ThuyCN/home.page.ts';
import NotePage from '../../pageobjects/ThuyCN/note.page.ts';
import TutorialPage from '../../pageobjects/ThuyCN/tutorial.page.ts';
import TrashCanPage from '../../pageobjects/ThuyCN/trash.can.page.ts';

const tutorialPage = new TutorialPage()
const homePage = new HomePage()
const notePage = new NotePage()
const trashCanPage = new TrashCanPage()

const newData = {
    title: "The 1st note",
    body: "Auto mobile testing"
}

const editData = {
    title: "The 2nd note",
    body: "Auto mobile testing"
}

describe('Add Notes', () => {
    it('Skip tutorial', async () => {
        await tutorialPage.skipTutorial()
        await expect(homePage.logo).toBeDisplayed()
    });

    it('Should be add a new note successfully', async () => {
        await homePage.addNote.click()
        await homePage.chooseTypeNote('Text')
        // add a new note
        await notePage.fillNote(newData.title, newData.body)
        // save the changes
        await driver.back()
        await driver.back()
        // assertion
        await homePage.verifyTargetNote(newData.title)
    });

    it('Edit a created note', async () => {
        // click a note that you wanna edit
        await homePage.chooseTargetNote(newData.title)
        // edit note
        await notePage.editNote()
        await notePage.noteTitle.setValue(editData.title)
        // save the changes
        await driver.back()
        await driver.back()
        // assertion
        await homePage.verifyTargetNote(editData.title)
    });

    it('Delete note', async () => {
        // click a note that you wanna delete
        await homePage.chooseTargetNote(editData.title)
        // delete note
        await notePage.bgMenu()
        await notePage.functionBtn('Delete')
        await driver.acceptAlert()
        // assertion
        await expect(homePage.targetNote(editData.title)).not.toBeExisting()
    });

    it('Revert note', async () => {
        // go to trash can screen
        await homePage.hbgMenu.click()
        await trashCanPage.pageTitle.click()
        // click a note that you wanna revert
        await trashCanPage.verifyTargetNote(editData.title)
        await trashCanPage.chooseTargetNote(editData.title)
        // revert note
        await trashCanPage.revertNote()
        await driver.acceptAlert()
        // back to home
        await driver.back()
        await driver.back() 
        // assertion
        await expect(homePage.targetNote(editData.title)).toBeExisting()
    })
})