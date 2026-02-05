import { useState } from "react"
import Child from "./Child";

const Parent=()=>{
    const [count,setcount]=useState(0);
    console.log("render1");
    return (
        <> 
        <Child/>
        <h1>{count}</h1>
        <button onClick={()=>setcount(count+1)}>increment</button>
        </>
    )
}

export default Parent