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

export const Menu = (props) => {
  return (
    <CircleMenu
      startAngle={0}
      rotationAngle={90}
      itemSize={2}
      radius={5}
      /**
       * rotationAngleInclusive (default true)
       * Whether to include the ending angle in rotation because an
       * item at 360deg is the same as an item at 0deg if inclusive.
       * Leave this prop for angles other than 360deg unless otherwise desired.
       */
      rotationAngleInclusive={false}
    >
      <CircleMenuItem
        tooltip="Home"
        //tooltipPlacement='top'
        tooltipPlacement={TooltipPlacement.Right}
        link='/'
      >
        <HomeIcon />
      </CircleMenuItem>
      <CircleMenuItem 
        tooltip="Add/Edit Quotes"
        tooltipPlacement={TooltipPlacement.Right}
        link='/AddEditQuotes'
      >
        <EditIcon />
      </CircleMenuItem>
      <CircleMenuItem 
        tooltip="Settings"
        tooltipPlacement={TooltipPlacement.Right}
        link='/Settings'
      >
        <SettingsIcon />
      </CircleMenuItem>
    </CircleMenu>
  );
};