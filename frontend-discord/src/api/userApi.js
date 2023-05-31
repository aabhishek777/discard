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