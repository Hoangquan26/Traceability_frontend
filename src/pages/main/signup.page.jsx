'use strict'

import { Link, useLocation, useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { useState } from "react"

import {setRoles, setAuthUser, setAccessToken, setStatusLoading, setStatusFailed, setStatusSuccess} from '../../store/features/auth/auth.slice'
import Timeline from "../../components/uxui/timeline"
import Button from "../../components/uxui/button/button.style.2"
import EmailForm from "../../components/pages/user/signup/email.form.signup"
import ProfileForm from "../../components/pages/user/signup/profile.form.signup"
import PasswordForm from "../../components/pages/user/signup/password.form.signup"
import { validEmail, validPassword, validText } from "../../ultis/validator"
import { HEADERS } from "../../configs/api.config"
import AccessService from '../../services/access.service'
import { REMOVE_TOAST_BY_ID, SHOW_LOADING_TOAST, UPDATE_TOAST_BY_ID } from "../../ultis/toast.notify"
import { ToastContainer } from 'react-toastify';
import { ServerStatusCode } from '../../ultis/statuscode/httpStatusCode'
import 'react-toastify/dist/ReactToastify.css'
const times = [
    {
        step: 1,
        name: 'Cung cấp email tạo tài khoản'
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
    email: '',
    firstName: '',
    lastName: '',
    userName: '',
    password: '',
    confirmPassword: '',
    acceptPrivacy: false
}


export default function SignupPage() {
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    if(document.cookie.includes(HEADERS.ACCESS_TOKEN)) {
        navigate('/')
    }
    const [index, setIndex] = useState(0)
    const [signupData, signiupDataDispatch] = useState(initialSignupData)
    
    //navigator 

    //handle DOM
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
    const handleSignup = async() => {
        const toast_id = SHOW_LOADING_TOAST()
        const signupResponse = await AccessService.signup({...signupData})
        dispatch(setStatusLoading())
        if(signupResponse?.status == ServerStatusCode.StatusCodes.CREATED) {
            UPDATE_TOAST_BY_ID({toast_id, options: {
                render: `${signupResponse?.message || 'Thành công'}`,
                isLoading: false,
                type: 'success',
                autoClose: 5000
            }})
            const {user, tokens, roles} = signupResponse?.metadata

            dispatch(setStatusSuccess())
            dispatch(setAuthUser(user || {}))
            dispatch(setAccessToken(tokens?.accessToken || ''))
            dispatch(setRoles(roles || []))
            navigate(location.state?.from || '/')
        }
        else {
            UPDATE_TOAST_BY_ID({toast_id, options: {
                render: `${signupResponse?.message || 'Có lỗi đã xảy ra'}`,
                isLoading: false,
                type: 'error',
                autoClose: 5000
            }})
            dispatch(setStatusFailed())
        }
    }

    const handleCheckEmail = async() => {
        const toast_id = SHOW_LOADING_TOAST()
        const data = await AccessService.checkUserExist({...signupData})

        if(data.metadata) {
            UPDATE_TOAST_BY_ID({toast_id, options: {
                render: 'Email đã được sử dụng',
                isLoading: false,
                type: 'error',
                autoClose: 5000
            }})
            return
        }
        REMOVE_TOAST_BY_ID(toast_id)
        handleIncrIndex()
    }

    //define action
    const signUpAction = [
        handleCheckEmail,
        handleIncrIndex,
        handleSignup
    ]
    //define validator
    const validNextPoint = index == 0 ? validEmail({text: signupData.email}) : index == 1 ? 
    validText({text: signupData.firstName}) && validText({text: signupData.lastName}) && validText({text: signupData.userName}) : 
    validPassword({text: signupData.password}) && validText({text: signupData.confirmPassword, options:{sameValue: signupData.password}}) 

    //define element
    const signupFormElement = [
        <EmailForm signupData={signupData} fieldName={'email'} action={handleEditSignupData} ></EmailForm>,
        <ProfileForm signupData={signupData} action={handleEditSignupData} ></ProfileForm>,
        <PasswordForm signupData={signupData} action={handleEditSignupData} ></PasswordForm>
    ]


    return (
        <>
          
            <div className="flex justify-start lg:w-[1000px] m-auto">
            </div>
            <div className=" lg:w-[1000px] m-auto flex flex-col justify-around lg:mt-32 gap-12 lg:min-h-[550px]">
                <div className=" text-center">
                    <h1 className=" text-4xl font-medium text-primary">Tạo tài khoản mới</h1>
                    <p className=" pt-2 text-secondary">Bạn đã có tài khoản? <Link to={'/login'} className=" underline cursor-pointer">Đăng nhập</Link></p>
                    <p className=" pt-2 text-secondary">Quay về  <Link to={'/'} className=" underline cursor-pointer">trang chủ</Link></p>
                </div>
                <Timeline index={index} times={times}></Timeline>

                {signupFormElement[index]}
                
                <Button active={ validNextPoint} action={signUpAction[index]} placeHolder={index == 2 ? 'Tạo tài khoản' : 'Tiếp theo'}></Button>
            </div>
        </>
    )
}