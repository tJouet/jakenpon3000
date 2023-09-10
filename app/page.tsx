'use client';
import React from "react";
import Image from "next/image";
import {BannerCircleMenu} from "../public";
import {Button, Frame, Input, Text} from "@components/index";
import {useRouter} from "next/navigation";


const MainPage: React.FC = () => {
    const router = useRouter()
    const onclick = () => {
        router.push('/about')
    }

    return <Frame style={{
        padding: "40px",
        backgroundColor: "rgb(84, 140, 243)",
        height: "100vh",
        justifyContent: "space-between"
    }}>
        <Image src={BannerCircleMenu} alt={"Banner jakenpon"}/>
        <Frame style={{flexDirection: 'row'}}>
            <Text fontSize={"60px"}>JAKENPON</Text>
            {/*Why does this font size doesn't work but the one in Text.module.css does?*/}
            <Text fontSize={"3px"} style={{paddingBottom: "55px"}}>3000</Text>
        </Frame>
        <Input placeholder="Set your nickname"/>
        <Button onClick={onclick}>
            <Text fontSize={"60px"}>Play!</Text>
        </Button>
    </Frame>
}

export default MainPage