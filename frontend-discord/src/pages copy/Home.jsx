import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { useDispatch } from "react-redux";
import { loadUser } from "../redux/action";
import { getSocketConnection } from "../socketIO/socketConnection";

const App = () => {
  const dispatch = useDispatch();
  const getLoadUserDetails = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.log("tocken is undefined");
    } else {
      const userInfo = await loadUser(token);
      console.log(userInfo?.data?.data);
      getSocketConnection(token);
      console.log(token);

      //dipatching data to the redux store;

      dispatch({
        type: "load",
        payload: userInfo?.data?.data,
      });
    }
  };

  useEffect(() => {
    getLoadUserDetails();
  }, [getLoadUserDetails]);
  return (
    <div className="main">
      <Sidebar />
      <Chat />
    </div>
  );
};

export default App;
