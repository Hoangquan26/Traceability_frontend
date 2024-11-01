'use strict'

import { Link } from "react-router-dom"
import Timeline from "../../components/uxui/timeline"
import { act, useReducer, useState } from "react"
import Button from "../../components/uxui/button/button.style.2"
import EmailForm from "../../components/pages/user/signup/email.form.signup"
import ProfileForm from "../../components/pages/user/signup/profile.form.signup"

const times = [
    {
        step: 1,
        name: 'Điền email của bạn'
    },
    {
        step: 2,
        name: 'Điền các thông tin yêu cầu'
    },
    {
        step: 3,
        name: 'Tạo mật khẩu của bạn'
    },
]

const initialSignupData = {
    email: 'as12312d',
    firstName: '123123',
    lastName: '123',
    userName: '',
    password: '',
    confirmPassword: '',
    acceptPrivacy: false
}


export default function SignupPage() {
    const [index, setIndex] = useState(0)
    const [signupData, signiupDataDispatch] = useState(initialSignupData)
    const handleIncrIndex = () => {
        setIndex(prev => prev + 1)
    }
    const handleEditSignupData = (action) => {
        const {fieldName, payload} = action
        signiupDataDispatch((state) => {
            return {
                ...state,
                [fieldName]: payload
            }
        })
    }

    
    const signupFormElement = [
        <EmailForm signupData={signupData} fieldName={'email'} action={handleEditSignupData} ></EmailForm>,
        <ProfileForm signupData={signupData} action={handleEditSignupData} ></ProfileForm>
    ]
    return (
        <div className=" lg:w-[1000px] m-auto flex flex-col justify-around lg:mt-32 gap-12 lg:min-h-[550px]">
            <div className=" text-center">
                <h1 className=" text-4xl font-medium text-primary">Tạo tài khoản mới</h1>
                <p className=" pt-2 text-secondary">Bạn đã có tài khoản? <Link to={'/login'} className=" underline cursor-pointer">Đăng nhập</Link></p>
            </div>
            <Timeline index={index} times={times}></Timeline>

            {signupFormElement[index]}
            
            <Button active={false} action={handleIncrIndex} placeHolder={'Tiếp theo'}></Button>
        </div>
    )
}