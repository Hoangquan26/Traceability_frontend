'use strict'

import axios from 'axios'
import { apiAxios, DEFAULT_HEADERS, DEFAULT_PRIVATE_HEADERS, ENDPOINTS, SERVER_BASE_URL, TIMEOUT } from '../configs/api.config'
import { emailRegex } from '../ultis/regex'
const controller = new AbortController()
const signal = controller.signal
const AccessApi = apiAxios.create({
    baseURL: SERVER_BASE_URL,
    headers: DEFAULT_HEADERS,
    timeout: TIMEOUT
})

const AcessApiPrivate = apiAxios.create({
    baseURL: SERVER_BASE_URL,
    ...DEFAULT_PRIVATE_HEADERS,
    timeout: TIMEOUT
})

AccessApi.interceptors.response.use((response) => response?.data)
AcessApiPrivate.interceptors.response.use((response) => response?.data)

const AccessService = {
     signup: async({email, userName, firstName, lastName, password}) => {
        try {
            const signupResponse = await AcessApiPrivate.post(ENDPOINTS.ACCESS.SINGUP, {
                email, userName, firstName, lastName, password
            }, {
                signal
            })
            if(signupResponse?.status == 'success')
            {

            }
            else if(signupResponse?.status == 'success')
                throw new Error(signupResponse?.message)
            
            return signupResponse
        }
        catch (error) {
            const errorResonse = error?.response?.data
            return {
                message: errorResonse.message || 'Có lỗi đã xảy ra',
                status: errorResonse.status || 'error',
                code: errorResonse.code || 501
            }
        }

        finally {

        }
    },
    login: async({email, password}) => {
        try {
            const loginResponse = await AcessApiPrivate.post(ENDPOINTS.ACCESS.LOGIN, {
                email, password
            }, {
                signal
            })
            if(loginResponse?.status == 'success')
                {
    
                }
            else if(loginResponse?.status == 'success')
                throw new Error(loginResponse?.message)
                
            return loginResponse
        }
        catch (error) {
            const errorResonse = error?.response?.data
            return {
                message: errorResonse.message || 'Có lỗi đã xảy ra',
                status: errorResonse.status || 'error',
                code: errorResonse.code || 501
            }
        }
        finally {

        }
    },
    checkUserExist: async({email}) => {
        try {
            const checkUserExistResponse = await AccessApi.post(ENDPOINTS.ACCESS.CHECK_USER_EXIST, {
                email
            }, {
                signal
            })
    
            return checkUserExistResponse
        }
        catch (error) {
            const errorResonse = error?.response?.data
            return {
                message: errorResonse.message || 'Có lỗi đã xảy ra',
                status: errorResonse.status || 'error',
                code: errorResonse.code || 501
            }
        }
    },
    refreshToken: async() => {
        try {

        }
        catch {
        
        }
    }
}
export default AccessService