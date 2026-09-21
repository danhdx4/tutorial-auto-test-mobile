import { SignUpDataType } from "../utils/type.ts";

export type CreateSignUpTestCase = {
    data: SignUpDataType;
    message: string;
};

export const signupData: Record<string, CreateSignUpTestCase> = {
    success: {
        data: {
            email: "test@test.com",
            password: "12345678",
            confirmPassword: "12345678"
        },
        message: "You successfully signed up!",
    },
    errorWithoutEmail: {
        data: {
            email: "",
            password: "12345678",
            confirmPassword: "12345678"
        },
        message: "Please enter a valid email address",
    },
    errorWithoutPassword: {
        data: {
            email: "test@test.com",
            password: "",
            confirmPassword: "12345678"
        },
        message: "Please enter at least 8 characters",
    },
    errorWithoutConfirmPassword: {
        data: {
            email: "test@test.com",
            password: "12345678",
            confirmPassword: ""
        },
        message: "Please enter the same password",
    }
};
