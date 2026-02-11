import { useState } from "react"
import { useEffect } from "react"

const App=()=>{
  const [data,setdata]=useState([]);
  const [input,setintput]=useState("");
  const [filter,setfilter]=useState([]);
  const [category,setcategory]=useState("select");

  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then((res)=>{
      return res.json();
    })
    .then((resdata)=>{
      console.log(resdata);
      setdata(resdata);
      setfilter(resdata)
    })
  },[]) 

  const handleSubmit=(e)=>{
    e.preventDefault();

    const result=data.filter((user)=>{
      return user.title.toLowerCase().includes(input.toLowerCase());
    })
    setfilter(result);
  }

  const handledelete=(id)=>{
const datas = filter.filter(user => user.id !== id);
setfilter(datas);

  }

  const handlefilter=(e)=>{
    const value=e.target.value;
    setcategory(value)

    if(value=="select"){
      setfilter(data)
    }
    else{
const result = data.filter(res => res.category === value);
      setfilter(result)
    }
  }
  return (
    <>
      <h1>Task is like</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter input" value={input} onChange={(e)=>setintput(e.target.value)} />
        <button type="submit">add</button>
      </form>

      <select value={category} onChange={handlefilter}>
        <option value={"select"}>select</option>
        <option value={"men's clothing"}>men's clothing</option>
        <option value={"jewelery"}>jewelery</option>
        <option value={"electronics"}>electronics</option>
        <option value={"women's clothing"}>women's clothing</option>
      </select>
      <ul>
        {filter.map((e)=>(
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