import React from "react";
import { useState } from "react";

const Counter=()=>{
    const[count,setCount]=useState(0);

    const updateCount=()=>{
        setCount(count+1);
    }
    const decrementCount=()=>{
        if(count>0){
            setCount(count-1);
        }
    }
    const resetCount=()=>{
        setCount(0)
    }
    return(
        <>
        <h1>{count}</h1>
        <div>
            <button onClick={updateCount}>Update</button>
            <button onClick={decrementCount}>Decrement</button>
            <button onClick={resetCount}>Reset</button>
        </div>
        </>
    )
}

export default Counter;