import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from '../pages/Home/Home';
import RootLayout from '../Layout/RootLayout';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            }
        ]
    }
])