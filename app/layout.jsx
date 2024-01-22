import React from 'react'
import '@style/globals.css'
import Nav from '@componenets/Nav'
import Providers from '@componenets/Providers'
export const metadata = {
    title: "Promptopia",
    Description: "Discover & create new Prompts"
}

function RootLayout({ children }) {
    return (
        <html lang='en'>
                <head>
                    <link rel="shortcut icon" href='/images/logo.svg' type="image/x-icon" />
                </head>
            <Providers>
                <body>
                    <div className='main'>
                        <div className='gradient' />
                    </div>
                    <main className='app'>
                        <Nav />
                        {children}
                    </main>
                </body>
            </Providers>
        </html>
    )
}

export default RootLayout