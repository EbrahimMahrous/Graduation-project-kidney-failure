// ** Style
import style from "../../styles/components/ui/BookingModal.module.css";
// ** State
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// ** Components
import InputElement from "./InputElement";
import ButtonElement from "./ButtonElement";
// ** Assets
import phone from "../../assets/main/BookingModal/phone-icon.png";
import user from "../../assets/main/BookingModal/user.png";
import done from "../../assets/main/BookingModal/done.png";
// ** Interface
import { IDoctorProps } from "../../interfaces";

type IBookingModalProps = {
  modal: boolean;
  setModal: (value: boolean) => void;
  doctor: IDoctorProps;
};

export default function BookingModal({
  modal,
  setModal,
  doctor,
}: IBookingModalProps) {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [successModal, setSuccessModal] = useState(false);

  const successModalHandler = () => {
    setModal(false);
    setSuccessModal(true);
  };

  const navigate = useNavigate();

  const bookingDetailsHandler = () => {
    if (
      doctor &&
      doctor.fullName &&
      doctor.price &&
      doctor.timeWaiting &&
      doctor.location
    ) {
      navigate("/m/booking-details", {
        state: {
          fullName,
          phoneNumber,
          doctorName: doctor.fullName,
          price: doctor.price,
          waitTime: doctor.timeWaiting,
          location: doctor.location,
        },
      });
    } else {
      console.error("بيانات الطبيب غير مكتملة");
    }
  };

  return (
    <>
      {modal && (
        <div
          className={style.booking_details_container}
          onClick={() => setModal(false)}
        >
          <div
            className={style.booking_details_content}
            onClick={(e) => e.stopPropagation()}
          >
            <h3>ادخل بيانات الحجز:</h3>
            <InputElement
              id="fullName"
              type="text"
              name="الاسم"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="ادخل الإسم بالكامل"
              img={{ src: phone, alt: "" }}
            />
            <InputElement
              id="phoneNumber"
              type="text"
              name="رقم الهاتف"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="ادخل رقم الهاتف"
              img={{ src: user, alt: "" }}
            />
            <div className={style.booking_details_modal_btns}>
              <ButtonElement
                txt="احجز"
                className={style.modal_btn}
                onClick={(e) => {
                  e.preventDefault();
                  successModalHandler();
                }}
              />
              <ButtonElement
                txt="الغاء"
                variant="secondary"
                onClick={() => setModal(false)}
                className={style.modal_btn}
              />
            </div>
          </div>
        </div>
      )}

      {successModal && (
        <div
          className={style.booking_success_container}
          onClick={() => setSuccessModal(false)}
        >
          <div
            className={style.booking_success_content}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={style.success_icon}>
              <img src={done} alt="" />
            </div>
            <p className={style.success_text}>لقد تم الحجز بنجاح</p>
            <ButtonElement
              txt="تفاصيل الحجز"
              onClick={() => {
                console.log("تفاصيل الحجز");
                bookingDetailsHandler();
              }}
              className={style.details_btn}
            />
          </div>
        </div>
      )}
    </>
  );
}
