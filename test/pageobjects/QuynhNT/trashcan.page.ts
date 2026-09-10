import Page from "./page.ts";
export type NoteData = {
  title: string;
  body: string;
};
export default class TrashCanPage extends Page {
  public get noteTitle() {
    return $(
      'android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/edit_title")',
    );
  }
  public get iconTrash() {
    return $(
      'android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/edit_btn")',
    );
  }
  public targetNote(title: string) {
    return $(`android=new UiSelector().text("${title}")`);
  }
  public async chooseTargetNote(title: string) {
    const targetNote = this.targetNote(title);
    await targetNote.click();
  }
  public async chooseNote() {
    //todo
  }
  public async btnTrash() {
    await this.iconTrash.click();
  }
}
