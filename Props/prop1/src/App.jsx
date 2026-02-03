import { useEffect, useState } from "react"
import Display from "./components/Display.jsx";

const App=()=>{

  const [data,setdata]=useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
      return res.json();
    })
    .then((resdata)=>{
      console.log(resdata);
      setdata(resdata)
    })
  },[])
  return (
    <>
      <Display data={data}/>
    </>
  )
}

export default App