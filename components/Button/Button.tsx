import React from "react";
import styles from './Button.module.scss'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick : () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({children, onClick}) => {
  return <button className={styles.button} onClick={onClick}>{children}</button>
}

export default Button