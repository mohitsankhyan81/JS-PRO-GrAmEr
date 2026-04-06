import React, { useState } from "react"

const App = () => {
  //explicit interface
  // const greeting:string="hello, Typescript"
  // console.log(greeting)

  // const usercount:number=43;
  // console.log(usercount);

  // const isavilable:boolean=true
  // console.log(isavilable);

  // const score:number[]=[43,45,56];
  // score.push(21);
  // console.log(score);

  // emplicit type
  // function greet(name:string):string{
  //   return `Hello ${name}`
  // }

  // console.log(greet("hello"));
  // console.log(greet(34));

  //type interface
  // let username="alice"
  // let socre=100;
  // let flags=[true,false,true];
  // function add(a:number,b:number){
  //   return a+b;
  // }
  // console.log(add(3,4));

  //object litrel interface
  // const user={
  //   name:"Alice",
  //   age:23,
  //   isAdmin:true
  // };

  // console.log(user.name);

  //type safety in action

  //Explicit type Mismatch
  // let username:string='Mohit';
  // username=34;
  // console.log(username)

  //implicit type mismatch
  // let score=100;
  // score="high"//automaticly detact
  // console.log(score);

  
  interface User{
    name:string,
    age:number,
    email:string
  }

  const [formdata,setformdata]=useState<User>({
    name:"",
    age:0,
    email:""
  });

  const handlechange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const {name,value}=e.target;

    setformdata((prev)=>({
      ...prev,
      [name]:value
    }))

  }
  const handlesubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log(formdata);
  }
  return (
    <div>
      Hello
      <form onSubmit={handlesubmit}>
        <input type="text" name="name" placeholder="name" value={formdata.name} onChange={handlechange}/>
        <input type="text" name="age" placeholder="age" value={formdata.age} onChange={handlechange}/>
        <input type="text" name="email" placeholder="email" value={formdata.email} onChange={handlechange}/>
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default App
