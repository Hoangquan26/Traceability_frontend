'use strict'

import { emailRegex, passwordRegex, unEmptyRegex } from "./regex"

const validEmail = (email) => {
    return emailRegex.test(email)
}

const validConfirmPassword = (new_password, old_password) => {
    if(new_password != old_password)
        return false
    return true
}

const validPassword = (password) => {
    return passwordRegex.test(password)
}

const validText = (text) => {
    return unEmptyRegex.test(text)
}

export {
    validEmail,
    validPassword,
    validConfirmPassword,
    validText
}