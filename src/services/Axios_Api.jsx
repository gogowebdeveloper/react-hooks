import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Axios_Api() {
    const [data,setData]=useState([]);

    useEffect(()=>{
        axios.
        get("https://dummyjson.com/products").then((res)=>{
            console.log(res.data);
            setData(res.data.products)
        })
    },[])
  return (
    <div>
        <h1 style={{textDecoration:"underline"}}>Axios fetch</h1>
        {data.map((ele,id)=>{
            console.log(ele.title);
            return(
                <div>
              <h2>{ele.title}</h2>
                <img src={ele.images[1]}  />
                </div>
              
            )
        })}
    </div>
  )
}

export default Axios_Api