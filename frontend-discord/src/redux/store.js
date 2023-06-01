

import { configureStore } from '@reduxjs/toolkit'
import
{
    currentRecieverIdReducer,
    directMessageReducer,
    groupMessageReducer,
    userLoadResponseData,
    userLoginResponseData,
    userReducer,
    userRegisterResponseData,
    usersReducer
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

        users: usersReducer,

        currentRecieverId: currentRecieverIdReducer,

    }
} );


export default store;