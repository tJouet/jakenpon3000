'use client'
import React, {useContext} from "react";
import GameContext from "@components/appContext";
import { Frame } from "@components/index";

export default function Play() {

    const gameContext = useContext(GameContext)

    return(
    <Frame className={'bg-gradient-to-t from-primaryBlue via-secondaryBlue to-primaryBlue p-40 h-screen flex flex-col justify-between items-center'}>
        <div className={"flew-row flex text-white w-screen justify-center"}> 
        <p>Awaiting</p>
        <p className={"animation-delay-0 animate-[bounce_1s_infinite] "} >.</p>
        <p className={"animation-delay-75 animate-[bounce_1s_infinite] "}>.</p>
        <p className={"animation-delay-100 animate-[bounce_1s_infinite] " }>.</p>
        </div>
    </Frame>
    )
}