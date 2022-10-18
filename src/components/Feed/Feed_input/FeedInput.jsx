import React from 'react'
import './FeedInput.css'
import CreateIcon from '@material-ui/icons/Create'

const FeedInput = () => {
  return (
    <div className='feed__input'>
               <CreateIcon />
               <form>
                  <input type='text' />
                  <button type='submit'>Send</button>
               </form>
           </div>
  )
}

export default FeedInput