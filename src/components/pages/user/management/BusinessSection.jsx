'use strict'

import { useState } from "react"
import AccountProfile from "./AccountProfile"
import BusinessRoles from "../../../../ultis/user/business.roles"

const data = [
    {
        business_name: 'Winmart',
        role: BusinessRoles.ADMIN
    }
]

export default function BusinessSection() {
    const [businesses, setBusinesses] = useState(data)
    return (
        <>
            <div className=" flex p-4 flex-col grow ml-10 gap-4">
                {
                    businesses.length ? 
                    businesses?.map((item, index) => {
                        return (<AccountProfile key={index} business_name={item.business_name} role={item.role}/>)
                    })
                    :
                    <h1 className=" text-lg font-medium">Chưa có tài khoản doanh nghiệp nào!</h1>
                }
            </div>
        </>
    )
}