describe('Add Notes', () => {
    it('Skip tutorial', async () => {
        await $(
            'android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip")',
        ).click();

        const addNoteText = $(
            'android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/empty_text")',
        );
        await expect(addNoteText).toBeDisplayed();
    });

    it('Should be add a new note successfully', async () => {
        // Thêm ghi chú, lưu thay đổi và kiểm tra ghi chú

        // Điều hướng đến màn hình thêm ghi chú
        const addNoteText = $(
            'android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/empty_text")',
        );
        await addNoteText.click();

        const textBtn = $(
            'android=new UiSelector().className("android.widget.LinearLayout").instance(3)',
        );
        await textBtn.click();

        const bbgBar = $(
            'android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/menu_btn")',
        );
        await expect(bbgBar).toBeDisplayed();

        // Thêm tiêu đề ghi chú
        const titleInputField = $(
            'android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/edit_title")',
        );
        await titleInputField.addValue('Favorite Anime');

        // Thêm nội dung ghi chú
        const bodyInputField = $(
            'android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/edit_note")',
        );
        await bodyInputField.addValue('OnePice\nSonguku\nDoraemon');

        // Lưu các thay đổi
        await driver.back(); // Đã lưu
        await driver.back(); // Quay lại màn hình chính

        // Kiểm tra kết quả
        await expect(addNoteText).not.toBeDisplayed();

        const targetNote = $(
            'android=new UiSelector().text("Favorite Anime")',
        );
        await expect(targetNote).toBeDisplayed();
    });
});

describe('Edit Notes', () => {
    it('Should be edit note successfully', async () => {
        // Mở ghi chú
        const targetNote = $(
            'android=new UiSelector().text("Favorite Anime")',
        );

        await targetNote.waitForDisplayed({ timeout: 10000 });
        await targetNote.click();

        const editBtn = $(
            'android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/edit_btn")',
        );
        await editBtn.waitForDisplayed({ timeout: 10000 });
        await editBtn.click();

        // Chờ màn hình chỉnh sửa ghi chú tải xong
        const bodyInputField = $(
            'android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/edit_note")',
        );

        await bodyInputField.waitForExist({ timeout: 10000 });
        await bodyInputField.waitForDisplayed({ timeout: 10000 });

        // Chỉnh sửa nội dung ghi chú
        await bodyInputField.click();
        await bodyInputField.addValue('\nOne Piece\nNaruto');

        // Chỉnh sửa tiêu đề ghi chú
        const titleInputField = $(
            'android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/edit_title")',
        );

        await titleInputField.waitForExist({ timeout: 10000 });
        await titleInputField.waitForDisplayed({ timeout: 10000 });

        await titleInputField.click();
        await titleInputField.addValue(' Updated');

        // Lưu thay đổi
        await driver.back();

        // Kiểm tra ghi chú đã được cập nhật
        const updatedNote = $(
            'android=new UiSelector().text("Favorite Anime Updated")',
        );

        await updatedNote.waitForDisplayed({ timeout: 10000 });
        await expect(updatedNote).toBeDisplayed();
    });
});