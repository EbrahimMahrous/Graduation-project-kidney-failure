// ** Styles
import style from "../../styles/pages/main/ConsultationHome.module.css";
// **Components
import HeaderLanding from "../../components/Landing/HeaderLanding";
// ** Assets
import searchIcon from "../../assets/main/Consultation/search.png";
import nextIcon from "../../assets/main/Consultation/next-icon.png";
import prevIcon from "../../assets/main/Consultation/prev-icon.png";
import searchClickedIcon from "../../assets/main/Consultation/search-clicked.png";
// ** Hooks
import { useState } from "react";
// Components
import InputElement from "../../components/ui/InputElement";
// Data
import { doctors } from "../../data";
import { Link } from "react-router-dom";

export default function Consultation() {
  const [showSearch, setShowSearch] = useState(true);
  const [searchValueClicked, setSearchValueClicked] = useState(false);
  const [searchValueText, setSearchValueText] = useState({ search: "" });
  const [pageNumber, setPageNumber] = useState(1);
  const doctorsList = doctors[`page${pageNumber}`];

  // ** Handlers
  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log("Search Input:", value);
    setSearchValueText({ ...searchValueText, search: value });
  };

  const pageChangeHandler = (page: number) => {
    setPageNumber(page);
  };
  const pageChangeHandlerPrev = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };
  const pageChangeHandlerNext = () => {
    if (pageNumber < 7) {
      setPageNumber(pageNumber + 1);
    }
  };

  return (
    <>
      <div className={style.consultation_container}>
        <>
          {showSearch && (
            <div className={style.consultation_search_icon_container}>
              <img
                src={searchIcon}
                alt=""
                onClick={() => {
                  setShowSearch(false);
                  setSearchValueClicked(true);
                }}
              />
            </div>
          )}
          {searchValueClicked && (
            <div className={style.consultation_search_clicked_container}>
              <InputElement
                id="search"
                type="text"
                value={searchValueText.search}
                placeholder="ابحث عن طبيبك المفضل هنا ..."
                className={style.consultation_search_clicked_input}
                img={{ src: searchClickedIcon, alt: "search Clicked Icon" }}
                onChange={searchHandler}
                name={""}
              />
            </div>
          )}
          <HeaderLanding
            title="تواصل مع طبيبك بسهولة واطمئن على صحتك."
            description="نوفر لك إمكانية الوصول إلى الأطباء المختصين لتلقي الاستشارات الطبية بسهولة من أي مكان، مع متابعة حالتك الصحية أولاً بأول."
          />
          <div className={style.consultation_content}>
            {doctorsList?.map((doctor) => (
              <Link
                to={`/m/doctor/${doctor.id}`}
                key={doctor.id}
                className={style.doctor_link_container}
              >
                <div className={style.consultation_content_doctor}>
                  <img src={doctor.img} alt={doctor.name} />
                  <h4>{doctor.name}</h4>
                  <p>{doctor.specialization}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className={style.consultation_footer}>
            <div
              className={style.footer_prev}
              onClick={() => pageChangeHandlerNext()}
            >
              <img src={nextIcon} alt="" />
              <span>التالي</span>
            </div>
            <div className={style.footer_counter}>
              {Array.from({ length: 7 }, (_, i) => i + 1).map((num) => {
                if (
                  num === 1 ||
                  num === 7 ||
                  (num >= pageNumber - 1 && num <= pageNumber + 1)
                ) {
                  return (
                    <span
                      key={num}
                      className={`${style.page_number} ${
                        pageNumber === num ? style.active : ""
                      }`}
                      onClick={() => pageChangeHandler(num)}
                    >
                      {num}
                    </span>
                  );
                } else if (
                  (num === 2 && pageNumber > 3) ||
                  (num === 6 && pageNumber < 5)
                ) {
                  return <span key={num}>....</span>;
                } else {
                  return null;
                }
              })}
            </div>
            <div
              className={style.footer_next}
              onClick={() => pageChangeHandlerPrev()}
            >
              <span>السابق</span>
              <img src={prevIcon} alt="" />
            </div>
          </div>
        </>
      </div>
    </>
  );
}
