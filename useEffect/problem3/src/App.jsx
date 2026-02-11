import { useState } from "react"
import { useEffect } from "react"

const App=()=>{
  const [data,setdata]=useState([]);
  const [task,settask]=useState([]);
  const [input,setintput]=useState("");
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then((res)=>{
      return res.json();
    })
    .then((resdata)=>{
      console.log(resdata);
      setdata(resdata);
    })
  },[]) 

  const handleSubmit=(e)=>{
    e.preventDefault();

    const result=data.filter((user)=>{
      return user.title.toLowerCase().includes(input.toLowerCase());
    })

    setdata(result);
  }

  const handledelete=(id)=>{
    const datas=data.filter((user)=>user.id!==id)
    setdata(datas)
  }
  return (
    <>
      <h1>Task is like</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter input" value={input} onChange={(e)=>setintput(e.target.value)} />
        <button type="submit">add</button>
      </form>
      <ul>
        {data.map((e)=>(
          <li key={e.id}>
            Title: {e.title}
            <br/>
            Price: {e.price}
            <br/>
            Category:{e.category}
            <br/>
            <button onClick={()=>handledelete(e.id)}>delete</button>
            <span><br /></span>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App