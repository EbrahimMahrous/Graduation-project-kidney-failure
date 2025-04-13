// ** Styles
import style from '../../styles/components/ui/ButtonElement.module.css';





interface IButtonElementProps {
    txt: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    variant?: 'primary' | 'secondary';
    className?: string;
    type?: "button" | "submit" | "reset";
    imgButton?: string
}

const ButtonElement = ({ txt, onClick, variant = 'primary', className, type = 'button', imgButton }: IButtonElementProps) => {
    

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
            {imgButton && <img style={{width: '16px'}} src={imgButton} alt="Button Image" />}
        </button>
    );
};

export default ButtonElement;


