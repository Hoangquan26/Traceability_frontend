'use strict'

import { emailRegex, passwordRegex } from "./regex"

const validEmail = ({text}) => {
    return emailRegex.test(text)
}


const validPassword = ({text}) => {
    return passwordRegex.test(text)
}

/*

options = {
sameValue: ...
}
*/ 
const validText = ({text, options = null}) => {

    const unvalid = !text.trim().length

    if(unvalid) return false
    if(options && options.sameValue) {
        return (options.sameValue == text)
    }
    return true
}


export {
    validEmail,
    validPassword,
    validText
}