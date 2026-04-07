import { useEffect, useState} from "react";

const Card = () => {
    interface User{
        id:number,
        name:string,
        age:number,
        email:string,
        isActive:boolean
    }
    const [getdata,setgetdata]=useState<User>({
        id:-1,
        name:"",
        age:-1,
        email:"",
        isActive:false
    });
    const [loldata,setloldata]=useState<User[]>([]);
    useEffect(()=>{
        const data=localStorage.getItem("mydata")
        if(data){
            const parse=JSON.parse(data);
            console.log(data);
            setloldata(parse);
        }
    },[])

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
        const update=[...data,getdata];
        setdata(update)
        localStorage.setItem("mydata",JSON.stringify(update))
        setloldata(update)
        console.log(getdata);
    }
  return (
    <div>
      <h1>Hello Dusmano😘</h1>
      <form onSubmit={handlesubmit}>
        <input type="number" name="id" placeholder="id" value={getdata.id} onChange={handlechange} />
        <input type="text" name="name" placeholder="name" value={getdata.name} onChange={handlechange} />
        <input type="number" name="age" placeholder="age" value={getdata.age} onChange={handlechange}/>
        <input type="text" name="email" placeholder="email" value={getdata.email} onChange={handlechange}/>
        <input type="submit" placeholder="submit" />
      </form>

<div className="container">
  {loldata.length > 0 &&
    loldata.map((e, i) => (
      <div className="card" key={i}>
        <p><strong>Name:</strong> {e.name}</p>
        <p><strong>Age:</strong> {e.age}</p>
        <p><strong>Email:</strong> {e.email}</p>
        <p><strong>ID:</strong> {e.id}</p>
        <p className={e.isActive ? "active" : "inactive"}>
          {e.isActive ? "Active" : "Inactive"}
        </p>
      </div>
    ))}
</div>
    </div>
  )
}

export default Card
