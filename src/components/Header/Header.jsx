import React from 'react'
import './Header.css'
import Header_Left from './Header-Left/Header_Left'
import Header_Right from './Header-Right/Header_Right'

const Header = () => {
  return (
    <div className='header'>
     <Header_Left />
     <Header_Right />
    </div>
  )
}

export default Header