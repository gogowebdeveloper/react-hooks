import React from 'react'
import UserContext from "./UserContext"
import Children1 from './Children1';
import { simpleExport } from './UserContext';

function Data_Share() {
    const data={
        id:111,
        name:"Ganesh",
        place:"Bangalore"
    };
  return (
    <UserContext.Provider value={data}>
        <h1>useContext Hook</h1>
        <h1>{simpleExport}</h1>
        <Children1/>
    </UserContext.Provider>
  )
}

export default Data_Share