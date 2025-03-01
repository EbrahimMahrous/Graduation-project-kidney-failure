// ** Render child routes
import { Outlet } from "react-router-dom";
// ** Components
import NavBar from "../components/NavBar/NavBar";





export default function MainLayout(){
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    );
}

