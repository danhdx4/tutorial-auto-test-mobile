describe("Add note", () => {

    it("Click Allows", async () => {

        await $(
            'android=new UiSelector().resourceId("com.android.permissioncontroller:id/permission_allow_button")'
        ).click();

    });
    

});