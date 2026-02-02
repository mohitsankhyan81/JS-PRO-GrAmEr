import { useEffect } from "react";
import { useState } from "react";

const App=()=>{
  const [data,setdata]=useState([]);
  const [input,setinput]=useState("");
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts?id=${input}`)
    .then((res)=>{
      return res.json()
    })
    .then((resdata)=>{
      console.log(resdata);
      setdata(resdata)
    })
  },[input])

  return (
    <>
      <h1>Show data</h1>
      <label>Enter the number of user:- </label>
      <input type="number" placeholder="enter no of user" value={input} onChange={(e)=>setinput(e.target.value)}/>
      {data.map((e)=>(
        <li key={e.id}>
          <span>{e.id}</span>
          <br/>
          <span>{e.userId}</span>
          <br/>
          <span>{e.title}</span>
          <br/>
          <span>{e.body}</span>
          <br/>
        </li>
      ))}
    </>
  )
}

export default App;