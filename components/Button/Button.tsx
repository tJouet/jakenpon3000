import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick : () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({children, onClick}) => {
  return <button className={'w-[80%] bg-primaryYellow rounded-[90px] border-0 py-20 shadow-button'} onClick={onClick}><p className={'text-[35px] drop-shadow-text text-secondaryBlue'}>{children}</p></button>
}

export default Button