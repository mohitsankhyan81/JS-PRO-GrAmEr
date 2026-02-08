import { useState } from "react";
import { useTask } from "../auth/AuthContext";

const Taskdata=()=>{
    const [todo,settodo]=useState({
        title:""
    })
    const {addtask}=useTask();
    const handleSubmit=(e)=>{
        e.preventDefault();
        addtask(todo);
        settodo({
            title:""
        })
    }
    return (
        <>
            <h1>Task is Added</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter task" value={todo.title}  onChange={(e)=>settodo({title:e.target.value})}/>
                <button type="submit">Add</button>
            </form>
        </>
    )
}

export default Taskdata;