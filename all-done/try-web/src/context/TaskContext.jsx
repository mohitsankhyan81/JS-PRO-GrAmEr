import { createContext } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react"

const TaskContext=createContext();

const TaskProvider=({children})=>{
    const [tasks,settask]=useState([]);

    useEffect(()=>{
        const stored=JSON.parse(localStorage.getItem("tasks"))||[]
        settask(stored)
    },[])
    
    const addTask = (task) => {
    const updated = [...tasks, task]
    settask(updated)
    localStorage.setItem("tasks", JSON.stringify(updated))
    }
    return (
        <>
        <TaskContext.Provider value={{tasks,addTask}}>
            {children}
        </TaskContext.Provider>
        </>
    )
}

export default TaskProvider

export const useTask=()=>useContext(TaskContext)