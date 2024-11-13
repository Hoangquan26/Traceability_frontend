'use strict'

import { useState } from "react"

/*
status = [
    'unfocus',
    'success',
    'error'
]
*/ 
export default function TextBox({action, data, placeHolder, fieldName, heading, validator = null, options = null}) {
    const [status, setStatus] = useState('unfocus')
    const validatorText = (text) => {
        if(!text.trim().length) return setStatus('unfocus')
        if(validator) {
            const res = validator({text, options})
            if(!res) return setStatus('error')
            else return setStatus('success')
        }
        else return setStatus('success')
    }

    return (
        <div className=" flex flex-col gap-2 w-full">
            <div className=" flex justify-between items-center">
                <p>{heading}</p>
                <div className={`  text-sm ${status == 'unfocus'? ' text-slate-700': status == 'success' ? ' text-success' : ' text-danger'}`}>
                   <p>{status == 'unfocus'? 'Không được để trống': status == 'success' ? 'Hợp lệ' : 'Không hợp lệ'}</p>
                </div>
            </div>
            <input className={` lg:min-w-[650px] ${ status == 'unfocus'? 'focus:border-slate-800 border-slate-400': status == 'success' ? 'border-success' : 'border-danger'} focus:shadow focus:outline-none p-4  rounded-lg border-[1px]`} type="text" placeholder={placeHolder} value={data} 
            onChange={(e) => {
                action({
                    payload: e.target.value,
                    fieldName: fieldName
                })
                validatorText(e.target.value)
                }
            }
            ></input>
        </div>
    )
}