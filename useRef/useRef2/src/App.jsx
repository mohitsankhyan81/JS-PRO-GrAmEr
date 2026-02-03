import { useRef, useState } from "react"

const App=()=>{

  const [time,settime]=useState(0);
  let interval=useRef(null);
  function HandleClick(){
    interval.current=setInterval(() => {
      settime(time=>time+1);
    }, 1000);
    console.log(interval.current);
  }
  function HandleStop(){
    console.log(interval.current);
    clearInterval(interval.current);
  }
  function HandleReset(){
    console.log(interval.current);
    clearInterval(interval);
    settime(0);
  }
  return (
    <>
      <h1>Timr is {time}</h1>
      <button onClick={HandleClick}>Start</button>
      <button onClick={HandleStop}>Stop</button>
      <button onClick={HandleReset}>Resent</button>
    </>
  )
}

export default App