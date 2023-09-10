import React, {PropsWithChildren} from "react";
import '../styles/globals.scss'
import {Coiny} from "next/font/google";

const coinyFont = Coiny({
    weight: "400",
    subsets: ['latin']
})

const AppLayout: React.FC<PropsWithChildren> = ({children}) => {
    return <html lang="en">
    <head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Jakenpon</title>
    </head>
    <body className={coinyFont.className}>
    {children}
    </body>
    </html>
}

export default AppLayout
