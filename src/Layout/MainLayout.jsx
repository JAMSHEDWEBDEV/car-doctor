import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";

const MainLayout = () => {
    return (
        <div className="max-w-7xl mx-auto px-3">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;