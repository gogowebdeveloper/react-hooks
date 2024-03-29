import React, { useEffect, useState } from 'react'
import NewContext from './NewContext';
import ChildContext from './ChildContext';

function ParentContext() {
    const [data,setData]=useState([]);

    const Fetching=async()=>{
        try{
            const content=await fetch("https://dummyjson.com/products");
            const newContent=await content.json();
            console.log(newContent.products);
            setData(newContent.products);
        }
        catch(err){
            console.error("ERROR");
        }        

    }
    useEffect(()=>{
        Fetching()
    },[])
  return (
    <NewContext.Provider value={data}>
         <ChildContext/>
    </NewContext.Provider>
  )
}

export default ParentContext