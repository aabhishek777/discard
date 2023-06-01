import { Avatar } from '@mui/material';
import React from "react";
// import "./messages.css";

function Messages ( { timestamp, user, message } )
{
  return (
    <div className="message">
      <Avatar src={ user.photo } />
      <div className="message_info">
        <div className='message_sender_details'>
          { user.displayName }
          <span className="message_timestamp">
            { " new Date( timestamp?.toDate() ).toUTCString() " }
          </span>
        </div>
        <div>{ message }</div>
      </div>
    </div>
  );
}

export default Messages;
