

import axios from 'axios';

const clientApi = axios.create( {
    baseURL: 'http://localhost:9999/api/v1',
    timeout: 5000,
} );


export const registerApi = async ( data ) => {
    try {
         return await clientApi.post( '/register', data );
    }
    catch ( error ) {
        console.log( `error coning from register api and the error is ${error}` )
        return {
            error
        }
    }
};

export const loginApi = async ( data ) => {
    try {
       return await clientApi.post( '/login', data );
    }
    catch ( error ) {
        console.log( `error coming from login api and the error is ${error}` )
        return {
            error
        }
    }
};


// export const getUser= async