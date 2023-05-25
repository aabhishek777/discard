import React from 'react'
import Sidebar from '../components/dashboard/Sidebar'
import MainContentDashboard from '../components/dashboard/MainContentDashboard'

const Dashboard = () => {


  return (

    <div className="dashboard__container">
      <Sidebar />
      <MainContentDashboard/>
      
      </div>
    
  )
}

export default Dashboard