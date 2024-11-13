'use strict'

import { useState } from "react"
import { useNavigate } from "react-router-dom"

const NotifyIcon = ({notifies = 
    [
        {
            isRead: false,
            description: 'Đã cập nhật thông tin sản phẩm',
            time: new Date()
        },
        {
            isRead: true,
            description: 'Đã cập nhật thông tin sản phẩm',
            time: new Date()
        },
        {
            isRead: true,
            description: 'Đã cập nhật thông tin sản phẩm',
            time: new Date()
        },
        {
            isRead: false,
            description: 'Đã cập nhật thông tin sản phẩm',
            time: new Date()
        },
    ]
}) => {
    const [visible, setVisible] = useState(false)
    const navigate = useNavigate()
    const numberUnreadNotify = notifies.filter(item => !item.isRead).length
    const handleToggleNotify = () => {
        setVisible(prev => !prev)
    }

    const navgivateAllNotify = ( ) => {
        navigate('/notify/all')
    }
    return (
        <div className=" relative cursor-pointer" onClick={handleToggleNotify} >
            <img src="ico/bell.svg" className=" h-5 w-5"></img>
            <div  className="  p-[0.7rem] bg-danger w-2 h-2 flex items-center justify-center rounded-full absolute top-[-0.7rem] right-[-.75rem]">
                <span className=" select-none text-sm">{numberUnreadNotify}</span>
            </div>
            {
                visible ? 
                    <div className=" absolute flex flex-col rounded-md shadow-lg top-12 left-1/2 -translate-x-1/2 bg-slate-100 overflow-hidden">
                    {
                        notifies.map((item, index) => {
                            return <div className={` gap-2 cursor-pointer hover:bg-slate-200  min-w-[300px] flex text-slate-700 text-base`} key={index}>
                                <div className={` w-1 ${item.isRead ? 'bg-primary' : ''}`}></div>
                                <div className=" pr-4 pt-4 pb-4 flex-col flex gap-2">
                                    <p>{item.description}</p>
                                    <p className=" text-xs">{item.time.toDateString()}</p>
                                </div>
                            </div>
                        })
                        }
                        <div onClick={navgivateAllNotify} className=" hover:bg-slate-900 hover:text-white  cursor-pointer p-4 flex items-center justify-center text-black">
                            <p className=" text-sm">Xem tất cả</p>
                        </div>
                    </div>
                : 
                ''
            }
           
        </div>
    )
}

export default NotifyIcon