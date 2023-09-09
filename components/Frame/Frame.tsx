import React from "react";
import styles from "./Frame.module.scss"


export interface FrameProps extends React.HTMLAttributes<HTMLParagraphElement> {
    children: React.ReactNode;
  }

const Frame = ({children, ...props}: FrameProps) => {
    return ( <div className={styles.frame}{...props}> {children} </div>)
}

export default Frame