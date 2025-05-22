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
  // ** States
  const [isLoading, setIsLoading] = useState(false);
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
  const loginHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const errors = signInValidation(userData);
    setErrors(errors);
    const hasError = Object.values(errors).some((err) => err !== "");

    if (
      userData.password.length <= 8 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.userEmail)
    ) {
      alert(`
        يرجى إدخال البريد الإلكتروني بشكل صحيح
        يرجى إدخال كلمة المرور (على الأقل 8 أحرف)
      `);
      return;
    }

    if (hasError) return;

    let role: "guest" | "patient" | "doctor" | "admin" = "guest";
    if (userData.userEmail === "admin@gmail.com") role = "admin";
    else if (userData.userEmail === "doctor@gmail.com") role = "doctor";
    else role = "patient";

    const userInfo = {
      email: userData.userEmail,
      name: null,
      loggedIn: true,
      userData: undefined,
      role,
    };

    localStorage.setItem("user", JSON.stringify(userInfo));
    dispatch(login(userInfo));
    setIsLoading(true);
    if (role === "admin") navigate("/a");
    else if (role === "doctor") navigate("/m");
    else navigate("/m");
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
              onClick={() => {
                navigate("/u/forget-password");
              }}
            />
            <div className={style.signin_btn}>
              <ButtonElement
                className={""}
                txt={isLoading ? "جاري التسجيل..." : "تسجيل دخول"}
                onClick={loginHandler}
                disabled={isLoading}
                variant="primary"
                type="button"
              />
            </div>
          </form>
          <PlatformAuth
            title="او انشاء حساب باستخدام"
            tail="ليس لديك حساب؟"
            subTail="انشاء حساب"
            onSubTailClick={() => {
              navigate("/u/sign-up");
            }}
          />
        </div>
      </div>
    </>
  );
}
