'use strict'
import { Link, NavLink, useNavigate } from "react-router-dom"
import MenuChild from "./menu.child"
import { useState } from "react"
import useLogout from '../hooks/useLogout'
import { useSelector } from "react-redux"
import { authTokenSelector, authUserSelector } from "../store/features/auth/auth.slice"
import NotifyIcon from "./uxui/NotifyItem"
import useCookie, { COOKIE_CONFIG } from "../hooks/useCookie"
import { authBusinessSelector } from "../store/features/auth/business.slide"
export default function Header(){
    const [userModeCookie, setUserModeCookie] = useCookie(COOKIE_CONFIG.USER_MODE)
    const authBusiness = useSelector(authBusinessSelector)
    const [visible, setVisible] = useState(false)
    const authUser = useSelector(authUserSelector)
    const authAccessToken = useSelector(authTokenSelector)
    const navigate = useNavigate()
    const logout = useLogout()
    const visibleChildMenu = () => {
        setVisible(true)
    }

    const invisibleChildMenu = () => {
        setVisible(false)
    }

    const handleLogout = async() => {
        await logout()
        navigate('/login')
    }

    const dataStrategy = {
        userName : {
            business: authBusiness.business_name,
            user: authUser.userName
        }
    }
    return <div id="header" className=" z-10 bg-primary text-white sticky flex items-center justify-between p-6 lg:pr-deskTop lg:pl-deskTop ">
        <div id="header-logo">
           <span className=" text-xl">Logo</span>
        </div>
        <div id="header-navigator" className="items-center select-none grow-1 flex gap-16">
            <ul className="  flex gap-8">
                <li className=" relative hover:scale-110 transition-all">
                <NavLink
                    to={`/`}
                    className={`${({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }} font-normal text-lg`   }
                    >Trang chủ
                </NavLink>
                </li>
                <li className=" relative hover:scale-110 transition-all">
                    <NavLink
                        to={`/me`}
                        className={`${({ isActive, isPending }) =>
                        isActive
                            ? "active"
                            : isPending
                            ? "pending"
                            : ""
                        }} font-normal text-lg`  }
                        >Doanh nghiệp
                    </NavLink>
                </li>
                <li 
                    className=" invisible-child relative hover:scale-110 transition-all"
                    onMouseEnter={visibleChildMenu}
                    onMouseLeave={invisibleChildMenu}
                >
                    <NavLink
                        to={`/`}
                        className={`${({ isActive, isPending }) =>
                        isActive
                            ? "active"
                            : isPending
                            ? "pending"
                            : ""
                        }} font-normal text-lg ` }
                        >Truy xuất
                    </NavLink>
                    <MenuChild items={[
                        {
                            item_name: "Truy xuất qua QR",
                            item_url: "1",
                            item_icon: <img className=" h-5 w-5" src="ico/qrcode.svg"></img>
                        },
                        {
                            item_name: "Tất cả sản phẩm",
                            item_url: "1",
                            item_icon: <img className=" h-5 w-5" src="ico/boxchain.svg"></img>
                        }
                    ]} ></MenuChild>
                </li>
                <li className=" relative hover:scale-110 transition-all">
                    <NavLink
                        to={`/about`}
                        className={`${({ isActive, isPending }) =>
                        isActive
                            ? "active"
                            : isPending
                            ? "pending"
                            : ""
                        }} font-normal text-lg` }
                        >Giới thiệu
                    </NavLink>
                </li>
            </ul>
            <ul id="header-guest" className=" flex gap-8">
                <li className=" relative flex items-center">
                    <img className=" h-5 w-5" src="ico/magnifying.white.svg"></img>
                </li>
                
                <li  className=" flex items-center">
                    <img className=" h-5 w-5" src="ico/love.white.svg"></img>
                </li>
                <li className=" flex items-center">
                    <NotifyIcon/>
                </li>
                {
                    !authAccessToken 
                    ? 
                    <>
                        <div>
                            <Link to={'/login'}>Đăng nhập</Link>
                        </div>
                    </>
                    : 
                    <div className=" cursor-pointer border-[1px] flex gap-2 rounded-full p-2 pl-6 pr-6">
                        <li  className=" flex items-center invisible-child relative">
                        <img className=" h-5 w-5" src="ico/user.white.svg"></img>
                        <p className=" ml-2">{dataStrategy.userName[userModeCookie]}</p>
                        <MenuChild items={[
                            {
                                item_name: "Quản lý tài khoản",
                                item_url: "/me",
                                item_icon: <img className=" h-5 w-5" src="ico/user.group.svg"></img>,
                                item_active: true
                            },
                            {
                                item_name: "Quản lý doanh nghiệp",
                                item_url: "/me",
                                item_icon: <img className=" h-5 w-5" src="ico/user.group.svg"></img>,
                                item_active: userModeCookie === 'business'
                            },
                            {
                                item_name: "Cài đặt & tài khoản",
                                item_url: "1",
                                item_icon: <img className=" h-5 w-5" src="ico/setting.svg"></img>,
                                item_active: true
                            },
                            {
                                item_name: "Đăng xuất",
                                item_url: "1",
                                item_icon: <img className=" h-5 w-5" src="ico/out.svg"></img>,
                                item_onClick : handleLogout,
                                item_active: true
                            },
                        ]}  ></MenuChild>
                        </li>
                    </div>
                }
                
            </ul>
        </div>

    </div>
} 
    
