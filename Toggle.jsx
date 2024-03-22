import React from "react";
import { useState } from "react";
import style from "./Toggle.module.css"

const Toggle=()=>{
    const [toggle,setToggle]=useState("false");

    const update=()=>{
        setToggle(!toggle)
    }
    return(
        <>
            {toggle?<p> image available</p>:<img className={style.resize} src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" />}
            {toggle?<h1><button onClick={update}>Show</button></h1>:<h1><button onClick={update}>Hide</button></h1>}        
        </>
    )

}

export default Toggle;