// ** Styles
import style from '../../styles/components/ui/InputPasswordElement.module.css'
// ** Assets
import lockClosed from '../../assets/ui/inputpasswordelement/lock-closed.png'
// ** Interfaces
import { IInputElement } from "../../interfaces";
// ** Hooks
import { useState } from 'react';
// ** Icons
import { FaEye, FaEyeSlash } from "react-icons/fa";




const InputPasswordElement = ({id, name, type= 'password', value= '', placeholder= '', error= '', onChange}: IInputElement) => {
    // ** States
    const [showPassword, setShowPassword] = useState(false)


    // ** Handlers
    const togglePasswordVisibility=()=>{setShowPassword(prev => !prev)}

    return (
        <>
            <div className= {style.input_password_container}>
                <label htmlFor= {id}>{name}</label>

                <div className= {style.input_password_element}>
                    <input 
                        id= {id}
                        name= {name}
                        type= {showPassword? 'text': type}  
                        value={value}
                        placeholder= {placeholder} 
                        onChange={onChange}
                        autoComplete="on"
                        // dir="auto"
                    />
                    <img src= {lockClosed} alt= {'lock Closed'} />
                    <span 
                        onClick={togglePasswordVisibility}
                        role="button"
                        aria-label="Toggle password visibility"
                        className={style.eye_icon}
                    >
                        {showPassword? <FaEye/> : <FaEyeSlash/>}
                    </span>
                </div>
                {error && <span className={style.error}>{error}</span>}
            </div>
        </>
    );
}
export default InputPasswordElement;
