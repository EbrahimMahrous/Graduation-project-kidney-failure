import style from "../../styles/pages/auth/NewPassword.module.css";
import lockIcon from "../../assets/auth/newpassword/lock-icon.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import HeaderAuth from "../../components/auth/HeaderAuth";
import InputPasswordElement from "../../components/ui/InputPasswordElement";
import ButtonElement from "../../components/ui/ButtonElement";
// ** vaildation
import { validateNewPassword, validateConfirmPassword } from "../../vaildation";

export default function NewPassword() {
  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const passwordErrors = validateNewPassword(newPassword);
    const confirmPasswordErrors = validateConfirmPassword(
      newPassword,
      confirmPassword
    );
    const allErrors = { ...passwordErrors, ...confirmPasswordErrors };

    setErrors(allErrors);
    return Object.keys(allErrors).length === 0;
  };

  const doneHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      navigate("/u/done");
    }
  };

  const changeNewPasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };

  const changeConfirmPasswordHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <>
      <div className={style.newpassword_container}>
        <div className={style.newpassword_content}>
          <HeaderAuth
            img={{ src: lockIcon, alt: "lock Icon" }}
            headLine="تغير كلمه مرور جديده"
            p="يجب ان تكون كلمه المرور الجديده مختلفه عن كلمه المرور التي استخدمتها سابقاً"
          />
          {/* Form */}
          <form className={style.newpassword_form} onSubmit={doneHandler}>
            <InputPasswordElement
              id="newPassword"
              name="كلمه المرور"
              type="password"
              value={newPassword}
              onChange={changeNewPasswordHandler}
              placeholder="ادخل كلمه المرور"
              error={errors.newPassword}
            />

            <InputPasswordElement
              id="confirmPassword"
              name="تأكيد كلمة المرور"
              type="password"
              value={confirmPassword}
              onChange={changeConfirmPasswordHandler}
              placeholder="أعد ادخل كلمة المرور"
              error={errors.confirmPassword}
            />

            <ButtonElement
              className={style.new_password_button}
              txt="تغير كلمه المرور"
              variant="primary"
              type="submit"
            />
          </form>
        </div>
      </div>
    </>
  );
}
