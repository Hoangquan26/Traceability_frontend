'use strict'
import { createContext, useState } from "react"
export const TextBoxStatusContext = createContext()
//use to 
export default function TextboxStatusProvider({children}){
    const [status, setStatus] = useState('unfocus')
    return (
        <TextBoxStatusContext.Provider value={[status, setStatus]}>
            {children}
        </TextBoxStatusContext.Provider>
    )
}
