import { configureStore } from '@reduxjs/toolkit'

import authReducer from './features/auth/auth.slice'
import authBusiness from './features/auth/business.slide'
export const store =  configureStore({
    reducer: {
        auth: authReducer,
        business: authBusiness
    }
})