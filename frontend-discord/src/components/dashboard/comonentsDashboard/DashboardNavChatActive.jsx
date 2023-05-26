import React from 'react'
import DashboardNav from './DashboardNav'
import DashboardActiveChat from './DashboardActiveChat'

const DashboardNavChatActive = () => {
  return (
      <div className='dashboard__nav-chat-active'>
          <DashboardNav />
          <DashboardActiveChat/>
    </div>
  )
}

export default DashboardNavChatActive