import { useRef } from "react";

const App=()=>{
  const vediouseRef=useRef(null)

  const HandleStart=()=>{
    vediouseRef.current.play();
  }

  const HandleStop=()=>{
    vediouseRef.current.pause();
  }

  const HandleReset=()=>{
    vediouseRef.current.pause();
    vediouseRef.current.currentTime=0;
  }
  return (
    <>
      <h1>My name is mohit sankhyan</h1>
      <video src="5055610-hd_1920_1080_25fps.mp4" ref={vediouseRef} style={{width:1000,height:1000}}></video>
      <button onClick={HandleStart}>Start</button>
      <button onClick={HandleStop}>Pause</button>
      <button onClick={HandleReset}>Reset</button>
    </>
  )
}

export default App