// ** Styles
import style from '../../styles/components/ui/InputElement.module.css'
// ** Interfaces
import { IInputElement } from '../../interfaces';








const InputElement = ({id, name, type, value, placeholder, img, error} : IInputElement) => {
    return (
        <>
            <div className= {style.input_element_container}>
                <label htmlFor= {id}>{name}</label>
                <div className= {style.input_element}>
                    <input 
                        type= {type} 
                        placeholder= {placeholder} 
                        id= {id} 
                        value={value} 
                        // onChange={}
                    />
                    <img src= {img?.src} alt={img?.alt} />
                </div>
                <span className= {style.error}>{error}</span>
            </div>
        </>
    );
}

export default InputElement;
