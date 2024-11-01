'use strict'

import { useState } from "react"

/*
status = [
    'unfocus',
    'focus',
    'success',
    'error'
]
*/ 

export default function TextBox({action, data, placeHolder, fieldName, heading}) {
    const [status, setStatus] = useState('unfocus')
    return (
        <div className=" flex flex-col gap-2 w-full">
            <p>{heading}</p>
            <input className=" focus:shadow-none focus:outline-none p-4 border-slate-400 rounded-sm border-[1px]" type="text" placeholder={placeHolder} value={data} 
            onChange={(e) => {
                action({
                    payload: e.target.value,
                    fieldName: fieldName
                })
                }
            }
            ></input>
        </div>
    )
}