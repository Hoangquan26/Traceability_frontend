'use strict'

import { Link } from "react-router-dom"

export default function MenuChild({items}) {
    
    return <ul className={` rounded-md animate-scaleOut text-black absolute top-20 right-[-20px] flex bg-white shadow-lg flex-col border-gray-200 border-[1px] before:bottom-full before:w-full before:right-0 before:h-14 before:absolute `}>
        {items.map((item, index) => {
            const {item_name, item_url, item_icon, item_onClick, item_active} = item
            return (
                <>
                {
                    item_active ? 
                    <li onClick={item_onClick ? item_onClick : () => {}} key={index} className={` cursor-pointer w-[250px] p-4 font-medium hover:bg-slate-200 flex items-center justify-between flex-row`}>
                        <Link to={item_url}>{item_name}</Link>
                        {item_icon ?? <img className=" h-5 w-5" src="public/ico/exclamation.svg"></img>}
                    </li>
                    : ''
                }
                </>
            )
        })}
    </ul>
}