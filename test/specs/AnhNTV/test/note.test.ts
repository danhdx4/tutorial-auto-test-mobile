import tutorialPage from "../Pages/tutorial.page.ts";
import homePage from "../Pages/home.page.ts";
import notePage from "../Pages/note.page.ts";
import { noteData } from "../data/note.data.ts";

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
   });

});