// ** Style
import style from "../../styles/pages/main/Remmeber.module.css";

// ** Assets
import water from "../../assets/main/Remmeber/water.png";
import dialysis from "../../assets/main/Remmeber/dialysis.png";
import medicine from "../../assets/main/Remmeber/medicine.png";
import waterActive from "../../assets/main/Remmeber/waterActive.png";
import dialysisActive from "../../assets/main/Remmeber/dialysisActive.png";
import medicineActive from "../../assets/main/Remmeber/medicineActive.png";
import addIcon from "../../assets/main/Remmeber/add.png";
import repeatIcon from "../../assets/main/Remmeber/repeat.png";
import calenderIcon from "../../assets/main/Remmeber/calendar.png";
import timeIcon from "../../assets/main/Remmeber/time.png";
import typeIcon from "../../assets/main/Remmeber/type.png";
import settingIcon from "../../assets/main/Remmeber/setting-icon.png";
// ** Components
import InputElement from "../../components/ui/InputElement";
import ButtonElement from "../../components/ui/ButtonElement";
// ** Hooks
import { useState } from "react";
// ** Validation
import {
  validateWaterForm,
  validateDialysisForm,
  validateMedicineForm,
} from "../../vaildation";

interface IReminderData {
  type: string;
  wakeUpTime: string;
  sleepTime: string;
  remindrEvery: string;
  sessionsPerWeek: string;
  nextSessionDate: string;
  sessionTime: string;
  medicineName: string;
  reminderFrequency: string;
  period: string;
  medicineTime: string;
}

