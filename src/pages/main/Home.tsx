// ** Styles
import style from '../../styles/pages/main/Home.module.css'
// ** Assets
import homeImg from '../../assets/main/Home/main-home-img.png'
import imgBtnUpload from '../../assets/main/Home/img-btn-upload.png'
// Hooks
import { useState } from 'react';
// ** Components
import Modal from '../../components/ui/Modal'
import ButtonElement from '../../components/ui/ButtonElement';


export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <>
            <div className= {style.home_container}>
                <div className= {style.home_content}>
                    {/* right */}
                    <div className= {style.home_text}>
                        <h3>رفع الأشعة المقطعية للحصول على تقرير حول حالة الكلى:</h3>
                        <p>يمكنك رفع صورة الأشعة المقطعية الخاصة بك والحصول على تقرير سريع حول حالتك الصحية. يساعدك هذا التحليل في فهم حالة الكلى بشكل أفضل، مع تحديد ما إذا كانت الكلى سليمة أو تحتوي على حصوات أو أورام. بناءً على نتائج التقرير، سيتم تحديد الخطوات المناسبة التي يجب اتخاذها. إذا كنت ترغب في استشارات إضافية أو دعم مستمر</p>
                        <ButtonElement
                            className= {style.upload_CT_button}
                            txt= 'رفع صوره الاشعه '
                            onClick= {() => setIsModalOpen(true)}
                            imgButton= {imgBtnUpload}
                        />
                    </div>
                    {/* left */}
                    <div className= {style.home_photo}>
                        <img src= {homeImg} alt="Home Photo" />
                    </div>
                </div>
            </div>

            {/* Render Modal if Open */}
            {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
        </>

    );
}

