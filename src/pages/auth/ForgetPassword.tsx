// ** Styles
import style from '../../styles/pages/auth/ForgetPassword.module.css'
// ** Assets
import keyIcon from '../../assets/auth/forgetpassword/forget-password.png'
import { useNavigate } from 'react-router-dom';



export default function ForgetPassword(){
    const navigate = useNavigate()
    const otpHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        navigate('/u/otp')
    }
    return (
        <>
            <div className= {style.forget_password_container}>
                <div className= {style.forget_password_content}>
                    <div className= {style.forget_password_title}>
                        <img src= {keyIcon} alt="" />
                        <h3>هل نسيت كلمه المرور ؟</h3>
                        <p>ادخل عنوان بريدك الالكترونى او  المسجل به حسابك وسيتم ارسال الرمز تأكيد لإعادة تعيين كلمة 
                        المرور الخاصة بك</p>
                    </div>
                    <form className= {style.forget_password_form} action="">
                        <div>
                            <label htmlFor="email">البريد الالكتروني</label>
                            <input type="email" id='email' placeholder='ادخل البريد الالكتروني'/>
                        </div>
                        <button onClick={otpHandler}>إرسال رمز التأكيد</button>
                    </form>
                </div>
            </div>
        </>
    );
}

