'use strict'

import { useNavigate } from "react-router-dom"

export const navigateToHome = () => {
    return useNavigate('/')
}