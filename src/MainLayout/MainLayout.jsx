import { Outlet } from "react-router-dom";
import Nav from "../components/Header/Nav/Nav";


const MainLayout = () => {
    return (
        <div>
            <Nav/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;