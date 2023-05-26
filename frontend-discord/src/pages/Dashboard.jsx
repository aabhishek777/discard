import React from 'react'
// import Sidebar from '../components/dashboard/Sidebar'
// import MainContentDashboard from '../components/dashboard/MainContentDashboard'
import DashboardNavChatActive from '../components/dashboard/comonentsDashboard/DashboardNavChatActive'
import DashboardSidebar from '../components/dashboard/comonentsDashboard/DashboardSidebar'
import DashboardFriends from '../components/dashboard/comonentsDashboard/DashboardFriends'

const Dashboard = () => {


  return (

    <div className="dashboard__container">
      <DashboardSidebar />
      <DashboardFriends/>
      <DashboardNavChatActive/>
      
      </div>
    
  )
}

export default Dashboard