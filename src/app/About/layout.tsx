import React from 'react'
import AboutHeader from '../components/AboutHeader';
import MobileNavbar from '../components/MobileNavbar2';

export default function AboutLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={`montserrat-regular`}>
            <AboutHeader />
            <MobileNavbar />
            {children}
        </div>
    );
}