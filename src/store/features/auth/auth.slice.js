
import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    user: {
        email: '',
        roles: [],
        _id: ''
    },
    status: 'idle', //idle / loading / success / failed
    error: null,
    accessToken: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthUser: (state, action) => {
            state.user = {...action.payload}
        },
        
        setAccessToken: (state, action) => {
            state.accessToken = action.payload
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
    // extraReducers(builder) {
        
    // }
})
export const authUserSelector = (state) => state.auth.user
export const authRolesSelector = (state) => state.auth.roles
export const authTokenSelector = (state) => state.auth.accessToken
export const { setAuthUser,
    setAccessToken,
    setRoles,
    setStatusLoading,
    setStatusIdle,
    setStatusSuccess,
    setStatusFailed } = authSlice.actions
export default authSlice.reducer