export default function Remmeber() {
  const [modal, setModal] = useState(true);
  const [activeTap, setActiveTap] = useState("medicine");
  const [waterRemmeber, setWaterRemmeber] = useState<IReminderData[]>([]);
  const [dialysisRemmeber, setDialysisRemmeber] = useState<IReminderData[]>([]);
  const [medicineRemmeber, setMedicineRemmeber] = useState<IReminderData[]>([]);
  const [openDropdowns, setOpenDropdowns] = useState<Record<number, boolean>>(
    {}
  );
  const [editingItem, setEditingItem] = useState<IReminderData | null>(null);
  const [formData, setFormData] = useState<IReminderData>({
    type: "",
    wakeUpTime: "",
    sleepTime: "",
    remindrEvery: "",
    sessionsPerWeek: "",
    nextSessionDate: "",
    sessionTime: "",
    medicineName: "",
    reminderFrequency: "",
    period: "",
    medicineTime: "",
  });
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const chanhgeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));

    setFormErrors((prev) => ({
      ...prev,
      [id]: "",
    }));
  };
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // ✳️ Validation Step
    let errors: { [key: string]: string } = {};

    if (activeTap === "water") {
      errors = validateWaterForm(formData);
    } else if (activeTap === "dialysis") {
      errors = validateDialysisForm(formData);
    } else if (activeTap === "medicine") {
      errors = validateMedicineForm(formData);
    }
  
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    if (editingItem) {
      if (activeTap === "water") {
        setWaterRemmeber(
          waterRemmeber.map((item) => (item === editingItem ? formData : item))
        );
      } else if (activeTap === "dialysis") {
        setDialysisRemmeber(
          dialysisRemmeber.map((item) =>
            item === editingItem ? formData : item
          )
        );
      } else if (activeTap === "medicine") {
        setMedicineRemmeber(
          medicineRemmeber.map((item) =>
            item === editingItem ? formData : item
          )
        );
      }
    } else {
      if (activeTap === "water") {
        setWaterRemmeber([...waterRemmeber, formData]);
      } else if (activeTap === "dialysis") {
        setDialysisRemmeber([...dialysisRemmeber, formData]);
      } else if (activeTap === "medicine") {
        setMedicineRemmeber([...medicineRemmeber, formData]);
      }
    }
    setFormData({
      type: "",
      wakeUpTime: "",
      sleepTime: "",
      remindrEvery: "",
      sessionsPerWeek: "",
      nextSessionDate: "",
      sessionTime: "",
      medicineName: "",
      reminderFrequency: "",
      period: "",
      medicineTime: "",
    });
    setFormErrors({});
    setEditingItem(null);
    setModal(false);
  };

  const toggleDropdown = (key: number) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const deleteRowTable = (activeTap: string, indexToDelete: number) => {
    if (activeTap === "water") {
      setWaterRemmeber((prev) => prev.filter((_, i) => i !== indexToDelete));
    } else if (activeTap === "dialysis") {
      setDialysisRemmeber((prev) => prev.filter((_, i) => i !== indexToDelete));
    } else if (activeTap === "medicine") {
      setMedicineRemmeber((prev) => prev.filter((_, i) => i !== indexToDelete));
    }
  };
  const getUniqueKey = (activeTap: string, index: number) => {
    return `${activeTap} - ${index}`;
  };

  const editHandler = (item: IReminderData, activeTap: string) => {
    setEditingItem(item);
    setActiveTap(activeTap);
    setFormData(item);
    setModal(true);
  };

  return (
    <>
      <div className={`${style.remmeber_container}`}>
        <div className={style.remmeber_icons}>
          <p
            onClick={() => {
              setActiveTap("water");
              setModal(true);
            }}
            className={activeTap === "water" ? style.active : ""}
          >
            <img src={activeTap === "water" ? waterActive : water} alt="" />
          </p>

          <p
            onClick={() => {
              setActiveTap("dialysis");
              setModal(true);
            }}
            className={activeTap === "dialysis" ? style.active : ""}
          >
            <img
              src={activeTap === "dialysis" ? dialysisActive : dialysis}
              alt=""
            />
          </p>

          <p
            onClick={() => {
              setActiveTap("medicine");
              setModal(true);
            }}
            className={activeTap === "medicine" ? style.active : ""}
          >
            <img
              src={activeTap === "medicine" ? medicineActive : medicine}
              alt=""
            />
          </p>
        </div>

        <button
          onClick={() => setModal(true)}
          className={style.remmeber_add_btn}
        >
          <img src={addIcon} alt="" />
        </button>

        {modal && (
          <div className={style.overlay}>
            <div className={style.remmeber_modal_container}>
              <h3>
                {activeTap === "water" && "التذكير بمواعيد المياه"}
                {activeTap === "dialysis" && "التذكير بمواعيد جلسات الغسيل"}
                {activeTap === "medicine" && "التذكير بمواعيد العلاج"}
              </h3>

              <form onSubmit={submitHandler}>
                {activeTap === "water" && (
                  <>
                    <InputElement
                      id="type"
                      label="النوع"
                      type="text"
                      name="النوع"
                      value={formData.type}
                      onChange={chanhgeHandler}
                      placeholder="اختر النوع"
                      img={{ src: typeIcon, alt: "" }}
                      error={formErrors.type}
                    />
                    <InputElement
                      id="wakeUpTime"
                      type="text"
                      name="معاد الاستيقاظ"
                      value={formData.wakeUpTime}
                      onChange={chanhgeHandler}
                      placeholder="اكتب التوقيت"
                      img={{ src: timeIcon, alt: "" }}
                      error={formErrors.wakeUpTime}
                    />
                    <InputElement
                      id="sleepTime"
                      type="text"
                      name="معاد النوم"
                      value={formData.sleepTime}
                      onChange={chanhgeHandler}
                      placeholder="اكتب التوقيت"
                      img={{ src: timeIcon, alt: "" }}
                      error={formErrors.sleepTime}
                    />
                    <InputElement
                      id="remindrEvery"
                      type="text"
                      name="التذكير كل"
                      value={formData.remindrEvery}
                      onChange={chanhgeHandler}
                      placeholder="اختر التوقيت"
                      img={{ src: calenderIcon, alt: "" }}
                      error={formErrors.remindrEvery}
                    />
                  </>
                )}
                {activeTap === "dialysis" && (
                  <>
                    <InputElement
                      id="sessionsPerWeek"
                      type="text"
                      name="عدد الجلسات اسبوعياً"
                      value={formData.sessionsPerWeek}
                      onChange={chanhgeHandler}
                      placeholder="اختر العدد"
                      img={{ src: repeatIcon, alt: "" }}
                      error={formErrors.sessionsPerWeek}
                    />
                    <InputElement
                      id="nextSessionDate"
                      type="text"
                      name="معاد الجلسه القادم"
                      value={formData.nextSessionDate}
                      onChange={chanhgeHandler}
                      placeholder="اكتب التاريخ"
                      img={{ src: calenderIcon, alt: "" }}
                      error={formErrors.nextSessionDate}
                    />
                    <InputElement
                      id="sessionTime"
                      type="text"
                      name="في تمام الساعه"
                      value={formData.sessionTime}
                      onChange={chanhgeHandler}
                      placeholder="اكتب الساعه"
                      img={{ src: timeIcon, alt: "" }}
                      error={formErrors.sessionTime}
                    />
                  </>
                )}
                {activeTap === "medicine" && (
                  <>
                    <InputElement
                      id="medicineName"
                      type="text"
                      name="اسم الدواء"
                      value={formData.medicineName}
                      onChange={chanhgeHandler}
                      placeholder="ادخل اسم الدواء "
                      img={{ src: medicine, alt: "" }}
                      error={formErrors.medicineName}
                    />
                    <InputElement
                      id="reminderFrequency"
                      type="text"
                      name="عدد مرات التكرار"
                      value={formData.reminderFrequency}
                      onChange={chanhgeHandler}
                      placeholder="ادخل عدد المرات"
                      img={{ src: repeatIcon, alt: "" }}
                      error={formErrors.reminderFrequency}
                    />
                    <InputElement
                      id="period"
                      type="text"
                      name="الفتره الزمنيه"
                      value={formData.period}
                      onChange={chanhgeHandler}
                      placeholder="اختر الفتره"
                      img={{ src: calenderIcon, alt: "" }}
                      error={formErrors.period}
                    />
                    <InputElement
                      id="medicineTime"
                      type="text"
                      name="تناول الدواء ابتداءا من الساعه"
                      value={formData.medicineTime}
                      onChange={chanhgeHandler}
                      placeholder="اكتب الوقت"
                      img={{ src: timeIcon, alt: "" }}
                      error={formErrors.medicineTime}
                    />
                  </>
                )}
                <div className={style.remmeber_btns}>
                  <ButtonElement
                    txt="تذكير"
                    className={style.remmeber_btn}
                    onClick={(e) => {
                      e.preventDefault();
                      submitHandler(
                        e as unknown as React.FormEvent<HTMLFormElement>
                      );
                    }}
                  />
                  <ButtonElement
                    txt="الغاء"
                    variant="secondary"
                    onClick={() => {
                      setModal(false);
                      setEditingItem(null);
                      setFormData({
                        type: "",
                        wakeUpTime: "",
                        sleepTime: "",
                        remindrEvery: "",
                        sessionsPerWeek: "",
                        nextSessionDate: "",
                        sessionTime: "",
                        medicineName: "",
                        reminderFrequency: "",
                        period: "",
                        medicineTime: "",
                      });
                    }}
                    className={style.remmeber_btn}
                  />
                </div>
              </form>
            </div>
          </div>
        )}

        <div className={style.remmeber_table_container}>
          <table className={style.remmeber_table}>
            {activeTap === "water" &&
              waterRemmeber.map((item, index) => {
                const key = getUniqueKey("water", index);
                return (
                  <table className={style.add_new_table} key={key}>
                    <tr className={style.add_new_table_row}>
                      <td>
                        النوع<p>{item.type}</p>
                      </td>
                      <td>
                        معاد الاستيقاظ<p>{item.wakeUpTime}</p>
                      </td>
                      <td>
                        معاد النوم<p>{item.sleepTime}</p>
                      </td>
                      <td>
                        التذكير كل<p>{item.remindrEvery}</p>
                      </td>
                      <td>
                        <img
                          onClick={() => toggleDropdown(index)}
                          className={style.setting_icon}
                          src={settingIcon}
                          alt=""
                        />
                      </td>
                      <td className={style.remmeber_dropdown_setting_container}>
                        {openDropdowns[index] && (
                          <div className={style.remmeber_dropdown_setting}>
                            <button onClick={() => editHandler(item, "water")}>
                              {" "}
                              تعديل{" "}
                            </button>
                            <button
                              onClick={() => deleteRowTable("water", index)}
                            >
                              {" "}
                              حذف{" "}
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  </table>
                );
              })}
            {activeTap === "dialysis" &&
              dialysisRemmeber.map((item, index) => {
                const key = getUniqueKey("dialysis", index);
                return (
                  <table className={style.add_new_table} key={key}>
                    <tr className={style.add_new_table_row}>
                      <td>
                        عدد الجلسات اسبوعياً<p>{item.sessionsPerWeek}</p>
                      </td>
                      <td>
                        معاد الجلسه القادمه<p>{item.nextSessionDate}</p>
                      </td>
                      <td>
                        الساعه<p>{item.sessionTime}</p>
                      </td>
                      <td>
                        <img
                          onClick={() => toggleDropdown(index)}
                          className={style.setting_icon}
                          src={settingIcon}
                          alt=""
                        />
                      </td>
                      <td className={style.remmeber_dropdown_setting_container}>
                        {openDropdowns[index] && (
                          <div className={style.remmeber_dropdown_setting}>
                            <button
                              onClick={() => editHandler(item, "dialysis")}
                            >
                              {" "}
                              تعديل{" "}
                            </button>
                            <button
                              onClick={() => deleteRowTable("dialysis", index)}
                            >
                              {" "}
                              حذف{" "}
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  </table>
                );
              })}
            {activeTap === "medicine" &&
              medicineRemmeber.map((item, index) => {
                const key = getUniqueKey("medicine", index);
                return (
                  <table className={style.add_new_table} key={key}>
                    <tr className={style.add_new_table_row}>
                      <td>
                        اسم الدواء<p>{item.medicineName}</p>
                      </td>
                      <td>
                        عدد مرات التكرار<p>{item.reminderFrequency}</p>
                      </td>
                      <td>
                        ابتدءاً من<p>{item.period}</p>
                      </td>
                      <td>
                        ابتدءاً من الساعه<p>{item.medicineTime}</p>
                      </td>
                      <td>
                        <img
                          onClick={() => toggleDropdown(index)}
                          className={style.setting_icon}
                          src={settingIcon}
                          alt=""
                        />
                      </td>
                      <td className={style.remmeber_dropdown_setting_container}>
                        {openDropdowns[index] && (
                          <div className={style.remmeber_dropdown_setting}>
                            <button
                              onClick={() => editHandler(item, "medicine")}
                            >
                              {" "}
                              تعديل{" "}
                            </button>
                            <button
                              onClick={() => deleteRowTable("medicine", index)}
                            >
                              {" "}
                              حذف{" "}
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  </table>
                );
              })}
          </table>
        </div>
      </div>
    </>
  );
}
