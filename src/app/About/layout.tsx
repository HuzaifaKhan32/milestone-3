import React from 'react'
import AboutHeader from '../components/AboutHeader';



function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <AboutHeader />
                {children}
            </body>
        </html>
    );

}

export default layout