import React from "react";
import styles from "./Text.module.scss"

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({children}) => {
  return <p className={styles.text}>
    {children}
  </p>
}