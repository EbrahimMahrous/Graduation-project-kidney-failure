// ** Styles
import style from '../../../styles/pages/Landing/PatientReviews.module.css'
// ** Assets
import reviewPhoto1 from '../../../assets/landing/PatientReviews/PatientReview-1.png'
import reviewPhoto2 from '../../../assets/landing/PatientReviews/PatientReview-2.png'
import reviewPhoto3 from '../../../assets/landing/PatientReviews/PatientReview-3.png'
import reviewPhoto4 from '../../../assets/landing/PatientReviews/PatientReview-4.png'



// ** Interface
interface ISection{
    sectionId: string;
}

export default function PatientReviews({sectionId}: ISection) {
    return (
        <>
            <section className= {style.section} id = {sectionId}>
                <div className= {style.patient_reviews_container}>
                    <div className= {style.patient_reviews_content}>
                        {/* Top */}
                        <div className= {style.patient_reviews_Title}>
                            <h3>آراء المرضى:</h3>
                            <p>اكتشف كيف أحدثنا فرقاً في حياتهم من خلال تجارب من قدمنا لهم الرعاية.</p>
                        </div>
                        <div className= {style.patient_reviews_nums}>
                            <div className= {style.num}>
                                <h3>+50</h3>
                                <p>افضل المتخصصين</p>
                            </div>
                            <div className= {style.num}>
                                <h3>+90</h3>
                                <p>معدل رضي المرضي</p>
                            </div>
                            <div className= {style.num}>
                                <h3>+500</h3>
                                <p>المهنين في الرعايه الصحيه</p>
                            </div>
                            <div className= {style.num}>
                                <h3>+100</h3>
                                <p>استشارات ناجحه</p>
                            </div>
                        </div>
                        {/* Bottom */}
                        <div className= {style.patient_reviews_comments}>
                            <div className= {style.comment}>
                                <img src= {reviewPhoto1} alt="PatientReviewsPhotos" />
                                <p>التواصل المباشر مع الأطباء عبر التطبيق سهل عليّ الحصول على استشارات طبية في أي وقت."
                                <br/>-خالد محمد</p>
                            </div>
                            <div className= {style.comment}>
                                <img src= {reviewPhoto2} alt="PatientReviewsPhotos" />
                                <p>بفضل ميزة رفع صور الأشعة، حصلت على تقرير فوري ساعدني في فهم حالتي الصحية بشكل أفضل."
                                <br/>-فاطمة جمال </p>
                            </div>
                            <div className= {style.comment}>
                                <img src= {reviewPhoto3} alt="PatientReviewsPhotos" />
                                <p>لدعم النفسي المتاح عبر التطبيق ساعدني في التعامل مع القلق والتوتر المرتبط بحالتي الصحية."
                                <br/>-ليلى سامي</p>
                            </div>
                            <div className= {style.comment}>
                                <img src= {reviewPhoto4} alt="PatientReviewsPhotos" />
                                <p>ميزة التذكيرات اليومية بمواعيد العلاج والمياه ساعدتني في الالتزام بالعلاج بشكل أفضل."
                                <br/>-يوسف عبد الله </p>
                            </div>
                        </div>
                    </div>
                </div>  
            </section>  
        </>
    );
}
