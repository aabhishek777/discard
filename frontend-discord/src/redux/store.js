

import { configureStore } from '@reduxjs/toolkit'
import { userLoginResponseData, userReducer, userRegisterResponseData } from './reducer'

const store = configureStore( {
    reducer: {
        userstate: userReducer,
        registerResponseData: userRegisterResponseData,
        loginResponseData : userLoginResponseData,
    }
} );


export default store;