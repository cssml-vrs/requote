import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Menu } from "./Menu";
import React from "react";
import './Menu.css'
//import { MusicMenu } from "./MusicMenu";
import MusicFloat from "./MusicFloat";
import { FcAbout, FcBusinessman, FcCamera, FcFullTrash } from "react-icons/fc";


const actions = [
  { label: "About", icon: <FcAbout />, onClick: console.log },
  { label: "Profile", icon: <FcBusinessman />, onClick: console.log },
  { label: "Picture", icon: <FcCamera />, onClick: console.log },
  { label: "Trash", icon: <FcFullTrash />, onClick: console.log },
];

const Layout = () => {
  return (
    <React.Fragment>
    <div>
      <Header />
    </div>
    <div class="menu">
      <Menu />
    </div>
    <div>
      <Outlet />
    </div>

    <div>
    <MusicFloat actions={actions} />
    </div>
    {/* <div class="musicmenu">
      <MusicMenu />
    </div> */}
      <Footer />
    

    </React.Fragment>
    
  );
};

export default Layout;
