import React from "react";
import styles from "./Frame.module.scss"


export interface FrameProps extends React.HTMLAttributes<HTMLParagraphElement> {
    children: React.ReactNode;
  }

const Frame = ({children, ...props}: FrameProps) => {
    return ( <div className={' text-white bg-gradient-to-t from-primaryBlue via-secondaryBlue to-primaryBlue p-40 h-screen w-screen flex flex-col justify-between items-center'}{...props}> {children} </div>)
}

export default Frame