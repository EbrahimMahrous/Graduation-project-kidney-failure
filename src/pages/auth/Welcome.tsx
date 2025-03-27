// ** Styles
import style from '../../styles/pages/auth/Welcome.module.css'
//  Hooks
import { useNavigate } from 'react-router-dom'
// Components
import HeaderAuth from '../../components/auth/HeaderAuth'
import ButtonElement from '../../components/ui/ButtonElement'





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
                        <ButtonElement
                            className= {style.sgin_up_button}
                            txt='إنشاء حساب'
                            onClick={signUpHandler}
                            variant='secondary'
                            type='button'
                        />
                        <ButtonElement
                            className= {style.sgin_in_button}
                            txt='تسجيل دخول'
                            onClick={signInHandler}
                            variant='primary'
                            type='button'
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

