import React from "react";
import Image from "next/image";
import { PaperHand,ScissorsHand,RockHand} from "../../public";

export interface HandContProps extends React.HTMLAttributes<HTMLParagraphElement> {
    sign: "rock" | "paper" | "scissors"
    isSelected: boolean
  }

const HandCont = ({sign,isSelected=false}:HandContProps) => {

    const  iconsEnums = {
        'paper': PaperHand,
        'rock':RockHand,
        'scissors':ScissorsHand
    }


    return ( 
        <Image src={iconsEnums[sign]} alt={`${sign} hand sign`} className={!isSelected && "opacity-50"} />
    )
}

export default HandCont