import { useEffect, useState } from "react";

const App=()=>{
  const [count,setcount]=useState(0);

  useEffect(()=>{
    console.log(`Count changed: ${count}`)
  },[count])

  function handleClick(){
    setcount(count+1);
  }

  return (
    <>
      <p>Count changed: {count}</p>
      <button onClick={handleClick}>increment</button>
    </>
  )
}

export default App;