// ** Render child routes
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";







export default function MainLayout(){
    return (
        <>
            <div>
                <NavBar />
                <Outlet />
            </div>
        </>
    );
}

