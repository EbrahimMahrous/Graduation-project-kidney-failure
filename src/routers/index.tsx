// ** Router components
import { Route, Routes } from "react-router-dom";
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
import BookingDoctor from "../pages/main/BookingDoctor";
import BookingDetails from "../pages/main/BookingDetails";
import Remmeber from "../pages/main/Remmeber";
import Complaints from "../pages/main/Complaints";
import Profile from "../pages/main/Profile";
import Settings from "../pages/main/Settings";
import EditPassword from "../pages/auth/EditPassword";
import Patients from "../pages/main/Patients";
import ChatLayout from "../layouts/ChatLayout";
import AdminLayout from "../layouts/AdminLayout";

export default function Routers() {
  return (
    <>
      <Routes>
        {/* landing page layout */}
        <Route path="/" element={<LandingPageLayout />}>
          <Route index element={<LandingPage />} />
        </Route>

        {/* auth layout */}
        <Route path="/u" element={<AuthLayout />}>
          <Route index element={<Welcome />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="forget-password" element={<ForgetPassword />} />
          <Route path="otp" element={<Otp />} />
          <Route path="new-password" element={<NewPassword />} />
          <Route path="edit-password" element={<EditPassword />} />
          <Route path="done" element={<Done />} />
        </Route>

        {/* main layout */}
        <Route path="/m" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="allow-notAllow" element={<AllowAndNotAllow />} />
          <Route path="consultation" element={<Consultation />} />
          <Route path="doctor/:id" element={<BookingDoctor />} />
          <Route path="booking-details" element={<BookingDetails />} />
          <Route path="remmeber" element={<Remmeber />} />
          <Route path="complaints" element={<Complaints />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />


          <Route path="chat/doctor" element={<ChatLayout chatType="doctor" />} />
          <Route path="chat/patient" element={<ChatLayout chatType="patient" />} />
          <Route path="patients" element={<Patients />} />
        </Route>

        {/* admin */}
        <Route path="/a" element = {<AdminLayout/>}>

        </Route>
      </Routes>
    </>
  );
}
