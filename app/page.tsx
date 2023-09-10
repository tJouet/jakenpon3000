'use client';
import React from "react";
import Image from "next/image";
import {BannerCircleMenu} from "../public";
import {Button, Frame, Input} from "@components/index";
import {useRouter} from "next/navigation";


const MainPage: React.FC = () => {
    const router = useRouter()
    const onclick = () => {
        router.push('/about')
    }

    return <Frame className={'bg-primaryBlue p-40 h-screen flex flex-col justify-between items-center'}>
        <Image src={BannerCircleMenu} alt={"Banner jakenpon"}/>
        <Frame style={{flexDirection: 'row'}}>
            <p className={'text-60 text-white'}>JAKENPON</p>
            {/*Why does this font size doesn't work but the one in Text.module.css does?*/}
            <p className={'text-3 pb-[55px]'}>3000</p>
        </Frame>
        <Input placeholder="Set your nickname"/>
        <Button onClick={onclick}>
            <p className={'text-60'}>Play!</p>
        </Button>
    </Frame>
}

export default MainPage