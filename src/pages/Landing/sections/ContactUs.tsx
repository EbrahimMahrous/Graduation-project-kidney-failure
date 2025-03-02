// ** Styles
import style from '../../../styles/pages/Landing/ContactUs.module.css'
//  ** Assets
import contactUsPhoto from '../../../assets/landing/ContactUs/contact-us.png'



// ** Interface
interface ISection{
    sectionId: string;
}

export default function ContactUs({sectionId}: ISection) {
    return (
        <>
            <section className= {style.section} id = {sectionId}>
                <div className= {style.contactUs_container}>
                    <div className= {style.contactUs_content}>
                        {/* Top */}
                        <div className= {style.contactUs_Title}>
                            <h3>تواصل معانا:</h3>
                            <p>سواء كان لديك استفسار حول خدماتنا، أو تحتاج إلى مساعدة في استخدام المنصة، نحن هنا لدعمك. فريقنا مستعد للرد على أسئلتك وتقديم المساعدة اللازمة لضمان تجربة سلسة ومريحة.</p>
                        </div>
                        {/* Bottom */}
                        <div className= {style.contactUs_main}>
                                <form className= {style.contactUs_Form} action="" >
                                    <div className= {style.input_names}>
                                        <div className= {style.name}>
                                            <label htmlFor="firstName">الاسم الاول</label>
                                            <input type="text" id='firstName' placeholder='ادخل الاسم الاول'/>
                                        </div>
                                        <div className= {style.name}>
                                            <label htmlFor="secondName">الاسم الثاني</label>
                                            <input type="text" id='secondName' placeholder='ادخل الاسم الثاني'/>
                                        </div>
                                    </div>
                                    <div className= {style.input_email}>
                                        <label htmlFor="email">البريد الالكتروني</label>
                                        <input type="email" id='email' placeholder='ادخل البريد الالكتروني'/>
                                    </div>
                                    <div className= {style.input_placeholder}>
                                        <label htmlFor="reportMsg">الرساله</label>
                                        <textarea name="" id="reportMsg" placeholder='اكتب رسالتك'></textarea>
                                    </div>
                                    <div className= {style.input_checkbox}>
                                        <input type="checkbox" id='checkbox'/>
                                        <label htmlFor="checkbox">انت توافق علي <a href="">سياسيه الخصوصيه </a>الخاصة بينا </label>
                                    </div>
                                    <button className= {style.button_send}>
                                        ارسال الرسالة
                                    </button>
                                </form>
                            {/* ContactUsPhoto */}
                            <div className= {style.contactUs_photo}>
                                <img src= {contactUsPhoto} alt="contactUs Photo" />
                            </div>
                        </div>
                    </div>
                </div>  
            </section>  
        </>
    );
}
