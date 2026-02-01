import { useEffect } from "react";
import { useState } from "react";


const Clock=()=>{
  const [time,settime]=useState(new Date().toLocaleTimeString());
  const [show,setshow]=useState(true);

  useEffect(()=>{
      if(!show)
  return;
   const userid= setInterval(()=>{
    settime(new Date().toLocaleTimeString());
    console.log('hi')
  },1000);

  return ()=>{
    clearInterval(userid);
  }
  },[show])

  return (
    <>
    <button onClick={()=>setshow(!show)}>{show?"Hide":"Show"}</button>
      {
        show&&<h1>Current Time: {time}</h1>
      }
    </>
  )
}
export default Clock;