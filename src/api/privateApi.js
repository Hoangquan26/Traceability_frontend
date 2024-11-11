'use strict'

import axios from "axios"
import { DEFAULT_PRIVATE_HEADERS, SERVER_BASE_URL, TIMEOUT } from "../configs/api.config"

const privateApi = axios.create({
    baseURL: SERVER_BASE_URL,
    ...DEFAULT_PRIVATE_HEADERS,
    timeout: TIMEOUT
})

privateApi.interceptors.response.use((response => {
    return response.data
}
))

export {
    privateApi
}