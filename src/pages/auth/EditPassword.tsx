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

export default function EditPassword() {
  const navigate = useNavigate();

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const doneHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError("كلمة المرور غير متطابقة");
      return;
    }

    if (oldPassword === newPassword) {
      setError("كلمة المرور الجديدة يجب أن تكون مختلفة عن القديمة");
      return;
    }

    setError("");
    navigate("/u/done");
  };

  const forgetPasswordHandler = () => {
    navigate("/u/forget-password");
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
              onChange={(e) => setOldPassword(e.target.value)}
              type={""}
              placeholder="ادخل كلمه المرور"
              error=""
            />

            <InputPasswordElement
              id="newPassword"
              name="كلمة المرور الجديدة"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              type={""}
              placeholder="ادخل كلمه المرور"
              error=""
            />

            <InputPasswordElement
              id="confirmPassword"
              name="تأكيد كلمة المرور"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type={""}
              placeholder="تأكيد كلمه المرور"
              error=""
            />

            {error && <p className={style.error}>{error}</p>}

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
