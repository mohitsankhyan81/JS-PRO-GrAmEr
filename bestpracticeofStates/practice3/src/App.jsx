import { useEffect } from "react";
import { useState } from "react"

const App=()=>{
  const [data,setdata]=useState([]);
  const [inputsearch,inputsetsearch]=useState("");
  const [search,setsearch]=useState("");

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>{
      return res.json();
    })
    .then((resdata)=>{
      setdata(resdata)
      console.log(resdata);
    })
  },[])

  const filterdata=data.filter(e=>
      e.title.toLowerCase().includes(search.toLowerCase())
  )

  const handleClick=()=>{
    setsearch(inputsearch);
  }

  return (
    <>
      <label>Search Data</label>
      <input type="text" value={inputsearch} onChange={(e)=>inputsetsearch(e.target.value)} placeholder=" Enter serch" />

      <button onClick={handleClick}>Search</button>

      {filterdata.map((e)=>(
        <p key={e.id}>
        <span>{e.id}</span>
        <br/>
        <span>{e.userId}</span>
        <br/>
        <span>{e.title}</span>
        <br/>
        <span>{e.body}</span>
        <br/>
      </p>
      ))}
    </>
  )
}

export default App