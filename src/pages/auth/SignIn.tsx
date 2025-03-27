// ** Styles
import style from "../../styles/pages/auth/SignIn.module.css";
// ** Hooks
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// ** Assets
import emailIcon from "../../assets/ui/inputelement/email.png";
// ** Components
import HeaderAuth from "../../components/auth/HeaderAuth";
import PlatformAuth from "../../components/auth/PlatformAuth";
import InputElement from "../../components/ui/InputElement";
import InputPasswordElement from "../../components/ui/InputPasswordElement";
import CheckboxElement from "../../components/ui/CheckboxElement";
import ButtonElement from "../../components/ui/ButtonElement";


export default function SignIn() {
  // ** Defaults
  const navigate = useNavigate();

  // ** States
  const [userData, setUserData] = useState({
    userEmail: "",
    password: "",
    rememberMe: false,
  })

  // ** Handelers
  const forGetPasswordHandler = () => {
    navigate("/u/forget-password");
  };
  const signUpHandler = () => {
    navigate("/u/sign-up");
  };
  const loginHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('userSignInData', userData);
    navigate("/m");
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>)=> {
    const {id, value, type, checked} = e.target;
    setUserData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value
      }));
  }

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
              value={userData.userEmail}
              onChange={changeHandler}
              placeholder="ادخل البريد الالكتروني"
              img={{ src: emailIcon, alt: "Email Icon" }}
              error="يرجى إدخال البريد الإلكتروني بشكل صحيح"
            />
            <br />
            <InputPasswordElement
              id="password"
              name="كلمة المرور"
              type="password"
              value={userData.password}
              onChange={changeHandler}
              placeholder="ادخل كلمة المرور"
              error="يرجى إدخال كلمة المرور (على الأقل 8 أحرف)"
            />
            <br />
            <CheckboxElement
              id= "rememberMe"
              name=""
              checked = {userData.rememberMe}
              onChange={changeHandler}
              label= "تذكرني"
              tail= "هل نسيت كلمة المرور؟"
              onClick={forGetPasswordHandler}
            />
            <div className={style.signin_btn}>
              <ButtonElement
                className= {''}
                txt="تسجيل الدخول"
                onClick={loginHandler}
                variant="primary"
                type= "button"
              />
              {/* <button onClick={loginHandler}>تسجيل الدخول</button> */}
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
