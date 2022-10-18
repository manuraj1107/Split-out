import React from 'react'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import './App.css'
import Feed from './components/Feed/Feed'

function App() {

  return (
    <div className="App">
    <Header />
      <div className='app__body'>
        <Sidebar />
        <Feed />
        {/* Widgets */}
      </div>
    </div>
  )
}

export default App
