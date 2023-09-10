import React from "react";
import styles from "./Text.module.scss"

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  fontSize: string;
}

const Text: React.FC<TextProps> = ({children,fontSize="60px" ,...props}) => {
  return <p className={styles.text} style={{fontSize}}{...props} >
    {children}
  </p>
}

export default Text