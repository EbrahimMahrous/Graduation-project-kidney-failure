// ** Styles
import style from '../../../styles/pages/Landing/Footer.module.css'
// ** Assets
import footerLogo from '../../../assets/landing/Footer/footer-logo.png'
import facebookIcon from '../../../assets/landing/Footer/facebook.png'
import xIcon from '../../../assets/landing/Footer/X.png'
import linkedinIcon from '../../../assets/landing/Footer/linkedin.png'
import telegramIcon from '../../../assets/landing/Footer/telegram.png'
// ** Components
import HeaderLanding from '../../../components/Landing/HeaderLanding'




// ** Interface
interface ISection{
    sectionId: string;
}

export default function Footer({sectionId}: ISection) {
    return (
        <>
            <section className= {style.section} id = {sectionId}>
                <div className= {style.footer_container}>
                    <div className= {style.footer_content}>
                        <HeaderLanding
                            img={{src: footerLogo, alt: 'footer logo'}}
                            description= 'نحن نقدم حلولًا رقمية مبتكرة لدعم صحتك. اكتشف كيف يمكننا مساعدتك في متابعة حالتك الصحية بكل سهولة وراحة'
                        />
                        {/* Bottom */}
                        <div className= {style.footer_End}>
                            <p>© 2024 كليّتِك جميع الحقوق محفوظة تم تصميم وتطوير هذه المنصة لتقديم أفضل دعم صحي ورعاية للمستخدمين</p>
                            <div className= {style.footer_social_icon}>
                                <img src= {facebookIcon} alt="social Media" />
                                <img src= {xIcon} alt="social Media" />
                                <img src= {linkedinIcon} alt="social Media" />
                                <img src= {telegramIcon} alt="social Media" />
                            </div>
                        </div>
                    </div>
                </div>  
            </section>  
        </>
    );
}
