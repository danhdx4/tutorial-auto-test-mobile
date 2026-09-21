import { LoginDataType } from "../utils/type.ts";

export type CreateLoginTestCase = {
    data: LoginDataType;
    message: string;
};

export const loginData: Record<string, CreateLoginTestCase> = {
    success: {
        data: {
            email: "test@test.com",
            password: "12345678",
        },
        message: "You are logged in!",
    },
    errorWithoutEmail: {
        data: {
            email: "",
            password: "12345678",
        },
        message: "Please enter a valid email address",
    },
    errorWithoutPassword: {
        data: {
            email: "test@test.com",
            password: "",
        },
        message: "Please enter at least 8 characters",
    }
};
