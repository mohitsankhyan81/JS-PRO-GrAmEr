import { Routes, Route } from "react-router-dom"
import Loginform from "./components/Loginform"
import DashBoard from "./components/Dashboard"
import Navbar from "./components/NavBar"
import AddTask from "./components/AddTask"

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/login" element={<Loginform />} />
        <Route path="/addtask" element={<AddTask/>}/>
      </Routes>
    </>
  )
}

export default App
