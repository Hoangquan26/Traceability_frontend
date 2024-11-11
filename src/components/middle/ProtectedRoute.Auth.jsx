'use strict'

import { Outlet, Navigate, useLocation } from "react-router-dom"
import { useSelector } from 'react-redux'
import { authRolesSelector, authUserSelector } from "../../store/features/auth/auth.slice"
export default function ProtectRoute() {
    const location = useLocation()
    
    const user = useSelector(authUserSelector)
    const authRoles = useSelector(authRolesSelector)
    
    return ( user?._id ?
                <Outlet/> : 
                <Navigate to={'/login'} replace state={{from: location.pathname}}/>
    )
}