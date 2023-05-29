
import axios from "axios";

export const loadUser = async ( token ) =>
{
    return await axios.post( "http://localhost:9999/api/auth/load", {}, {
        headers: {
            token: token
        }
    } )
}