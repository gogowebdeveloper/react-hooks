import React, { useEffect, useState } from 'react'

function Fetch() {
    const [display,setDisplay]=useState([]);
    useEffect(()=>{
        const fetchApi=async()=>{
            const data=await fetch("https://dummyjson.com/products");
            const result=await data.json();
            console.log(result.products);
            setDisplay(result.products);
        }
        fetchApi();
    },[])
  return (
    <div>
        <table border={1}>
            <thead >
                <tr style={{backgroundColor:"brown",color:"yellow"}}>
                <th>sl.no</th>
                <th>Image</th>
                <th>price</th>
                </tr>
            </thead>
            {
                display.map((ele,id)=>{
                    return(
                        <>
                        <tbody>
                            <tr key={id}>
                                <td>{id+1}</td>
                                <td><img src={ele.thumbnail}/></td>
                                <td>{ele.price}</td>
                            </tr>
                        </tbody>
                        </>
                        
                    )
                })
            }
        </table>
    </div>
  )
}

export default Fetch