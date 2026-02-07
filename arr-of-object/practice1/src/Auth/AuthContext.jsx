import { Children, createContext, useContext, useEffect, useState } from "react"

const TaskContext=createContext();
const AuthContext=({children})=>{
    const [tasks,settask]=useState([]);

    useEffect(()=>{
        const taskdata=JSON.parse(localStorage.getItem("taskwell"))||[]
        settask(taskdata)
        console.log(taskdata)
    },[])
    const addTask=(task)=>{
        const update=[...tasks,task];
        settask(update);
        localStorage.setItem("taskwell",JSON.stringify(update));
    }
    return (
        <>
        <TaskContext.Provider value={{tasks,addTask}}>
            {children}
        </TaskContext.Provider>
        </>
    )
}

export default AuthContext

export const useTask=()=>useContext(TaskContext);