// ** style
import style from '../../styles/components/NavBar/NavBar.module.css'
// ** Hooks
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// ** assets
import logo from '../../assets/NavBar/logo.png'
import menu from '../../assets/NavBar/menu.svg'
import ButtonElement from '../ui/ButtonElement'





export default function NavBar(){

    const navigate = useNavigate()

    // Handlers

    const signInHandler = () => {navigate('/u/sign-in')}
    const signUpHandler = () => {navigate('/u/sign-up')}

    // ** States
    const[navOpen, setNavOpen] = useState<boolean>(false)
    const [activeItem, setActiveItem] = useState<string>('')
    const menuRef = useRef<HTMLDivElement>(null) 
    const toggleNavbar = () => {
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
            setActiveItem(id)
            toggleNavbar();
        }
    }
    return (
        <>
            <nav>
                <div className= {style.nav_container}>
                    <div className= {style.logo}>
                        <img src= {logo} alt="logo navbar"/>
                    </div>
                    <div onClick={toggleNavbar} className= {style.mobile_menu}>
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
                                className={`${activeItem === item.id ? style.active : ''}`}
                                >
                                    {item.label}
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className= {style.auth_btns}>
                        <ButtonElement
                            txt= 'إنشاء حساب'
                            onClick= {signUpHandler}
                            variant= 'primary'
                        />
                        <ButtonElement
                            txt= 'تسجيل دخول'
                            onClick= {signInHandler}
                            variant= 'secondary'
                        />
                    </div>
                </div>
            </nav>
        </>
    );
}

