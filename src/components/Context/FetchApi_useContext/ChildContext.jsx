import React, { useContext } from 'react'
import NewContext from './NewContext'

function ChildContext() {
    const contextData=useContext(NewContext);
  return (
    <div>
        {
            contextData.map((ele,id)=>{
                return(
                    <div key={id}>
                    <h3>{ele.title}</h3>
                    <img src={ele.images[1]} />
                    </div>
                )
            })
        }
    </div>
  )
}

export default ChildContext