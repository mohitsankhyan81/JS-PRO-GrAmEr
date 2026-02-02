import { useEffect } from "react";
import { useState } from "react"

const App=()=>{

  const [count,setcount]=useState(0);

  useEffect(()=>{
    const intervaldata=setInterval(()=>{
      setcount((pert)=>{
        if(pert>=60){
        clearInterval(intervaldata);
        console.log("Timer stop at 60");
        return pert;
      }
      return pert+1;
      })
    },200)

    return ()=>{
      clearInterval(intervaldata);
      console.log("timer stop");
    }
  },[])

  return (
    <>
    <h1>Timer is </h1>
    <h1>{count}</h1>
    </>
  )
}

export default App