// ** Styles
import style from "../../../styles/pages/Landing/ContactUs.module.css";
//  ** Assets
import contactUsPhoto from "../../../assets/landing/ContactUs/contact-us.png";
import userIcon from "../../../assets/ui/inputelement/user.png";
import emailIcon from "../../../assets/ui/inputelement/email.png";
// ** Components
import HeaderLanding from "../../../components/Landing/HeaderLanding";
import InputElement from "../../../components/ui/InputElement";
import Textarea from "../../../components/ui/TextareaElement";
import CheckboxElement from "../../../components/ui/CheckboxElement";
import ButtonElement from "../../../components/ui/ButtonElement";
// ** Hooks
import { useState } from "react";
// ** Validation
import { contactValidation } from "../../../vaildation";
// ** Database
import { databases, ID } from "../../../appwrite/config";
import { Permission, Role } from "appwrite";
import Toast from "../../../components/ui/Toast";

// ** Interface
interface ISection {
  sectionId: string;
}
export default function ContactUs({ sectionId }: ISection) {
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
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);
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

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = contactValidation(formData);
    const isValid = Object.values(validationErrors).every((err) => err === "");
    if (!isValid) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    try {
      await databases.createDocument(
        "681760f000081d082539",
        "6817662600375221a68e",
        ID.unique(),
        {
          firstName: formData.firstName,
          secondName: formData.secondName,
          userEmail: formData.userEmail,
          reportMsg: formData.reportMsg,
          isAgreed: formData.isAgreed,
        },
        [Permission.read(Role.any())]
      );
      setShowToast(true);
      setFormData({
        firstName: "",
        secondName: "",
        userEmail: "",
        reportMsg: "",
        isAgreed: false,
      });
    } catch (error: any) {
      setShowErrorToast(true);
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <section className={style.section} id={sectionId}>
        <div className={style.contactUs_container}>
          <div className={style.contactUs_content}>
            <HeaderLanding
              title="تواصل معانا"
              description="نرحب بجميع الشكاوى والاقتراحات لتحسين خدماتنا وتلبية احتياجاتك بشكل أفضل وسنعمل جاهدين للرد عليك في أسرع وقت ممكن."
            />
            {/* Bottom */}
            <div className={style.contactUs_main}>
              <form className={style.contactUs_Form} onSubmit={submitHandler}>
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
                  error={errors.isAgreed}
                />
                <ButtonElement
                  className={style.button_send_mg}
                  txt={loading ? "جاري الإرسال..." : "ارسال الرساله"}
                  onClick={() => {}}
                  variant="primary"
                  type="submit"
                  disabled={loading}
                />
              </form>
              {/* ContactUsPhoto */}
              <div className={style.contactUs_photo}>
                <img src={contactUsPhoto} alt="contactUs Photo" />
              </div>
            </div>
          </div>
        </div>
        <Toast
          message="تم إرسال الرسالة بنجاح!"
          show={showToast}
          onClose={() => setShowToast(false)}
          type="success"
        />
        <Toast
          message="حصل خطأ أثناء الإرسال!"
          show={showErrorToast}
          onClose={() => setShowErrorToast(false)}
          type="error"
        />
      </section>
    </>
  );
}
