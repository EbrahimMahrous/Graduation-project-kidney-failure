// ** Styles
import style from '../../styles/pages/auth/Otp.module.css'
// ** Assets
import emailIcon from '../../assets/auth/otp/email-icon.png'
import { useNavigate } from 'react-router-dom';
import HeaderAuth from '../../components/auth/HeaderAuth';
import ButtonElement from '../../components/ui/ButtonElement';



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
                    <HeaderAuth
                        img={{ src: emailIcon, alt: 'Email Icon' }}
                        headLine='التحقق من الكود'
                        p='الرجاء ادخال الكود الذي ارسلناه الي البريد الالكتروني '
                        subTitle='klity******@gamil.com'
                    />
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
                        <ButtonElement
                            className= {style.send_otp_button}
                            txt='ارسال رمز التأكيد'
                            onClick={newPasswordHandler}
                            variant='primary'
                            type='button'
                        />
                        <p>لم يتم ارسال رمز تأكيد؟ <a href="/">ارسال مرة اخرى</a></p>
                    </form>
                </div>
            </div>
        </>
    );
}

