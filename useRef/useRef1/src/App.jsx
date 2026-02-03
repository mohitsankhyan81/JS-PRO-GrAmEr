import { useRef, useState } from "react"

const App=()=>{
  //stopwatch: start stop reset
  const [time,settime]=useState(0);

  const intervalid=useRef(null);
  function handleStart(){
    if(intervalid.current!=null){
      return;
    }
    intervalid.current=setInterval(() => {
      settime(time=>time+1);
    }, 1000);
  }
  function handleStop(){
    clearInterval(intervalid.current);
  }

  function handleReset(){
    clearInterval(intervalid.current);
    settime(0);
  }
  return (
    <>
      <h1>Stopwatch: {time}</h1>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  )
}
export default App