import { useEffect } from "react";
import { useState } from "react";

const App=()=>{
  const [data,setdata]=useState([]);
  const [input,setinput]=useState("")
  const [filter,setfilter]=useState([]);
  const [category,setcategory]=useState("select");

  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then((res)=>{
      return res.json();
    })
    .then((resdata)=>{
      setdata(resdata)
      setfilter(resdata)
      console.log(resdata)
    })
  },[])

  const handlesearch=(e)=>{
    e.preventDefault();

    const filterdata=data.filter(user=>{
      return user.title.toLowerCase().includes(input.toLowerCase())
    })
    setdata(filterdata)
  }

  const handledelete=(id)=>{
    const datas=data.filter(user=>user.id!==id);
    setfilter(datas);
  }

  const handleFind=(e)=>{
    const value=e.target.value;
    setcategory(value);
    if(value==="select"){
      setfilter(data);
    }
    else{
      const result=data.filter((res)=>{
        return res.category==value
      })
      setfilter(result);
    }
  }
  return (
    <>
      <h1>Task is </h1>
      <form onSubmit={handlesearch}>
        <input type="text" placeholder="Enter task" value={input} onChange={(e)=>setinput(e.target.value)}/>
        <button type="submit">Search</button>
      </form>

      <select onChange={handleFind} value={category}>
        <option>Select</option>
        <option value="men's clothing">men's clothing</option>
        <option value="jewelery">jewelery</option>
        <option value="electronics">electronics</option>
        <option value="women's clothing">women's clothing</option>
      </select>

      {filter.map((e)=>(
        <li key={e.id}>
            Title:{e.title}
            <br/>
            Price:{e.price}
            <br/>
            Category:{e.category}
            <br/>
            <button onClick={()=>handledelete(e.id)}>delete</button>
        </li>
      ))}
    </>
  )
}

export default App