import React from 'react';
import Navbar from '../Shared/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Shared/Footer';
import ParticleBg from '../Components/ParticleBg';

const RootLayout = () => {
    return (
        <div>
            <ParticleBg></ParticleBg>
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-268px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;