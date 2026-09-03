import HomePage from "../../pageobjects/home.page.ts";
import NotePage from "../../pageobjects/note.page.ts";
import TutorialPage from "../../pageobjects/tutorial.page.ts";

describe("add-note", () => {
    it("skip tutorial", async () => {
        const tutorialPage = new TutorialPage()
        const homePage = new HomePage()

        await tutorialPage.skipTutorial()
        await homePage.verifyInitState()
    });

    it("Add note successfully", async () => {
        const homePage = new HomePage()
        const notePage = new NotePage()

        //navigate to add note page
        await homePage.addNote.click()
        await homePage.chooseTypeNote('Text')
        await notePage.waitForLoad()
        await notePage.fillNote("The first note", "Diamond\nGold\nSilver\nPlatinum")

        //save note successfully
        await driver.back(); //Save
        await driver.back(); //back về home

        //assertion
        await homePage.waitForLoad()
        await homePage.verifyTargetNote("The first note")
    });

    // it("Edit note successfully", async () => {
    //     //Tại home click vào note vừa tạo
    //     let targetNote = await $('android=new UiSelector().text("The first note")');
    //     await targetNote.click();
    //     const editbtn = await $(
    //         'android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/edit_btn")',
    //     );
    //     await expect(editbtn).toBeExisting();
    //     //edit note
    //     await editbtn.click();
    //     const editTitle = await $(
    //         'android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/edit_title")',
    //     );
    //     await editTitle.setValue("The first note1");
    //     const editBody = await $(
    //         'android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/edit_note")',
    //     );
    //     await editBody.setValue("Regular\nGold\nSilver\nRuby");
    //     //save note successfully
    //     await driver.back(); //Save
    //     await driver.back(); //back về home
    //     //assertion
    //     targetNote = await $('android=new UiSelector().text("The first note1")');
    //     await expect(targetNote).toBeExisting();
    // });
});
