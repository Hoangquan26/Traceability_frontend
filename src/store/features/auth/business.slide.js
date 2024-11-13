'use strict'

import { createSlice } from "@reduxjs/toolkit"

export const businessSlice = createSlice({
    name: 'business',
    initialState: {
            business: {
                _id: null,
                business_name: '',
                business_roles: {}
        },
        status: 'idle',
        error: null
    },
    reducers: {
        setBusiness: (state, action) => {
            state.business = {
                ...action.payload
            }
        },
        setStatusLoading: (state) => {
            state.status = 'loading'
        },

        setStatusIdle: (state) => {
            state.status = 'idle'
        },

        setStatusSuccess: (state) => {
            state.status = 'success'
        },

        setStatusFailed: (state) => {
            state.status = 'failed'
        },
    }
})
export const authBusinessSelector = (state) => state.business.business
export const {setBusiness, setStatusLoading ,setStatusIdle, setStatusSuccess, setStatusFailed } = businessSlice.actions
export default businessSlice.reducer

