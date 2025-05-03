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
// ** Redux
import { useDispatch } from "react-redux";
import { login } from "../../App/slices/userSlice";
// ** Validation
import { signInValidation } from "../../vaildation";

export default function SignIn() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    userEmail: "",
    password: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState({
    userEmail: "",
    password: "",
    rememberMe: "",
  });

  // ** Handelers
  const forGetPasswordHandler = () => {
    navigate("/u/forget-password");
  };
  const signUpHandler = () => {
    navigate("/u/sign-up");
  };
  const loginHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const errors = signInValidation(userData);
    setErrors(errors);
    const hasError = Object.values(errors).some((err) => err !== "");
    if (hasError) return;
    const userInfo = {
      email: userData.userEmail,
      name: null,
      loggedIn: true,
      userData: undefined,
    };
    localStorage.setItem("user", JSON.stringify(userInfo));
    dispatch(login(userInfo));
    navigate("/m");
  };
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;
    setUserData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({
      ...prev,
      [id]: "",
    }));
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
              value={userData.userEmail}
              onChange={changeHandler}
              placeholder="ادخل البريد الالكتروني"
              img={{ src: emailIcon, alt: "Email Icon" }}
              error={errors.userEmail}
            />

            <InputPasswordElement
              id="password"
              name="كلمة المرور"
              type="password"
              value={userData.password}
              onChange={changeHandler}
              placeholder="ادخل كلمة المرور"
              error={errors.password}
            />
            <br />
            <CheckboxElement
              id="rememberMe"
              name=""
              checked={userData.rememberMe}
              onChange={changeHandler}
              label="تذكرني"
              tail="هل نسيت كلمة المرور؟"
              onClick={forGetPasswordHandler}
            />
            <div className={style.signin_btn}>
              <ButtonElement
                className={""}
                txt="تسجيل الدخول"
                onClick={loginHandler}
                variant="primary"
                type="button"
              />
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
