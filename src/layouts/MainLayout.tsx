// ** Render child routes
import { Outlet } from "react-router-dom";






export default function MainLayout(){
    return (
        <>
            <Outlet />
            <div>
                main layout
            </div>
        </>
    );
}

