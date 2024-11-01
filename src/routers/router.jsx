'use strict'

import { createBrowserRouter } from "react-router-dom"
import HomePage from "../pages/main/home.page"
import MainLayout from "../layouts/main.layout"
import ErrorPage from "../pages/error/error.page"
import AboutPage from "../pages/main/about.page"
import LoginPage from "../components/pages/user/login"
import SignupPage from "../pages/main/signup.page"

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                element: <HomePage/>,
                index: true
            },
            {
                path: '/about',
                element: <AboutPage/>
            }
        ]
    },
    {
        path: '/login',
        element: <LoginPage/>,
        errorElement: <ErrorPage/>
    },
    {
        path: '/signup',
        element: <SignupPage/>,
        errorElement: <ErrorPage/>
    }
])

export default router