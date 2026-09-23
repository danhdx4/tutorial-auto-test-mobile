export const SignUpData = {
    success: {
        email: "test@test.com",
        password: "12345678",
        confirmPassword: "12345678",
        message: "You successfully signed up!"
    },
 
    errorWithoutEmail: {
        email: "",
        password: "12345678",
        confirmPassword: "12345678",
        message: "Please enter a valid email address"
    },
 
    errorWithoutPassword: {
        email: "test@test.com",
        password: "",
        confirmPassword: "12345678",
        message: "Please enter at least 8 characters"
    },
 
    errorWithoutConfirmPassword: {
        email: "test@test.com",
        password: "12345678",
        confirmPassword: "",
        message: "Please enter the same password"
    }
};