'use strict'

import { useState } from "react"
import TextBox from "../../../uxui/textbox/textbox.style.1"
import {emailRegex} from "../../../../ultis/regex"
import { validEmail } from "../../../../ultis/validator"


export default function EmailForm({signupData, fieldName, action}) {
    return (
        <TextBox validator={validEmail} heading={'Email của bạn?'} fieldName={fieldName} action={action} data={signupData[fieldName]} placeHolder={'Điền email tại đây (abc@yahoo.com, ...)'}></TextBox>
    ) 
}