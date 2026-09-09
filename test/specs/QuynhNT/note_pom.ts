import HomePage from "../../pageobjects/QuynhNT/home.page.ts";
import AddNotePage from "../../pageobjects/QuynhNT/note.page.ts";
import tutorialPage from "../../pageobjects/QuynhNT/tutorial.page.ts";
import TrashCanPage from "../../pageobjects/QuynhNT/trashcan.page.ts";
const tutorial = new tutorialPage();
const home = new HomePage();
const addNote = new AddNotePage();
const trashCan = new TrashCanPage();
describe("Note", () => {
  before(async () => {
    await tutorial.waitForLoad();
    await tutorial.skipTutorial();
    await home.waitForLoad();
    await home.verifyInitState();
  });
  it("Add note successfully", async () => {
    //navigate to add note page
    await home.addNote.click();
    await home.chooseTypeNote("Text");
    await addNote.waitForLoad();
    await addNote.fillNote("The first note", "Diamond\nGold\nSilver\nPlatinum");
    await addNote.backToHome();
    //assertion
    await home.verifyTargetNote("The first note");
  });
  it("Edit note successfully", async () => {
    //Tại home click vào note vừa tạo
    await home.chooseTargetNote("The first note");
    await addNote.waitForLoad();
    await addNote.editNote();
    await addNote.fillNote("The first note1", "Regular\nGold\nSilver\nRuby");
    //save note successfully
    await addNote.backToHome();
    //assertion
    await home.verifyTargetNote("The first note1");
  });
  it("Delete note successfully", async () => {
    //Tại home click vào note vừa tạo
    await home.chooseTargetNote("The first note1");
    await addNote.waitForLoad();
    await addNote.deleteNote();
    await home.verifyNoteNotExist("The first note1");
  });
  it("Revert Note", async () => {
    //navigate to trash can page
    await home.btnBBmnu();
    await home.btnTrashCan();
    await trashCan.chooseTargetNote("The first note1");
    await trashCan.btnTrash();
    await driver.acceptAlert();
    await driver.back();
    await driver.back();
    await home.verifyTargetNote("The first note1");
  });
});
