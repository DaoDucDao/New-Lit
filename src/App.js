import React from 'react'
import Login from './Login/Login'
import './App.scss'
import LIT_Menu from './Menu/LIT_Menu'
import { useState } from 'react'

function App(props, ref) {
  const [account, setAccount] = useState(null)

  const afterSubmit = (account) => {
    setAccount(() => account)
  }

  return (
    <React.Fragment>
      {!account &&<Login afterSubmit={afterSubmit}/>}
      {account && <LIT_Menu user ={account}/>}
    </React.Fragment>
  )
}

export default App
