import { createContext, useContext, useEffect, useState } from "react"

const TaskContext = createContext()

const AuthContext = ({ children }) => {
  const [tasks, setTask] = useState([])

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("taskwell")) || []
    setTask(stored)
  }, [])

  const addTask = (task) => {
    const update = [...tasks, task]
    setTask(update)
    localStorage.setItem("taskwell", JSON.stringify(update))
  }

  return (
    <TaskContext.Provider value={{ tasks, addTask }}>
      {children}
    </TaskContext.Provider>
  )
}

export default AuthContext
export const useTask = () => useContext(TaskContext)
