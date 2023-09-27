'use client'
import React, {PropsWithChildren} from "react";
import '../styles/globals.scss'
import {Coiny} from "next/font/google";
import GameContext, {useGameContext} from "./appContext";

const coinyFont = Coiny({
    weight: "400",
    subsets: ['latin']
})

const AppLayout: React.FC<PropsWithChildren> = ({children}) => {
    const gameContext = useGameContext()
    return <html lang="en">
    <head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Jakenpon</title>
    </head>
    <body className={coinyFont.className}>
    <GameContext.Provider value={gameContext}>
        {children}
    </GameContext.Provider>
    </body>
    </html>
}

export default AppLayout
