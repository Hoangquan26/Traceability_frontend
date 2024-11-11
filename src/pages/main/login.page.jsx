'use strict'

import { Link, useLocation, useNavigate } from "react-router-dom"
import Button from "../../components/uxui/button/button.style.2"
import { validEmail } from "../../ultis/validator"
import { useState } from "react"
import TextBox from "../../components/uxui/textbox/textbox.style.1"
import AccessService from "../../services/access.service"
import { SHOW_LOADING_TOAST, SHOW_TOAST_PROMISE, UPDATE_TOAST_BY_ID } from "../../ultis/toast.notify"
import { setAccessToken, setAuthUser, setStatusFailed, setStatusLoading, setStatusSuccess } from "../../store/features/auth/auth.slice"
import { useDispatch } from "react-redux"
import useRefreshToken from "../../hooks/useRefreshToken"

const initiialData = {
    email: '',
    password: ''
}

export default function LoginPage(){
    const refresh = useRefreshToken()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'


    const [loginData,  setLoginData] = useState(initiialData)
    const handleEditLoginData = (action) => {
        const {fieldName, payload} = action
        setLoginData((state) => {
            return {
                ...state,
                [fieldName]: payload
            }
        })
    }

    const handleLoginSubmit = async() => {
        dispatch(setStatusLoading())
        const response = await SHOW_TOAST_PROMISE(AccessService.login({...loginData}))
        if(response.status == 'success') {
            dispatch(setAuthUser({...response.metadata.user} || {}))
            dispatch(setAccessToken(response.metadata.tokens?.accessToken || ''))
            dispatch(setStatusSuccess())
            navigate(from)
        }
        else {
            setStatusFailed()
        }
    }
    return (
        <>
            <div className="flex justify-start lg:w-[1000px] m-auto">
            </div>
            <div className=" lg:w-[1000px] m-auto flex flex-col justify-around lg:mt-32 gap-12 lg:min-h-[550px]">
                <div className=" text-center">
                    <h1 className=" text-4xl font-medium text-primary">Chào mừng bạn đã quay trở lại</h1>
                    <p className=" pt-2 text-secondary">Bạn chưa có tài khoản? <Link to={'/login'} className=" underline cursor-pointer">Đăng ký</Link></p>
                    <p className=" pt-2 text-secondary">Quay về  <Link to={'/'} className=" underline cursor-pointer">trang chủ</Link></p>
                </div>
                <div className=" flex flex-col gap-8">
                    <TextBox validator={validEmail} heading={'Nhập email'} fieldName={'email'} action={handleEditLoginData} data={loginData['email']} placeHolder={'Điền email của bạn (abc@yahoo.com, ...)'}></TextBox>
                    <TextBox heading={'Nhập mật khẩu'} fieldName={'password'} action={handleEditLoginData} data={loginData['password']} placeHolder={'Nhập mật khẩu của bạn tại dây'}></TextBox>
                </div>
                <Button active={true} action={handleLoginSubmit} placeHolder={'Đăng nhập'}></Button>
                <Button active={true} action={async() => {
                    const res = await refresh()
                    console.log(res)
                }} placeHolder={'Refresh'}></Button>
            </div>
        </>
    )
}