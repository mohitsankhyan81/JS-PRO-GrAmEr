import { useState} from "react";

const Card = () => {
    interface User{
        id:number,
        name:string,
        age:number,
        email:string,
        isActive:boolean
    }
    const [getdata,setgetdata]=useState<User>({
        id:0,
        name:"",
        age:0,
        email:"",
        isActive:false
    });

    const [data,setdata]=useState<User[]>([]);
    const handlechange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=e.target;
        
        setgetdata((prev)=>({
            ...prev,
            [name]:name==="id"||name ==="age"?Number(value):value,
            isActive:true
        }))
    }
    const handlesubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const update={
            ...getdata
        }
        localStorage.setItem("mydata",JSON.stringify(update));
        console.log(getdata);
    }
  return (
    <div>
      <h1>Hello Dusmano😘</h1>
      <form onSubmit={handlesubmit}>
        <input type="text" name="id" placeholder="id" value={getdata.id} onChange={handlechange} />
        <input type="text" name="name" placeholder="name" value={getdata.name} onChange={handlechange} />
        <input type="text" name="age" placeholder="age" value={getdata.age} onChange={handlechange}/>
        <input type="text" name="email" placeholder="email" value={getdata.email} onChange={handlechange}/>
        <input type="submit" placeholder="submit" />
      </form>
    </div>
  )
}

export default Card
