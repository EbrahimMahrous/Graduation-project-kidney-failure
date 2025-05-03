// ** Styles
import style from "../../styles/pages/auth/SignUp.module.css";
// ** Components
import InputElement from "../../components/ui/InputElement";
import HeaderAuth from "../../components/auth/HeaderAuth";
import PlatformAuth from "../../components/auth/PlatformAuth";
import InputPasswordElement from "../../components/ui/InputPasswordElement";
// ** Hooks
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// ** Assets
import UserIcon from "../../assets/auth/signup/user-icon.png";
import IdIcon from "../../assets/auth/signup/id-icon.png";
import PhoneIcon from "../../assets/auth/signup/phone-icon.png";
import prevIcon from "../../assets/auth/signup/prev-icon.png";
import nextIcon from "../../assets/auth/signup/next-icon.png";
import emailIcon from "../../assets/auth/signup/email.png";
import arrowIcon from "../../assets/auth/signup/arrow-down.png";
import arrowUpDownlIcon from "../../assets/auth/signup/arrow-up-down.png";
import ButtonElement from "../../components/ui/ButtonElement";
// ** Validation
import {
  signUpValidationPage1,
  signUpValidationPage2,
  signUpValidationPage3,
} from "../../vaildation";
export default function SignUp() {
  // ** Defaults
  const navigate = useNavigate();
  // ** States
  const [currentSignUpPage, setCurrentSignUpPage] = useState<number>(1);
  const [userData, setUserData] = useState({
    userName: "",
    userId: "",
    userPhoneNumber: "",
    userEmail: "",
    password: "",
    confirmPassword: "",
    chronicDisease: "",
    weight: "",
    height: "",
    followDoctor: "",
    diagnosisDate: "",
    userStage: "",
  });
  const [errors, setErrors] = useState({
    userName: "",
    userId: "",
    userPhoneNumber: "",
    userEmail: "",
    password: "",
    confirmPassword: "",
    chronicDisease: "",
    weight: "",
    height: "",
    followDoctor: "",
    diagnosisDate: "",
    userStage: "",
  });

  // ** Handlers
  const nextSignUpPageHandler = () => {
    let validationErrors = {};

    if (currentSignUpPage === 1) {
      validationErrors = signUpValidationPage1(userData);
    } else if (currentSignUpPage === 2) {
      validationErrors = signUpValidationPage2(userData);
    } else if (currentSignUpPage === 3) {
      validationErrors = signUpValidationPage3(userData);
    }
    const mergedErrors = { ...errors, ...validationErrors };
    if (Object.values(validationErrors).some((error) => error !== "")) {
      setErrors(mergedErrors);
    } else {
      setErrors(mergedErrors);
      setCurrentSignUpPage(currentSignUpPage + 1);
    }
  };
  const prevSignUpPageHandler = () => {
    if (currentSignUpPage !== 1) {
      setCurrentSignUpPage(currentSignUpPage - 1);
    }
  };

  const signInHandler = () => {
    navigate("/u/sign-in");
  };
  const otpHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const validationErrors = signUpValidationPage3(userData);
    const hasErrors = Object.values(validationErrors).some(
      (error) => error !== ""
    );
    if (hasErrors) {
      setErrors((prev) => ({ ...prev, ...validationErrors }));
      return;
    }
    console.log("userSignUpData", userData);
    navigate("/u/otp");
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    setUserData((prev) => ({
      ...prev,
      [id]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [id]: "",
    }));
  };

  const signUpPage1Content = (
    <div className={style.sign_up_container}>
      <div className={style.sign_up_content}>
        <HeaderAuth headLine="إنشاء حساب جديد" />
        <InputElement
          id="userName"
          name="الاسم"
          type="text"
          value={userData.userName}
          onChange={changeHandler}
          placeholder="ادخل الإسم بالكامل"
          img={{ src: UserIcon, alt: "User Icon" }}
          error={errors.userName}
        />

        <InputElement
          id="userId"
          name="الرقم القومي"
          type="text"
          value={userData.userId}
          onChange={changeHandler}
          placeholder="ادخل الرقم القومي"
          img={{ src: IdIcon, alt: "working..." }}
          error={errors.userId}
        />

        <InputElement
          id="userPhoneNumber"
          name="رقم الهاتف"
          type="text"
          value={userData.userPhoneNumber}
          onChange={changeHandler}
          placeholder="ادخل رقم الهاتف"
          img={{ src: PhoneIcon, alt: "Phone Icon" }}
          error={errors.userPhoneNumber}
        />

        <ButtonElement
          className={style.next_button}
          txt="التالي"
          onClick={nextSignUpPageHandler}
          variant="primary"
          type="button"
        />
        <PlatformAuth
          title="او انشاء حساب باستخدام"
          tail="هل لديك حساب؟ "
          subTail="تسجيل الدخول"
          onSubTailClick={signInHandler}
        />
      </div>
    </div>
  );
  const signUpPage2Content = (
    <div className={style.sign_up_container}>
      <div className={style.sign_up_content}>
        <HeaderAuth headLine="إنشاء حساب جديد" />
        <InputElement
          id="userEmail"
          name="البريد الالكتروني"
          type="email"
          value={userData.userEmail}
          placeholder="ادخل البريد الالكتروني"
          onChange={changeHandler}
          img={{ src: emailIcon, alt: "Email Icon" }}
          error={errors.userEmail}
        />

        <InputPasswordElement
          id="password"
          name="كلمه المرور"
          type="password"
          value={userData.password}
          onChange={changeHandler}
          placeholder="ادخل كلمه المرور"
          error={errors.password}
        />

        <InputPasswordElement
          id="confirmPassword"
          name="تأكيد كلمة المرور"
          type="password"
          value={userData.confirmPassword}
          onChange={changeHandler}
          placeholder="أعد ادخل كلمة المرور"
          error={errors.confirmPassword}
        />

        <ButtonElement
          className={style.next_button}
          txt="التالي"
          onClick={nextSignUpPageHandler}
          variant="primary"
          type="button"
        />
        <PlatformAuth
          title="او تسيجل الدخول باستخدام"
          tail="هل لديك حساب؟"
          subTail="تسجيل الدخول"
          onSubTailClick={signInHandler}
        />
      </div>
    </div>
  );
  const signUpPage3Content = (
    <div className={style.sign_up_container}>
      <div className={style.sign_up_content}>
        <HeaderAuth headLine="إنشاء حساب جديد" />
        {/* 1 */}
        <div className={style.radio_container}>
          <label>هل تعاني من امراض مزمنه؟</label>
          <div>
            <div>
              <input
                id="chronicDisease"
                name="chronicDisease"
                type="radio"
                value="yes"
                onChange={changeHandler}
              />
              <label htmlFor="chronicDiseaseYes">نعم</label>
            </div>
            <div>
              <input
                id="chronicDisease"
                name="chronicDisease"
                type="radio"
                value="no"
                onChange={changeHandler}
              />
              <label htmlFor="chronicDiseaseNo">لا</label>
            </div>
          </div>
          <span className={style.error}>{errors.chronicDisease}</span>
        </div>
        {/* 2 */}
        <InputElement
          id="weight"
          name="الوزن"
          type="text"
          value={userData.weight}
          onChange={changeHandler}
          placeholder="ادخل وزنك"
          img={{ src: arrowUpDownlIcon, alt: "Weight Icon" }}
          error={errors.weight}
        />

        {/* 3 */}
        <InputElement
          id="height"
          name="الطول"
          type="text"
          value={userData.height}
          onChange={changeHandler}
          placeholder="ادخل طولك"
          img={{ src: arrowUpDownlIcon, alt: "Height Icon" }}
          error={errors.height}
        />
        <br />
        {/* 4 */}
        <div className={style.radio_container}>
          <label>هل تتابع مع طبيب؟</label>
          <div>
            <div>
              <input
                id="followDoctor"
                name="followDoctor"
                type="radio"
                value="yes"
                onChange={changeHandler}
              />
              <label htmlFor="followDoctorYes">نعم</label>
            </div>
            <div>
              <input
                id="followDoctor"
                name="followDoctor"
                type="radio"
                value="no"
                onChange={changeHandler}
              />
              <label htmlFor="followDoctorNo">لا</label>
            </div>
          </div>
          <span className={style.error}>{errors.followDoctor}</span>
        </div>
        {/* 5 */}

        <InputElement
          id="diagnosisDate"
          name="تاريخ التشخيص"
          type="text"
          value={userData.diagnosisDate}
          onChange={changeHandler}
          placeholder="التاريخ"
          img={{ src: IdIcon, alt: "Date Icon" }}
          error={errors.diagnosisDate}
        />
        <br />
        {/* 6 */}
        <InputElement
          id="userStage"
          name="المرحلة الحاليه من المرض"
          type="text"
          value={userData.userStage}
          onChange={changeHandler}
          placeholder="ادخل حالتك"
          img={{ src: arrowIcon, alt: "Stage Icon" }}
          error={errors.userStage}
        />
        <ButtonElement
          className={style.sign_up_button}
          txt="انشاء حساب"
          onClick={otpHandler}
          variant="primary"
          type="submit"
        />
      </div>
    </div>
  );
  return (
    <>
      <div className={style.sign_up_footer}>
        {currentSignUpPage === 1 && signUpPage1Content}
        {currentSignUpPage === 2 && signUpPage2Content}
        {currentSignUpPage === 3 && signUpPage3Content}

        <div className={style.sign_up_footer_content}>
          <div className={style.sign_up_arrow} onClick={nextSignUpPageHandler}>
            <img src={nextIcon} alt="Next Icon" />
          </div>

          <h3>صفحه {currentSignUpPage} من 3</h3>

          <div className={style.sign_up_arrow} onClick={prevSignUpPageHandler}>
            <img src={prevIcon} alt="Prev Icon" />
          </div>
        </div>
      </div>
    </>
  );
}
