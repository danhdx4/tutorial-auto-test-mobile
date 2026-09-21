import { LoginDataType } from "../utils/type.ts"
import LoginPage from "./login.page.ts"


class LoginTab extends LoginPage {
    /**
     * define selectors using getter methods
     */
    public get emailInputField() { return $('~input-email') }
    public get passwordInputField() { return $('~input-password') }
    public get loginBtn() { return $('~button-LOGIN') }

    public async waitForLoad() {
        await expect(this.loginBtn).toBeDisplayed()

    }

    public async fillLoginForm(loginData: LoginDataType) {
        await this.emailInputField.setValue(loginData.email)
        await this.passwordInputField.setValue(loginData.password)
        await this.loginBtn.click()
    }

    public async clearForm() {
        await this.emailInputField.setValue("")
        await this.passwordInputField.setValue("")
    }
}

export default new LoginTab()