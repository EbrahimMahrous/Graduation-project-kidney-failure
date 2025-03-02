//  ** Styles
import style from '../../../styles/pages/Landing/Benefit.module.css'
// ** Assets
import benefitPhoto from '../../../assets/landing/Benefit/benefit-photo.png'
import circleOne from '../../../assets/landing/Benefit/one.png'
import circleTwo from '../../../assets/landing/Benefit/two.png'
import CircleThree from '../../../assets/landing/Benefit/three.png'



// ** Interface
interface ISection{
    sectionId: string;
}

export default function Benefit({sectionId}: ISection) {
    return (
        <>
            <section className= {style.section} id = {sectionId}>
                <div className= {style.benefit_container}>
                    <div className= {style.benefit_content}>
                        {/* Top */}
                        <div className= {style.benefit_Title}>
                            <h3>استفد من خدماتنا بسهولة</h3>
                            <p>اتبع خطوات بسيطة للحصول على الدعم الطبي والتوجيه الصحي من خلال منصتنا، حيث نقدم لك جميع الأدوات اللازمة لمتابعة حالتك الصحية وتحقيق أفضل النتائج</p>
                        </div>
                        {/* Bottom */}
                        <div className= {style.benefit_services}>
                            {/* right */}
                            <div className= {style.benefit_photo}>
                                <img src= {benefitPhoto} alt="Benefit Photo" />
                            </div>
                            {/* left */}
                            <div className= {style.benefit_items}>
                                <div className= {style.item}>
                                    <img src= {circleOne} alt="circle" />
                                    <div className= {style.item_txt}>
                                        <h4>ارفع صورة الأشعة:</h4>  
                                        <p>قم بتحميل صورة الأشعة الخاصة بك عبر منصتنا بكل سهولة. بمجرد رفع الصورة، سيتم تحليلها وتقديم تقرير مبدئي حول حالتك الصحية</p>
                                    </div>
                                </div>
                                {/* 1 */}
                                <div className= {style.item}>
                                    <img src= {circleTwo} alt="circle" />
                                    <div className= {style.item_txt}>
                                        <h4>احصل على تقرير مبدئي:</h4>
                                        <p>بعد رفع الصورة، سيقوم النظام بتوفير تقرير مبدئي شامل يعرض النتائج المستخلصة من الأشعة. سيساعدك هذا التقرير في فهم حالتك الصحية بشكل سريع ودقيق.</p>
                                    </div>
                                </div>
                                {/* 2 */}
                                <div className= {style.item}>
                                    <img src= {CircleThree} alt="circle" />
                                    <div className= {style.item_txt}>
                                        <h4>تواصل مع الأطباء:</h4>
                                        
                                        <p>عند الحصول على التقرير، يمكنك التواصل مع الأطباء المتخصصين في حالات الكلى للحصول على استشارات إضافية. يتيح لك التطبيق التفاعل مع الأطباء لتوضيح أي تفاصيل أو استفسارات لديك بشأن حالتك الصحية.</p>
                                    </div>
                                </div>
                                {/* 3 */}
                            </div>
                        </div>
                    </div>
                </div>  
            </section>  
        </>
    );
}
