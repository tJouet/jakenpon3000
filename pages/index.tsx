import React from "react";
import Image from "next/image";
import {Text, Frame, Input, Button} from "../components";
import { BannerCircleMenu } from "../public";

const onclick = () => ( console.log('Hello world this is a test'))

export default function Home() {
  return (
    <>
      <Frame style={{ padding: "40px", backgroundColor:"rgb(84, 140, 243)", height:"100vh", justifyContent:"space-between"}}>
        <Image src={BannerCircleMenu} alt={"Banner jakenpon"} />
        <Frame style={{ flexDirection:'row'}}>
          <Text fontSize={"60px"}>JAKENPON</Text>
          {/*Why does this font size doesn't work but the one in Text.module.css does?*/}
          <Text fontSize={"3px"} style={{ paddingBottom: "55px" }}>3000</Text>
        </Frame>
        <Input placeholder="Set your nickname"/>
        <Button onClick={onclick}>
          <Text fontSize={"60px"}>Play!</Text>
        </Button>
      </Frame>
    </>
  )
}
