// ** style
import style from "../../styles/pages/main/Profile.module.css";
// ** Assets
import profileImg from "../../assets/main/profile/profilo.png";
import settingsIcon from "../../assets/main/profile/Settings.png";
import editIcon from "../../assets/main/profile/edit.png";
import user from "../../assets/main/profile/user.png";
import lock from "../../assets/main/profile/lock-closed.png";
// ** Hooks
import { useState } from "react";
import ButtonElement from "../../components/ui/ButtonElement";
import InputElement from "../../components/ui/InputElement";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [dropdown, setDropdown] = useState(false);
  const [isEditPersonalInfo, setIsEditPersonalInfo] = useState(false);
  const [userData, setUserData] = useState({
    firstName: "محمد يوسف",
    fullName: "محمد يوسف ابراهيم احمد",
    id: "30208051102202",
    weight: "82",
    phone: "01283529923",
    email: "mohamedyousef178@gmail.com",
    height: "190",
    country: "مصر",
    city: "الدقهليه,المنصوره",
  });
  const [tempData, setTempData] = useState({ ...userData });

  const editClickHandler = () => {
    setTempData({ ...userData });
    setIsEditPersonalInfo(true);
  };

  const saveHandler = () => {
    setUserData({ ...tempData });
    setIsEditPersonalInfo(false);
  };

  const changeHandler = (e: { target: { id: any; value: any } }) => {
    const { id, value } = e.target;
    setTempData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const navigate = useNavigate();
  const changePasswordHandler = () => {
    navigate("/u/edit-password");
  };
  return (
    <>
      <div className={style.profile_container}>
        {/* 1 */}
        <div className={style.profile_photo_info}>
          <div className={style.profile_photo_info_right}>
            <img src={profileImg} alt="" />
            <div>
              <p>{userData.firstName}</p>
              <p>
                {userData.country}, {userData.city}
              </p>
            </div>
          </div>
          <div className={style.profile_photo_info_left}>
            <img
              src={settingsIcon}
              onClick={() => setDropdown(!dropdown)}
              alt=""
            />
            {dropdown && (
              <div className={style.dropdown_container}>
                <ul>
                  <li>
                    <span>
                      <img src={user} alt="" />
                    </span>
                    تعديل الملف الشخصى
                  </li>
                  <li onClick={changePasswordHandler}>
                    <span>
                      <img src={lock} alt="" />
                    </span>
                    تعديل كلمة المرور
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        {/* 2 */}
        {isEditPersonalInfo ? (
          <>
            <div className={style.profile_personal_info}>
              <div className={style.profile_personal_info_table}>
                <div>
                  <InputElement
                    id="fullName"
                    name="الاسم"
                    type=""
                    placeholder="ادخل الإسم بالكامل"
                    value={tempData.fullName}
                    onChange={changeHandler}
                    label=""
                  />
                  <InputElement
                    id="ID"
                    name="الرقم القومي"
                    type=""
                    placeholder="ادخل الرقم القومي"
                    value={tempData.id}
                    onChange={changeHandler}
                    label=""
                  />
                  <InputElement
                    id="weight"
                    name="الوزن"
                    type=""
                    placeholder="ادخل وزنك"
                    value={tempData.weight}
                    onChange={changeHandler}
                    label=""
                  />
                </div>
                <div className={style.profile_personal_info_3}>
                  <InputElement
                    id="phone"
                    name="رقم الهاتف"
                    type=""
                    placeholder="ادخل رقم الهاتف"
                    value={tempData.phone}
                    onChange={changeHandler}
                    label=""
                  />
                  <InputElement
                    id="email"
                    name="البريد الالكتروني"
                    type=""
                    placeholder="ادخل البريد الالكتروني"
                    value={tempData.email}
                    onChange={changeHandler}
                    label=""
                  />
                  <InputElement
                    id="height"
                    name="الطول"
                    type=""
                    placeholder="ادخل طولك"
                    value={tempData.height}
                    onChange={changeHandler}
                    label=""
                  />
                </div>
              </div>
            </div>
            <div className={style.save_btn}>
              <ButtonElement
                txt="حفظ التغيرات"
                onClick={saveHandler}
                className={style.save_btn}
              />
            </div>
          </>
        ) : (
          <>
            <div className={style.profile_personal_info}>
              <div className={style.profile_personal_info_header}>
                <h3>المعلومات الشخصيه </h3>
                <div onClick={editClickHandler}>
                  <img src={editIcon} alt="" />
                </div>
              </div>
              <div className={style.profile_personal_info_table}>
                <div>
                  <div>
                    <h4>الاسم</h4>
                    <p>{userData.fullName}</p>
                  </div>
                  <div>
                    <h4>الرقم القومي</h4>
                    <p>{userData.id}</p>
                  </div>
                  <div>
                    <h4>الوزن</h4>
                    <p>{userData.weight}</p>
                  </div>
                </div>
                <div className={style.profile_personal_info_3}>
                  <div>
                    <h4>رقم الهاتف</h4>
                    <p>{userData.phone}</p>
                  </div>
                  <div>
                    <h4>البريد الالكتروني</h4>
                    <p>mohamedyousef178@gmail.com</p>
                  </div>
                  <div>
                    <h4>الطول</h4>
                    <p>{userData.height}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className={style.profile_location_info}>
              <h3>العنوان</h3>
              <div className={style.profile_location_info_table}>
                <div>
                  <h4>الدوله</h4>
                  <p>{userData.country}</p>
                </div>
                <div>
                  <h4>المحافظه / البلد</h4>
                  <p>{userData.city}</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
