import { useEffect } from "react";
import { useState } from "react"

const App=()=>{
  const [user,setuser]=useState([]);

  useEffect(()=>{
    function getdata(){
     fetch("https://jsonplaceholder.typicode.com/users")
     .then((res)=>{
      return res.json();
     })
     .then((data)=>{
        console.log(data);
        setuser(data)
     })
     .catch((error)=>{
        console.log(error);
     })
    }
    getdata();
  },[])



  return (
    <>
      {user.map((e)=>(
        <p key={e.id}>
          <span>{e.address.city}</span>
          <br/>
          <span>{e.name}</span>
        </p>
      ))}

    </>
  )
}

export default App