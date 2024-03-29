import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Toggle from '../Toggle'
import Fetch from './Fetch'
import Api_Fetch from './Api_Fetch'
import Parent1 from './components/Context/Parent1'
import Data_Share from './components/Context/UsingContext/Data_Share'
import Children1 from './components/Context/UsingContext/Children1'
import ParentContext from './components/Context/FetchApi_useContext/ParentContext'

function App() {

  return (
    <>
    <div><Counter/></div>
    <hr/>
    <div><Toggle/></div>
    {/* <div><Api_Fetch/></div> */}
    {/* <div>
    <Parent1/>
    </div> */}
    {/* <div><Data_Share/></div> */}
    {/* <div><Child1/></div> */}
    {/* <div><Fetch/></div> */}
    <div><ParentContext/></div>

    </>
  )
}

export default App
