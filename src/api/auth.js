import apiUrl from "../apiConfig";
import axios from "axios";

export const signUp = (credentials) => {
    return axios({
        method: 'POST',
        url: apiUrl + '/sign-up',
        data: {
            credentials: {
                email: credentials.email,
                password: credentials.password,
                password_confirmation: credentials.passwordConfirmation
            },
        },
    })
}

export const signIn = (credentials) => {
    return axios({
        method: 'POST',
        url: apiUrl + '/sign-in',
        data: {
            credentials: {
                email: credentials.email,
                password: credentials.password,
            }
        }
    })
}

export const signOut = (user) => {
    return axios({
        method: 'DELETE',
        url: apiUrl + "/sign-out",
        headers: {
            Authorization: `Token token=${user.token}`,
        },
    })
}

export const changePassword = (passwords, user) => {
    return axios({
        method: 'PATCH',
        url: apiUrl + '/change-password',
        data: {
            passwords: {
                old: passwords.oldPassword,
                new: passwords.newPassword,
            },
        },
    })
}