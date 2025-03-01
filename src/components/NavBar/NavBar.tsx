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
    const [activeItem, setAvtiveItem] = useState<string>('')
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
            setAvtiveItem(id)
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
                            {[
                                {id: 'about-us', label: 'نبذة عنّا'},
                                {id: 'join-us', label: 'انضم لنا'},
                                {id: 'our-services', label: 'خدمتنا'},
                                {id: 'contact-us', label: 'تواصل معنا'},
                                {id: 'patient-reviews', label: 'تقييمات المستخدمين'},
                            ].map((item)=>
                                <li
                                key={item.id}
                                onClick={() => smoothScrollHandler(item.id)}
                                className= {activeItem === item.id ? style.active : ''}
                                >
                                    {item.label}
                                </li>
                            )}
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

