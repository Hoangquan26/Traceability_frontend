'use strict'

import { validText } from "../../../../ultis/validator"
import TextBox from "../../../uxui/textbox/textbox.style.1"

export default function ProfileForm({signupData, action}){
    return (
        <div className=" flex flex-col gap-6">
            <div className=" flex gap-6 items-center justify-between">
                <TextBox validator={validText} action={action} heading={'Họ của bạn:'} placeHolder={'Nhập họ tại đây...'} data={signupData['firstName']} fieldName={'firstName'} ></TextBox>
                <TextBox validator={validText} action={action} heading={'Tên của bạn:'} placeHolder={'Nhập tên tại đây...'} data={signupData['lastName']} fieldName={'lastName'} ></TextBox>
            </div>
            <div>
            <TextBox validator={validText} action={action} heading={'Chọn tên tài khoản:'} placeHolder={'Nhập tên tài khoản tại đây(VD: abc12345, ...)'} data={signupData['userName']} fieldName={'userName'} ></TextBox>
            </div>
        </div>
    )
}