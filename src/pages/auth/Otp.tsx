// ** Styles
import style from "../../styles/pages/auth/Otp.module.css";
// ** Assets
import emailIcon from "../../assets/auth/otp/email-icon.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import HeaderAuth from "../../components/auth/HeaderAuth";
import ButtonElement from "../../components/ui/ButtonElement";

export default function Otp() {
  const [timeLeft, setTimeLeft] = useState(30);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const navigate = useNavigate();

  const newPasswordHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/u/new-password");
  };

  useEffect(() => {
    if (timeLeft === 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleOtpChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value.slice(0, 1);
    setOtp(newOtp);

    if (e.target.value.length === 1 && index < otp.length - 1) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  return (
    <div className={style.otp_container}>
      <div className={style.otp_content}>
        <HeaderAuth
          img={{ src: emailIcon, alt: "Email Icon" }}
          headLine="التحقق من الكود"
          p="الرجاء ادخال الكود الذي ارسلناه الي البريد الالكتروني "
          subTitle="klity******@gamil.com"
        />
        <form className={style.otp_form} action="">
          <h4>{timeLeft < 10 ? `00:0${timeLeft}` : `00:${timeLeft}`}</h4>
          <div className={style.otp_code}>
            {otp.map((value, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                value={value}
                onChange={(e) => handleOtpChange(e, index)}
                maxLength={1}
              />
            ))}
          </div>
          <ButtonElement
            className={style.send_otp_button}
            txt="ارسال رمز التأكيد"
            onClick={newPasswordHandler}
            variant="primary"
            type="button"
          />
          <p>
            لم يتم ارسال رمز تأكيد؟ <a href="">ارسال مرة اخرى</a>
          </p>
        </form>
      </div>
    </div>
  );
}
