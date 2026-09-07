import HomePage from '../../pageobjects/ThuyNT/home.page.ts';
import AddNotePage from '../../pageobjects/ThuyNT/note.page.ts';
import TutorialPage from '../../pageobjects/ThuyNT/tutorial.page.ts';

const tutorial = TutorialPage;
const home = HomePage;
const addNote = AddNotePage;

const noteData = {
    add: {
        title: "Note",
        body: "Add Note"
    },
    edit: {
        title: "Note 1",
        body: "Edit Note"
    }
};

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
});