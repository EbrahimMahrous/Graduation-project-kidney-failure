import { InputHTMLAttributes } from "react";

// Shared interface for image
interface IImage {
    src: string;
    alt: string;
}

// ** Input component props
export interface IInputElement extends InputHTMLAttributes<HTMLInputElement>{
    id: string,
    name: string,
    type: string,
    placeholder: string,
    value?: string,
    img?: IImage,
    error?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// ** Header used in authentication components
export interface IHeaderAuth{
    headLine: string,
    img?: IImage,
    p?: string,
    subTitle?: string
}


// Allow And not Alow
export interface IAllowAndNotAllowData{
    allow: {
        food: string[],
        drinks: string[]
    },
    notAllow: {
        food: string[],
        drinks: string[]
    }
}



