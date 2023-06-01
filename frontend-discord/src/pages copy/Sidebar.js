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
import { useSelector } from "react-redux";
// import { useSelector } from "react-redux";
// import { selectUser } from "./features/userSlice";
// import db, { auth } from "./firebase";
// import firebase from 'firebase';

function Sidebar ()
{

  const { userLoadResponseData } = useSelector( state => state.loadResponseData );


  const { usres } = useSelector( state => state.users );

  console.log( 'cheannel' );


  const users = usres;


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
          { users?.map( ( user ) => (
            <Sidebarchannel
              key={ user?._id }
              id={ user?._id }
              userName={ user?.userName }
              pic={ user?.pic }
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
        <Avatar className="sidebar__avatarIcon" src={ userLoadResponseData?.pic } />
        <span className="sidebar__hoverText">Click to Logout</span>
        <div className="sidebar__profileinfo">
          <h3>{ userLoadResponseData?.userName }</h3>

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
