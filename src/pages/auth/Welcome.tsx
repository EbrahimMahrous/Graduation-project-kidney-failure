// ** Styles
import style from '../../styles/pages/auth/Welcome.module.css'
//  Hooks
import { useNavigate } from 'react-router-dom'
// Components
import HeaderAuth from '../../components/auth/HeaderAuth'





export default function Welcome(){
    const navigate = useNavigate()

    // Handlers

    const signInHandler = () => {navigate('/u/sign-in')}
    const signUpHandler = () => {navigate('/u/sign-up')}

    return (
        <>
            <div className= {style.welcome_container}>
                <div className= {style.welcome_content}>
                    <HeaderAuth
                        headLine='مرحباً بك في كليّتِك '
                        p='للحصول على تجربة مميزة، يمكنك تسجيل الدخول أو إنشاء حساب جديد'
                    />
                    <div className= {style.welcome_btns}>
                        <button onClick={signUpHandler}>إنشاء حساب</button>
                        <button onClick={signInHandler}>تسجيل دخول</button>
                    </div>
                </div>
            </div>
        </>
    );
}

