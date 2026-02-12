import { useEffect, useState } from "react"

const App=()=>{
  const [data,setdata]=useState([]);
  const [input,setinput]=useState("");
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then((res)=>{
      return res.json();
    })
    .then((resdata)=>{
      console.log(resdata);
      setdata(resdata)
    })
  },[])

  const handledelete=(id)=>{
    const result=data.filter((res)=>res.id!==id);
    setdata(result)
  }

  const handlesearch=(e)=>{
    e.preventDefault();

    const filter=data.filter((user)=>{
      return user.title.toLowerCase().includes(input.toLowerCase());
    })
    setdata(filter)
  }

  return (
    <>
      <h1>Task is </h1>

      <form onSubmit={handlesearch}>
        <input type="text" placeholder="Enter search data" value={input} onChange={(e)=>setinput(e.target.value)}/>
        <button type="submit">Search</button>
      </form>
      {data.map((e)=>(
        <li key={e.id}>
          Title:{e.title}
          <br/>
          Price:{e.price}
          <br />
          Category:{e.category}
          <br/>
          <button onClick={()=>handledelete(e.id)}>delete</button>
        </li>
      ))}
    </>
  )
}

export default App