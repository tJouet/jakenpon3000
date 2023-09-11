import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick : () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({children, onClick}) => {
  return <button className={'w-[80%] text-white bg-primaryYellow rounded-[90px] border-0 py-20 shadow-button'} onClick={() => (console.log("This is the console log in the comp"))}>{children}</button>
}

export default Button