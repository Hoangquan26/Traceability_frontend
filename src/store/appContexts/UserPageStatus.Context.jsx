'use strict'

import { createContext, useState } from "react"
export const sidebarToggleContext = createContext()
export const FormStatus = createContext()
export default function UserPageStatus({children}) {
    const [sidebarToggle, setSidebarToggle] = useState(false)
    const [displayForm, setDisplayForm] = useState(false)
    return (
        <sidebarToggleContext.Provider value={[sidebarToggle, setSidebarToggle]}>
            <FormStatus.Provider value={[displayForm, setDisplayForm]}>
                {children}
            </FormStatus.Provider>
        </sidebarToggleContext.Provider>
    )
}