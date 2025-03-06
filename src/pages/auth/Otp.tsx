// ** Styles
import style from '../../styles/pages/auth/Otp.module.css'
// ** Assets
import emailIcon from '../../assets/auth/otp/email-icon.png'
import { useNavigate } from 'react-router-dom';



export default function Otp(){
    
    const navigate = useNavigate()
    const newPasswordHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        navigate('/u/new-password')
    }
    return (
        <>
            <div className= {style.otp_container}>
                <div className= {style.otp_content}>
                    <div className= {style.otp_title}>
                        <img src= {emailIcon} alt="" />
                        <h3>التحقق من الكود</h3>
                        <p>الرجاء ادخال الكود الذي ارسلناه الي البريد الالكتروني </p>
                        <h4>klity******@gamil.com</h4>
                    </div>
                    <form className= {style.otp_form} action="">
                        <h4>00:30</h4>
                        <div className= {style.otp_code}>
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                        </div>
                        <button onClick={newPasswordHandler}>إرسال رمز التأكيد</button>
                        <p>لم يتم ارسال رمز تأكيد؟ <a href="/">ارسال مرة اخرى</a></p>
                    </form>
                </div>
            </div>
        </>
    );
}

