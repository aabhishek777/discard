import React, { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import SidebarChannel from "../components/SidebarChannel";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CallIcon from "@mui/icons-material/Call";
// import { Avatar } from "@material-ui/core";
import { Avatar } from "@mui/material";
// import MicIcon from "@material-ui/icons/Mic";
import MicIcon from "@mui/icons-material/Mic";

import HeadsetIcon from "@mui/icons-material/Headset";
import SettingsIcon from "@mui/icons-material/Settings";

// import { useSelector } from "react-redux";
// import { selectUser } from "./features/userSlice";
// import db, { auth } from "./Firebase";

function Sidebar() {
  //   const user = useSelector(selectUser);
  //   const [channels, setChannels] = useState([]);

  //   useEffect(() => {
  //     db.collection("channels").onSnapshot((snapshot) =>
  //       setChannels(
  //         snapshot.docs.map((doc) => ({
  //           id: doc.id,
  //           channel: doc.data(),
  //         }))
  //       )
  //     );
  //   }, []);

  //   const handleAddChannel = () => {
  //     const channelName = prompt("Enter a new channel name");

  //     if (channelName) {
  //       db.collection("channels").add({
  //         channelName: channelName,
  //       });
  //     }
  //   };

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h3>Srikar's Server</h3>
        <ExpandMoreIcon />
      </div>

      <div className="sidebar__channels">
        <div className="sidebar__channelsHeader">
          <div className="sidebar__header">
            <ExpandMoreIcon />
            <h4>Text Channels</h4>
          </div>

          <AddIcon className="sidebar__addChannel" />
        </div>
        <div className="sidebar__channelsList">
          <SidebarChannel />
        </div>
      </div>

      <div className="sidebar__voice">
        <SignalCellularAltIcon
          className="sidebar__voiceIcon"
          fontSize="large"
        />
        <div className="sidebar__voiceInfo">
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>

        <div className="sidebar__voiceIcons">
          <InfoOutlinedIcon />
          <CallIcon />
        </div>
      </div>

      <div className="sidebar__profile">
        <Avatar />
        <div className="sidebar__profileInfo">
          <h3>SrikarK</h3>
          <p>#ID</p>
        </div>

        <div className="sidebar__profileIcons">
          <MicIcon />
          <HeadsetIcon />
          <SettingsIcon />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
