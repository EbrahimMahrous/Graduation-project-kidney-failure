// ** Styles
import style from '../../../styles/pages/Landing/OurServices.module.css'
// ** Assets
import serItem1 from '../../../assets/landing/OurServices/service-1.png'
import serItem2 from '../../../assets/landing/OurServices/service-2.png'
import serItem3 from '../../../assets/landing/OurServices/service-3.png'
import serItem4 from '../../../assets/landing/OurServices/service-4.png'



// ** Interface
interface ISection{
    sectionId: string;
}

export default function OurServices({sectionId}: ISection) {
    return (
        <>
            <section className= {style.section} id = {sectionId}>
                <div className= {style.services_container}>
                    <div className= {style.services_content}>
                        {/* Top */}
                        <div className= {style.services_Title}>
                            <h3>خدماتنا المتخصصة لدعم صحتك</h3>
                            <p>قدم لك مجموعة من الخدمات المتكاملة التي تهدف إلى تحسين صحتك الجسدية والنفسية</p>
                        </div>
                        {/* Bottom */}
                        <div className= {style.services_items}>
                            <div className= {style.serv_item}>
                                <img src= {serItem1} alt="services" />
                                <div>
                                    <h3>تقرير الأشعة: </h3>
                                    <p> تحليل مبدئي لصورة الأشعة المرفوعة لتقييم الحالة الصحية.</p>
                                </div>
                            </div>
                            <div className= {style.serv_item}>
                                <img src= {serItem2} alt="services" />
                                <div>
                                    <h3>ارشادات غذائية: </h3>
                                    <p>نصائح حول الأطعمة المسموحة والممنوعة حسب حالة المريض.</p>
                                </div>
                            </div>
                            <div className= {style.serv_item}>
                                <img src= {serItem3} alt="services" />
                                <div>
                                    <h3>الدعم النفسي: </h3>
                                    <p>إمكانية التواصل مع أخصائي نفسي عبر رسائل مباشرة لدعم الصحة النفسية للمريض</p>
                                </div>
                            </div>
                            <div className= {style.serv_item}>
                                <img src= {serItem4} alt="services" />
                                <div>
                                    <h3>تذكير بالأدوية والمياه: </h3>
                                    <p>إمكانية التواصل مع أخصائي نفسي عبر رسائل مباشرة لدعم الصحة النفسية للمريض</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </section>  
        </>
    );
}
