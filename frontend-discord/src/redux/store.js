

import { configureStore } from '@reduxjs/toolkit'
import { userLoadResponseData, userLoginResponseData, userReducer, userRegisterResponseData } from './reducer'

const store = configureStore( {
    reducer: {
        userstate: userReducer,
        registerResponseData: userRegisterResponseData,
        loginResponseData: userLoginResponseData,
        loadResponseData: userLoadResponseData
    }
} );


export default store;