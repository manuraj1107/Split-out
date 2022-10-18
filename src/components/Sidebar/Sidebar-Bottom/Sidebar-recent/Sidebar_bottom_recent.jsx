import React from 'react'
import './Sidebar_bottom_recent.css'

const Sidebar_bottom_recent = ({topic}) => {
  return (
    <div className='sidebar__recentItem'>
          <span className='sidebar__hash'>#</span>
          <p> {topic}</p>
        </div>
  )
}

export default Sidebar_bottom_recent