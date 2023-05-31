import React from "react";
// import "./ChatHeader.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EditLocationIcon from "@mui/icons-material/EditLocation";
import PeopleIcon from "@mui/icons-material/People";
import SearchIcon from "@mui/icons-material/Search";
import HelpIcon from "@mui/icons-material/Help";
import SendIcon from "@mui/icons-material/Send";

function ChatHeader ( { channelName } )
{
  return (
    <div className="chatHeader">
      <div className="chatHeader__left">
        <h3>
          <span className="chatHeader__hash">#</span>
          { channelName }
        </h3>
      </div>
      <div className="chatHeader__right">
        <NotificationsIcon />
        <EditLocationIcon />
        <PeopleIcon />

        <div className="chatHeader__search">
          <input placeholder="Search" />
          <SearchIcon />
        </div>
        <SendIcon />
        <HelpIcon />
      </div>
    </div>
  );
}

export default ChatHeader;
