'use strict'

import { validConfirmPassword, validPassword } from "../../../../ultis/validator"
import TextBox from "../../../uxui/textbox/textbox.style.1"

export default function PasswordForm({signupData, action}){
    return (
        <div className=" flex flex-col gap-6">
           <div>
                <TextBox validator={validPassword} action={action} heading={'Nhập mật khẩu:'} placeHolder={'Mật khẩu phải trên 6 ký tự, bao gồm ít nhất 1 chữ cái in hoa và 1 ký tự đặc biệt'} data={signupData['password']} fieldName={'password'} ></TextBox>
            </div>
            <div>
                <TextBox validator={validConfirmPassword} action={action} heading={'Xác nhận mật khẩu:'} placeHolder={'Xác nhận mật khẩu trùng khớp với mật khẩu đã tạo'} data={signupData['confirmPassword']} fieldName={'confirmPassword'} ></TextBox>
            </div>
        </div>
    )
}