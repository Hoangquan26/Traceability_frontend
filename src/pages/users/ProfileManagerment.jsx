'use strict'

import { useSelector } from "react-redux"
import { authUserSelector } from "../../store/features/auth/auth.slice"
import Button from "../../components/uxui/button/button.style.3"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { FormStatus, sidebarToggleContext } from "../../store/appContexts/UserPageStatus.Context"
import HorizontalLine from '../../components/uxui/HorizontalLine'
import UserRoleDisplay from '../../components/uxui/UserRoleDisplay'

import ProfileSection from "../../components/pages/user/management/ProfileSection"
import BusinessSection from "../../components/pages/user/management/BusinessSection"
const ProfileManagerment = () => {
    const authUser = useSelector(authUserSelector)
    const navigate = useNavigate()
    const [sidebarToggle, setSidebarToggle] = useContext(sidebarToggleContext) 
    const [displayForm, setDisplayForm] = useContext(FormStatus)

    const handleDisplayForm = () => {
        setDisplayForm(prev => !prev)
    }
  
    return (
        <div className={` min-h-screen ${sidebarToggle ? ' ml-[350px]' : 'ml-[50px]'} transition-all relative top-40 flex flex-col grow shrink bg-secondary`}>
           <div style={{backgroundImage: 'linear-gradient(135deg, #93a5cf 10%, #e4efe9 100%)'}} className={` absolute w-full h-40 bottom-full`}></div>
            <div className={` pl-20 pr-20 pt-16`}>
                <div className={` z-10 -top-16 absolute bg-white overflow-hidden h-32 w-32 rounded-full`}>
                    <img className=" h-full object-cover" src="images/userImage.png"></img>
                </div>
                <div className=" flex w-full justify-between pt-4">
                    <div className=" flex gap-12 items-center">
                        <div className=" flex flex-col gap-2">
                            <h1 className=" text-3xl font-medium">{authUser?.userName || 'Tên người dùng'}</h1>
                            <h1 className=" text-sm">{authUser?.email || 'Email'}</h1>
                        </div>
                        <div>
                            <UserRoleDisplay placeHolder={'Admin'}/>
                        </div>
                    </div>
                    <div>
                        <Button icon={'ico/arrow.right.svg'} placeHolder={'Chi tiết'} ></Button>
                    </div>
                </div>
            </div>
            <HorizontalLine/>
            <div className=" pr-24 flex justify-end p-4">
                <Button active={true} action={handleDisplayForm} css={'grow-0'} placeHolder={'Đăng ký tài khoản doanh nghiệp'}></Button>
            </div>
            <ProfileSection title={'Quản lý tài khoản'} 
                desciption={'Hiển thị tát cả tài khoản doanh nghiệp được liên kết với tài khoản'}
                children={<BusinessSection/>}
            />
        </div>
    )
}

export default ProfileManagerment