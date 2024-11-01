'use strict'

import { useState } from "react"
import TextBox from "../../../uxui/textbox/textbox.style.1"



export default function EmailForm({signupData, fieldName, action}) {
    return (
      
            <TextBox heading={'Email của bạn?'} fieldName={fieldName} action={action} data={signupData[fieldName]} placeHolder={'Điền email tại đây (abc@yahoo.com, ...)'}></TextBox>
     
    ) 
}