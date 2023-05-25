import React from 'react'
import Friends from './comonentsDashboard/FriendsAria'
import ChatAria from './comonentsDashboard/ChatAria'
import ActiveNow from './comonentsDashboard/ActiveNowAria'

const MainContentDashboard = () => {
  return (
      <div className="dashboard__main-content">
          <Friends />
          <ChatAria />
          <ActiveNow/>
    </div>
  )
}

export default MainContentDashboard