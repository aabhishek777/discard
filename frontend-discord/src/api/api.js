

// import { Try } from '@mui/icons-material';
import axios from 'axios';

// const server = process.env.API_URL;
const clientApi = axios.create( {
    baseURL: 'http://localhost:9999/api',
    timeout: 5000,
} );


export const registerApi = async ( data ) =>
{
    try
    {
        return await clientApi.post( 'auth/register', data );
    }
    catch ( error )
    {
        console.log( `error coning from register api and the error is ${ error }` )
        return {
            error
        }
    }
};

export const loginApi = async ( data ) =>
{
    try
    {
        return await clientApi.post( 'auth/login', data );
    }
    catch ( error )
    {
        console.log( `error coming from login api and the error is ${ error }` )
        return {
            error
        }
    }
};

export const friendsInvitationApi = async ( email ) =>
{
    try
    {
        return await clientApi.post( '/friend-invitation/invite', { email } )
    } catch ( error )
    {
        console.log( error );
    }
}