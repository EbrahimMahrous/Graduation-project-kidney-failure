// ** Styles
import style from '../../styles/pages/auth/NewPassword.module.css'
// ** Assets
import lockIcon from '../../assets/auth/newpassword/lock-icon.png'
// ** Icons
import { FaEye, FaEyeSlash } from "react-icons/fa";
// ** Hooks
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function NewPassword(){
    // ** Defaults
    const navigate = useNavigate()
    const doneHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        navigate('/u/done')
    }
    
    const [showPassword, setShowPassword] = useState(false)
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false)
    
    const togglePassword=()=>{
        setShowPassword(!showPassword)
    }
    const togglePasswordConfirm=()=>{
        setShowPasswordConfirm(!showPasswordConfirm)
    }

    
    return (
        <>
            <div className= {style.newpassword_container}>
                <div className= {style.newpassword_content}>
                    {/* Title */}
                    <div className= {style.newpassword_title}>
                        <img src= {lockIcon} alt="" />
                        <h3>تغير كلمه مرور جديده</h3>
                        <p>يجب ان تكون كلمه المرور الجديده مختلفه عن كلمه المرور التي استخدمتها سابقاً</p>
                    </div>
                    {/* Form */}
                    <form className= {style.newpassword_form} action="" onSubmit={doneHandler}>
                        <div className= {style.newpassword_input}>
                            <label htmlFor="password">كلمه المرور</label>
                            <input 
                                type= {showPassword? 'text': 'password'} 
                                name="" 
                                id="password" 
                                placeholder='ادخل كلمه المرور'
                            />
                            <span onClick={togglePassword} >
                                {showPassword? <FaEye/> : <FaEyeSlash/> }
                            </span>
                        </div >
                        <div className= {style.newpassword_input}>
                            <label htmlFor="password">تأكيد كلمة المرور</label>
                            <input 
                                type= {showPasswordConfirm? 'text': 'password'} 
                                name="" 
                                id="password" 
                                placeholder='تأكيد كلمه المرور'
                            />
                            <span onClick={togglePasswordConfirm} >
                                {showPasswordConfirm? <FaEye/> : <FaEyeSlash/> }
                            </span>
                        </div>
                        <button type="submit">تغير كلمه المرور</button>
                    </form>
                </div>
            </div>
        </>
    );
}

