'use strict'
import { Link, NavLink, useNavigate } from "react-router-dom"
import MenuChild from "./menu.child"
import { useState } from "react"
import useLogout from '../hooks/useLogout'
export default function Header(){
    const [visible, setVisible] = useState(false)
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


    return <div id="header" className=" z-10 bg-primary text-white sticky flex items-center justify-between p-6 lg:pr-deskTop lg:pl-deskTop ">
        <div id="header-logo">
           <span className=" text-xl">Logo</span>
        </div>
        <div id="header-navigator" className=" grow-1 flex gap-16">
            <ul className=" flex gap-8">
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
                <li  className=" flex items-center invisible-child relative">
                    <img className=" h-5 w-5" src="ico/user.white.svg"></img>
                    <MenuChild items={[
                        {
                            item_name: "Quản lý tài khoản",
                            item_url: "1",
                            item_icon: <img className=" h-5 w-5" src="ico/user.group.svg"></img>
                        },
                        {
                            item_name: "Cài đặt & tài khoản",
                            item_url: "1",
                            item_icon: <img className=" h-5 w-5" src="ico/setting.svg"></img>
                        },
                        {
                            item_name: "Đăng xuất",
                            item_url: "1",
                            item_icon: <img className=" h-5 w-5" src="ico/out.svg"></img>,
                            item_onClick : handleLogout
                        },
                    ]}  ></MenuChild>
                </li>
            </ul>
        </div>

    </div>
} 
    
