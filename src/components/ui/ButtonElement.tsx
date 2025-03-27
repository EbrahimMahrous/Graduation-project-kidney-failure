// ** Styles
import style from '../../styles/components/ui/ButtonElement.module.css';





interface IButtonElementProps {
    txt: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    variant?: 'primary' | 'secondary';
    className?: string;
    type?: "button" | "submit" | "reset";
}

const ButtonElement = ({ txt, onClick, variant = 'primary', className, type = 'button' }: IButtonElementProps) => {
    

    const buttonClass = [
        style.button_element, 
        variant === 'primary'? style.primary : style.secondary,
        className
    ].join(' ').trim();
    
    return (
        <button 
            type={type}
            onClick={onClick}
            className= {buttonClass}
        >
            {txt}
        </button>
    );
};

export default ButtonElement;


