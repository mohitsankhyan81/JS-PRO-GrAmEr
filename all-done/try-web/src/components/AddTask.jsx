import { useRef, useState } from "react"
import { useTask } from "../context/TaskContext";

const AddTask=()=>{
    const [todo,settodo]=useState({
        title: ''
    });
    const inputref=useRef(null);
    const {addTask}=useTask();
    const {tasks}=useTask();
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!(todo.title.trim())){
            inputref.current.focus();
            return;
        } 
        console.log('value is', todo)
        addTask(todo);
        console.log(todo);
        settodo((prev)=>({...prev, title: ''}));
        inputref.current.focus();
    }


    return (
        <>
        <h1>Enter your Task</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter your task" value={todo.title} onChange={(e)=>settodo((prev)=>({...prev, title:e.target.value}))} ref={inputref}/>
                <button type="Submit">Add</button>
            </form>

            {tasks.map((e,i)=>(
                <li key={i}>
                    {e.title}
                </li>
            ))}
        </>
    )
}

export default AddTask