import { useState } from "react"
import { useEffect } from "react"

const App=()=>{
  const [data,setdata]=useState([]);
  const [input,setinput]=useState("");
  const [number,setnumber]=useState("");
  const [search,setsearch]=useState("");


  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>{
      return res.json();
    })
    .then((resdata)=>{
      console.log(resdata);
      setdata(resdata)
    })
  },[])


  const filterdata=data.filter((e)=>{
    const matchtitle=search===""||e.title.toLowerCase().includes(search.toLowerCase());
    const matchid=number===""|| e.id===Number(number);
    return matchtitle && matchid;
  })

  function HandleSearch(){
    setsearch(input);
  }
  return (
    <>
      <h1>Get Data:- </h1>
      <input type="text" placeholder="Search by title" value={input} onChange={e=>setinput(e.target.value)}/>
      <input type="number" placeholder="Set your name"
      value={number} onChange={e=>setnumber(e.target.value)}/>
      <button onClick={HandleSearch}>Search</button>
      {filterdata.map((e)=>(
        <p key={e .id}>
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