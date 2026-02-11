import { useEffect, useState } from "react"

const App=()=>{
  const [data,setdata]=useState([]);
  const [input,setinput]=useState("");
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
      setfilter(resdata);
    })
  },[])

  const handleDelete=(id)=>{
    const datas=filter.filter((res)=>res.id!==id)
    setdata(datas)
    setfilter(datas);
  }
  const HandleSearch=(e)=>{
    e.preventDefault();

    const resultdata=data.filter((user)=>{
      return user.title.toLowerCase().includes(input.toLowerCase());
    })

    setdata(resultdata)
  }

  const hanldeselect=(e)=>{
    const val=e.target.value;
    if(val=="select"){
      setfilter(data);
    }
    else{
      const result=data.filter((res)=>{
        return res.category==val
      })
      setfilter(result)
    }
  }
  return(
    <>
      <h1>
        Task is 
      </h1>

      <form onSubmit={HandleSearch}>
        <input type="text" placeholder="Enter title to search" value={input} onChange={(e)=>setinput(e.target.value)}  />
        <button type="submit">search</button>
      </form>

<select value={category} onChange={hanldeselect}>
  <option value="select">Select</option>
  <option value="men's clothing">men's clothing</option>
  <option value="jewelery">jewelery</option>
  <option value="electronics">electronics</option>
  <option value="women's clothing">women's clothing</option>
</select>


      {filter.map((e)=>(
        <li key={e.id}>
          title:{e.title}
          <br/>
          price:{e.price}
          <br/>
          category:{e.category}
          <br/>
          <button onClick={()=>handleDelete(e.id)}>Delete</button>
        </li>
      ))}
    </>
  )
}

export default App