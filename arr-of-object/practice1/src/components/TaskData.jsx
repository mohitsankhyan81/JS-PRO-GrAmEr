import { useState } from "react"
import { useTask } from "../Auth/AuthContext";

const TaskData=()=>{
    const [todo,settodo]=useState({
        title:""
    });
    const {addTask}=useTask();

    const handleSubmit=(e)=>{
        e.preventDefault();
        addTask(todo)
        settodo({
            title:""
        });
    }
    return (
        <>
            <h1>Enter Tasks</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={todo.title} onChange={(e)=>settodo({title:e.target.value})} placeholder="Enter task" />
                <button type="Submit">Add</button>
            </form>
        </>
    )
}

export default TaskData