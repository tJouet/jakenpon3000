import React from "react";
import { PaperHand,ScissorsHand,RockHand} from "../../public";

export interface HandContProps extends React.HTMLAttributes<HTMLParagraphElement> {
    sign: "rock" | "paper" | "scissors"
    isSelected: boolean
  }

const HandCont = ({sign,isSelected=false}:HandContProps) => {

    const signSelector = (sign:string) => {
        if (sign === "paper" ) {
            return <PaperHand/>
        } else if ( sign === "rock") {
            return <RockHand/>
        } else {
            return <ScissorsHand/>
        }
    }

    return ( 
        <p>Coucou</p>
    )
}

export default HandCont