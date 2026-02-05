import { useState } from "react"
import { useTask } from "../context/TaskContext";

const AddTask=()=>{
    const [todo,settodo]=useState("");
    const {addTask}=useTask();
    const {tasks}=useTask();
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!todo.trim()) return
        addTask(todo);
        console.log(todo)
        settodo("")
    }
    return (
        <>
        <h1>Enter your Task</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter your task" onChange={(e)=>settodo(e.target.value)}/>
                <button type="Submit">Add</button>
            </form>

            {tasks.map((e,i)=>(
                <li key={i}>
                    {e}
                </li>
            ))}
        </>
    )
}

export default AddTask