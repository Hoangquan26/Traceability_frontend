'use strict'

import axios, { formToJSON } from "axios"
import { DEFAULT_PRIVATE_HEADERS, ENDPOINTS, SERVER_BASE_URL } from "../configs/api.config"
import { useDispatch } from "react-redux"
import {  setAccessToken, setAuthUser } from "../store/features/auth/auth.slice"
import {privateApi} from '../api/privateApi'

const useRefreshToken = () => {
    const dispatch = useDispatch()
    const refreshToken = async() => {
        const response = await  privateApi.post(ENDPOINTS.ACCESS.REFRESH_TOKEN)
        const accessToken = response.metadata.tokens.accessToken
        const user = response.metadata.user
        dispatch(setAuthUser({...user}))
        dispatch(setAccessToken(accessToken))
        return accessToken
    }
    return refreshToken
}

export default useRefreshToken