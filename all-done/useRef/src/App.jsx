import {useRef} from 'react'

const App=()=>{
  const inputfocusRef=useRef(null);
  const handleFocus=()=>{
    inputfocusRef.current.focus();
  }
  return (
    <>
      <label>Focus Inpun</label>
      <input type="text"  ref={inputfocusRef} />
      <button onClick={(e)=>handleFocus(e)}>click</button>
    </>
  )
}

export default App