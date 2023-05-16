import { Outlet } from "react-router-dom";
import BackGround from "src/components/layout/BackGround";
import Footer from "src/components/layout/Footer";
import Naver from "src/components/layout/Naver";

const Layout = () => {
    return (
        <>
            <BackGround />
            <Naver />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;
