import React from 'react'
import DashboardActive  from './DashboardActive'
import DashboardChat  from './DashboardChat'

const DashboardActiveChat = () => {
  return (
      <div className='dashboard__active-chat'>
          <DashboardActive />
          <DashboardChat/>
    </div>
  )
}

export default DashboardActiveChat