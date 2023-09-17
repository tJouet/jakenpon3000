'use client'
import React, {useContext, useState} from "react";
import GameContext from "../appContext";
import { Button, Frame, HandContainer } from "@components/index";
import { useRouter } from "next/navigation";

export default function Play() {

    const gameContext = useContext(GameContext)
    const router = useRouter()
    const [selectedKey,setSelectedKey] = useState(null)
    const [selectedSign, setSelectedSign] = useState("")

    const signs = ["rock","paper","scissors"]

    const onclick = (key:number, item:string) => {
        setSelectedKey(key)
        setSelectedSign(item)
    }
    
    const readyToPlay = () => {
        if (selectedSign !== "") {
            //TO DO find a way to use the round key in gameContext to automatically write in the right enum
            gameContext.round1.userSign = selectedSign
            
            router.push('/roundResult')
        } else {
            alert('Please pick a sign!')
        }
    }

    return(
    <Frame>
        <div className={'flex flex-col justify-center items-center '}>
            <div className={"flew-row flex  w-screen justify-center mb-[24px]"}> 
            <p className={"text-[20px]"}>Awaiting</p>
            <p className={" animate-[bounce_1s_infinite] "} >.</p>
            <p className={" animate-[bounce_1s_infinite] "}>.</p>
            <p className={" animate-[bounce_1s_infinite] " }>.</p>
            </div>
            <div className={"border-4 flex border-white rounded-full py-1 px-40 w-[80%] justify-center items-center"}>
                {/* TO DO Figure a way to get opponent's user name in here*/}
                <p className={"text-[40px] [text-shadow:_0_5px_6px_rgb(0_0_0_/_40%)]"}>T.Soprano</p>
            </div>
        </div>
        <p className={"text-[48px] [text-shadow:_0_5px_6px_rgb(0_0_0_/_40%)]"}>Round {gameContext.round}</p>
        <div>
        <p className={"text-[40px] mb-3 justify-center flex [text-shadow:_0_5px_6px_rgb(0_0_0_/_40%)]"}>Pick an option</p>
        <div className={"w-screen  justify-center items-center flex flex-col"}>
        <div className={'w-screen flex flex-row justify-center mb-6 '}>
            {signs.map((item,key) => {
                return (
                <button onClick={() => onclick(key,item)} key={key} className={"p-6"}>
                <HandContainer sign={item} isSelected={selectedKey === key ? true : false}/>
                </button>
                )
            })}
        </div >
        <Button onClick={() => readyToPlay()}>Ready</Button>
        </div>
        </div>
    </Frame>
    )
}