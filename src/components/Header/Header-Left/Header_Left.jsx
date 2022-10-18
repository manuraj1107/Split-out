import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import icon from '../../../assets/xing.svg'
import './Header-Left.css'

const Header_Left = () => {
  return (
    <div className='header__left'>
       <img src={icon} alt='Logo' />
       <div className='header__search'>
         <SearchIcon />
         <input type='text' />
       </div>
    </div>
  )
}

export default Header_Left