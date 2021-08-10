import React from 'react';

import HomeNavbar from '../components/Navbars/homeNavbar';
import HomeFooter from '../components/Footers/homeFooter';


export default function Home({ children }) {
    return (
        <>
            <HomeNavbar />
            <div className="p-5 md:px-24 lg:px-40">
                {children}
            </div>
            <HomeFooter />
        </>
    )
}
