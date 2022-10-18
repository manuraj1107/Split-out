import React from 'react'
import HeaderOption from './Header-options/HeaderOption'
import HomeIcon from '@material-ui/icons/Home'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Chat'
import NotificationsIcon from '@material-ui/icons/Notifications'
import avatar from '../../../assets/manu.png'
import './Header_Right.css'

const Header_Right = () => {

 const options = [{
  id:1,
  icon: HomeIcon,
  title: 'Home',
 },
 {
  id:2,
  icon: SupervisorAccountIcon,
  title: 'Network',
 },
 {
  id:3,
  icon: BusinessCenterIcon,
  title: 'Jobs',
 },
 {
  id:4,
  icon: ChatIcon,
  title: 'Messaging',
 },
 {
  id:5,
  icon: NotificationsIcon,
  title: 'Notifications',
 },
 {
  id:6,
  title: 'Me',
  avatar: avatar
 },

]

  return (
    <div className='header__right'>
    {options.map(option=> 
      <HeaderOption key={option.id} Icon={option.icon} title={option.title} avatar={option.avatar} />
    )}
    {/* <HeaderOption avatar={avatar} title='me' /> */}
      {/* <HeaderOption Icon={HomeIcon} title='Home' />
      <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
      <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
      <HeaderOption Icon={ChatIcon} title='Messaging' />
      <HeaderOption Icon={NotificationsIcon} title='Notifications' /> */}
    </div>
  )
}

export default Header_Right