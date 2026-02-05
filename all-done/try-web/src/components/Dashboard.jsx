import { useTask } from "../context/TaskContext";

const DashBoard=()=>{
    const {tasks}=useTask();
    return (
        <>
        <h1>All the Sports Activity</h1>
        {tasks.map((e,i)=>(
            <li key={i}>
                {e}
            </li>
        ))}
        </>
    )
}

export default DashBoard;