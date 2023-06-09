import { createReducer } from '@reduxjs/toolkit'

export const userReducer = createReducer( {},
    ( builder ) =>
    {
        builder.addCase( 'user', ( state, action ) =>
        {
            state.userState = action.payload;
        } )
    } );


export const userRegisterResponseData = createReducer( {},
    ( builder ) =>
    {
        builder.addCase( 'register', ( state, action ) =>
        {
            state.registerResponseData = action.payload;
        } )
    } );


export const userLoginResponseData = createReducer( {},
    ( builder ) =>
    {
        builder.addCase( 'login', ( state, action ) =>
        {
            state.loginResponseData = action.payload;
        } )
    } );



export const userLoadResponseData = createReducer( {}, ( builder ) =>
{
    builder.addCase( 'load', ( state, action ) =>
    {
        state.userLoadResponseData = action.payload;
    } )
} );

export const groupMessageReducer = createReducer( {}, ( builder ) =>
{
    builder.addCase( 'groupChat', ( state, action ) =>
    {
        state.groupMessageData = action.payload;
    } )
} );



export const directMessageReducer = createReducer( {}, ( builder ) =>
{
    builder.addCase( 'directChat', ( state, action ) =>
    {
        state.directMessageData = action.payload;
    } )
} );


export const usersReducer = createReducer( {}, ( builder ) =>
{
    builder.addCase( 'users', ( state, action ) =>
    {
        state.usres = action.payload;
    } )
} );


export const currentRecieverIdReducer = createReducer( {}, ( builder ) =>
{
    builder.addCase( 'id', ( state, action ) =>
    {
        state.currentRecieverId = action.payload;
    } )
} );