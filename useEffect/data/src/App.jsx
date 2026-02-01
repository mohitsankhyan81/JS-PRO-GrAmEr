import { useEffect } from "react";
import { useState } from "react";

const App=()=>{
  const [user,setuser]=useState([]);
  const [count,setcount]=useState(0);

  // const data=async()=>{
  //   const response= await fetch("https://api.github.com/users")
  //   const data=await response.json();
  //   setuser(data);
  // }
  // console.log(user);
  // data()

  useEffect(()=>{
    const data=async()=>{
    const response= await fetch(`https://api.github.com/users?per_page=${count}`)
    const data=await response.json();
    setuser(data);
    console.log(data);
  }
  data();
  },[count]);


  return (
    <>
      <h1>Hello users</h1>
      <input type="number" value={count} onChange={(e)=>setcount(e.target.value)}/>
      <p>{
        user.map((e,i)=>
      (
            <span key={i}>
              {e.id}
              <br></br>
            </span>
          )
        )
        }</p>
    </>
  )
}

export default App