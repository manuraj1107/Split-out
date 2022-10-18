import React from 'react'
import { Avatar } from '@material-ui/core'
import './SidebarTop.css'

const SidebarTop = () => {
  return (
    <div className='sidebar__top'>
        <img src='https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80' alt='' />
        <Avatar className='sidebar__avatar' />
        <h2>Manuraj Shukla</h2>
        <h4>random.suppose@gmail.com</h4>
      </div>
  )
}

export default SidebarTop