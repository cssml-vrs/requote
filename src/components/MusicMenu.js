import React from 'react';
import ForestIcon from '@mui/icons-material/Forest';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import FireplaceIcon from '@mui/icons-material/Fireplace';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import AdjustIcon from '@mui/icons-material/Adjust';

import HomeIcon from '@mui/icons-material/Home';
import EditIcon from '@mui/icons-material/Edit';
import SettingsIcon from '@mui/icons-material/Settings';
//import MailIcon from '@mui/icons-material/Mail';
//import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import MapIcon from '@mui/icons-material/Map';
import InfoIcon from '@mui/icons-material/Info';



// Import the circular menu
import {
  CircleMenu,
  CircleMenuItem,
  TooltipPlacement,
} from "react-circular-menu";

export const MusicMenu = (props) => {
  return (
    <CircleMenu
      startAngle={-90}
      rotationAngle={240}
      itemSize={1}
      radius={2}
      /**
       * rotationAngleInclusive (default true)
       * Whether to include the ending angle in rotation because an
       * item at 360deg is the same as an item at 0deg if inclusive.
       * Leave this prop for angles other than 360deg unless otherwise desired.
       */
      rotationAngleInclusive={false}
    >
      <CircleMenuItem
        tooltip="Nature"
        tooltipPlacement={TooltipPlacement.Right}
      >
        <ForestIcon />
      </CircleMenuItem>
      <CircleMenuItem 
        tooltip="Rain"
        tooltipPlacement={TooltipPlacement.Right}
      >
        <WaterDropIcon />
      </CircleMenuItem>
      <CircleMenuItem 
        tooltip="Fireplace"
        tooltipPlacement={TooltipPlacement.Right}
      >
        <FireplaceIcon />
      </CircleMenuItem>
      <CircleMenuItem 
        tooltip="40hz Binaural Beats"
        tooltipPlacement={TooltipPlacement.Right}
      >
        <GraphicEqIcon />
      </CircleMenuItem>
      <CircleMenuItem 
        tooltip="White Noise"
        tooltipPlacement={TooltipPlacement.Right}
      >
        <AdjustIcon />
      </CircleMenuItem>
    </CircleMenu>
  );
};

// import 40hz-binaural-beats from '../music/40hz-binaural-beats.mp3';
// import fireplace from '../music/fireplace.mp3'
// import nature from '../music/nature.mp3'
// import rain from '../music/rain.wav'
// import white-noise from '../music/white-noise.mp3'

// const data = [
//   { imgSrc: AdjustIcon, audioSrc: 40hz-binaural-beats },
//   { imgSrc: FireplaceIcon, audioSrc: fireplace },
//   { imgSrc: ForestIcon, audioSrc: nature },
//   { imgSrc: WaterDropIcon, audioSrc: rain },
//   { imgSrc: GraphicEqIcon, audioSrc: white-noise }
// ];

// function MusicMenu() {
//   let initAudio = () => {
//     const targetAudio = document.getElementsByClassName("audioBtn")[0];
//     targetAudio.play();
//   };
//   return (
//     <div>
//       <button className="btn btn-danger" onClick={initAudio}>
//         Play Mp3 Audio
//       </button>
//       <audio className="audioBtn">
//         <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"></source>
//       </audio>
//     </div>
//   );
// }
// export default MusicMenu;