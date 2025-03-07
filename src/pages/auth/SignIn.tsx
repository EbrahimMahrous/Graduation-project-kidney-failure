// ** Styles
import style from "../../styles/pages/auth/SignIn.module.css";
// ** Hooks
import { useNavigate } from "react-router-dom";
// ** Assets
import emailIcon from '../../assets/ui/inputelement/email.png'
// ** Components
import HeaderAuth from "../../components/auth/HeaderAuth";
import PlatformAuth from "../../styles/components/auth/PlatformAuth";
import InputElement from "../../components/ui/InputElement";
import InputPasswordElement from "../../components/ui/InputPasswordElement";

export default function SignIn() {
  // ** Defaults
  const navigate = useNavigate();

  // ** Handelers
  const forGetPasswordHandler = () => {
    navigate("/u/forget-password");
  };
  const signUpHandler = () => {
    navigate("/u/sign-up");
  };
  const loginHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/m");
  };


  return (
    <>
      <div className={style.signin_container}>
        <div className={style.signin_content}>
          <HeaderAuth headLine="تسجيل الدخول" />
          <form className={style.signin_form} action="">
          <InputElement
                id="userEmail"
                name="البريد الالكتروني"
                type="email"
                value="ebraheemalimahrous000@gmail.com"
                placeholder="ادخل البريد الالكتروني"
                img={{ src: emailIcon, alt: 'Email Icon' }}
                error= "error"
            />
            <br />
            <InputPasswordElement 
                  id= 'userPassword' 
                  name= 'كلمة المرور' 
                  type= 'password' 
                  value= "123456789"
                  placeholder= 'ادخل كلمة المرور'
                  error= "error" 
              />
              <br />
            <div className={style.signin_checkbox}>
              <div>
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">تذكرني</label>
              </div>
              <p onClick={forGetPasswordHandler}>هل نسيت كلمه المرور؟</p>
            </div>
            <div className={style.signin_btn}>
              <button onClick={loginHandler}>تسجيل الدخول</button>
            </div>
          </form>
          <PlatformAuth
            title="او انشاء حساب باستخدام"
            tail="ليس لديك حساب؟"
            subTail="انشاء حساب"
            onSubTailClick={signUpHandler}
          />
        </div>
      </div>
    </>
  );
}
