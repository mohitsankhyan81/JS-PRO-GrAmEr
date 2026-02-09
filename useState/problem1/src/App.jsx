import { useState } from "react";

const App=()=>{
  const [todo,settodo]=useState("");
  const [tasks,settaks]=useState([]);
  const [count,setcount]=useState(0);
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(todo.trim()==="")return;
    settaks([...tasks,todo]);
    console.log(todo);
    setcount(count=>count+1);
    settodo("");
  }

  const handledelete=(index)=>{
    settaks(tasks.filter((_,i)=>i!==index));
    setcount(count=>count-1)
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <label>Enter Name:-</label>
        <input type="text" placeholder="Enter Name" value={todo} onChange={(e)=>settodo(e.target.value)}/>
        <button type="submit">Add</button>
    </form>
    <ul>
      {tasks.map((e,i)=>(
        <li key={i}>
          {e}
          <button onClick={()=>handledelete(i)}>delete</button>
        </li>
      ))}
    </ul>
    <h1>Count is: {count}</h1>
    </>
  )
}

export default App