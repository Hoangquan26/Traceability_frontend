import axios from "axios";

// export const SERVER_BASE_URL = process.env.REACT_APP_RUN_MODE === 'dev' ? REACT_APP_SERVER_BASE_URL ?? 'http://localhost:3050/v1/api' : 'notfound'
export const SERVER_BASE_URL = 'http://localhost:3050/v1/api' 
export const ENDPOINTS = {
    ACCESS: {
        LOGIN: `${SERVER_BASE_URL}/access/login`,
        SINGUP: `${SERVER_BASE_URL}/access/signup`,
        LOGOUT: `${SERVER_BASE_URL}/access/logout`,
        REFRESH_TOKEN: `${SERVER_BASE_URL}/access/refreshToken`,
        CHECK_USER_EXIST: `${SERVER_BASE_URL}/access/userExist`
    },
    BUSINESS: {
        CREATE_BUSINESS: `${SERVER_BASE_URL}/business/create`,
        SWITCH_BUSINESS_PROFILE:  `${SERVER_BASE_URL}/business/switchBusiness`,
        SWITCH_BUSINESS_USER:  `${SERVER_BASE_URL}/business/switchUser`,
        GET_ALL_JOINED: `${SERVER_BASE_URL}/business/allJoined`,
        REFRESH: `${SERVER_BASE_URL}/business/refresh`
    }
}

export const DEFAULT_HEADERS = {
    "Content-Type": "application/json", 
    Accept: "application/json",
};
export const DEFAULT_PRIVATE_HEADERS = {
    "Content-Type": "application/json", 
    Accept: "application/json",
    withCredentials: 'include'
};
  
export const HEADERS = {
    REFRESH_TOKEN: 'x-refresh-token',
    ACCESS_TOKEN: 'x-access-token',
    USERID: 'x-client-id'
}

export const apiAxios = axios.create({
    baseURL: SERVER_BASE_URL,
    ...DEFAULT_HEADERS
})
apiAxios.interceptors.response.use(response => {
    return response.data
})

export const TIMEOUT = 10000;