import React, { useEffect, useState } from "react"

const App = () => {
  interface User{
    name:string,
    pass:string,
    age:number
  }

  const [userdata,setuserdata]=useState<User[]>([]);
  const [geteddata,setgeteddata]=useState<User[]>([]);

  useEffect(()=>{
    const data=JSON.parse(localStorage.getItem("mytask"));
    if(data){
      console.log(data)
    }

    const UserData=JSON.parse(localStorage.getItem("userdata"));
    if(UserData){
      console.log("Seted data "+UserData);
      setgeteddata(UserData);
    }
  },[])

  const [formdata,setformdata]=useState<User>({
    name:"",
    pass:"",
    age:0
  })

  const handlechange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    console.log("Hello Changes")
    const {name,value}=e.target;
    setformdata((prev)=>({
      ...prev,
      [name]:value
    }))

  }
  const handlesubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log("handlesubmit")
    localStorage.setItem("mytask",JSON.stringify(formdata));
    setuserdata((prev)=>[...prev,formdata]);
    localStorage.setItem("userdata",JSON.stringify(formdata));
    console.log(formdata);
  }
  return (
    <div>
      <h1>
        Hello Mohit!😘
      </h1>
      <form onSubmit={handlesubmit}>
        <input type="text" name="name" placeholder="Name" value={formdata.name} onChange={handlechange}/>
        <input type="text" name="pass" placeholder="Pass" value={formdata.pass} onChange={handlechange}/>
        <input type="number" name="age" placeholder="age"  value={formdata.age} onChange={handlechange}/>
        <button type="submit">Submit</button>
      </form>

      <div>
        {geteddata.map((e, i      )=>(
        <div key={i}>
          <p>{e.name}</p>
          <p>{e.pass}</p>
          <p>{e.age}</p>
        </div>
        ))}
      </div>
    </div>
  )
}

export default App
