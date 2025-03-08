// ** Styles
import style from "../../styles/pages/auth/Done.module.css";
// ** Assets
import doneIcon from "../../assets/auth/done/done.png";
// ** Hooks
import { useNavigate } from "react-router-dom";
// ** Components
import HeaderAuth from "../../components/auth/HeaderAuth";

export default function Done() {
  // ** Defaults
  const navigate = useNavigate();
  const signInHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    navigate("/u/sign-in");
  };
  return (
    <>
      <div className={style.done_container}>
        <div className={style.done_content}>
          <HeaderAuth
            img={{ src: doneIcon, alt: "Done" }}
            headLine="اعاده تعين كلمه المرور"
            p="لقد تم تعير كلمه المرور بنجاح انقر لتسجيل الدخول"
          />
          <button onClick={signInHandler}>تسجيل الدخول</button>
        </div>
      </div>
    </>
  );
}
