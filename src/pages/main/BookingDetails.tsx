// ** Styles
import style from "../../styles/pages/main/BookingDetails.module.css";
// ** Components
import ButtonElement from "../../components/ui/ButtonElement";
// ** Hooks
import { useLocation } from "react-router-dom";
// ** Assets
import bookingDetailsPhoto from "../../assets/main/BookingDetails/BookingDetailsPhoto.png";
import download from "../../assets/main/BookingDetails/download.png";
import specialization from "../../assets/main/BookingDoctor/specialization.png";
import locationIcon from "../../assets/main/BookingDoctor/location.png";
import priceIcon from "../../assets/main/BookingDoctor/price.png";
import waitTimeIcon from "../../assets/main/BookingDoctor/wait.png";
import phone from "../../assets/main/BookingDoctor/phone.png";
import calender from "../../assets/main/BookingDetails/calendar.png";
import user from "../../assets/main/BookingDetails/calendar.png";

const BookingDetails = () => {
  const { fullName, phoneNumber, doctorName, waitTime, location, price } =
    useLocation().state;

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("ar-EG", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className={style.booking_details_container}>
      <div className={style.booking_details_content}>
        <div className={style.booking_details_info}>
          <h3>تفاصيل الحجز</h3>
          <div>
            <img src={specialization} alt="Specialization" /> اسم الدكتور:{" "}
            {doctorName || "غير محدد"}
          </div>
          <div>
            <img src={user} alt="User" /> اسم المريض: {fullName || "غير محدد"}
          </div>
          <div>
            <img src={priceIcon} alt="Price" /> الكشف: {price || "غير محدد"}{" "}
            جنيه
          </div>
          <div>
            <img src={phone} alt="Phone" /> رقم الهاتف:{" "}
            {phoneNumber || "غير محدد"}
          </div>
          <div>
            <img src={waitTimeIcon} alt="Wait Time" /> مدة الانتظار:{" "}
            {waitTime || "غير محدد"}
          </div>
          <div>
            <img src={calender} alt="Calendar" /> تاريخ الحجز: {formattedDate}
          </div>
          <div>
            <img src={locationIcon} alt="Location" /> عنوان العيادة:{" "}
            {location || "غير محدد"}
          </div>
        </div>
        <div className={style.booking_details_content_photo}>
          <img src={bookingDetailsPhoto} alt="Booking Info" />
        </div>
      </div>

      <div className={style.booking_details_download}>
        <ButtonElement
          txt="تنزيل"
          imgButton={download}
          className={style.booking_details_download_btn}
        />
      </div>
    </div>
  );
};

export default BookingDetails;
