// ** Styles
import style from "../../styles/pages/auth/ForgetPassword.module.css";
// ** Assets
import keyIcon from "../../assets/auth/forgetpassword/forget-password.png";
import emailIcon from '../../assets/ui/inputelement/email.png'
// ** Hooks
import { useNavigate } from "react-router-dom";
// ** Components
import HeaderAuth from "../../components/auth/HeaderAuth";
import InputElement from "../../components/ui/InputElement";

export default function ForgetPassword() {
  const navigate = useNavigate();

  const otpHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/u/otp");
  };

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
                value="ebraheemalimahrous000@gmail.com"
                placeholder="ادخل البريد الالكتروني"
                img={{ src: emailIcon, alt: 'Email Icon' }}
                error= "error"
            />
            <button onClick={otpHandler}>إرسال رمز التأكيد</button>
          </form>
        </div>
      </div>
    </>
  );
}
