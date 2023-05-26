import React from "react";
import SidebarMainPageButton from "./sidebar/SidebarMainPageButton";
import SidebarAddIcon from "./sidebar/SidebarAddIcon";
import SidebarCompassIcon from "./sidebar/SidebarCompassIcon";
import SidebarDownloadIcon from "./sidebar/SidebarDownloadIcon";

const DashboardSidebar = () => {
  return (
    <div className="dashboard__sidebar">
      <SidebarMainPageButton />
      <SidebarAddIcon />
      <SidebarCompassIcon />
      <SidebarDownloadIcon />
    </div>
  );
};

export default DashboardSidebar;
