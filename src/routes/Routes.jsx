import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from '../pages/Home/Home';
import RootLayout from '../Layout/RootLayout';
import About from '../pages/about/About';
import Contact from '../pages/contact/Contact';
import Skill from '../pages/skill/Skill';
import ErrorPage from '../pages/errorPage/ErrorPage';
import Projects from '../pages/Home/Projects/Projects';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/projects',
                Component: Projects
            },
            {
                path: '/about',
                Component: About
            },
            {
                path: '/contact',
                Component: Contact
            },
            {
                path: '/skills',
                Component: Skill
            }
        ]
    },
    {
        path: '*',
        Component: ErrorPage
    }
])