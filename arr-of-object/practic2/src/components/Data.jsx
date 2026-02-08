import { useTask } from "../auth/AuthContext";

const Data=()=>{
    const {tasks}=useTask();
    return (
        <>
        <h1>Data show like</h1>
        <ul>
        {tasks.map((e,i)=>(
            <li key={i}>
                {e.title}
            </li>
    ))}
        </ul>

        </>
    )
}

export default Data;