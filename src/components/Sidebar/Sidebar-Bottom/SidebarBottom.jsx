import React from 'react'
import './SidebarBottom.css'
import Sidebar_bottom_recent from './Sidebar-recent/Sidebar_bottom_recent'


const SidebarBottom = () => {

    
  return (
    <div className='sidebar__bottom'>
       <p>Recent</p>
        <Sidebar_bottom_recent topic={'reactjs'} />
        <Sidebar_bottom_recent topic={'programming'} />
        <Sidebar_bottom_recent topic={'softwareDev'} />
        <Sidebar_bottom_recent topic={'design'} />
        <Sidebar_bottom_recent topic={'developer'} />
      </div>
  )
}

export default SidebarBottom