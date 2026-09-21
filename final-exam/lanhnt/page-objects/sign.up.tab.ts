import { SignUpDataType } from "../utils/type.ts"
import LoginPage from "./login.page.ts"

class SignUpTab extends LoginPage {
    /**
     * define selectors using getter methods
     */
    public get emailInputField() { return $('~input-email') }
    public get passwordInputField() { return $('~input-password') }
    public get confirmPasswordInputField() { return $('~input-repeat-password') }
    public get signupBtn() { return $('~button-SIGN UP') }

    public async waitForLoad() {
        await expect(this.signupBtn).toBeDisplayed()
    }

    public async fillSignupForm(signupData: SignUpDataType) {
        await this.emailInputField.setValue(signupData.email)
        await this.passwordInputField.setValue(signupData.password)
        await this.confirmPasswordInputField.setValue(signupData.confirmPassword)
        await this.signupBtn.click()
    }

    public async clearForm() {
        await this.emailInputField.setValue("")
        await this.passwordInputField.setValue("")
        await this.confirmPasswordInputField.setValue("")
    }
}

export default new SignUpTab()