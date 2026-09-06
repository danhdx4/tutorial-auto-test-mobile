import homePage from "../../pageobjects/home.page.ts";
import notePage, { NoteData } from "../../pageobjects/note.page.ts";
import tutorialPage from "../../pageobjects/tutorial.page.ts";

const newData: NoteData = {
    title: "The first note",
    body: "Diamond\nGold\nSilver\nPlatinum"
}

const editData: NoteData = {
    title: "The first note1",
    body: "Regular\nGold\nSilver\nRuby"
}

describe("add-note", () => {
    it("skip tutorial", async () => {
        await tutorialPage.skipTutorial()
        await homePage.verifyInitState()
    });

    it("Add note successfully", async () => {
        //navigate to add note page
        await homePage.addNote.click()
        await homePage.chooseTypeNote('Text')
        await notePage.waitForLoad()
        await notePage.fillNote(newData)

        //save note successfully
        await driver.back(); //Save
        await driver.back(); //back về home

        //assertion
        await homePage.waitForLoad()
        await homePage.verifyTargetNote(newData.title)
    });

    it("Edit note successfully", async () => {
        //Tại home click vào note vừa tạo
        await homePage.chooseTargetNote(newData.title)
        await notePage.waitForLoad()

        //edit note
        await notePage.editBtn.click()
        await notePage.fillNote(editData)

        //save note successfully
        await driver.back(); //Save
        await driver.back(); //back về home

        //assertion
        await homePage.waitForLoad()
        await homePage.verifyTargetNote(editData.title)
    });
});
