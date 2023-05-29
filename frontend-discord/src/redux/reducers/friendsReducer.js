import { createReducer } from "@reduxjs/toolkit";


const initialState = {
    friends: [],
    pendingfriendsInvitations: [],
    onlineUsers: [],
};


export const friendsRedcer = createReducer( initialState, ( builder ) =>
{
    builder.addCase( 'friends', ( state, action ) =>
    {

    } )
} )