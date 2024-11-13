'use strict'

import { useEffect, useState } from "react"
import Cookies from 'js-cookie';
export const COOKIE_CONFIG = {
    USER_MODE: 'ProfileMode'
}
export default function useCookie(cookieName){
    const [cookieValue, setCookieValue] = useState('')
    useEffect(() => {
        setCookieValue(Cookies.get(cookieName))
    }, [])
    return [cookieValue, setCookieValue]
}