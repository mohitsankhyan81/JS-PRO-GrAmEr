import { useState } from "react";
import { useRef } from "react";

const App=()=>{
  const nameRef=useRef(null);
  const passwordRef=useRef(null);

  const [data,setdata]=useState(null);
  console.log("render");
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(nameRef.current.value,
    passwordRef.current.value);

    setdata({
      name:nameRef.current.value,
      password:passwordRef.current.value
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name"
        ref={nameRef}/>
        <input type="text" placeholder="Password" 
        ref={passwordRef}/>
        <button>Submit</button>
      </form>

      {data&&(<div>
        <h3>Name: {data.name}</h3>
        <h3>Password: {data.password}</h3>
      </div>)}
    </>
  )
}

export default App;