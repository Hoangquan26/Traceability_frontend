'use strict'

import { useContext, useState } from "react"
import TextBox from "../../../uxui/textbox/textbox.style.2"
import { validText } from "../../../../ultis/validator"
import FormType from '../../../configs/user.form.config'
import {default as Button1} from "../../../uxui/button/button.style.3"
import {default as Button2} from "../../../uxui/button/button.style.4"
import { FormStatus } from "../../../../store/appContexts/UserPageStatus.Context"

/*
addBusiness
editBusiness
removeBusiness
*/

const initialData = {
    business_name: '',
    business_description: '',
    business_thumb: ''
}

export default function BusinessForm({action = FormType.ADD_BUSINESS}) {
    const [data, setData] = useState(initialData)
    const [displayForm, setDisplayForm] = useContext(FormStatus)
    const handleDisplayOff = () => {
        setDisplayForm(false)
    }

    const handleEditData = (action) => {
        const {fieldName, payload} = action
        setData((state) => {
            return {
                ...state,
                [fieldName]: payload
            }
        })
    }

    return (
        <div className=" flex flex-col gap-6 items-center">
            <div className=" h-48 w-48 rounded-full border-[1px] border-primary flex items-center justify-center p-2">
                <img className=" object-cover" src="images/userImage.png"></img>
            </div>
            <h1 className=" text-2xl h-12">{data.business_name || '*Chưa đặt tên*' }</h1>
            <TextBox heading={'Tên doanh nghiệp'} action={handleEditData} placeHolder={'Tên doanh nghiệp'} data={data['business_name']} fieldName={'business_name'} validator={validText}></TextBox>
            <TextBox heading={'Mô tả'} action={handleEditData} placeHolder={'Mô tả'} data={data['business_description']} fieldName={'business_description'} validator={validText}></TextBox>

            <div className=" flex gap-6 mt-8 w-full">
                <Button2 active={true} action={(handleDisplayOff)} css={'grow basis-full'} placeHolder={'Hủy'} ></Button2>
                <Button1 css={'grow basis-full'} placeHolder={'Tạo mới'} ></Button1>
            </div>
        </div>
    )
}