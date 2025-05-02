// ** style
import style from '../../styles/components/NavBar/NavBar.module.css'
// ** Hooks
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// ** assets
import logo from '../../assets/NavBar/logo.png'
import menu from '../../assets/NavBar/menu.svg'
import settingIcon from '../../assets/NavBar/setting-icon.png'
import settingIconWhite from '../../assets/NavBar/setting-icon-white.png'
import logoutIcon from '../../assets/NavBar/logout-icon.png'
import ButtonElement from '../ui/ButtonElement'

// ** Redux
import { useDispatch, useSelector } from 'react-redux'
import {RootState, AppDispatch} from '../../App/store'
import { logout } from '../../App/slices/userSlice'
// ** icon
import { FiChevronDown } from 'react-icons/fi'





export default function NavBar(){

    

    // ** Store
    const userLogged  = useSelector((state: RootState) => state.userLogin.loggedIn);
    const dispatch: AppDispatch = useDispatch()



    const navigate = useNavigate()

    // Handlers
    const signInHandler = () => {navigate('/u/sign-in')}
    const signUpHandler = () => {navigate('/u/sign-up')}

    // ** States
    const[navOpen, setNavOpen] = useState<boolean>(false)
    const [activeItem, setActiveItem] = useState<string>('')
    const [showDropdown, setShowDropdown] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const[activeButton, setActiveButton] = useState(false)



    const toggleMenu =()=> {
        setIsMenuOpen(!isMenuOpen)
        setActiveButton(!activeButton)
    }


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

    const logOutHandler = () => {
        dispatch(logout());
        navigate('/');
    };


    const navigateNavbar = (id: string) => {
        setActiveItem(id)
        navigate(id ? `/m/${id}` : "/m");
    }

    const complaintsHandler = () => {
        navigate('/m/complaints')
    }

    const profileHandler = () => {
        navigate('/m/profile')
    }

    const settingsHandler = () => {
        navigate('/m/settings')
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
                        {userLogged ?
                        <ul>
                            {[
                                { id: '', label: 'الرئيسيه' },
                                { id: 'consultation', label: 'الاستشارات' },
                                { id: 'allow-notAllow', label: 'النصائح' },
                                { id: 'remmeber', label: 'التذكيرات' },
                            ].map((item) => (
                                <li
                                    key={item.id}
                                    onClick={() => navigateNavbar(item.id)}
                                    className={`${activeItem === item.id ? style.active : ''}`}
                                >
                                    {item.label}
                                    
                                {/* Arrow */}
                                {item.id === "consultation" && (
                                <span 
                                    className={style.container_arrow}
                                    onMouseEnter={() => setShowDropdown(true)}
                                    onMouseLeave={() => setShowDropdown(false)}
                                >
                                    <FiChevronDown className={style.arrow_icon} />
                                    {showDropdown && (
                                        <ul className={style.menu_dropdown_arrow}>
                                            <li onClick={()=>{}}> 
                                                <span className= {style.menu_icon}>🧑🏻‍🔬 </span>
                                                <span>كلي </span>
                                            </li>
                                            <li onClick={()=>{}}>
                                                <span className= {style.menu_icon}>🥼 </span>
                                                <span>نفسي</span>
                                            </li>
                                        </ul>
                                    )}
                                </span>
                                )}
                                </li>
                            ))}
                        </ul>
                        :
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
                        }
                    </div>
                    {userLogged ?
                    <div className= {style.auth_btns}>
                        <button 
                            title='الاعدادات' 
                            className= {`${style.userLoggedIcon} ${activeButton ? style.activeButton : ''}`}
                            onClick={toggleMenu}
                        >
                            <img src= {activeButton ? settingIconWhite : settingIcon} alt="setting Icon" />
                        </button>

                        <button 
                            title='تسجيل خروج' 
                            className= {style.userLoggedIcon} 
                            onClick={logOutHandler}
                        >
                            <img src= {logoutIcon} alt="logout Icon" />
                        </button>

                        {isMenuOpen && (
                            <div className={style.menu_dropdown_settings}>
                                <ul>
                                    <li onClick={profileHandler}>
                                        <span className={style.menuIcon}>👤</span>
                                        <span>بروفايل</span>
                                    </li>
                                    <li onClick={complaintsHandler}>
                                        <span className={style.menuIcon}>⚠️</span>
                                        <span>لشكاوي والاقتراحات</span>
                                    </li>
                                    <li onClick={settingsHandler}>
                                        <span className={style.menuIcon}>⚙</span>
                                        <span>الاعدادات</span>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                    :
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
                    }
                </div>
            </nav>
        </>
    );
}


