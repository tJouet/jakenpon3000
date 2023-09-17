'use client'
import React, { useContext } from "react"
import GameContext from "../appContext";
import { Button, Frame, HandContainer } from "@components/index";
import { useRouter } from "next/navigation";

export default function RoudResult()  {

    const gameContext = useContext(GameContext)
    const routeur = useRouter()

    const onclick = () => {
        gameContext.round += 1
        routeur.push('/play')
    }

    console.log(gameContext)

    return (
        <Frame>
            <div className={"border-4 flex border-white rounded-full py-1 px-40 w-[80%] justify-center items-center"}>
                {/* TO DO Figure a way to get opponent's user name in here*/}
                <p className={"text-[40px] [text-shadow:_0_5px_6px_rgb(0_0_0_/_40%)]"}>T.Soprano</p>
            </div>
        <HandContainer sign={gameContext.round1.userSign} isSelected={false}/>
        <p className={"text-[40px] [text-shadow:_0_5px_6px_rgb(0_0_0_/_40%)]"}>0</p>
        {/* TO DO Replace this separator with a continue button once the scores are announced */}
        {/* <div className={"w-[90%] border-2 border-white my-5"}></div> */}
        <Button  onClick={()=>onclick()}>Continue</Button>
        <p className={"text-[40px] [text-shadow:_0_5px_6px_rgb(0_0_0_/_40%)]"}>1</p>
        <HandContainer sign={gameContext.round1.userSign} isSelected={false}/>
        <div className={"border-4 flex border-white rounded-full py-1 px-40 w-[80%] justify-center items-center"}>
                {/* TO DO Figure a way to get opponent's user name in here*/}
                <p className={"text-[40px] [text-shadow:_0_5px_6px_rgb(0_0_0_/_40%)]"}>{gameContext.username}</p>
            </div>
        </Frame>
    )
}