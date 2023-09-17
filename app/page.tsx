'use client';
import React , {useContext, useState} from "react";
import Image from "next/image";
import {BannerCircleMenu} from "../public";
import {Button, Frame, Input} from "@components/index";
import {useRouter} from "next/navigation";
import GameContext from "./appContext";

const MainPage: React.FC = () => {

    const [Username, setUsername] = useState("")
    const gameContext = useContext(GameContext)
    const router = useRouter()

    const onclick = () => {
        if (Username.length < 3) {
           return alert ("Your username must be 3 characters or bigger")
        } else {
            gameContext.username = Username
            router.push('/play')
        }
        
    }

    const defineUsername = (e:React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        setUsername(e?.currentTarget?.value)
    }

    return( 
    <Frame>
        <Image src={BannerCircleMenu} alt={"Banner jakenpon"} className={"animate-[spin_50s_linear_infinite]"}/>
        <div className={"flex flex-row"}>
            <p className={'text-[60px] text-white drop-shadow-button' }>JAKENPON</p>
            <p className={'text-[20px] text-white'}>3000</p>
        </div>
        <div className={'text-black w-[90%] flex justify-center'}>
        <Input placeholder="Set your nickname" onchange={defineUsername} />
        </div>
        <Button onClick={onclick}>Play!
        </Button>
    </Frame>)
}

export default MainPage