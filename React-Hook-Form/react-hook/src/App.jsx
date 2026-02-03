import { useState } from "react"

const App=()=>{
  const [name,setname]=useState('');
  const [age,setage]=useState('');
  const [password,setpassword]=useState('');

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(name);
    console.log(age);
    console.log(password)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e)=>setname(e.target.value)}/>
        <input type="text" value={age} onChange={(e)=>setage(e.target.value)}/>
        <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} />
        <button>Submit</button>
      </form>
    </>
  )
}

export default App