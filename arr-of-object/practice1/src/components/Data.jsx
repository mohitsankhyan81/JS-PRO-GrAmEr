import { useTask } from "../Auth/AuthContext"

const Data=()=>{
    const {tasks}=useTask();
    return (
        <>
            <h1>Task is here</h1>
            <ul>
            {
                tasks.map((e,i)=>(
                    <li key={i}>
                        {e.title}
                    </li>
                ))
            }
            </ul>
        </>
    )
}

export default Data