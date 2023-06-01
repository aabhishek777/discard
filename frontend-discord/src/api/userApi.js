import axios from "axios";


export const fetchChats = async ( token ) =>
{
    try
    {
        return await axios.get( 'http://localhost:9999/api/chat', {
            headers: {
                token: token,
            },
        } );

    } catch ( error )
    {
        console.log( error );

    }
}

//this is the post request
export const fetchUsers = async ( token ) =>
{
    try
    {
        return await axios.post( "http://localhost:9999/api/user", {}, {
            headers: {
                token: token
            }
        } )
    } catch ( error )
    {
        console.log( error );
    }
}