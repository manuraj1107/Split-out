import React from 'react'
import SidebarBottom from './Sidebar-Bottom/SidebarBottom'
import SidebarStats from './Sidebar-Stats/SidebarStats'
import SidebarTop from './Sidebar-Top/SidebarTop'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <SidebarTop />
      <SidebarStats />
      <SidebarBottom />
      
    </div>
  )
}

export default Sidebar