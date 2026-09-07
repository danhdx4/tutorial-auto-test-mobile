import TutorialPage from "../../pageobjects/tutorial.page.ts";
import HomePage from "../../pageobjects/home.page.ts";
import NotePage from "../../pageobjects/note.page.ts";

const tutorialPage = new TutorialPage();
const homePage = new HomePage();
const notePage = new NotePage();

describe("Add color note", () => {
	it("should add a text note successfully", async () => {
		await tutorialPage.skipTutorial();
		await homePage.waitForLoad();
		await homePage.addNote.click();
		await homePage.chooseTypeNote("Text");
		await notePage.waitForLoad();
		await notePage.fillNote("Favorite Anime", "One Piece");

		await driver.back();
		await driver.back();

		await homePage.verifyTargetNote("Favorite Anime");
	});
    });
describe("Edit note", () => {
    it("should edit a text note successfully", async () => {
		await tutorialPage.skipTutorial();
		await homePage.waitForLoad();

		// Mở note cần edit
		await homePage.openNote("Favorite Anime");
		await notePage.waitForLoad();
        // Edit note
		await notePage.editNote("Favorite Anime", "Naruto");

		// Quay lại Home
		await driver.back();
		await driver.back();
});
});