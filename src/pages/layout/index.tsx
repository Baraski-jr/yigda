import { Outlet } from "react-router-dom";
import Footer from "../../components/sections/footer";
import Header from "../../components/sections/header";

const Layout = () => {
    return ( 
        <div className="">
            <Header />
            <Outlet />
            <Footer />
        </div>
     );
}

export default Layout;