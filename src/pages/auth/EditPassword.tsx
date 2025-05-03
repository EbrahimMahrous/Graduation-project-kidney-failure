// ** Styles
import style from "../../styles/pages/auth/EditPassword.module.css";
// ** Components
import HeaderAuth from "../../components/auth/HeaderAuth";
import InputPasswordElement from "../../components/ui/InputPasswordElement";
import ButtonElement from "../../components/ui/ButtonElement";
// ** Hooks
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// ** Assets
import lockIcon from "../../assets/auth/newpassword/lock-icon.png";
// ** Validation
import { validateEditPasswords } from "../../vaildation";

export default function EditPassword() {
  const navigate = useNavigate();

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const doneHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationError = validateEditPasswords(
      oldPassword,
      newPassword,
      confirmPassword
    );

    if (
      validationError.oldPassword ||
      validationError.newPassword ||
      validationError.confirmPassword
    ) {
      setError(validationError);
      return;
    }

    setError({
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
    navigate("/u/done");
  };

  const forgetPasswordHandler = () => {
    navigate("/u/forget-password");
  };

  const changeHandler = (field: string, value: string) => {
    setError((prevError) => ({
      ...prevError,
      [field]: "",
    }));

    if (field === "oldPassword") setOldPassword(value);
    if (field === "newPassword") setNewPassword(value);
    if (field === "confirmPassword") setConfirmPassword(value);
  };

  return (
    <>
      <div className={style.editpassword_container}>
        <div className={style.editpassword_content}>
          <HeaderAuth
            img={{ src: lockIcon, alt: "lock Icon" }}
            headLine="تغيير كلمة مرور جديدة"
            p="يجب أن تكون كلمة المرور الجديدة مختلفة عن كلمة المرور التي استخدمتها سابقاً"
          />

          <form className={style.editpassword_form} onSubmit={doneHandler}>
            <InputPasswordElement
              id="oldPassword"
              name="كلمة المرور القديمة"
              value={oldPassword}
              onChange={(e) => changeHandler("oldPassword", e.target.value)}
              type={""}
              placeholder="ادخل كلمه المرور"
              error={error.oldPassword}
            />

            <InputPasswordElement
              id="newPassword"
              name="كلمة المرور الجديدة"
              value={newPassword}
              onChange={(e) => changeHandler("newPassword", e.target.value)}
              type={""}
              placeholder="ادخل كلمه المرور"
              error={error.newPassword}
            />

            <InputPasswordElement
              id="confirmPassword"
              name="تأكيد كلمة المرور"
              value={confirmPassword}
              onChange={(e) => changeHandler("confirmPassword", e.target.value)}
              type={""}
              placeholder="تأكيد كلمه المرور"
              error={error.confirmPassword}
            />
            <ButtonElement
              type="submit"
              txt="حفظ كلمة المرور"
              className={style.edit_password_button}
            />

            <p
              onClick={forgetPasswordHandler}
              className={style.forget_password}
            >
              <ul>هل نسيت كلمه المرور؟</ul>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
