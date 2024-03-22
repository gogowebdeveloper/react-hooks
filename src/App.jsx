import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Toggle from '../Toggle'
import Fetch from './Fetch'

function App() {

  return (
    <>
    <div><Counter/></div>
    <hr/>
    <div><Toggle/></div>
    <div><Fetch/></div>
    </>
  )
}

export default App
