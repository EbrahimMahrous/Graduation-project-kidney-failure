// ** Styles
import style from "../../styles/pages/main/Complaints.module.css";
//  ** Assets
import complaintPhoto from "../../assets/landing/ContactUs/contact-us.png";
import userIcon from "../../assets/ui/inputelement/user.png";
import emailIcon from "../../assets/ui/inputelement/email.png";
// ** Components
import HeaderLanding from "../../components/Landing/HeaderLanding";
import InputElement from "../../components/ui/InputElement";
import Textarea from "../../components/ui/TextareaElement";
import CheckboxElement from "../../components/ui/CheckboxElement";
import ButtonElement from "../../components/ui/ButtonElement";
// ** Hooks
import { useState } from "react";
// ** validation
import { contactValidation } from "../../vaildation";

export default function Complaints() {
  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    userEmail: "",
    reportMsg: "",
    isAgreed: false,
  });
  const [errors, setErrors] = useState({
    firstName: "",
    secondName: "",
    userEmail: "",
    reportMsg: "",
    isAgreed: "",
  });

  // ** Handelers
  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value, type } = e.target as HTMLInputElement;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));

    setErrors((prev) => ({
      ...prev,
      [id]: "",
    }));
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = contactValidation(formData);
    setErrors(errors);
    const hasErrors = Object.values(errors).some((msg) => msg !== "");
    if (hasErrors) {
      console.warn("فيه أخطاء في البيانات");
      return;
    }
    console.log("Form Submitted", formData);
  };

  return (
    <>
      <div className={style.complaints_container}>
        <div className={style.complaints_content}>
          <HeaderLanding
            title="لشكاوي والاقتراحات :"
            description="نرحب بجميع الشكاوى والاقتراحات لتحسين خدماتنا وتلبية احتياجاتك بشكل أفض. يمكنك مشاركة أفكارك أو مشاكلك معنا بسهولة، وسنعمل جاهدين للرد عليك في أسرع وقت ممكن.لأن رأيك يهمنا ويساعدنا في تقديم تجربة أفضل للجميع."
          />
          <div className={style.complaints_main}>
            <form className={style.complaints_form} onSubmit={submitHandler}>
              <div className={style.input_names}>
                <InputElement
                  id="firstName"
                  name="الاسم الاول"
                  type="text"
                  value={formData.firstName}
                  onChange={changeHandler}
                  img={{ src: userIcon, alt: "User Icon" }}
                  placeholder="ادخل الاسم الاول"
                  error={errors.firstName}
                />
                <InputElement
                  id="secondName"
                  name="الاسم الثاني"
                  type="text"
                  value={formData.secondName}
                  onChange={changeHandler}
                  img={{ src: userIcon, alt: "User Icon" }}
                  placeholder="ادخل الاسم الثاني"
                  error={errors.secondName}
                />
              </div>

              <InputElement
                id="userEmail"
                name="البريد الالكتروني"
                type="email"
                value={formData.userEmail}
                onChange={changeHandler}
                img={{ src: emailIcon, alt: "Email Icon" }}
                placeholder="ادخل البريد الالكتروني"
                error={errors.userEmail}
              />

              <Textarea
                id="reportMsg"
                name="الرساله"
                placeholder="اكتب رسالتك"
                value={formData.reportMsg}
                onChange={changeHandler}
                error={errors.reportMsg}
              />
              <CheckboxElement
                id="isAgreed"
                name=""
                label={`انت توافق علي`}
                sublabel="سياسه الخصوصيه الخاصه بينا"
                checked={formData.isAgreed}
                onChange={changeHandler}
                error=""
              />
              <ButtonElement
                className={style.button_send_complaints_mg}
                txt="ارسال الرساله"
                onClick={() => {}}
                variant="primary"
                type="submit"
              />
            </form>
            {/* complaintPhoto */}
            <div className={style.complaints_photo}>
              <img src={complaintPhoto} alt="complaints Photo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
