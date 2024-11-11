'use strict'

import { createBrowserRouter } from "react-router-dom"
import HomePage from "../pages/main/home.page"
import MainLayout from "../layouts/main.layout"
import ErrorPage from "../pages/error/error.page"
import AboutPage from "../pages/main/about.page"

import SignupPage from "../pages/main/signup.page"
import UserProfile from "../pages/users/UserProfile.page"
import ProtectedRoute from '../components/middle/ProtectedRoute.Auth'
import LoginPage from "../pages/main/login.page"
import PersistantLogin from "../components/middle/PersistantLogin"
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
    },
    {
        element: <PersistantLogin/>,
        children:
        [
            {
                element: <ProtectedRoute/>,
                children: [
                    {
                        path: '/me',
                        element: <UserProfile/>
                    }
                ]
            }
        ]
        
    }
])

export default router