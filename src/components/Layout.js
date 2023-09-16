import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Menu } from "./Menu";

const Layout = () => {
  return (
    <div>
      <Outlet />
      <Menu />
      <br/>
      <Footer />
    </div>
  );
};

export default Layout;
