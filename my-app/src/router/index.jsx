import React from 'react'
import StartPage from '../pages/StartPage'
import Login from '../pages/login/Login'
import Registration from './../pages/registration/Registration';
import Contacts from '../pages/Contacts'
import About from '../pages/About'

export const RoutesList = [
    {path: '/', element: <StartPage />},
    {path: '*', element: <StartPage />},
    {path: '/login', element: <Login />},
    {path: '/registration', element: <Registration />},
    {path: '/contacts', element: <Contacts />},
    {path: '/about', element: <About />},
]