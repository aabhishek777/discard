import { createReducer } from '@reduxjs/toolkit'

export const userReducer = createReducer( {},
    ( builder ) => {
        builder.addCase( 'user', ( state, action ) => {
            state.userState = action.payload;
        } )
    } );


export const userRegisterResponseData = createReducer( {},
    ( builder ) => {
        builder.addCase( 'register', ( state, action ) => {
            state.registerResponseData = action.payload;
    })
    } )
    export const userLoginResponseData = createReducer( {},
        ( builder ) => {
            builder.addCase( 'login', ( state, action ) => {
                state.loginResponseData = action.payload;
        })
    })