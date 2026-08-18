import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
    return (
        <div className="app">
            <Header />
            {/* All the children, according to the routes, go inside and come over here in the place of this outlet. */}
            <Outlet />
        </div>
    );
};

export default Layout;
