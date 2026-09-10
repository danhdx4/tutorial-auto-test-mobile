import HomePage from '../../pageobjects/ThuyNT/home.page.ts';
import AddNotePage from '../../pageobjects/ThuyNT/note.page.ts';
import TutorialPage from '../../pageobjects/ThuyNT/tutorial.page.ts';
import TrashCanPage from '../../pageobjects/ThuyNT/trash.can.page.ts';
import { noteData } from '../../data/note.data.ts';
const tutorial = TutorialPage;
const home = HomePage;
const addNote = AddNotePage;
const trashCan = TrashCanPage;

describe('Note', () => {

    before(async () => {
        await tutorial.waitForLoad();
        await tutorial.skipTutorial();

        await home.waitForLoad();
        await home.verifyInitState();
    });

    it('Add note successfully', async () => {
        await home.addNote.click();
        await home.chooseTypeNote('Text');

        await addNote.fillNote(noteData.add);

        await driver.back();
        await driver.back();

        await home.verifyTargetNote(noteData.add.title);
    });

    it('Edit note successfully', async () => {
        await home.chooseTargetNote(noteData.add);

        await addNote.editNote();
        await addNote.fillNote(noteData.edit);

        await driver.back();
        await driver.back();

        await home.verifyTargetNote(noteData.edit.title);
    });

    it('Delete note successfully', async () => {
        await home.chooseTargetNote(noteData.edit);

        await addNote.deleteNote();

        await home.verifyNoteNotExist(noteData.edit.title);
    });

    it("Revert the deleted note successfully", async () => {
        // Open the Trash Can Page
        await home.menuHamburger.click();
        await home.trashCan.click();
        // Revert the note
        await trashCan.chooseTargetNote(noteData.edit);
        await trashCan.revertNote();
        // Verify the note in the Home Page
        await driver.back();
        await driver.back();
        await home.verifyTargetNote(noteData.edit.title);
    })
});