// ** Styles
import style from '../../styles/components/ui/InputElement.module.css'
// ** Interfaces
import { IInputElement } from '../../interfaces';








const InputElement = ({id, name, type = 'text', value = '', placeholder = '', img, error = '', onChange} : IInputElement) => {
    return (
        <>
            <div className= {style.input_element_container}>
                <label htmlFor= {id}>{name}</label>
                <div className= {style.input_element}>
                    <input 
                        id={id}
                        name={name}
                        type={type}
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        autoComplete="off"
                    />
                    {img && <img src={img.src} alt={img.alt} />}
                </div>
                {error && <span className={style.error}>{error}</span>}
            </div>
        </>
    );
}

export default InputElement;
