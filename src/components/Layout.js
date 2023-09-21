import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Menu } from "./Menu";
import React from "react";
import './Menu.css'
//import { MusicMenu } from "./MusicMenu";
import MusicFloat from "./MusicFloat";
import { FcAbout, FcBusinessman, FcCamera, FcFullTrash } from "react-icons/fc";
import ParkIcon from '@mui/icons-material/Park';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import FireplaceIcon from '@mui/icons-material/Fireplace';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import rain from "./../music/rain.wav";
import nature from "./../music/nature.mp3";
import silence from "./../music/silence.mp3"

let trackPlaying = 0;
// new Audio(silence).play();
// const clickSound = new Audio(silence);
// clickSound.play().catch(function (error) {
//     console.log("play() failed because the user didn't interact with the document first. https://goo.gl/xX8pDD")});


function playrain() {
  //if label of the actions is x, then play the file corresponding to x  
  var rainPlay = new Audio (rain);
  rainPlay.play();
  }

const actions = [
  { label: "Rain", icon: <ThunderstormIcon />, onClick: console.log},
  { label: "Nature", icon: <ParkIcon />, onClick: console.log},
  { label: "Fireplace", icon: <FireplaceIcon />, onClick: console.log },
  { label: "White Noise", icon: <GraphicEqIcon />, onClick: console.log },
  { label: "40hz Binaural Beats", icon: <HeadphonesIcon />, onClick: console.log }
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
