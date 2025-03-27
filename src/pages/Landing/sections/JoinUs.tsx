// ** Styles
import style from '../../../styles/pages/Landing/JoinUs.module.css'
// ** Assets
import joinUsPhoto from '../../../assets/landing/JoinUs/join-us.png'
// ** Hooks
import { useNavigate } from 'react-router-dom'
import ButtonElement from '../../../components/ui/ButtonElement';



// ** Interface
interface ISection{
    sectionId: string;
}

export default function JoinUs({sectionId}: ISection) {
    const navigate = useNavigate();
    const welcomeHandler = () => {navigate('/u')}
    return (
        <>
            <section className= {style.section} id = {sectionId}>
                <div className= {style.section_container}>
                    <div className= {style.section_content}>
                        <div className= {style.join_us_photo}>
                            <img src= {joinUsPhoto} alt="upload" />
                        </div>
                        <div className= {style.join_us_text}>
                            <h3>رفع الصورة لتحليل فوري ودعم مباشر:</h3>
                            <p>يمكنك رفع صورة الأشعة الطبية الخاصة بك والحصول على تقرير سريع حول حالتك الصحية. يساعدك هذا التحليل في فهم حالة الكلى بشكل أفضل وتحديد الخطوات المناسبة. إذا كنت ترغب في استشارات إضافية ودعم مستمر، يمكنك إنشاء حساب للحصول هذه الخدمات.</p>
                            <ButtonElement
                                className= {style.join_us_button}
                                txt='انضم لنا'
                                onClick={welcomeHandler}
                                variant='primary'
                            />
                        </div>
                    </div>
                </div>  
            </section>  
        </>
    );
}
