import React from "react";
// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EditLocationRoundedIcon from "@mui/icons-material/EditLocationRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import { AddCircleOutline } from "@mui/icons-material";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
// import GifIcon from "mui/icons-material/Gif";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { Button } from "@mui/material";

function ChatHeader() {
  return (
    <div className="chat">
      <div className="chatHeader">
        <div className="chatHeader__left">
          <h3>
            <span className="chatHeader__hash">#</span>
            Test Channel Name
          </h3>
        </div>

        <div className="chatHeader__right">
          <NotificationsIcon />
          <EditLocationRoundedIcon />
          <PeopleAltRoundedIcon />

          <div className="chatHeader__search">
            <input placeholder="Search" />
            <SearchRoundedIcon />
          </div>

          <SendRoundedIcon />
          <HelpRoundedIcon />
        </div>
      </div>
      <div className="chat__messages">Chat mesgs</div>
      <div className="chat__input">
        <AddCircleOutline fontSize="large" />
        <form action="">
          <input type="text" placeholder=" #TESTCHANNEL" />
          <Button className="chat__inputButton">Send Mesasage</Button>
        </form>
        <div className="chat__inputIcons">
          <CardGiftcardIcon fontSize="large" />
          <CardGiftcardIcon fontSize="large" />

          <EmojiEmotionsIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
}

export default ChatHeader;
