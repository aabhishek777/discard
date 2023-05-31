import React from "react";
import Sidebar from "./SideBar";
import Chat from "./Chat";
import ChatHeader from "./ChatHeader";

const Home = () => {
  return (
    <div className="home__sidebar-chat">
      <Sidebar />

      <ChatHeader />
    </div>
  );
};

export default Home;
