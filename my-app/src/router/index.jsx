import React from 'react'
import StartPage from '../pages/StartPage'

export const RoutesList = [
    {path: '/', element: <StartPage />},
    {path: '*', element: <StartPage />},
]