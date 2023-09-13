'use client'
import React, {useContext} from "react";
import Link from "next/link";
import GameContext from "@components/appContext";

export default function About() {

    const gameContext = useContext(GameContext)

    return(
     <h2>
        Hello from about {gameContext.username} 
    </h2>
    )
}