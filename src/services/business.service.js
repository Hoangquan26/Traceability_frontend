'use strict'

import { apiAxios, ENDPOINTS } from "../configs/api.config"
import { SHOW_TOAST_PROMISE } from "../ultis/toast.notify"
import useAxiosPrivate from "../hooks/useAxiosPrivate"
const BusinessService = {
    createBusiness: async({business_name, business_description}, axiosPrivate) => {
        try {
            const response = await axiosPrivate.post(ENDPOINTS.BUSINESS.CREATE_BUSINESS, {
                business_name,
                business_description
            })
            if(response?.status == 'error')
                throw new Error(response?.message)
            return response
        }
        catch(error) {
            console.log('error:::', error)
            const errorResonse = error?.response?.data
            return {
                message: errorResonse?.message || 'Có lỗi đã xảy ra',
                status: errorResonse?.status || 'error',
                code: errorResonse?.code || 501
            }
        }
    },

    getJoinedBusiness: async({page},axiosPrivate) => {
        try {
            const response = await axiosPrivate.post(ENDPOINTS.BUSINESS.GET_ALL_JOINED, {
                page
            })
            if(response?.status == 'error')
                throw new Error(response?.message)
            return response
        }
        catch(error) {
            console.log('error:::', error)
            const errorResonse = error?.response?.data
            return {
                message: errorResonse?.message || 'Có lỗi đã xảy ra',
                status: errorResonse?.status || 'error',
                code: errorResonse?.code || 501
            }
        }
    },

    switchBusinessProfile: async({businessId},axiosPrivate) => {
        try {
            const response = await axiosPrivate.post(ENDPOINTS.BUSINESS.SWITCH_BUSINESS_PROFILE, {
                businessId
            })
            console.log(response)
            if(response?.status == 'error')
                throw new Error(response?.message)
            return response
        }
        catch(error) {
            const errorResonse = error?.response?.data
            return {
                message: errorResonse?.message || 'Có lỗi đã xảy ra',
                status: errorResonse?.status || 'error',
                code: errorResonse?.code || 501
            }
        }
    },

    refresh: async(axiosPrivate) => {
        try {
            const response = await axiosPrivate.post(ENDPOINTS.BUSINESS.REFRESH)
            if(response?.status == 'error')
                throw new Error(response?.message)
            return response
        }
        catch(error) {
            console.log('error:::', error)
            const errorResonse = error?.response?.data
            return {
                message: errorResonse?.message || 'Có lỗi đã xảy ra',
                status: errorResonse?.status || 'error',
                code: errorResonse?.code || 501
            }
        }
    }
}

export default BusinessService