// Styles
import style from '../../styles/components/ui/TextareaElement.module.css'


interface ITextareaProps {
    id: string;
    name: string;
    placeholder: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    error?: string;
}


const TextareaElement = ({id, name, placeholder, value= '', onChange, error= ''}: ITextareaProps) => {
    return (
        <>
            <div className= {style.input_placeholder}>
                <label htmlFor= {id}>الرساله</label>

                <textarea 
                    id= {id} 
                    name= {name} 
                    placeholder= {placeholder}
                    value={value}
                    onChange={onChange}
                    autoComplete= 'off'
                ></textarea>
                <span className={style.error}>{error}</span>
            </div>
        </>
    );
}

export default TextareaElement;
