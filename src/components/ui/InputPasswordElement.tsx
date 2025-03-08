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




const InputPasswordElement = ({id, name, type, value, placeholder, error, onChange}: IInputElement) => {
    // ** States
    const [showPassword, setShowPassword] = useState(false)


    // ** Handlers
    const togglePasswordHandler=()=>{setShowPassword(!showPassword)}


    return (
        <>
            <div className= {style.input_password_container}>
                <label htmlFor= {id}>{name}</label>
                <div className= {style.input_password_element}>
                    <input 
                        type= {showPassword? 'text': type}  
                        value={value}
                        placeholder= {placeholder} 
                        id= {id}
                        onChange={onChange}
                    />
                    <img src= {lockClosed} alt= {'lock Closed'} />
                    <span onClick={togglePasswordHandler}>{showPassword? <FaEye/> : <FaEyeSlash/>}</span>
                </div>
                <span className= {style.error}>{error}</span>
            </div>
        </>
    );
}
export default InputPasswordElement;
