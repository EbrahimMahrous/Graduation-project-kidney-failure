// ** Styles
import { useNavigate } from 'react-router-dom'
import style from '../../styles/pages/auth/Welcome.module.css'




export default function Welcome(){
    const navigate = useNavigate()

    // Handlers

    const signInHandler = () => {navigate('/u/sign-in')}
    const signUpHandler = () => {navigate('/u/sign-up')}

    return (
        <>
            <div className= {style.welcome_container}>
                <div className= {style.welcome_content}>
                    <div className= {style.welcome_title}>
                        <h3>مرحباً بك في كليّتِك </h3>
                        <p>للحصول على تجربة مميزة، يمكنك تسجيل الدخول أو إنشاء حساب جديد</p>
                    </div>
                    <div className= {style.welcome_btns}>
                        <button onClick={signUpHandler}>إنشاء حساب</button>
                        <button onClick={signInHandler}>تسجيل دخول</button>
                    </div>
                </div>
            </div>
        </>
    );
}

