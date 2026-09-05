import HomePage from '../../pageobjects/ThuyCN/home.page.ts';
import NotePage from '../../pageobjects/ThuyCN/note.page.ts';
import TutorialPage from '../../pageobjects/ThuyCN/tutorial.page.ts';

const tutorialPage = new TutorialPage()
const homePage = new HomePage()
const notePage = new NotePage()

describe('Add Notes', () => {
    it('Skip tutorial', async () => {
        await tutorialPage.skipTutorial()
        await expect(homePage.logo).toBeDisplayed()
    });

    it('Should be add a new note successfully', async () => {
        await homePage.addNote.click()
        await homePage.chooseTypeNote('Text')
        // add a new note
        await notePage.fillNote('The 1st note', 'Auto mobile testing')
        // save the changes
        await driver.back()
        await driver.back()
        // assertion
        await homePage.verifyTargetNote('The 1st note')
    });

    it('Edit a created note', async () => {
        // click a note that you wanna edit
        await homePage.chooseTargetNote('The 1st note')
        // edit note
        await notePage.editNote()
        await notePage.noteTitle.setValue('The 2nd note')
        // save the changes
        await driver.back()
        await driver.back()
        // assertion
        await homePage.verifyTargetNote('The 2nd note')
    });

    it('Delete note', async () => {
        // click a note that you wanna delete
        await homePage.chooseTargetNote('The 2nd note')
        // delete note
        await notePage.bgMenu()
        await notePage.functionBtn('Delete')
        await driver.acceptAlert()
        // assertion
        await expect(homePage.targetNote('The 2nd note')).not.toBeExisting()
    })
})