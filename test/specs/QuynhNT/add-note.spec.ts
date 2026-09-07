describe("add-note", () => {
  it("skip tutorial", async () => {
    const skipBtn = await $(
      'android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip")',
    );
    await skipBtn.click();
    const addNote = await $(
      'android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/empty_text")',
    );
    await expect(addNote).toBeExisting();
  });
  it("Add note successfully", async () => {
    //navigate to add note page
    const addNotetext = await $(
      'android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/empty_text")',
    );
    await addNotetext.click();
    const inputText = await $('android=new UiSelector().text("Text")');
    await inputText.click();
    const otherbtn = await $(
      'android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/menu_btn")',
    );
    await expect(otherbtn).toBeExisting();
    //add note
    const addTitle = await $(
      'android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/edit_title")',
    );
    await addTitle.setValue("The first note");
    const addBody = await $(
      'android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/edit_note")',
    );
    await addBody.setValue("Diamond\nGold\nSilver\nPlatinum");
    const backbtn = await $(
      'android=new UiSelector().className("android.widget.FrameLayout").instance(0)',
    );
    await backbtn.click();
    //save note successfully
    await driver.back(); //Save
    await driver.back(); //back về home
    //assertion
    await expect(addNotetext).not.toBeExisting();
    const targetNote = await $(
      'android=new UiSelector().text("The first note")',
    );
    await expect(targetNote).toBeExisting();
  });

  it("Edit note successfully", async () => {
    //Tại home click vào note vừa tạo
    let targetNote = await $('android=new UiSelector().text("The first note")');
    await targetNote.click();
    const editbtn = await $(
      'android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/edit_btn")',
    );
    await expect(editbtn).toBeExisting();
    //edit note
    await editbtn.click();
    const editTitle = await $(
      'android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/edit_title")',
    );
    await editTitle.setValue("The first note1");
    const editBody = await $(
      'android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/edit_note")',
    );
    await editBody.setValue("Regular\nGold\nSilver\nRuby");
    //save note successfully
    await driver.back(); //Save
    await driver.back(); //back về home
    //assertion
    targetNote = await $('android=new UiSelector().text("The first note1")');
    await expect(targetNote).toBeExisting();
  });
});
