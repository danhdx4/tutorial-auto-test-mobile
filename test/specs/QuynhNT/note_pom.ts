import HomePage from "../../pageobjects/QuynhNT/home.page.ts";
import AddNotePage from "../../pageobjects/QuynhNT/note.page.ts";
import tutorialPage from "../../pageobjects/QuynhNT/tutorial.page.ts";
import TrashCanPage from "../../pageobjects/QuynhNT/trashcan.page.ts";
const tutorial = new tutorialPage();
const home = new HomePage();
const addNote = new AddNotePage();
const trashCan = new TrashCanPage();
const newData = {
  title: "The first note",
  body: "Diamond\nGold\nSilver\nPlatinum",
};

const editData = {
  title: "The first note1",
  body: "Regular\nGold\nSilver\nRuby",
};
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
    await addNote.fillNote(newData.title, newData.body);
    await addNote.backToHome();
    //assertion
    await home.verifyTargetNote(newData.title);
  });
  it("Edit note successfully", async () => {
    //Tại home click vào note vừa tạo
    await home.chooseTargetNote(newData.title);
    await addNote.waitForLoad();
    await addNote.editNote();
    await addNote.fillNote(editData.title, editData.body);
    //save note successfully
    await addNote.backToHome();
    //assertion
    await home.verifyTargetNote(editData.title);
  });
  it("Delete note successfully", async () => {
    //Tại home click vào note vừa tạo
    await home.chooseTargetNote(editData.title);
    await addNote.waitForLoad();
    await addNote.deleteNote();
    await home.verifyNoteNotExist(editData.title);
  });
  it("Revert Note", async () => {
    //navigate to trash can page
    await home.btnBBmnu();
    await home.btnTrashCan();
    await trashCan.chooseTargetNote(editData.title);
    await trashCan.btnTrash();
    await driver.acceptAlert();
    await driver.back();
    await driver.back();
    await home.verifyTargetNote(editData.title);
  });
});
