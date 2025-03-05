// ** Styles
import style from '../styles/layouts/AuthLayout.module.css'
// ** Assets
// import logo from '../assets/auth/icon-logo.png'
import icon from '../assets/auth/icon.svg'
// ** Render child routes
import { Outlet } from "react-router-dom";





export default function AuthLayout(){
    return (
        <div>
            <div className= {style.auth_container}>
                <Outlet />
                <div className= {style.auth_aside}>
                    <img src= {icon} alt="" />
                    <h3>كليّتِك</h3>
                </div>

            </div>
            
        </div>
    );
}

