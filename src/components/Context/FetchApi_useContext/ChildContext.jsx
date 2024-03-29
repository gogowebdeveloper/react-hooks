import React, { useContext } from 'react'
import NewContext from './NewContext'
import "./Context.css"


function ChildContext() {
    const contextData=useContext(NewContext);
  return (
    <div>
       <table border={2}>
        <thead style={{color:"white",backgroundColor:"black"}}>
            <th>Name</th>
            <th>Images</th>
        </thead>
        {contextData.map((ele,id)=>{
            return(
            <tbody key={id}>
                <tr>
                    <td style={{color:"white",backgroundColor:"black"}}>{ele.title}</td>
                    <td><img className='resize' style={{width:"24rem",height:"22rem"}} src={ele.images[1]}  /></td>
                </tr>
            </tbody>
            )
        })}
        
       </table>
    </div>
  )
}

export default ChildContext