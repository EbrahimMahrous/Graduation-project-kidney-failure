import { InputHTMLAttributes } from "react";



export interface IInputElement extends InputHTMLAttributes<HTMLInputElement>{
    id: string,
    name: string,
    type: string,
    value?: string,
    placeholder: string,
    img?: {
        src: string,
        alt: string,
    },
    error?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


export interface IHeaderAuth{
    img?: {
        src: string,
        alt: string
    },
    headLine: string,
    p?: string,
    subTitle?: string
}






