// ** Router components
import {Route, Routes } from "react-router-dom";
// ** Pages
import LandingPageLayout from "../layouts/LandingPageLayout";
import LandingPage from "../pages/Landing/LandingPage";
import AuthLayout from "../layouts/AuthLayout";
import Welcome from "../pages/auth/Welcome";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import ForgetPassword from "../pages/auth/ForgetPassword";
import Otp from "../pages/auth/Otp";
import NewPassword from "../pages/auth/NewPassword";
import Done from "../pages/auth/Done";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/main/Home";
import Consultation from "../pages/main/Consultation";
import AllowAndNotAllow from "../pages/main/AllowAndNotAllow";
import DoctorDetails from "../pages/main/DoctorDetails";
import BookingDetails from "../pages/main/BookingDetails";
import Remmeber from "../pages/main/Remmeber";





export default function Routers(){
    return (
        <>
            <Routes>
                {/* landing page layout */}
                <Route path="/" element = {<LandingPageLayout/>}>
                    <Route index element = {<LandingPage/>}/>
                </Route>

                {/* auth layout */}
                <Route path="/u" element = {<AuthLayout/>}>
                    <Route index element = {<Welcome/>}/>
                    <Route path="sign-in" element = {<SignIn/>}/>
                    <Route path="sign-up" element = {<SignUp/>}/>
                    <Route path="forget-password" element = {<ForgetPassword/>}/>
                    <Route path="otp" element = {<Otp/>}/>
                    <Route path="new-password" element = {<NewPassword/>}/>
                    <Route path="done" element = {<Done/>}/>
                </Route>

                {/* main layout */}
                <Route path="/m" element = {<MainLayout/>}>
                    <Route index element= {<Home/>}/>
                    <Route path="allow-notAllow"  element= {<AllowAndNotAllow/>}/>
                    <Route path="consultation"  element= {<Consultation/>}/>
                    <Route path="doctor/:id"  element= {<DoctorDetails/>}/>
                    <Route path="booking-details"  element= {<BookingDetails/>}/>
                    <Route path="remmeber"  element= {<Remmeber/>}/>
                </Route>
            </Routes>
        </>
    );
}

