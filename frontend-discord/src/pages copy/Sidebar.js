import React, { useEffect, useState } from "react";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import AddIcon from "@mui/icons-material/Add";
import "./Sidebarchannel.js";
import Sidebarchannel from "./Sidebarchannel";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import CallIcon from "@mui/icons-material/Call";
import InfoIcon from "@mui/icons-material/Info";
import { Avatar } from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";

import HeadsetIcon from '@mui/icons-material/Headset';

// import HeadsetIcon from "@mui/icons-material/Headset";
import SettingsIcon from "@mui/icons-material/Settings";
// import { useSelector } from "react-redux";
// import { selectUser } from "./features/userSlice";
// import db, { auth } from "./firebase";
// import firebase from 'firebase';

function Sidebar ()
{
  // const user = useSelector(selectUser);
  // const [channels, setChannels] = useState([]);

  // useEffect(() => {
  //   db.collection("channels").onSnapshot((snapshot) => {
  //     setChannels(
  //       snapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         channel: doc.data(),
  //       }))
  //     );
  //   });
  // }, []);


  const channels = [ {

    id: "1",
    channel:
      { channelName: "test Chaennel1" }


  },
  {
    id: "2",
    channel:
      { channelName: "test Chaenne2" }

  },
  {
    id: "3",
    channel:
      { channelName: "test Chaenne3" }

  },
  ]

  const user = [ {
    photo: "phoro", displayName: 'diplay name'
  },
  ]
  const handleAddChannel = () =>
  {
    const channelName = prompt( "Enter the Channel Name" );
    // if (channelName) {
    //   db.collection("channels").add({
    //     channelName: channelName,
    //     timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    //   });
    // }
  };

  return (
    <div className="Sidebar">
      <div className="sidebar__top">
        <h4>Discord Clone</h4>
        <ExpandMoreIcon />
      </div>

      <div className="sidebar__channels">
        <div className="sidebar_channelsheader">
          <div className="sidebar_header">
            <ExpandMoreIcon />
            <h4>Text Channels</h4>
          </div>
          <AddIcon onClick={ handleAddChannel } className="sidebar_addchannels" />
        </div>
        <div className="sidebar_channelslist">
          { channels.map( ( { id, channel } ) => (
            <Sidebarchannel
              key={ id }
              id={ id }
              channelName={ channel.channelName }
            />
          ) ) }
        </div>
      </div>
      <div className="sidebar_voice">
        <SignalCellularAltIcon className="sidebar_voiceIcon" fontSize="large" />
        <div className="sidebar_voiceinfo">
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>
        <div className="sidebar_voiceIcons">
          <InfoIcon />
          <CallIcon />
        </div>
      </div>

      <div className="sidebar__profile">
        <Avatar className="sidebar__avatarIcon" src={ user.photo } />
        <span className="sidebar__hoverText">Click to Logout</span>
        <div className="sidebar__profileinfo">
          <h3>{ user.displayName }</h3>
          <p>{ " user.uid.substring( 0, 5 ) " }</p>
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
