'use client';
import React from "react";
import Image from "next/image";
import {BannerCircleMenu} from "../public";
import {Button, Frame, Input} from "@components/index";
import {useRouter} from "next/navigation";
//import styles from './styles/index.scss'

const MainPage: React.FC = () => {

    const router = useRouter()
    const onclick = () => {
        console.log('test')
        router.push('/about/page')
    }

    return <Frame className={'bg-gradient-to-t from-primaryBlue via-secondaryBlue to-primaryBlue p-40 h-screen flex flex-col justify-between items-center'}>
        <Image src={BannerCircleMenu} alt={"Banner jakenpon"} className={styles.imgSpin}/>
        <div className={"flex flex-row"}>
            <p className={'text-[60px] text-white drop-shadow-button' }>JAKENPON</p>
            <p className={'text-[20px] text-white'}>3000</p>
        </div>
        <Input placeholder="Set your nickname"/>
        <Button onClick={onclick}>
            <p className={'text-60 drop-shadow-text text-secondaryBlue'}>Play!</p>
        </Button>
    </Frame>
}

export default MainPage