'use client'
import React, {useContext} from "react";
import GameContext from "@components/appContext";
import { Frame } from "@components/index";

export default function Play() {

    const gameContext = useContext(GameContext)

    return(
    <Frame>
        <div className={'flex flex-col justify-center items-center '}>
            <div className={"flew-row flex  w-screen justify-center m-[24px]"}> 
            <p className={"text-[20px]"}>Awaiting</p>
            <p className={"animation-delay-0 animate-[bounce_1s_infinite] "} >.</p>
            <p className={"animation-delay-75 animate-[bounce_1s_infinite] "}>.</p>
            <p className={"animation-delay-100 animate-[bounce_1s_infinite] " }>.</p>
            </div>
            <div className={"border-4 flex border-white rounded-full py-1 px-40 w-[80%] justify-center items-center"}>
                <p className={"text-[40px] [text-shadow:_0_5px_6px_rgb(0_0_0_/_40%)]"}>T.Soprano</p>
            </div>
        </div>
        <p className={"text-[48px] [text-shadow:_0_5px_6px_rgb(0_0_0_/_40%)]"}>Round 1</p>
        <div>
        <p className={"text-[40px] [text-shadow:_0_5px_6px_rgb(0_0_0_/_40%)] "}>Pick an option</p>
        </div>
    </Frame>
    )
}