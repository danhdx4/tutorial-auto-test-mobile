import Page from "./page.ts";
export type NoteData = {
  title: string;
  body: string;
};
export default class NotePage extends Page {
  /**
   * define selectors using getter methods
   */
  public get other() {
    return $(
      'android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/menu_btn")',
    );
  }
  public get noteTitle() {
    return $(
      'android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/edit_title")',
    );
  }
  public get noteBody() {
    return $(
      'android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/edit_note")',
    );
  }
  public get btnEdit() {
    return $(
      'android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/edit_btn")',
    );
  }
  public get btnDelete() {
    return $('android=new UiSelector().text("Delete")');
  }
  public get deletePopupTitle() {
    return $('android=new UiSelector().text("Delete")');
  }
  public get btnDeleteConfirm() {
    return $('android=new UiSelector().text("OK")');
  }

  /**
   * define functions
   */
  public async waitForLoad() {
    await expect(this.other).toBeDisplayed();
  }

  public async chooseTargetNote() {
    //todo
  }

  public async fillNote(title: string, body: string) {
    await this.noteTitle.setValue(title);
    await this.noteBody.setValue(body);
  }
  public async editNote() {
    await this.btnEdit.click();
  }
  public async deleteNote() {
    await this.other.click();
    await this.btnDelete.click();
    await expect(this.deletePopupTitle).toBeDisplayed();
    await this.btnDeleteConfirm.click();
  }
  public async backToHome() {
    await driver.back();
    await driver.back(); //back về home
  }
}
