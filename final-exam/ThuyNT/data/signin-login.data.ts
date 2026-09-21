export const signInData = {
    validAccount: {
        email: 'abc@gmail.com',
        password: '12345678',
        confirmPassword: '12345678',
    },

    invalidEmail: {
        email: 'invalid-email',
        password: '12345678',
        confirmPassword: '12345678',
    },

    passwordMismatch: {
        email: 'thuynt@gmail.com',
        password: '12345678',
        confirmPassword: '87654321',
    },
};