import Page from "./page.ts";
export type TypeNote = "Text" | "Checklist";
export default class HomePage extends Page {
  /**
   * define selectors using getter methods
   */
  public get logo() {
    return $(
      'android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/logo_image")',
    );
  }
  public get addNote() {
    return $(
      'android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/empty_text")',
    );
  }
  public get bgmenu() {
    return $(
      'android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/icon_nav")',
    );
  }
  public get trashCan() {
    return $('android=new UiSelector().text("Trash Can")');
  }
  public async waitForLoad() {
    await expect(this.logo).toBeDisplayed();
  }
  public async verifyInitState() {
    await expect(this.addNote).toBeExisting();
  }
  async chooseTypeNote(type: TypeNote) {
    await $(`android=new UiSelector().text("${type}")`).click();
  }
  public async verifyTargetNote(title: string) {
    const targetNote = this.targetNote(title);
    await expect(targetNote).toBeExisting();
  }
  public async chooseTargetNote(title: string) {
    const targetNote = this.targetNote(title);
    await targetNote.click();
  }
  public targetNote(title: string) {
    return $(`android=new UiSelector().text("${title}")`);
  }
  public async verifyNoteNotExist(title: string) {
    const targetNote = $(`android=new UiSelector().text("${title}")`);
    await expect(targetNote).not.toBeExisting();
  }
  public async btnBBmnu() {
    await this.bgmenu.click();
  }
  public async btnTrashCan() {
    await this.trashCan.click();
  }
}
