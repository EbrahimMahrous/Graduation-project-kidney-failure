// ** Styles
import style from '../../styles/pages/auth/SignIn.module.css'
// ** Assets
import google from '../../assets/auth/signin/google.png'
import facebook from '../../assets/auth/signin/facebook.png'
import apple from '../../assets/auth/signin/apple.png'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
// ** Icons
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Eye icons


export default function SignIn(){
    // ** Defaults
    const navigate = useNavigate()

    // ** Handelers
    const forGetPasswordHandler = () => {navigate('/u/forget-password')}
    const signUpHandler = () => {navigate('/u/sign-up')}
    const loginHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        navigate('/m')
    }

    const [showPassword, setShowPassword] = useState(false)
    const togglePassword=()=>{
        setShowPassword(!showPassword)
    }


    return (
        <>
            <div className= {style.signin_container}>
                <div className= {style.signin_content}>
                    {/* title */}
                    <h3>تسجيل الدخول</h3>
                    <form className= {style.signin_form} action="">
                        <div>
                            <label htmlFor="">البريد الالكتروني</label>
                            <input type="email" name="" id="" placeholder='ادخل البريد الالكتروني' />
                        </div>
                        <div className= {style.signin_password}>
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
                        </div>
                        <div className= {style.signin_checkbox}>
                            <div>
                                <input type="checkbox" id='remember'/>
                                <label htmlFor="remember">تذكرني</label>  
                            </div>
                            <p onClick={forGetPasswordHandler}>هل نسيت كلمه المرور؟</p>
                        </div>
                        <div className= {style.signin_btn}>
                            <button onClick={loginHandler}>تسجيل الدخول</button>
                        </div>
                    </form>

                    <div className= {style.signin_create_account}>
                        <p>او انشاء حساب باستخدام</p>
                        <div className= {style.sigin_social}>
                            <img src= {google} alt="" />
                            <img src= {facebook} alt="" />
                            <img src= {apple} alt="" />
                        </div>
                        <p>
                            ليس لديك حساب؟ <span onClick={signUpHandler}>انشاء حساب</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

