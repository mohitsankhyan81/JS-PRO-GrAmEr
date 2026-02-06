import { useEffect } from "react";
import { useState } from "react";

const Theme=()=>{
    const [dark,setdark]=useState(false);

    useEffect(()=>{
        document.body.style.backgroundColor=dark?"black":"white";
        document.body.style.color=dark?"white":"black";
    },[dark])
    return(
        <>
            <button onClick={()=>setdark(prev=>!prev)}>Change Theme</button>
            <h1>{dark?"Dark mode":"Light Mode"}</h1>
        </>
    )
}

export default Theme