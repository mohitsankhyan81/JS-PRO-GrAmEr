import { useState } from "react"
import Sum from './Sum.jsx'
import { useMemo } from "react";
import { useCallback } from "react";
import Post from './Post.jsx';
const App=()=>{
  const [count,setcount]= useState(0);
  const [number,setnumber]=useState(100000);


  const prime=useMemo(()=>{
      let total=0;

    if(number>1){
      total++;
    }
    for(let i=3;i<=number;i++){
      total++;
      for(let j=2;j<i;j++){
        if(i%j==0){
          total--;
          break;
        }
      }
    }
    return total
  },[number])
  const obj=useMemo(()=>{
    return {name:"Mohit sankhyan",age:30}
  },[])

  const handleClick=useCallback(()=>{
      console.log("Headle click",count);
  },[count])
  console.log("app render")
  return (
    <>
    <h1>Count :- {count}</h1>
    <button onClick={()=>setcount(count+1)}>increment</button>
    <h1>Number Count:- {number}</h1>
    <button onClick={()=>setnumber(number+100)}>Increment by 100</button>
    <h3>Total prime no: {prime}</h3>
    <Sum number={number}> </Sum>

    <button onClick={handleClick}>Click</button>
    <Post value={obj}></Post>
    </>
  )
}

export default App