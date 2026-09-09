import tutorialPage from "../Pages/tutorial.page.ts";
import homePage from "../Pages/home.page.ts";
import notePage from "../Pages/note.page.ts";
import TrashCanPage from "../Pages/trash.can.page.ts";
import { noteData } from "../data/note.data.ts";

const trashCanPage = new TrashCanPage();

describe('ColorNote - Delete Note', () => {

    it('should delete note and verify it is removed from Home Page', async () => {
await tutorialPage.waitForLoad();//Đợi tutorial hiện 
await tutorialPage.skipTutorial();//Bấm skip

await homePage.waitForLoad();//Đợi Home hiện lên

await homePage.clickAddNote();//Add note
await notePage.waitForLoad();//Đợi note hiện lên

await notePage.enterTitle(noteData.title);
await notePage.enterContent(noteData.content);
await notePage.saveNote();

await homePage.expectNoteDisplayed(noteData.title);//kiếm tra note đã xuất hiện

await homePage.openNote(noteData.title);
await notePage.deleteNote();//Xóa note
await homePage.expectNoteNotDisplayed(noteData.title);//Verify Note không còn xuất hiện
//BTVM: Restore lại note đã xóa
 // Home
        await homePage.waitForLoad();

        // Other → Trash Can
        await homePage.clickOther();
        await homePage.clickTrashCan();

        // Đợi Trash Can hiện
        await trashCanPage.waitForLoad();

        // Kiểm tra Note đã xóa có trong Trash
        await trashCanPage.verifyTargetNote(noteData.title);

        // Click vào Note cần restore
        await trashCanPage.chooseTargetNote(noteData.title);

        // Click Restore
        await trashCanPage.revertNote();

        // Xác nhận restore popup
        await driver.acceptAlert();

        // Quay lại Home
        await driver.back();

        await homePage.waitForLoad(noteData.title);

        // Verify Note xuất hiện lại
        await homePage.expectNoteDisplayed(noteData.title);
});

});