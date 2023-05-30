

import { configureStore } from '@reduxjs/toolkit'
import
{
    directMessageReducer,
    groupMessageReducer,
    userLoadResponseData,
    userLoginResponseData,
    userReducer,
    userRegisterResponseData
}
    from './reducer'

const store = configureStore( {
    reducer: {
        userstate: userReducer,
        registerResponseData: userRegisterResponseData,
        loginResponseData: userLoginResponseData,
        loadResponseData: userLoadResponseData,
        groupMessageData: groupMessageReducer,
        directMessageData: directMessageReducer,

    }
} );


export default store;