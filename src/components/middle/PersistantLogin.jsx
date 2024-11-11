'use strict'

import { useDispatch, useSelector } from "react-redux"
import { authTokenSelector } from "../../store/features/auth/auth.slice"
import useRefreshToken from "../../hooks/useRefreshToken"
import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"

const PersistantLogin = () => {
    const accessToken = useSelector(authTokenSelector)
    const dispatch = useDispatch()
    const refresh = useRefreshToken()                                                                       
    const [loading, setLoading] = useState('false')
    useEffect(() => {
        const verifyUser = async() => {
            try {
                const verifyUser = await refresh()
            }
            catch (err){
                console.log(err)
            }
            finally {
                setLoading(false)
            }               ``
        }

        !accessToken ? verifyUser () : setLoading(false)
    }, [])
    return (
        <>
            {
                loading ? 'loadiing...' : <Outlet/>
            }
        </>
    )
}

export default PersistantLogin