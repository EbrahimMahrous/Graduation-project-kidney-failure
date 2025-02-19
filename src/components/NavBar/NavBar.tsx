// ** style
import style from '../../styles/components/NavBar/NavBar.module.css'

// ** assets
import logo from '../../assets/NavBar/logo.png'
import menu from '../../assets/NavBar/menu.svg'

// ** Hooks
import { useState } from 'react'


const NavBar = () => {

    const[navOpen, setNavOpen] = useState<boolean>(false)
    const menuElement = document.getElementById('menu')
    const toggelNavbar = () => {
        if(!navOpen&& menuElement && window.innerWidth < 992){
            menuElement.style.display = 'flex'
            setNavOpen(true)
        }
        else if (navOpen && menuElement){
            menuElement.style.display = 'none'
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
                    <div className= {style.menu} id='menu'>
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
