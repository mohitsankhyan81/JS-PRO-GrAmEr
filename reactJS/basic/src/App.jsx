import React, { useRef, useState } from 'react'

const App = () => {
  const [data,setdata]=useState([]);
  const nameRef=useRef();
  const idRef=useRef();
  const branchRef=useRef();
  const phonenoRef=useRef();
  const emailref=useRef();

  const SubmitHandler=(e)=>{
    e.preventDefault();

    const obj={
      name:nameRef.current.value,
      id:idRef.current.value,
      branch:branchRef.current.value,
      phone:phonenoRef.current.value,
      email:emailref.current.value
    }
    setdata([...data,obj])

    nameRef.current.value="";
    idRef.current.value="";
    branchRef.current.value="";
    phonenoRef.current.value="";
    emailref.current.value="";

  }
  return (
    <div>
      <form onSubmit={SubmitHandler}>
      <label>Name: </label>
      <input type="text" placeholder='Name' ref={nameRef} />
      <br></br>
      <label>ID: </label>
      <input type="text" placeholder='ID' ref={idRef}/>
      <br></br>
      <label>Branch: </label>
      <input type="text" placeholder='Branch' ref={branchRef} />
      <br></br>
      <label>Phone No: </label>
      <input type="text" placeholder='Phone No' ref={phonenoRef} />
      <br></br>
      <label>Email: </label>
      <input type="text" placeholder='Email' ref={emailref} />
      <br></br>
      <button>submit</button>
    </form>

    {data.map((e,i)=>{
      return (
      <p key={i}>
        <br></br>
        Name: {e.name}
        <br></br>
        ID: {e.id}
        <br></br>
        Branch: {e.branch}
        <br></br>
        Phone No: {e.phone}
        <br></br>
        Email: {e.email}
      </p>
    )})}

    </div>
  )
}

export default App