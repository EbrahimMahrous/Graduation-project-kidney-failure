// ** style
import style from '../../styles/components/NavBar/NavBar.module.css'
// ** Hooks
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// ** assets
import logo from '../../assets/NavBar/logo.png'
import menu from '../../assets/NavBar/menu.svg'





export default function NavBar(){

    const navigate = useNavigate()

    // Handlers

    const signInHandler = () => {navigate('/u/sign-in')}
    const signUpHandler = () => {navigate('/u/sign-up')}

    // ** States
    const[navOpen, setNavOpen] = useState<boolean>(false)
    const menuRef = useRef<HTMLDivElement>(null) 
    const toggelNavbar = () => {
        if(!navOpen&& menuRef.current && window.innerWidth < 992){
            menuRef.current.style.display = 'flex'
            setNavOpen(true)
        }
        else if (navOpen && menuRef.current){
            menuRef.current.style.display = 'none'
            setNavOpen(false)
        }
    }

    const smoothScrollHandler = (id: string) => {
        const sectionId = document.getElementById(id)
        if(sectionId){
            sectionId.scrollIntoView({behavior: 'smooth'});
            toggelNavbar();
        }
    }
    return (
        <>
            <nav>
                <div className= {style.nav_container}>
                    <div className= {style.logo}>
                        <img src= {logo} alt="logo navbar"/>
                    </div>
                    <div onClick={toggelNavbar} className= {style.mobile_menu}>
                        <img src= {menu} alt="menu icon navbar"/>
                    </div>
                    <div className= {style.menu} ref={menuRef}>
                        <ul>
                            <li onClick={()=> {smoothScrollHandler('about-us')}}>نبذة عنّا</li>
                            <li onClick={()=> {smoothScrollHandler('join-us')}}>انضم لنا</li>
                            <li onClick={()=> {smoothScrollHandler('our-services')}}>خدماتنا</li>
                            <li onClick={()=> {smoothScrollHandler('contact-us')}}>تواصل معنا</li>
                            <li onClick={()=> {smoothScrollHandler('patient-reviews')}}>تقييمات المستخدمين</li>
                        </ul>
                    </div>
                    <div className= {style.auth_btns}>
                        <button onClick={signUpHandler}>إنشاء حساب</button>
                        <button onClick={signInHandler}>تسجيل دخول</button>
                    </div>
                </div>
            </nav>
        </>
    );
}

