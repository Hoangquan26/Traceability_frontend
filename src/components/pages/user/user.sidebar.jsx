'use strict'

import { Link, NavLink, useNavigate } from "react-router-dom"
import {useSelector} from 'react-redux'
import { authUserSelector } from "../../../store/features/auth/auth.slice" 
import { useContext } from "react"
import { sidebarToggleContext } from "../../../store/appContexts/UserPageStatus.Context" 
import useLogout from "../../../hooks/useLogout" 
import { SHOW_TOAST_PROMISE } from "../../../ultis/toast.notify" 
export default function UserSideBar({}) {
    const logout = useLogout()
    const navigate = useNavigate()
    const authUser = useSelector(authUserSelector)
    const [sidebarToggle, setSidebarToggle] = useContext(sidebarToggleContext) 
    const handleToggle = () => {
        setSidebarToggle(prev => !prev)
    }
    const handleLogout = async() => {
        const response = await SHOW_TOAST_PROMISE(logout)
        navigate('/login')
    }
    return (
        <div className={` select-none overflow-hidden bg-white z-50 fixed top-0 bottom-0 left-0 ${sidebarToggle ? ' lg:min-w-[350px] p-6' : 'p-2'} transition-all flex gap-6 flex-col  border-[1px] border-primary shadow-sm pt-10 justify-between`}>
            <div className=" flex flex-col gap-12">
                <div className={` flex items-center ${sidebarToggle ? 'justify-between' : ' justify-center'}`}>
                    {   
                        sidebarToggle ? 
                        <Link to='/'>
                            <h1 className=" font-medium text-3xl">Logo</h1>
                        </Link>
                        :
                        ''
                    }
                    <div onClick={handleToggle}>
                        <img className=" cursor-pointer transition-all hover:scale-110 h-5" src="ico/menu.svg"></img>
                    </div>
                </div>
                <div className={` flex flex-col gap-6 ${sidebarToggle ? '' : 'items-center'}`}>
                    <h1 className={` text-lg font-medium text-primary ${sidebarToggle ? ' ' : 'bg-primary w-full h-[2px] rounded-full'}`}>{sidebarToggle ? 'Cài đặt tài khoản' : ''}</h1>
                    <NavLink className=" hover:scale-105 transition-all gap-4 flex items-center font-medium" to={''}>
                        <img className=" w-5 h-5" src="ico/user.svg"></img>
                        {sidebarToggle ? <h2>Quản lý tài khoản</h2> : ''}
                    </NavLink>
                    <NavLink className=" hover:scale-105 transition-all gap-4 flex items-center font-medium" to={''}>
                        <img className=" w-5 h-5" src="ico/open.mail.svg"></img>
                        {sidebarToggle ? <h2>Tất cả lời mời</h2> : ''}
                    </NavLink>
                    <NavLink className=" hover:scale-105 transition-all gap-4 flex items-center font-medium" to={''}>
                        <img className=" w-5 h-5" src="ico/sercurity.svg"></img>
                        {sidebarToggle ? <h2>Bảo mật và đăng nhập</h2> : ''}
                    </NavLink>
                    <NavLink className=" hover:scale-105 transition-all gap-4 flex items-center font-medium" to={''}>
                        <img className=" w-5 h-5" src="ico/key.svg"></img>
                        {sidebarToggle ? <h2>Khóa cá nhân</h2> : ''}
                    </NavLink>
                    <NavLink className=" hover:scale-105 transition-all gap-4 flex items-center font-medium" to={''}>
                        <img className=" w-5 h-5" src="ico/help.svg"></img>
                        {sidebarToggle ? <h2>Trợ giúp & hỗ trợ</h2> : ''}
                    </NavLink>
                </div>
                <div className={` flex flex-col gap-6 ${sidebarToggle ? '' : 'items-center'}`}>
                    <h1 className={` text-lg font-medium text-primary ${sidebarToggle ? ' ' : 'bg-primary w-full h-[2px] rounded-full'}`}>{sidebarToggle ? 'Cài đặt doanh nghiệp' : ''}</h1>
                    <NavLink className=" hover:scale-105 transition-all gap-4 flex items-center font-medium" to={''}>
                        <img className=" w-5 h-5" src="ico/user.group.svg"></img>
                        {sidebarToggle ? <h2>Quản lý doanh nghiệp</h2> : ''}
                    </NavLink>
                    <NavLink className=" hover:scale-105 transition-all gap-4 flex items-center font-medium" to={''}>
                        <img className=" w-5 h-5" src="ico/open.mail.svg"></img>
                        {sidebarToggle ? <h2>Mời tham gia</h2> : ''}
                    </NavLink>
                    <NavLink className=" hover:scale-105 transition-all gap-4 flex items-center font-medium" to={''}>
                        <img className=" w-5 h-5" src="ico/qrcode.svg"></img>
                        {sidebarToggle ? <h2>Quản lý sản phẩm</h2> : ''}
                    </NavLink>
                </div>
            </div>

            <div>
                <div className=" flex gap-4 items-center">
                    <div className=" flex items-center justify-center w-14 h-14 bg-secondary p-2 rounded-full overflow-hidden">
                        <img className="object-cover" src="images/userImage.png"></img>
                    </div>
                    {
                        sidebarToggle ?
                         <>
                            <div className=" items-start justify-center text-sm flex flex-col">
                            <h1 className=" ">
                                {authUser?.email || 'Người dùng'}
                            </h1>
                            <p>
                                {'Thành viên'}
                            </p>
                            </div>
                            <div onClick={handleLogout}>
                                <img className=" cursor-pointer hover:scale-110 transition-all h-5 w-5" src="ico/out.svg"></img>
                            </div>
                         </>
                        : ''
                    }
                    
                </div>
            </div>
        </div>
    )
}