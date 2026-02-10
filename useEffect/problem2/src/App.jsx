import { useEffect, useState } from "react"

const App=()=>{
  const [data,setdata]=useState([]);
  const [user,setuser]=useState([]);
  const [input,setinput]=useState("");
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
      return res.json();
    })
    .then((resdata)=>{
      console.log(resdata);
      setdata(resdata);
      setuser(resdata);
    })
  },[])

  const filterdata=(e)=>{
    e.preventDefault();
    const filterdata=data.filter(user=>{
      return user.name.toLowerCase().includes(input.toLowerCase());
    })

    setdata(filterdata);
  }

  const handleDelete=(id)=>{
    const update=data.filter(user=>user.id!==id)
    setdata(update);
  }

  return (
    <>
      <h1>Data is </h1>
      <form onSubmit={filterdata}>
        <input type="text" placeholder="Enter Name" value={input} onChange={e=>setinput(e.target.value)} />
        <button type="submit">search</button>
      </form>
      <ul>
        {data.map((e)=>(
          <li key={e.id}>
            Name: {e.name}
            <br/>
            Email: {e.email}
            <br/>
            Address: {e.address.city}
            <button onClick={()=>handleDelete(e.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App