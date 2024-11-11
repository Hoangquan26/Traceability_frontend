'use strict'

import { Outlet, Navigate, useLocation } from "react-router-dom"
import { useSelector } from 'react-redux'
import { authRolesSelector, authUserSelector } from "../../store/features/auth/auth.slice"
export default function ProtectRoute({roles = []}) {
    const location = useLocation()
    
    const user = useSelector(authUserSelector)
    const authRoles = useSelector(authRolesSelector)
    
    return (
        authRoles?.find(roleItem => roles.includes(roleItem))
        ? <Outlet/> : user?._id ?
                <Navigate to={-1} replace state={{from: location.pathname}}/> : 
                <Navigate to={'/login'} replace state={{from: location.pathname}}/>
    )
}