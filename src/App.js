import React from 'react'
import Login from './Login/Login'
import './App.scss'
import LIT_Menu from './Menu/LIT_Menu'

function App(props, ref) {
  return (
    <React.Fragment>
      {/* <Login/> */}
      <LIT_Menu/>
    </React.Fragment>
  )
}

export default App
