import generateRandomEmail from "../utils/generateRandomEmail";

export const users = {
    mainUser: {
        name: "TestName",
        lastName: "TestLastName",
        email: "michael.krasnovskyi+testUser1@gmail.com",
        password: "ZSgeVQhuU3qkvlG",
    },
    user2: {
        name: "TestName2",
        lastName: "TestLastName2",
        email: "michael.krasnovskyi+testUser2@gmail.com",
        password: "4kbkYC9q4'r,",
    },

}
// export const correctEmail = '';
export const incorrectEmail = generateRandomEmail();
// export const correctPassword = '';
export const incorrectPassword = 'wrongPassword';

// export const correctEmail2 = 'michael.krasnovskyi+testUser2@gmail.com';
// export const correctPassword2 = "";