import React from "react";
import Image from "next/image";
import {PaperHand, ScissorsHand, RockHand} from "../../public";
import {Signs} from "../../app/appContext";

export interface HandContProps extends React.HTMLAttributes<HTMLParagraphElement> {
    sign: Signs
    isSelected: boolean
}

const HandCont = ({sign, isSelected = false}: HandContProps) => {

    const iconsEnums = {
        [Signs.PAPER]: PaperHand,
        [Signs.ROCK]: RockHand,
        [Signs.SCISSORS]: ScissorsHand
    }


    return (
        <Image src={iconsEnums[sign]} alt={`${sign} hand sign`} className={!isSelected ? "opacity-50" : ''}/>
    )
}

export default HandCont