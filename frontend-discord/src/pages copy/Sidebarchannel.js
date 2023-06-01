import React from "react";
// import { setChannelInfo } from "./features/appSlice";
// import "./Sidebarchannel.css";
import { useDispatch } from "react-redux";

function Sidebarchannel ( { id, userName, pic, isOnline } )
{
  const dispatch = useDispatch();

  const onClickHandeller = ( id ) =>
  {
    console.log( id );
    localStorage.setItem( 'id', id );
    dispatch( {
      type: "id",
      payload: id
    } );
  }

  return (
    <div
      className="sidebarchannel"
      onClick={ () => onClickHandeller( id ) }
    // onClick={ () =>
    //   dispatch(
    //     setChannelInfo( {
    //       channelId: id,
    //       channelName: channelName,
    //     } )
    //   )
    // }
    >


      <div className="sidebarchannel__hash">
        <img src={ pic } className="sidebarchannel__pic" />
      </div >
      <div className="sidebar__name">
        { userName }
        <div className="sidebar__last-message">
          { isOnline ? 'online' : 'offline' }
        </div>

      </div>
    </div >
  );
}

export default Sidebarchannel;
