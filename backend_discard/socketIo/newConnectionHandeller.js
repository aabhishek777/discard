
import { addNewConnectedUser, removeConnectedUser } from "./socketIOStore.js";

export const newConnectionHandeller = async ( socket, io ) =>
{

    const userDetails = socket.user;

    addNewConnectedUser(
        {
            socketId: socket.id,
            userName: userDetails.userName
        }
    );




};

export const removeUserHandeller = ( socketId ) =>
{
    removeConnectedUser( socketId );
};