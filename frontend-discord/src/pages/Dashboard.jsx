import React, { useEffect } from "react";

import DashboardNavChatActive from "../components/dashboard/comonentsDashboard/DashboardNavChatActive";
import DashboardSidebar from "../components/dashboard/comonentsDashboard/DashboardSidebar";
import DashboardFriends from "../components/dashboard/comonentsDashboard/DashboardFriends";
import { getSocketConnection } from "../socketIO/socketConnection";

import { loadUser } from "../redux/action";
import { useDispatch } from "react-redux";

const Dashboard = () => {
  const dispatch = useDispatch();
  const getLoadUserDetails = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.log("tocken is undefined");
    } else {
      const userInfo = await loadUser(token);
      console.log(userInfo);
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
    <div className="dashboard__container">
      <DashboardSidebar />
      <DashboardFriends />
      <DashboardNavChatActive />
    </div>
  );
};

export default Dashboard;
