import React from "react";
import styles from "./Input.module.scss"

export interface InputProps extends React.HTMLAttributes<HTMLParagraphElement> {
    placeholder: string;
  }

const Input = ({placeholder}:InputProps) => {
    return ( <input className={styles.input} placeholder={placeholder}/>)
}

export default Input