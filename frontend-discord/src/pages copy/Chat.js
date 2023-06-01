import React from "react";

import ChatHeader from "./ChatHeader";

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import AddCircleIcon from "@mui/icons-material/AddCircle";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import GifIcon from "@mui/icons-material/Gif";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import Messages from "./Messages";
// import { selectChannelId, selectChannelName } from "./features/appSlice";
// import { selectUser } from "./features/userSlice";
// import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { fetchChats } from "../api/userApi";
import { useSelector } from "react-redux";
// import db from "./firebase";
// import firebase from "firebase";

function Chat ()
{

  const user = useSelector( ( state ) => state.loadResponseData );

  console.log( user?.userLoadResponseData?._id );
  const senderId = user?.userLoadResponseData?._id
  const recieverId = localStorage.getItem( 'id' );

  // const [ messages, setMessages ] = useState( [] );
  const [ input, setInput ] = useState( '' );

  console.log( input, senderId, recieverId );
  console.log( input );
  //   const channelName = useSelector( selectChannelName );
  //   const user = useSelector( selectUser );
  //   const channelId = useSelector( selectChannelId );

  // useEffect( () =>
  // {
  //   if ( channelId )
  //   {
  //     db.collection( "channels" )
  //       .doc( channelId )
  //       .collection( "messages" )
  //       .orderBy( "timestamp", "asc" )
  //       .onSnapshot( ( snapshot ) =>
  //       {
  //         setMessages( snapshot.docs.map( ( doc ) => doc.data() ) );
  //       } );
  //   }
  // }, [ channelId ] );
  useEffect( async () =>
  {
    const token = localStorage.getItem( 'token' );
    console.log( token );
    // const data = await fetchChats( token )
    // console.log( data )
  }, [] )

  const sendMessage = ( e ) =>
  {
    e.preventDefault();
    postChat();

    // postChat( senderId, recieverId, content );

  };


  const postChat = () =>
  {
    const recieverId = localStorage.getItem( 'id' );
    if ( !recieverId ) console.log( "error finding  reciever id" );
    console.log( input, senderId, recieverId );



  }
  const messages = [ {
    timestamp: "timrstamp",
    message: 'mefshello',
    user: 'user1'
  },
  {
    timestamp: "timrstamp",
    message: 'mefshelloeferfgre',
    user: 'user1'
  },
  {
    timestamp: "timrstampedvervfersdv",
    message: 'mefshello',
    user: 'user1'
  },
  {
    timestamp: "timrstamp",
    message: 'mefshello',
    user: 'user1'
  },
  {
    timestamp: "timrstamp",
    message: 'mefshelloeferfgre',
    user: 'user1'
  },
  {
    timestamp: "timrstampedvervfersdv",
    message: 'mefshello',
    user: 'user1'
  }
  ]
  const channelName = 'xchannel neame'

  return (
    <div className="Chat">
      <ChatHeader />

      <div className="chat__messages">
        { messages.map( ( message ) => (
          <Messages
            timestamp={ message.timestamp }
            message={ message.message }
            user={ message.user }
          />
        ) ) }
      </div>

      <div className="chat__input">
        <AddCircleIcon fontsize="large" />
        <form>
          <input
            placeholder={
              channelName
                ? `Message #${ channelName }`
                : `Select Channel to Message`
            }
            value={ input }
            onChange={ ( e ) => setInput( e.target.value ) }
          // disabled={ !channelId }
          />

          <button
            className="chat__inputButton"
            type="Submit"
            onClick={ sendMessage }
            Send Messages
          ></button>
        </form>
        <div className="chat__inputIcons">
          <CardGiftcardIcon />
          <GifIcon />
          <EmojiEmotionsIcon />
        </div>
      </div>
    </div>
  );
}

export default Chat;
