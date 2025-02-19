// ** style
import style from '../../styles/components/NavBar/NavBar.module.css'

// ** assets
import logo from '../../assets/NavBar/logo.png'
import menu from '../../assets/NavBar/menu.svg'

// ** Hooks
import { useRef, useState } from 'react'


const NavBar = () => {

    const[navOpen, setNavOpen] = useState<boolean>(false)
    // ** useRef provides a way to directly access a list item in the DOM.
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
                            <li>نبذة عنّا</li>
                            <li>رفع صورة</li>
                            <li>خدماتنا</li>
                            <li>تواصل معنا</li>
                            <li>تقييمات المستخدمين</li>
                        </ul>
                    </div>
                    <div className= {style.auth_btns}>
                        <button>إنشاء حساب</button>
                        <button>تسجيل دخول</button>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;
