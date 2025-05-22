// ** Style
import style from "../../styles/pages/main/BookingDoctor.module.css";
// ** Hooks
import { useNavigate, useParams } from "react-router-dom";
import { useMemo, useState } from "react";
// ** Data
import { doctors } from "../../data";
// ** Interface
import { IDoctorProps } from "../../interfaces";
// Assets
import star from "../../assets/main/BookingDoctor/star.png";
import specialization from "../../assets/main/BookingDoctor/specialization.png";
import location from "../../assets/main/BookingDoctor/location.png";
import price from "../../assets/main/BookingDoctor/price.png";
import chat from "../../assets/main/BookingDoctor/chat.png";
import waitTime from "../../assets/main/BookingDoctor/wait.png";
import phone from "../../assets/main/BookingDoctor/phone.png";
// ** Components
import BookingDetails from "../../components/ui/BookingModal";

export default function BookingDoctor() {
  const navigate = useNavigate()
  // ** States
  const { id } = useParams<{ id: string }>();
  const allDoctors = useMemo(
    () => [
      ...doctors.page1,
      ...doctors.page2,
      ...doctors.page3,
      ...doctors.page4,
      ...doctors.page5,
      ...doctors.page6,
      ...doctors.page7,
    ],
    []
  );
  const doctor = allDoctors.find(
    (doc: IDoctorProps) => doc.id.toString() === id
  );
  if (!doctor) return <div>Doctor not found</div>;

  const today = new Date();
  const todayIndex = today.getDay();
  const arabicDays = [
    "الأحد",
    "الاثنين",
    "الثلاثاء",
    "الأربعاء",
    "الخميس",
    "الجمعة",
    "السبت",
  ];
  const sortedSchedule = [...(doctor.schedule ?? [])].sort((a, b) => {
    const aIndex = arabicDays.indexOf(a.day);
    const bIndex = arabicDays.indexOf(b.day);
    const relativeA = (aIndex - todayIndex + 7) % 7;
    const relativeB = (bIndex - todayIndex + 7) % 7;
    return relativeA - relativeB;
  });
  const getDayLabel = (dayIndex: number, currentIndex: number): string => {
    if (dayIndex === currentIndex) return "اليوم";
    if (dayIndex === (currentIndex + 1) % 7) return "غدًا";
    return arabicDays[dayIndex];
  };
  const updatedSchedule = sortedSchedule.map((dayObj) => {
    const dayIndex = arabicDays.indexOf(dayObj.day);
    return {
      ...dayObj,
      displayDay: getDayLabel(dayIndex, todayIndex),
    };
  });

  // ** Slice
  const [currentPage, setCurrentPage] = useState(0);
  const tablesPerPage = 3;
  const paginatedSchedule = updatedSchedule.slice(
    currentPage * tablesPerPage,
    currentPage * tablesPerPage + tablesPerPage
  );

  const [modal, setModal] = useState(false);

  const bookingClickHandler = () => {
    setModal(true);
  };

  return (
    <>
      <BookingDetails modal={modal} setModal={setModal} doctor={doctor} />
      <div className={style.doctor_details_container}>
        {/* Right */}
        <div className={style.doctor_details_info}>
          <div className={style.doctor_details_header}>
            <img className={style.doctor_photo} src={doctor.img} alt="" />
            <div className={style.doctor_header_info}>
              <h2>{doctor.fullName}</h2>
              <p>{doctor.description}</p>
              <div>
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
              <p className={style.doctor_header_rate}>
                التقيم العام من {doctor.rate} زائراً لدكتور
              </p>
              <div className={style.doctor_footer_info}>
                <div>
                  <img src={specialization} alt="" />
                  <span>{doctor.specialization}</span>
                </div>
                <div>
                  <img src={location} alt="" />
                  {doctor.location}
                </div>
                <div>
                  <img src={price} alt="" />
                  الكشف:<span>{doctor.price} جنيه</span>
                </div>
                <div>
                  <img src={chat} alt="" />
                  لتواصل شات مجاناً اضغط<span className= {style.chat_to_doctor} onClick={()=> navigate("/m/chat/patient")}>(هنا)</span>
                </div>
                <div>
                  <img src={waitTime} alt="" />
                  مده الانتظار: {doctor.timeWaiting}
                </div>
                <div>
                  <img src={phone} alt="" />
                  {doctor.phone} سعر مكالمة عاديه
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Left */}
        <div className={style.doctor_details_booking}>
          <div className={style.doctor_details_booking_content}>
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
              className={`${style.arrow} ${style.prev_arrow}`}
            >
              ‹
            </button>
            {/* Displaying 3 tables per page */}
            {paginatedSchedule.map((daySchedule, index) => (
              <div key={index} className={style.doctor_details_table_wrapper}>
                <table className={style.doctor_details_table}>
                  <thead>
                    <tr>
                      <th>{daySchedule.displayDay}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {daySchedule.times.map((timeSlot, idx) => (
                      <tr key={idx}>
                        <td>
                          من {timeSlot.from} <br /> حتى {timeSlot.to}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <button
                  className={style.booking_button}
                  onClick={bookingClickHandler}
                >
                  احجز
                </button>
              </div>
            ))}
            <button
              onClick={() =>
                setCurrentPage((prev) =>
                  (prev + 1) * tablesPerPage < updatedSchedule.length
                    ? prev + 1
                    : prev
                )
              }
              className={`${style.arrow} ${style.next_arrow}`}
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
