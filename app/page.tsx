'use client';
import React , {useContext, useState} from "react";
import Image from "next/image";
import {BannerCircleMenu} from "../public";
import {Button, Frame, Input} from "@components/index";
import {useRouter} from "next/navigation";
import GameContext from "@components/appContext";

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

    return <Frame className={'bg-gradient-to-t from-primaryBlue via-secondaryBlue to-primaryBlue p-40 h-screen flex flex-col justify-between items-center'}>
        <Image src={BannerCircleMenu} alt={"Banner jakenpon"} className={"animate-[spin_50s_linear_infinite]"}/>
        <div className={"flex flex-row"}>
            <p className={'text-[60px] text-white drop-shadow-button' }>JAKENPON</p>
            <p className={'text-[20px] text-white'}>3000</p>
        </div>
        <Input placeholder="Set your nickname" onchange={defineUsername}/>
        <Button onClick={onclick}>
            <p className={'text-60 drop-shadow-text text-secondaryBlue'}>Play!</p>
        </Button>
    </Frame>
}

export default MainPage