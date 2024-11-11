'use strict'

import { useSelector } from "react-redux"
import { authTokenSelector } from "../store/features/auth/auth.slice"
import useRefreshToken from "./useRefreshToken"
import { privateApi } from "../api/privateApi"
import { useEffect } from "react"
import { StatusCodes } from "../ultis/statuscode/statusCodes"
import UserHeader from "../ultis/user/user.header.config"

export default uesAxiosPrivate = () => {
    const accessToken = useSelector(authTokenSelector)
    const refresh = useRefreshToken()
    useEffect(() => {
        const requestIntercept = privateApi.interceptors.request.use((request) => {
            if(!request.headers[UserHeader.ACCESS_TOKEN]) {
                request.headers[UserHeader.ACCESS_TOKEN] = accessToken
            }
            return request
        }, error => Promise.reject(error))

        const responseIntercept = privateApi.interceptors.response.use(response => response,
            async(error) => {
                console.log(error)
                const prevRequest = error?.config
                if(error?.response?.code == StatusCodes.NON_AUTHORITATIVE_INFORMATION && !prevRequest?.sent) {
                    prevRequest.sent = true
                    const accessToken = await refresh()
                    prevRequest.headers[UserHeader.REFRESH_TOKEN] = accessToken
                    return privateApi(prevRequest)
                }
                return Promise.reject(error)
            }
        )
        
        return () =>  {
            privateApi.interceptors.response.eject(requestIntercept) 
            privateApi.interceptors.response.eject(responseIntercept)
        }
    }, [accessToken, refresh])
    return privateApi
}