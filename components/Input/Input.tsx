import React from "react";
import styles from "./Input.module.scss"

export interface InputProps extends React.HTMLAttributes<HTMLParagraphElement> {
    placeholder: string;
    onchange: any
  }

const Input = ({placeholder, onchange}:InputProps) => {
    return ( <input className={styles.input} placeholder={placeholder} onChange={onchange}/>)
}

export default Input