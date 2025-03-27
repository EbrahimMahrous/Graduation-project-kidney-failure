// ** Styles
import style from "../../styles/pages/auth/ForgetPassword.module.css";
// ** Assets
import keyIcon from "../../assets/auth/forgetpassword/forget-password.png";
import emailIcon from '../../assets/ui/inputelement/email.png'
// ** Hooks
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// ** Components
import HeaderAuth from "../../components/auth/HeaderAuth";
import InputElement from "../../components/ui/InputElement";
import ButtonElement from "../../components/ui/ButtonElement";


export default function ForgetPassword() {
  // Defaults
  const navigate = useNavigate();

  // ** States
  const [email, setEmail] = useState("");

  // ** Handlers
  const otpHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/u/otp");
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  return (
    <>
      <div className={style.forget_password_container}>
        <div className={style.forget_password_content}>
          <HeaderAuth
            img={{ src: keyIcon, alt: "Key Icon" }}
            headLine="هل نسيت كلمه المرور ؟"
            p="ادخل عنوان بريدك الالكترونى او المسجل به حسابك وسيتم ارسال الرمز تأكيد لإعادة تعيين كلمة المرور الخاصة بك"
          />
          <form className={style.forget_password_form} action="">
          <InputElement
                id="userEmail"
                name="البريد الالكتروني"
                type="email"
                value= {email}
                onChange={changeHandler}
                placeholder="ادخل البريد الالكتروني"
                img={{ src: emailIcon, alt: 'Email Icon' }}
                error= "يرجى إدخال البريد الإلكتروني بشكل صحيح"
            />
            <ButtonElement
                className= {style.send_otp_button}
                txt='ارسال رمز التأكيد'
                onClick={otpHandler}
                variant='primary'
                type='button'
            />
          </form>
        </div>
      </div>
    </>
  );
}
