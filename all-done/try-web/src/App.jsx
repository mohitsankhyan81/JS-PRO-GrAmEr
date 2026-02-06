import { Routes, Route } from "react-router-dom"
import Loginform from "./components/Loginform"
import DashBoard from "./components/Dashboard"
import Navbar from "./components/NavBar"
import AddTask from "./components/AddTask"
import Register from "./components/Register"

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<DashBoard />} />
        <Route path="/login" exact element={<Loginform />} />
        <Route path="/addtask" exact element={<AddTask/>}/>
        <Route path="/register" exact element={<Register/>}/>
      </Routes>
    </>
  )
}

export default App
