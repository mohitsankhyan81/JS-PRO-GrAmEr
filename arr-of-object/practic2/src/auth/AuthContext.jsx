import {createContext, useContext, useEffect, useState } from "react"

const TaskContext=createContext();
const AuthContext=({children})=>{
    const [tasks,settask]=useState([]);

    useEffect(()=>{
        const data=JSON.parse(localStorage.getItem("taskwell"))||[];
        settask(data);
    },[])

    const addtask=(task)=>{
        const updated=[...tasks,task];
        settask(updated);
        localStorage.setItem("taskwell",JSON.stringify(updated));
    }
    return (
        <>
            <TaskContext.Provider value={{tasks,addtask}}>
                {children}
            </TaskContext.Provider>
        </>
    )
}

export default AuthContext

export const useTask=()=>useContext(TaskContext)