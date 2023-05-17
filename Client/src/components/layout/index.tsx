import { Outlet, useLocation } from "react-router-dom";
import BackGround from "src/components/layout/BackGround";
import Footer from "src/components/layout/Footer";
import Navbar from "src/components/layout/Navbar";

const MainLayout = () => {
    const location = useLocation();

    return (
        <>
            {location.pathname == "/account" ? <></> : <BackGround />}

            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

export default MainLayout;
