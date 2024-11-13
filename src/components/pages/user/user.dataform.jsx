'use strict'

import { useContext } from "react"
import { FormElement } from "../../configs/user.element.config"
import TextBox from "../../uxui/textbox/textbox.style.2"
import { FormStatus } from "../../../store/appContexts/UserPageStatus.Context"

/*

*/ 
export default function UserDataForm({action = "ADD_BUSINESS"}) {
    const [displayForm, setDisplayForm] = useContext(FormStatus)
    return (
        <>
            {displayForm ? 
                <div className="flex  fixed top-0 left-0 right-0 bottom-0 z-10 items-center justify-center bg-slate-300 ">
                    <div className="p-12bg-white rounded-2xl border-primary border-[1px] flex flex-col bg-white p-20 shadow-lg ">
                        {
                            FormElement.ADD_BUSINESS
                        }
                    </div>
                </div>
            : ''}
        </>
    )
}