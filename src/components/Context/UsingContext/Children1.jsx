import React, { useContext } from 'react'
import UserContext from './UserContext'

function Children1() {
    const Details=useContext(UserContext);
    console.log(Details.id);
  return (
    <div>
        <h2>
            id:{Details.id}
            <br />  
            name:{Details.name}
            <br />
            place:{Details.place}
        </h2>
    </div>
  )
}

export default Children1;