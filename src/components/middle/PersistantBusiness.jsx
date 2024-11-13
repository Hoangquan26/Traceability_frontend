'use strict'

import { useEffect, useState } from "react"
import useBusinessService from "../../hooks/useBusinessService"
import { useDispatch, useSelector } from "react-redux"
import { authBusinessSelector, setBusiness } from "../../store/features/auth/business.slide"
import { Outlet } from "react-router-dom"
import useCookie, { COOKIE_CONFIG } from "../../hooks/useCookie"
import { privateApi } from "../../api/privateApi"
import { ENDPOINTS } from "../../configs/api.config"

export default function PersistantBusiness() {
    const dispatch = useDispatch()
    const [userModeCookie, setUserModeCookie] = useCookie(COOKIE_CONFIG.USER_MODE)
    const authBusiness = useSelector(authBusinessSelector)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        let isMounted = true
        const verifyBusiness = async() => {
            try {
                const response = await privateApi.post(ENDPOINTS.BUSINESS.REFRESH)
                console.log(response)
                if(response.status == 'success') {
                    console.log(response?.metadata?.business || {})
                    dispatch(setBusiness({
                        ...response?.metadata?.business || {}
                    }))
                }
            }
            catch(err) {
                console.log(`---refreshError:::`, err?.message)
            }
            finally{
                isMounted && setLoading(false)
            }
        }
        userModeCookie === 'business' && !authBusiness._id ? verifyBusiness() :   setLoading(false)
        return () => {
            isMounted = false
        }
    }, [userModeCookie])

    return (
        <>
            {loading ? 'Loading...' : <Outlet/>}
        </>
    )
}