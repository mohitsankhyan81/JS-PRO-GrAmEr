import { useState } from "react"
import FactCalculate from "./components/FactorialCaculate.jsx"

const App = () => {
  const [input, setInput] = useState(0)
  const [count, setCount] = useState(1)

  const handleSubmit = (e) => {
    e.preventDefault()
    setCount(input)
  }

  return (
    <>
      <FactCalculate count={count} />

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(Number(e.target.value))}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App
