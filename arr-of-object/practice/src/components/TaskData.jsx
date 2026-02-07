import { useState } from "react"
import { useTask } from "../auth/AuthContext"

const TaskData = () => {
  const [todo, setTodo] = useState({ title: "" })
  const { addTask } = useTask()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!todo.title.trim()) return
    addTask(todo)
    setTodo({ title: "" })
  }

  return (
    <>
      <h1>Add Task</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo.title}
          onChange={(e) => setTodo({ title: e.target.value })}
          placeholder="Enter task"
        />
        <button type="submit">Add</button>
      </form>
    </>
  )
}

export default TaskData
