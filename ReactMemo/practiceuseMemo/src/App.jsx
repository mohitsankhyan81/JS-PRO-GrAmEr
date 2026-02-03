import { useCallback, useState } from "react";
import ExpensiceCalculation from "./ExpensiveCalculation";

const App=()=>{
  const [count,setcount]=useState(100);

  const handleCLick=useCallback(()=>{
    setcount(count+100);
    console.log(count);
  },[count])
  return (
    <>
      <ExpensiceCalculation value={count}/>
      <button onClick={handleCLick}>Click</button>
    </>
  )
}

export default App;