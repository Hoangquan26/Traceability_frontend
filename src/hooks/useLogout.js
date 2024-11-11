'use strict'

import { useDispatch } from "react-redux"
import { setAccessToken, setAuthUser } from "../store/features/auth/auth.slice"
import { privateApi } from "../api/privateApi"
import { ENDPOINTS } from "../configs/api.config"

const useLogout = () => {
    const dispatch = useDispatch()
    const logout = async() => {
        try {
            dispatch(setAuthUser({}))
            dispatch(setAccessToken(''))
            const response = await privateApi.post(ENDPOINTS.ACCESS.LOGOUT)
        }
        catch (err) {
            console.log(err)
        }
    }
    return logout
}

export default useLogout